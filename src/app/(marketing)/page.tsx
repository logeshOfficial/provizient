import { Hero } from "@/components/home/hero";
import { Introduction } from "@/components/home/introduction";
import { ServicesShowcase } from "@/components/home/services-showcase";
import { AISolutionsShowcase } from "@/components/home/ai-solutions-showcase";
import { IndustriesServed } from "@/components/home/industries-served";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { Statistics } from "@/components/home/statistics";
import { Testimonials } from "@/components/home/testimonials";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { JsonLd } from "@/components/shared/json-ld";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Hero />
      <Introduction />
      <ServicesShowcase />
      <AISolutionsShowcase />
      <IndustriesServed />
      <ProcessTimeline />
      <Statistics />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
