"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/section-heading";
import { PROCESS_STEPS } from "@/lib/constants";

export function ProcessTimeline() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          badge="Our Process"
          title="A Proven Framework for AI Success"
          description="Our structured five-phase methodology ensures predictable outcomes, transparent communication, and measurable results at every stage."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />

          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative pl-16 md:pl-20 pb-12 last:pb-0"
            >
              <div className="absolute left-3 md:left-5 top-1 w-6 h-6 rounded-full bg-primary border-4 border-background flex items-center justify-center">
                <span className="text-[10px] font-bold text-white">
                  {step.step}
                </span>
              </div>
              <div className="glass-card p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
