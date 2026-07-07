/**
 * Entry point for GitHub webhook HTTP requests.
 *
 * GitHub POSTs events (e.g. `pull_request`) to our API route. We verify the
 * payload signature, filter for review-worthy PR actions, enforce usage limits,
 * then queue an AI review job.
 *
 */

import { inngest } from "@/features/inngest/client";
import { savePullRequest } from "@/features/reviews/server/save-pull-request";
import { getGithubApp } from "../utils/github-app";
import { getUserIdByInstallationId } from "./installation";

import { prisma } from "@/lib/db";
import { canUserReview } from "@/features/billings/server/usage";


const REVIEWABLE_ACTIONS = ["opened", "synchronize", "reopened"];

export type PullRequestWebhookPayload = {
  /** Webhook action, e.g. `opened`, `synchronize`, `reopened` */
  action: string;
  /** GitHub App installation that received the event */
  installation: { id: number };
  repository: { full_name: string };
  pull_request: {
    number: number;
    title: string;
    user: { login: string } | null;
    head: { sha: string };
    base: { ref: string };
  };
};

/**
 * Checks the `X-Hub-Signature-256` header using the GitHub App webhook secret.
 *
 * @param payload - Raw request body string (must not be parsed before verifying).
 * @param signature - Value of the `x-hub-signature-256` header, or null if missing.
 * @returns `true` when GitHub's HMAC matches our configured secret.
 * */

async function isSignatureValid(payload: string, signature: string | null) {
  if (!signature) {
    return false;
  }

  const app = getGithubApp();
  // Octokit wraps GitHub's webhook crypto — rejects forged payloads.
  return app.webhooks.verify(payload, signature);
}


/**
 * Handles an incoming GitHub webhook `Request`.
 *
 * Flow:
 * 1. Verify signature (reject with 401 if invalid)
 * 2. Ignore non-`pull_request` events
 * 3. Ignore PR actions we do not review
 * 4. Save the PR, check billing usage limits, then trigger review or mark rate-limited
 *
 * @param request - The raw `Request` from the GitHub webhook route handler.
 * @returns JSON `Response` — always `{ received: true }` for valid ignored events.
 */


export async function handleGithubWebhook(request: Request) {
  // Read body as text first — signature verification needs the exact bytes GitHub signed.
  const payload = await request.text();
  const signature = request.headers.get("x-hub-signature-256");
  const eventName = request.headers.get("x-github-event");

  const isValid = await isSignatureValid(payload, signature);

  if (!isValid) {
    return Response.json({ error: "Invalid signature" }, { status: 401 });
  }

  if (eventName !== "pull_request") {
    return Response.json({ received: true });
  }

  const event = JSON.parse(payload) as PullRequestWebhookPayload;

  
  if (!REVIEWABLE_ACTIONS.includes(event.action)) {
    return Response.json({ received: true });
  }

  const pullRequest = await savePullRequest(event);

  const userId = await getUserIdByInstallationId(event.installation.id);

  if(userId){
    const allowed = await canUserReview(userId);
    if(!allowed){
      await prisma.pullRequest.update({
        where:{
          id:pullRequest.id
        },
        data:{
          status:"rate_limited"
        }
      });
      return Response.json({ received: true  , rateLimited:true});
    }
  }

  await inngest.send({
    name: "github/pr.received",
    data: { pullRequestId: pullRequest.id },
  });

  return Response.json({ received: true });
}