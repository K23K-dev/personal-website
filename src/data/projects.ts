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
      "Agentic RAG search over 6,000+ Georgia Tech and Atlanta events. A LangGraph agent parses each query and searches Pinecone, while a GitHub Actions cron job scrapes 30 event feeds.",
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
      "LeetCode-style practice platform for ML and web development. Submissions run in sandboxed Docker workers behind a Go/gRPC service, with resource limits, timeouts, and a durable job queue.",
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
      "Personal finance app that tracks net worth, budgets, and cash flow across linked accounts. An event-driven AWS pipeline (EventBridge, Lambda, SQS, Bedrock) syncs and auto-categorizes transactions.",
    tags: ["React", "Google Cloud", "AWS", "Express", "MongoDB"],
    github: "https://github.com/K23K-dev/finsight",
    year: "2025",
    link: "/projects#finsight",
  },
];

export const featuredProjects = projects;

export const moreProjects: Project[] = [
  {
    id: "nano-moe",
    title: "NanoMoE",
    shortDescription: "44M-parameter sparse Mixture-of-Experts Transformer trained from scratch.",
    description:
      "44M-parameter sparse Mixture-of-Experts Transformer trained from scratch on 185K Medium articles, reaching a perplexity of 59. Uses noisy top-2 routing across 8 experts.",
    tags: ["PyTorch", "Deep Learning", "Transformers"],
    github: "https://github.com/K23K-dev/nano-moe",
    year: "2026",
  },
  {
    id: "vlm",
    title: "VLM Safety Fine-Tuning",
    shortDescription: "Safety fine-tuning and grounded object localization for vision-language models.",
    description:
      "Qwen3-VL 2B fine-tuned for safer responses and harmful-object localization, using QLoRA and distillation from Grounding DINO.",
    tags: ["PyTorch", "Transformers", "PEFT", "QLoRA"],
    github: "https://github.com/K23K-dev/vlm",
    year: "2026",
  },
  {
    id: "scheduling-algo",
    title: "Scheduling Algo",
    shortDescription: "Interactive web app for practicing CPU scheduling on generated problems.",
    description:
      "Interactive practice tool for CPU scheduling, based on Georgia Tech's CS 2200. Generates problems for five algorithms, checks your timeline, and explains the first wrong decision.",
    tags: ["React", "TypeScript", "Vite"],
    github: "https://github.com/K23K-dev/scheduling-algo",
    year: "2026",
  },
];
