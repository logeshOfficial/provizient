import {
  IndGovernmentIcon,
} from "@/components/icons/provizient-icons";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/constants";
import { INDUSTRY_ICON_MAP } from "@/lib/icon-maps";

export const metadata = generateSEO({
  title: "Industries Served — Provizient Solutions",
  description:
    "Provizient Solutions serves manufacturing, healthcare, financial services, retail, insurance, education, logistics, energy, technology, and government with tailored AI solutions.",
  path: "/industries",
});

const iconMap = INDUSTRY_ICON_MAP;

const INDUSTRY_DETAILS: Record<string, string[]> = {
  Manufacturing: [
    "Predictive maintenance & asset monitoring",
    "Automated quality control & defect detection",
    "Supply chain planning & route optimization",
    "Digital twin modeling & workflow efficiency",
  ],
  Healthcare: [
    "Clinical decision support systems",
    "Medical imaging and diagnostic AI models",
    "Healthcare administrative workflow automation",
    "Patient flow and resource capacity optimization",
  ],
  "Financial Services": [
    "Real-time ML fraud detection & prevention",
    "Automated regulatory compliance (RegTech)",
    "Credit scoring and risk modeling",
    "Algorithmic trading and asset management systems",
  ],
  Retail: [
    "Customer demand forecasting & inventory management",
    "Personalized recommendation engines",
    "Pricing optimization & discount analytics",
    "Visual search & product matching engines",
  ],
  Insurance: [
    "Automated claims processing and ingestion",
    "AI-driven risk scoring & underwriting support",
    "Customer churn prediction & policy matching",
    "Claims leakage and anomalies detection",
  ],
  Education: [
    "Adaptive and personalized learning platforms",
    "Student performance tracking & analytics dashboards",
    "AI tutoring assistants & conversational guides",
    "Educational administrative workflow automations",
  ],
  Government: [
    "Citizen service chatbots and portal automations",
    "Public policy data impact and sentiment analysis",
    "Optimal public resource allocation dashboards",
    "Public safety analytics & structural monitoring",
  ],
  "Energy & Utilities": [
    "Smart grid load and distribution optimization",
    "Renewable energy generation forecasting",
    "Utility infrastructure health & anomaly alerts",
    "Sustainability reporting and emissions analytics",
  ],
  Logistics: [
    "Dynamic routing and delivery schedule optimization",
    "Fleet performance monitoring & predictive alerts",
    "Warehouse inventory counts & robot coordination",
    "Global freight capacity & demand forecasting",
  ],
  Technology: [
    "AI code generation tools & IDE integrations",
    "Scalable MLOps pipelines and serving infrastructures",
    "Custom cloud-native web & enterprise application buildout",
    "Multi-agent orchestrations & Model Context Protocol (MCP) tooling",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <MarketingPageHero
        title="Industry-Specific"
        titleHighlight="AI Expertise"
        description="Deep domain knowledge across regulated and high-impact sectors, delivering AI solutions that meet industry-specific compliance and performance requirements."
        primaryCta={{ href: "#industries", label: "Explore Industries" }}
        secondaryCta={{ href: "/contact", label: "Contact Us" }}
      />

      <section id="industries" className="scroll-mt-24 py-10 sm:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || IndGovernmentIcon;
            const details = INDUSTRY_DETAILS[industry.title] || [];
            return (
              <div key={industry.title} className="glass-card p-6 sm:p-8 hover:border-primary/20 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0">
                    <Icon size={28} />
                  </div>
                  <div className="min-w-0">
                    <h2 className="font-display text-lg sm:text-xl font-bold text-foreground">{industry.title}</h2>
                    <p className="text-xs sm:text-sm text-muted">{industry.description}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 mt-4 border-t border-slate-900/5 pt-4">
                  {details.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs sm:text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}


