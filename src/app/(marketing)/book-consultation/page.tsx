import { Calendar, CheckCircle } from "lucide-react";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { ConsultationVisual } from "@/components/marketing/marketing-hero-visuals";
import { ConsultationForm } from "@/components/forms/consultation-form";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Book Consultation",
  description:
    "Schedule a complimentary AI strategy consultation with ProVizient's expert consultants.",
  path: "/book-consultation",
});

const BENEFITS = [
  "Complimentary 60-minute strategy session",
  "AI readiness assessment",
  "Customized opportunity analysis",
  "No obligation — just expert guidance",
];

export default function BookConsultationPage() {
  return (
    <>
      <MarketingPageHero
        badge="Consultation"
        title="Book Your Free"
        titleHighlight="AI Strategy Consultation"
        description="Meet with our senior AI consultants to explore how intelligent solutions can transform your business."
        primaryCta={{ href: "#consultation-form", label: "Request Session" }}
        secondaryCta={{ href: "/contact", label: "Contact Us" }}
        visual={<ConsultationVisual />}
      />

      <section id="consultation-form" className="scroll-mt-24 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="glass-card p-8 sticky top-28">
                <Calendar size={32} className="text-primary mb-4" />
                <h2 className="font-display text-2xl font-bold mb-4">
                  What to Expect
                </h2>
                <ul className="space-y-4">
                  {BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="text-primary mt-0.5 shrink-0"
                      />
                      <span className="text-sm text-muted">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="lg:col-span-3 glass-card p-8">
              <h2 className="font-display text-2xl font-bold mb-6">
                Request Your Consultation
              </h2>
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
