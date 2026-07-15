"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { STATS } from "@/lib/constants";
import {
  TrainingProgramsIcon,
  ServiceDomainsIcon,
  IndustriesIcon,
  ExcellenceIcon,
} from "@/components/icons/provizient-icons";

// icons ordered to match STATS: AI Technologies · Training Tracks · Industries · Post-Training Support
const STAT_ICONS = [
  ServiceDomainsIcon,   // AI Technologies Mastered — hex/network
  TrainingProgramsIcon, // Specialized Training Tracks — open book
  IndustriesIcon,       // Industries We Serve — building + AI
  ExcellenceIcon,       // 100% Post-Training Support — shield/check
];

export function ImpactStats() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-surface border-y border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Deep Expertise. Broad Scope.
          </h2>
          <p className="text-muted max-w-lg mx-auto text-sm sm:text-base">
            From cutting-edge AI technologies to industry-specific solutions — here&apos;s the scope of what we bring to every engagement.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, i) => {
            const Icon = STAT_ICONS[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex flex-col items-center text-center p-5 sm:p-6 rounded-2xl bg-surface-alt border border-card-border shadow-sm hover:shadow-md hover:border-primary/15 transition-all"
              >
                {/* Custom SVG icon */}
                <div className="w-14 h-14 rounded-2xl bg-surface-alt border border-card-border shadow-sm flex items-center justify-center mb-3">
                  <Icon size={32} />
                </div>
                <div className="font-display text-3xl sm:text-4xl font-bold gradient-text mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-muted leading-tight">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

