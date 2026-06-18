"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/lib/constants";

export function ImpactStats() {
  return (
    <section className="py-20 lg:py-24 bg-white border-y border-card-border">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:pb-24"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Delivering Measurable Enterprise Impact
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            Together, we are building a future powered by skills, innovation,
            and knowledge.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-2xl bg-surface border border-card-border"
            >
              <div className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="text-sm font-medium text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
