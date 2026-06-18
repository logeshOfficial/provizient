import { WorkbenchPageClient } from "@/components/workbench/workbench-page-client";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "AI Training & Courses",
  description:
    "Industry-aligned AI training programs — GenAI, Agentic AI, RAG, AI/ML, Python, and Data Analytics.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return <WorkbenchPageClient />;
}
