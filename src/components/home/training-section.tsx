"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, TrnAIMLFoundationsIcon } from "@/components/icons/provizient-icons";
import { Button } from "@/components/ui/button";
import { TRAINING_PROGRAMS, TRAINING_TRUST_ITEMS } from "@/lib/constants";
import { TrustBar } from "@/components/shared/trust-bar";
import { cn } from "@/lib/utils";
import { CARD_COLOR_MAP } from "@/lib/card-colors";
import { TRAINING_ICON_MAP } from "@/lib/icon-maps";

export function TrainingSection() {
  return (
    <section id="courses" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-white border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-3">
            Training Programs
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-foreground">
            Your Partner in{" "}
            <span className="gradient-text">Future-Ready Skills.</span>
          </h2>
          <p className="mt-3 text-muted max-w-xl mx-auto text-base leading-relaxed">
            Industry-aligned, hands-on training in AI, Data, and Programming — designed to help you learn, grow, and lead in an AI-first world.
          </p>
          <div className="section-title-line mt-4" />
        </motion.div>

        {/* Training Programs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {TRAINING_PROGRAMS.map((program, i) => {
            const Icon = TRAINING_ICON_MAP[program.icon] || TrnAIMLFoundationsIcon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={cn(
                  "rounded-2xl p-4 sm:p-5 lg:p-6 border border-transparent hover:border-primary/20 hover:shadow-md transition-all",
                  CARD_COLOR_MAP[program.color] ?? "bg-surface")}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-card-border flex items-center justify-center mb-4 shrink-0">
                  <Icon size={28} />
                </div>
                <h4 className="font-display font-bold text-sm sm:text-base text-foreground mb-2 leading-snug">
                  {program.title}
                </h4>
                <p className="text-xs sm:text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button size="lg" className="rounded-full px-8" asChild>
            <Link href="/workbench">
              Explore All Courses
              <ArrowRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>
      <TrustBar items={TRAINING_TRUST_ITEMS} className="mt-16" />
    </section>
  );
}
