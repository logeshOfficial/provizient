import { SectionHeading } from "@/components/shared/section-heading";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { Target, Users, Award, Globe } from "lucide-react";

export const metadata = generateSEO({
  title: "About Us",
  description:
    "Learn about ProVizient's mission, values, and the expert team driving enterprise AI transformation worldwide.",
  path: "/about",
});

const VALUES = [
  {
    icon: Target,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in every engagement, delivering solutions that exceed expectations.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside your team as true partners, transferring knowledge and building internal capabilities.",
  },
  {
    icon: Award,
    title: "Integrity",
    description:
      "Ethical AI practices, transparent communication, and responsible innovation guide everything we do.",
  },
  {
    icon: Globe,
    title: "Impact",
    description:
      "We measure success by the tangible business outcomes we deliver for our clients and their stakeholders.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="About ProVizient"
            title="Pioneering Enterprise AI Excellence"
            description="Founded by AI researchers and industry veterans, ProVizient bridges the gap between cutting-edge artificial intelligence and real-world business impact."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-muted leading-relaxed mb-4">
                At ProVizient, we believe artificial intelligence has the power to
                transform every industry. Our mission is to make enterprise-grade AI
                accessible, actionable, and accountable — helping organizations of all
                sizes harness intelligence to solve their most complex challenges.
              </p>
              <p className="text-muted leading-relaxed">
                With offices across North America, Europe, and Asia-Pacific, we serve
                Fortune 500 companies, mid-market enterprises, and ambitious startups
                seeking to lead in the age of AI.
              </p>
            </div>
            <div className="glass-card p-8">
              <h3 className="font-display text-2xl font-bold mb-6 gradient-text">
                By the Numbers
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "2018", label: "Founded" },
                  { value: "200+", label: "AI Experts" },
                  { value: "30+", label: "Countries Served" },
                  { value: "$2B+", label: "Client Value Created" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            description="Our core values shape every client engagement and define who we are as a company."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
