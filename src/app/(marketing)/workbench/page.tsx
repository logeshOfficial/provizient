import { WorkbenchPageClient } from "@/components/workbench/workbench-page-client";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "AI Training Workbench",
  description:
    "Discover AI training programs and software consulting that turn ideas into action — GenAI, Agentic AI, custom development, and more.",
  path: "/workbench",
});

export default function WorkbenchPage() {
  return <WorkbenchPageClient />;
}
