"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Sparkles, BarChart3, Terminal, Search } from "lucide-react";
import { TrainingHubVisual } from "@/components/home/training-hub-visual";
import { Button } from "@/components/ui/button";
import { TRAINING_PROGRAMS, TRAINING_TRUST_ITEMS } from "@/lib/constants";
import { TrustBar } from "@/components/shared/trust-bar";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  yellow: "service-card-yellow",
};

const TRAINING_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Bot,
  Search,
  Brain,
  Terminal,
  BarChart3,
};

export function TrainingSection() {
  return (
    <section id="courses" className="scroll-mt-24 py-20 lg:py-28 bg-surface">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Your Partner in{" "}
              <span className="gradient-text">Future-Ready Skills.</span>
            </h2>
            <p className="text-lg text-muted leading-relaxed mb-8">
              Industry-aligned training in AI, Data, and Programming to help you
              learn, grow, and lead.
            </p>
            <Button size="lg" className="rounded-full px-8" asChild>
              <Link href="/workbench">
                Explore Courses
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-end"
          >
            <TrainingHubVisual variant="skills-hub" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-8 md:pt-12 pb-20 md:pb-24 mb-12"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Our Popular Training Programs
          </h3>
          <div className="section-title-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRAINING_PROGRAMS.map((program, i) => {
            const Icon = TRAINING_ICONS[program.icon] || Brain;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "rounded-2xl p-6 border border-transparent hover:border-primary/20 transition-all",
                  COLOR_MAP[program.color]
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  <Icon size={24} className="text-primary" />
                </div>
                <h4 className="font-display font-bold text-lg mb-2 text-foreground">
                  {program.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <TrustBar items={TRAINING_TRUST_ITEMS} className="mt-16" />
    </section>
  );
}
