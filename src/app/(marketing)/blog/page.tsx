import { generateSEO } from "@/lib/seo";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { DevToBlogSection } from "@/components/home/devto-blog-section";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { BlogInsightsVisual } from "@/components/marketing/marketing-hero-visuals";

export const metadata = generateSEO({
  title: "Blog — AI Insights & Thought Leadership",
  description:
    "Expert perspectives on Agentic AI, LLMs, RAG, and enterprise AI architecture — published by the ProVizient team on dev.to.",
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <MarketingPageHero
        badge="From Our Blog"
        title="AI Insights &"
        titleHighlight="Thought Leadership"
        description="Expert perspectives on Agentic AI, LLMs, RAG, and enterprise architecture — written by our team and published on dev.to."
        primaryCta={{ href: "https://dev.to/sreeni5018", label: "View All Articles" }}
        secondaryCta={{ href: "/contact", label: "Talk to Our Team" }}
        visual={<BlogInsightsVisual />}
      />

      <DevToBlogSection />

      <ConsultationCTA />
    </>
  );
}
