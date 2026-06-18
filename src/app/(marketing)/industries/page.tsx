import {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
} from "lucide-react";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { IndustriesVisual } from "@/components/marketing/marketing-hero-visuals";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { INDUSTRIES } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Industries",
  description:
    "ProVizient serves financial services, healthcare, manufacturing, retail, energy, and government with tailored AI solutions.",
  path: "/industries",
});

const iconMap = {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
};

const INDUSTRY_DETAILS: Record<string, string[]> = {
  "Financial Services": [
    "Fraud detection & prevention",
    "Algorithmic trading systems",
    "Credit risk modeling",
    "Regulatory compliance automation",
  ],
  "Healthcare & Life Sciences": [
    "Clinical decision support",
    "Drug discovery acceleration",
    "Medical imaging analysis",
    "Patient flow optimization",
  ],
  Manufacturing: [
    "Predictive maintenance",
    "Quality control automation",
    "Supply chain optimization",
    "Digital twin development",
  ],
  "Retail & E-Commerce": [
    "Demand forecasting",
    "Personalization engines",
    "Inventory optimization",
    "Visual search & recommendations",
  ],
  "Energy & Utilities": [
    "Grid optimization",
    "Asset performance management",
    "Renewable energy forecasting",
    "Outage prediction",
  ],
  "Government & Public Sector": [
    "Citizen service automation",
    "Policy impact analysis",
    "Resource allocation optimization",
    "Public safety analytics",
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <MarketingPageHero
        badge="Industries"
        title="Industry-Specific"
        titleHighlight="AI Expertise"
        description="Deep domain knowledge across regulated and high-impact sectors, delivering AI solutions that meet industry-specific compliance and performance requirements."
        primaryCta={{ href: "#industries", label: "Explore Industries" }}
        secondaryCta={{ href: "/contact", label: "Contact Us" }}
        visual={<IndustriesVisual />}
      />

      <section id="industries" className="scroll-mt-24 py-20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
          {INDUSTRIES.map((industry) => {
            const Icon = iconMap[industry.icon as keyof typeof iconMap] || Building2;
            const details = INDUSTRY_DETAILS[industry.title] || [];
            return (
              <div key={industry.title} className="glass-card p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Icon size={28} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold">{industry.title}</h2>
                    <p className="text-sm text-muted">{industry.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 mt-6">
                  {details.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      {item}
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
