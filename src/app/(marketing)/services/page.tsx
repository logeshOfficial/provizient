import { CARD_COLOR_MAP } from "@/lib/card-colors";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { ServicesHero } from "@/components/services/services-hero";
import { IndustriesServed } from "@/components/home/industries-served";
import { generateSEO } from "@/lib/seo";
import { DETAILED_SERVICES } from "@/lib/constants";
import { CheckCircleIcon } from "@/components/icons/provizient-icons";
import { SERVICE_ICON_MAP } from "@/lib/icon-maps";
import { SvcAIMLIcon } from "@/components/icons/provizient-icons";

export const metadata = generateSEO({
  title: "AI & Software Consulting Services",
  description:
    "We help organizations design, build, and deploy intelligent enterprise solutions. Specialized in Agentic AI, Generative AI, RAG, custom software development and data engineering.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-14 sm:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Page Section Heading */}
          <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              AI &amp; Software Consulting
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted">
              We help organizations design, build, and deploy intelligent enterprise solutions.
            </p>
            <div className="section-title-line mt-4" />
          </div>

          {/* Grid of service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {DETAILED_SERVICES.map((service) => {
              const Icon = SERVICE_ICON_MAP[service.icon as keyof typeof SERVICE_ICON_MAP] || SvcAIMLIcon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`rounded-2xl p-6 sm:p-8 scroll-mt-24 border border-card-border ${CARD_COLOR_MAP[service.color] || "bg-background"}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-background shadow-sm border border-card-border flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                    <Icon size={28} />
                  </div>

                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                    {service.title}
                  </h3>

                  <p className="text-muted leading-relaxed text-sm mb-4 sm:mb-6">
                    {service.description}
                  </p>

                  {/* Detailed Offerings Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 border-t border-slate-900/5 pt-4">
                    {service.subitems.map((subitem) => (
                      <div key={subitem} className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                        <CheckCircleIcon size={13} className="text-primary mt-0.5 shrink-0" />
                        <span>{subitem}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <IndustriesServed />

      <ConsultationCTA />
    </>
  );
}


