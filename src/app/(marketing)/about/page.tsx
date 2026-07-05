import { SectionHeading } from "@/components/shared/section-heading";
import { AboutHero } from "@/components/about/about-hero";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import {
  Sparkles,
  Target,
  BookOpen,
  Cpu,
  TrendingUp,
  ShieldCheck,
  Check,
} from "lucide-react";

export const metadata = generateSEO({
  title: "Why Provizient Solutions",
  description:
    "Learn about Provizient Solutions' mission, vision, values, and why we are the trusted partner for enterprise AI consulting and training.",
  path: "/about",
});

const VALUES = [
  {
    icon: Sparkles,
    title: "Innovation First",
    description: "We embrace emerging technologies and cutting-edge paradigms like Agentic AI to create impactful solutions.",
  },
  {
    icon: Target,
    title: "Customer Success",
    description: "We are committed to delivering measurable business value and accelerating your digital transformation journey.",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Our hands-on training is designed to transfer production-ready skills that apply directly to real-world projects.",
  },
  {
    icon: Cpu,
    title: "Engineering Excellence",
    description: "We design robust, scalable, and secure software architectures using industry best practices and cloud-native standards.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Improvement",
    description: "We continuously evolve our methodologies, training curricula, and code assets to stay at the forefront of AI evolution.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity & Trust",
    description: "Responsible AI innovation, clear expectations, and honest partnership guide every consulting engagement.",
  },
];

const WHY_CHOOSE_US = [
  "Industry-Experienced Instructors",
  "Real-World Enterprise Projects",
  "Hands-on Learning",
  "Production-Oriented Curriculum",
  "Cloud-Based Labs",
  "Corporate Training Programs",
  "Software Consulting Expertise",
  "End-to-End AI Development",
  "Career Guidance",
  "Post-Training Support",
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* Overview, Mission and Vision */}
      <section id="mission-vision" className="py-20 scroll-mt-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Who We Are & Story */}
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-display text-3xl font-bold text-foreground">
                Our Story &amp; Purpose
              </h2>
              <p className="text-muted leading-relaxed">
                Our team combines decades of experience in software architecture, cloud computing, enterprise integration, and AI technologies to deliver practical, production-ready solutions. We specialize in designing intelligent applications powered by Machine Learning, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Agentic AI systems.
              </p>
              <p className="text-muted leading-relaxed">
                Beyond consulting, we are passionate about education. Our hands-on training programs are designed for students, software engineers, architects, data professionals, and business leaders who want to build real-world AI applications.
              </p>
            </div>

            {/* Right Column: Mission & Vision Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card p-6 border-l-4 border-l-primary">
                <h3 className="font-display text-lg font-bold mb-2 text-foreground flex items-center gap-2">
                  Our Mission
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  To make Artificial Intelligence practical, accessible, and valuable for every organization and every professional.
                </p>
              </div>

              <div className="glass-card p-6 border-l-4 border-l-secondary">
                <h3 className="font-display text-lg font-bold mb-2 text-foreground flex items-center gap-2">
                  Our Vision
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  To become a trusted global partner for AI innovation, enterprise software development, and next-generation technology education.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-surface border-t border-b border-card-border">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Why Us"
            title="Why Provizient Solutions?"
            description="We bridge the gap between theory and execution, helping you build production-grade solutions and skills."
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {WHY_CHOOSE_US.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl border border-card-border bg-white shadow-sm hover:shadow transition-shadow"
              >
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Check size={16} className="text-primary font-bold" />
                </div>
                <span className="text-sm font-semibold text-foreground leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="Our Core Values"
            description="Our core values shape every client engagement and define who we are as a company."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <div key={value.title} className="glass-card p-6 text-center group hover:border-primary/20 transition-all">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-all">
                  <value.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{value.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
