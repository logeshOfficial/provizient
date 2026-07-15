import { generateSEO } from "@/lib/seo";
import { DevToBlogSection } from "@/components/home/devto-blog-section";

export const metadata = generateSEO({
  title: "Blog — AI Insights & Thought Leadership",
  description:
    "Expert perspectives on Agentic AI, LLMs, RAG, and enterprise AI architecture — published by the ProVizient team on dev.to.",
  path: "/blog",
});

export default function BlogPage() {
  return <DevToBlogSection isPage />;
}

