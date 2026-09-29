export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  tags: string[];
  year: string;
  github?: string;
  demo?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "eventscout",
    title: "EventScout",
    shortDescription: "Agentic RAG search over 6,000+ Georgia Tech and Atlanta events.",
    description:
      "Built a LangGraph agent pipeline that parses search intent with GPT-5.6 and retrieves events from Pinecone using OpenAI embeddings. A GitHub Actions cron job scrapes 30 event feeds with idempotent LLM enrichment, while a FastAPI backend hydrates results from Supabase and streams ranked events over SSE.",
    tags: ["FastAPI", "LangGraph", "Pinecone", "GitHub Actions", "Supabase", "React"],
    github: "https://github.com/K23K-dev/eventscout",
    demo: "https://eventscout-henna.vercel.app",
    year: "2026",
    link: "/projects#eventscout",
  },
  {
    id: "corecode",
    title: "CoreCode",
    shortDescription: "LeetCode-style platform for ML and web dev with sandboxed grading.",
    description:
      "Built a LeetCode-style practice platform for ML and web development with automated grading and progress tracking. Engineered a Go/gRPC execution service that runs submissions in isolated Docker workers with resource limits, timeouts, and cancellation, backed by a durable queue with worker recovery and idempotent PostgreSQL writes.",
    tags: ["React", "TypeScript", "Go", "gRPC", "PostgreSQL", "Docker"],
    github: "https://github.com/K23K-dev/corecode",
    year: "2026",
    link: "/projects#corecode",
  },
  {
    id: "finsight",
    title: "FinSight",
    shortDescription: "Personal finance platform tracking net worth, budgets, and cash flow.",
    description:
      "Built a personal finance app that consolidates linked accounts to track net worth, budgets, cash flow, and spending. Engineered transaction ingestion with duplicate prevention, pending-charge reconciliation, and atomic account replacement on relink, plus an event-driven AWS pipeline (EventBridge, Lambda, SQS, Bedrock) for scheduled sync and automatic categorization.",
    tags: ["React", "Google Cloud", "AWS", "Express", "MongoDB"],
    github: "https://github.com/K23K-dev/finsight",
    year: "2025",
    link: "/projects#finsight",
  },
];

export const featuredProjects = projects;
