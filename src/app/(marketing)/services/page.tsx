import * as LucideIcons from "lucide-react";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { DEV_SERVICES } from "@/lib/constants";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  slate: "service-card-slate",
};

export const metadata = generateSEO({
  title: "For Business",
  description:
    "Custom software development, cloud solutions, DevOps, QA, and IT consulting from ProVizient.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="For Business"
            title="Software Development & Consulting"
            description="Custom software. Smarter solutions. Scalable growth — built around your vision."
          />
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 gap-8">
          {DEV_SERVICES.map((service) => {
            const Icon =
              LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
                size?: number;
                className?: string;
              }>;
            return (
              <div
                key={service.id}
                id={service.id}
                className={cn(
                  "rounded-2xl p-8 scroll-mt-24 border border-card-border",
                  COLOR_MAP[service.color]
                )}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                  {Icon && <Icon size={28} className="text-primary" />}
                </div>
                <h2 className="font-display text-xl font-bold mb-3">
                  {service.title}
                </h2>
                <p className="text-muted leading-relaxed text-sm">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 mt-4 text-sm text-primary font-medium">
                  <CheckCircle size={16} />
                  Enterprise-ready delivery
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
