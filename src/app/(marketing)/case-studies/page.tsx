import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
import { Badge } from "@/components/ui/badge";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { CASE_STUDIES } from "@/lib/constants";

export const metadata = generateSEO({
  title: "Case Studies",
  description:
    "Explore how ProVizient has helped enterprises achieve measurable results with AI — fraud detection, diagnostics, and predictive maintenance.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <MarketingPageHero
        title="Proven Results"
        titleHighlight="Across Industries"
        description="Real-world success stories demonstrating the transformative impact of our AI consulting engagements."
        primaryCta={{ href: "#case-studies", label: "View Case Studies" }}
        secondaryCta={{ href: "/book-consultation", label: "Book Consultation" }}
      />

      <section id="case-studies" className="scroll-mt-24 py-10 sm:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4 lg:px-8 space-y-8">
          {CASE_STUDIES.map((study) => (
            <div key={study.slug} className="glass-card p-8 md:p-10 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <Badge variant="success">{study.result}</Badge>
                  </div>
                  <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {study.title}
                  </h2>
                  <p className="text-muted leading-relaxed">{study.description}</p>
                </div>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all shrink-0"
                >
                  Read Case Study <ArrowRightIcon size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}

