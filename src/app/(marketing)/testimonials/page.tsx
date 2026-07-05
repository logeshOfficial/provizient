import { generateSEO } from "@/lib/seo";
import { MarketingPageHero } from "@/components/marketing/marketing-page-hero";
import { Testimonials } from "@/components/home/testimonials";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { AboutEnterpriseVisual } from "@/components/about/about-enterprise-visual";

export const metadata = generateSEO({
  title: "Testimonials — Trusted by Industry Leaders",
  description:
    "Hear from executives and technology leaders who have partnered with ProVizient to drive AI transformation across financial services, healthcare, manufacturing, and more.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <MarketingPageHero
        badge="Testimonials"
        title="Trusted by"
        titleHighlight="Industry Leaders"
        description="Hear from executives and technology leaders who have partnered with ProVizient to drive measurable AI transformation."
        primaryCta={{ href: "#testimonials", label: "Read Stories" }}
        secondaryCta={{ href: "/contact", label: "Work With Us" }}
        visual={<AboutEnterpriseVisual />}
      />

      <div id="testimonials" className="scroll-mt-24">
        <Testimonials />
      </div>

      <ConsultationCTA />
    </>
  );
}
