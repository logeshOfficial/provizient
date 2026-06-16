import {
  Compass,
  Code2,
  Zap,
  Bot,
  Sparkles,
  Plug,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { SERVICES } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Services",
  description:
    "Explore ProVizient's comprehensive AI consulting services — from strategy and custom development to automation and integration.",
  path: "/services",
});

const iconMap = {
  Compass,
  Code2,
  Zap,
  Bot,
  Sparkles,
  Plug,
};

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero grid-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Services"
            title="Enterprise AI Consulting Services"
            description="End-to-end AI consulting services designed to accelerate your AI journey from vision to value."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 space-y-16">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Compass;
            return (
              <div
                key={service.id}
                id={service.id}
                className="glass-card p-8 md:p-10 scroll-mt-24"
              >
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon size={32} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
                      {service.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-primary shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
