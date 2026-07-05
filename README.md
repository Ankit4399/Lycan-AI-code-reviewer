# AI Code Reviewer

An AI-powered GitHub Pull Request Reviewer that automatically analyzes code changes and posts actionable review comments directly on your pull requests.

Simply install the GitHub App, connect your repository, and every **opened**, **updated**, or **reopened** pull request receives an AI-generated review—no manual sync required.

---

## ✨ Overview

AI Code Reviewer is a production-ready SaaS application built with **Next.js 16** that combines GitHub webhooks, vector search, and Large Language Models to perform intelligent pull request reviews.

Whenever a pull request is created or updated, the application:

1. Receives a GitHub webhook.
2. Downloads the changed files and diff.
3. Retrieves relevant code context using Pinecone vector search.
4. Generates a structured review using the Vercel AI SDK with OpenRouter.
5. Posts the review directly back to GitHub as a PR comment.

Repository synchronization is **optional**. Pull request reviews work immediately using the PR diff alone, while syncing the repository enables richer cross-file context.

---

# 🚀 Features

### 🤖 Automatic Pull Request Reviews

Reviews are automatically triggered on:

- Opened Pull Requests
- Updated (Synchronize) Pull Requests
- Reopened Pull Requests

No manual action is required.

---

### 🧠 AI-Powered Code Analysis

Generates structured markdown reviews covering:

- Correctness
- Security
- Performance
- Reliability
- Readability
- Maintainability

---

### 🔗 GitHub App Integration

- Install the GitHub App
- Connect repositories
- Receive webhook events
- Automatically post review comments

---

### 📚 Vector-Based Code Context

Changed code is chunked and indexed into **Pinecone**, allowing the AI to retrieve only the most relevant context instead of sending the entire repository.

---

### 📦 Optional Repository Sync

Synchronize an entire repository to improve review quality with context from files outside the pull request.

Pull request reviews work even without repository sync.

---

### 📊 Dashboard

Manage everything from one place.

- Repository list
- Pull request history
- Usage analytics
- GitHub connection status
- Subscription management

---

### 📈 Review Activity Tracking

Track every review:

- Pending
- Processing
- Reviewed
- Rate Limited

---

### 🔐 Authentication

Secure GitHub authentication powered by **Better Auth**.

---

### 💳 Subscription Billing

#### Free Plan

- 5 AI reviews/month
- Public repositories

#### Pro Plan

- Unlimited reviews
- Private repositories

Powered by Razorpay subscriptions.

---

### ⚡ Background Processing

Long-running operations such as:

- PR Reviews
- Repository Sync

are processed reliably using **Inngest**.

---


# 🏗 Architecture

```text
GitHub Pull Request
        │
        ▼
 GitHub Webhook
        │
        ▼
Fetch PR Diff (Octokit)
        │
        ▼
Chunk Changed Files
        │
        ▼
Retrieve Relevant Context
     (Pinecone)
        │
        ▼
Generate AI Review
(Vercel AI SDK + OpenRouter)
        │
        ▼
Post Review Comment
      to GitHub
```

---

# 🛠 Tech Stack

## Frontend

| Technology | Purpose |
|------------|---------|
| Next.js 16 | React Framework (App Router) |
| React 19 | UI Library |
| TypeScript | Type Safety |
| Tailwind CSS v4 | Styling |
| shadcn/ui | UI Components |
| TanStack Query | Server State Management |
| Streamdown | Markdown Rendering |
| next-themes | Theme Switching |

---

## Backend & Database

| Technology | Purpose |
|------------|---------|
| PostgreSQL | Primary Database |
| Prisma 7 | ORM |
| Better Auth | Authentication |
| Inngest | Background Jobs |

---

## AI & Search

| Technology | Purpose |
|------------|---------|
| Vercel AI SDK | AI Generation |
| OpenRouter | LLM Provider |
| Pinecone | Vector Database |

---

## GitHub & Payments

| Technology | Purpose |
|------------|---------|
| Octokit | GitHub API |
| GitHub App | Repository Access |
| GitHub Webhooks | Pull Request Events |
| Razorpay | Subscription Billing |

---

## Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Linting |
| Inngest CLI | Local Background Jobs |

---

# 📂 Project Structure

```text
app/
│
├── api/
├── dashboard/
└── auth/

features/
│
├── billing/
├── dashboard/
├── github/
├── overview/
├── pull-requests/
├── repo-sync/
└── reviews/

components/

lib/

prisma/

public/
```

---

# ⚙️ Prerequisites

Before running the project, ensure you have:

- Node.js 20+
- PostgreSQL
- GitHub OAuth App
- GitHub App
- Pinecone Index
- OpenRouter API Key
- Razorpay Account

---

# 🔧 Installation

Clone the repository.

```bash
git clone https://github.com/yourusername/ai-code-reviewer.git

cd ai-code-reviewer
```

Install dependencies.

```bash
npm install
```

---

# 🔑 Environment Variables

Copy the example environment file.

```bash
cp .env.example .env
```

Fill in all required credentials.

Example:

```env
DATABASE_URL=
# Better Auth
BETTER_AUTH_SECRET=
BETTER_AUTH_URL= 
#BETTER_AUTH_URL=
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=

GITHUB_APP_NAME=
GITHUB_APP_ID=
NEXT_GITHUB_PUBLIC_LINK=
GITHUB_WEBHOOK_SECRET=
GITHUB_APP_PRIVATE_KEY=
INNGEST_DEV=1
OPENROUTER_API_KEY=


PINECONE_INDEX=
PINECONE_API_KEY=


NEXT_PUBLIC_RAZORPAY_KEY_ID=
RAZORPAY_KEY_SECRET=
RAZORPAY_PLAN_ID=
RAZORPAY_WEBHOOK_SECRET=
```

---

# 🗄 Database Setup

Run Prisma migrations.

```bash
npx prisma migrate dev
```

---

# ▶️ Run the Application

Start the development server.

```bash
npm run dev
```

---

# ⚡ Running Background Jobs

In another terminal, start the Inngest development server.

```bash
npx inngest-cli@latest dev
```

Enable development mode.

```env
INNGEST_DEV=1
```

---

# 🚀 Using the Application

1. Open:

```
http://localhost:3000
```

2. Sign in with GitHub.

3. Install the GitHub App.

4. Connect a repository.

5. (Optional) Sync the repository.

6. Create or update a Pull Request.

7. AI Code Reviewer automatically posts a review on GitHub.

---

# 💰 Pricing

## Free

- 5 Reviews / Month
- Public Repositories

## Pro

- Unlimited Reviews
- Private Repositories
- Repository Sync
- Priority Processing

---

# 🔮 Future Improvements

- Inline code suggestions
- Multi-model support
- Custom review rules
- Team workspaces
- Slack & Discord notifications
- Review quality analytics
- Review summaries
- Auto-fix generation
- Organization dashboard

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository.
2. Create a feature branch.

```bash
git checkout -b feature/amazing-feature
```

3. Commit your changes.

```bash
git commit -m "Add amazing feature"
```

4. Push your branch.

```bash
git push origin feature/amazing-feature
```

5. Open a Pull Request.

---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
