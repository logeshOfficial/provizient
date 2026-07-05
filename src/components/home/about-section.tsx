"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Lightbulb, Target, BookOpen, ShieldCheck } from "lucide-react";

const VALUES = [
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We embrace emerging technologies to create impactful solutions.",
  },
  {
    icon: Target,
    title: "Customer Success",
    description: "We are committed to delivering measurable business value.",
  },
  {
    icon: BookOpen,
    title: "Practical Learning",
    description: "Our training is hands-on, industry-focused and career-oriented.",
  },
  {
    icon: ShieldCheck,
    title: "Excellence & Integrity",
    description: "We deliver with quality, transparency and professional integrity.",
  },
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-white border-t border-card-border relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              ABOUT US
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              Building Intelligent Solutions.{" "}
              <span className="block gradient-text">Empowering People.</span>
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed max-w-xl">
              Provizient Solutions is an AI-first company offering consulting, software development and hands-on training in AI, ML, Generative AI and Agentic AI. We help organizations innovate faster and help professionals build future-ready skills.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/40"
              >
                Learn More About Us
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Right Column: Values Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="lg:col-span-6 grid sm:grid-cols-2 gap-6"
          >
            {VALUES.map((item, idx) => (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-card-border bg-surface transition-all hover:shadow-md hover:border-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon size={22} className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground text-base">
                    {item.title}
                  </h3>
                  <p className="text-muted text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
