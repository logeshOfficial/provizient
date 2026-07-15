import { generateSEO } from "@/lib/seo";
import { Testimonials } from "@/components/home/testimonials";

export const metadata = generateSEO({
  title: "Testimonials — Trusted by Industry Leaders",
  description:
    "Hear from executives and technology leaders who have partnered with ProVizient to drive AI transformation across financial services, healthcare, manufacturing, and more.",
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return <Testimonials isPage />;
}

