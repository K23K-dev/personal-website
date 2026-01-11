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
    id: "nano-moe",
    title: "Sparse MoE Transformer",
    shortDescription: "44M parameter Mixture-of-Experts language model trained from scratch.",
    description:
      "Designed and trained a 44M parameter Mixture-of-Experts model from scratch on TinyStories Dataset, achieving a perplexity of 3.0. Implemented Noisy Top-2 Gating to dynamically route tokens, reducing active parameters by 75% while maintaining model quality.",
    tags: ["PyTorch", "Deep Learning", "Transformers"],
    github: "https://github.com/K23K-dev/nano-moe",
    year: "2025",
    link: "/projects#nano-moe",
  },
  {
    id: "fast-attention",
    title: "FlashAttention Kernel",
    shortDescription: "High-performance CUDA kernel for self-attention with 3x speedup.",
    description:
      "Engineered a fused Self-Attention CUDA kernel using SRAM tiling and thread-level parallelism, achieving a 3x speedup over naive implementations. Implemented Online Softmax to eliminate O(N²) memory complexity by computing attention without full matrix materialization.",
    tags: ["C++", "CUDA", "PyTorch"],
    github: "https://github.com/K23K-dev/fast-attention",
    year: "2025",
    link: "/projects#fast-attention",
  },
  {
    id: "finsight",
    title: "FinSight",
    shortDescription: "Full-stack budgeting platform with real-time bank data aggregation.",
    description:
      "Architected a budgeting and wealth tracking platform integrating SimpleFin via OAuth to aggregate real data across institutions. Enforced end-to-end type safety using tRPC and TypeScript, with secure session management via BetterAuth.",
    tags: ["Next.js", "TypeScript", "tRPC", "PostgreSQL"],
    github: "https://github.com/K23K-dev/finsight",
    year: "2025",
    link: "/projects#finsight",
  },
];

export const featuredProjects = projects;
