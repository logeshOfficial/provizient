import { Brain, BarChart3, FileSearch, Users, CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "AI Solutions",
  description:
    "Discover ProVizient's enterprise AI solution frameworks — knowledge AI, predictive analytics, document processing, and customer intelligence.",
  path: "/ai-solutions",
});

const SOLUTIONS = [
  {
    icon: Brain,
    title: "Enterprise Knowledge AI",
    description:
      "Transform organizational knowledge into intelligent, searchable, and actionable insights.",
    capabilities: [
      "Enterprise search & discovery",
      "Knowledge graph construction",
      "Semantic document understanding",
      "Expert system automation",
    ],
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics Engine",
    description:
      "Anticipate market trends, customer behavior, and operational risks with advanced predictive models.",
    capabilities: [
      "Demand forecasting",
      "Churn prediction",
      "Risk scoring models",
      "Anomaly detection",
    ],
  },
  {
    icon: FileSearch,
    title: "Intelligent Document Processing",
    description:
      "Automate document classification, extraction, and processing with 99%+ accuracy.",
    capabilities: [
      "OCR & data extraction",
      "Document classification",
      "Contract analysis",
      "Compliance automation",
    ],
  },
  {
    icon: Users,
    title: "AI-Powered Customer Intelligence",
    description:
      "Deliver hyper-personalized experiences through real-time customer behavior analysis.",
    capabilities: [
      "Customer segmentation",
      "Personalization engines",
      "Sentiment analysis",
      "Next-best-action recommendations",
    ],
  },
];

export default function AISolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero grid-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="AI Solutions"
            title="Purpose-Built AI Solutions"
            description="Pre-architected solution frameworks that accelerate time-to-value while maintaining enterprise-grade security and scalability."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-12">
          {SOLUTIONS.map((solution) => (
            <div key={solution.title} className="glass-card p-8 md:p-10">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shrink-0">
                  <solution.icon size={36} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                    {solution.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-6">
                    {solution.description}
                  </p>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider mb-4">
                    Key Capabilities
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {solution.capabilities.map((cap) => (
                      <div key={cap} className="flex items-center gap-2">
                        <CheckCircle size={16} className="text-primary shrink-0" />
                        <span className="text-sm">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
