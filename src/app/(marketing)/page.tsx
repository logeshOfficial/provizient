import { Hero } from "@/components/home/hero";
import { ClientMarquee } from "@/components/home/client-marquee";
import { WhatWeDo } from "@/components/home/what-we-do";
import { TrainingSection } from "@/components/home/training-section";
import { ImpactStats } from "@/components/home/impact-stats";
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
      <ClientMarquee />
      <WhatWeDo />
      <TrainingSection />
      <ImpactStats />
      <Testimonials />
      <ConsultationCTA />
    </>
  );
}
