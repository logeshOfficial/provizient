"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
import {
  InnovationIcon,
  OutcomeDrivenIcon,
  PracticalLearningIcon,
  ExcellenceIcon,
} from "@/components/icons/provizient-icons";
import { ABOUT_VALUES } from "@/lib/constants";
import type { IconComponent } from "@/lib/icon-maps";

const SECTION_ICONS: Record<string, IconComponent> = {
  InnovationFirst:       InnovationIcon,
  CustomerSuccess:       OutcomeDrivenIcon,
  PracticalLearning:     PracticalLearningIcon,
  EngineeringExcellence: ExcellenceIcon,
};

export function AboutSection() {
  return (    <section className="py-12 sm:py-16 lg:py-24 bg-background border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary">
              About ProVizient
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-foreground">
              Building Intelligent Solutions.{" "}
              <span className="gradient-text">Empowering People.</span>
            </h2>
            <p className="text-muted text-base leading-relaxed">
              ProVizient is an AI-first company offering consulting, software development, and hands-on
              training in AI, ML, Generative AI, and Agentic AI. We help organizations modernize faster
              and help professionals build future-ready skills.
            </p>
            <p className="text-muted text-base leading-relaxed">
              Based in Dallas–Fort Worth, Texas, we work with enterprises across industries — from
              financial services and healthcare to manufacturing and logistics.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/40"
            >
              Learn More About Us
              <ArrowRightIcon size={15} />
            </Link>
          </motion.div>

          {/* Right: Values */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.12 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {ABOUT_VALUES.slice(0, 4).map((item) => {
              const Icon = SECTION_ICONS[item.key];
              return (
              <div
                key={item.title}
                className="flex items-start gap-4 p-5 rounded-2xl border border-card-border bg-surface hover:shadow-md hover:border-primary/15 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-background border border-card-border shadow-sm flex items-center justify-center shrink-0">
                  {Icon && <Icon size={26} />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm mb-1">{item.title}</h3>
                  <p className="text-muted text-xs leading-relaxed">{item.description}</p>
                </div>
              </div>
            )})}
          </motion.div>

        </div>
      </div>
    </section>
  );
}


