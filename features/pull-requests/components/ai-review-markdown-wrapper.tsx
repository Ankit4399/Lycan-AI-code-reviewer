"use client";

import dynamic from "next/dynamic";

export const AiReviewMarkdownWrapper = dynamic(
  () => import("./ai-review-markdown").then((mod) => mod.AiReviewMarkdown),
  { ssr: false, loading: () => <p className="text-sm text-muted-foreground">Loading AI review...</p> }
);
