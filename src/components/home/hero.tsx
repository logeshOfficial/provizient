"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Network, Sparkles, Briefcase, Award } from "lucide-react";
import { HeroBrainVisual } from "@/components/home/hero-brain-visual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-24 hex-grid-bg">
      {/* Background ambient glows */}
      <div className="absolute top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Top Badge/Tagline */}
            <div className="mb-6 inline-flex self-start items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Build. Learn. Innovate.
              </span>
            </div>

            {/* Title */}
            <h1 className="font-display text-4xl font-bold leading-[1.15] text-foreground sm:text-5xl lg:text-[3.25rem] tracking-tight">
              Empowering Businesses with AI.
              <span className="block gradient-text mt-2">
                Empowering Professionals with Knowledge.
              </span>
            </h1>

            {/* Descriptions */}
            <div className="mt-6 space-y-4 max-w-2xl">
              <p className="text-base sm:text-lg text-muted leading-relaxed">
                Provizient Solutions is an AI-first technology consulting and training company specializing in Artificial Intelligence (AI), Machine Learning (ML), Generative AI, and Agentic AI. We help organizations modernize their businesses through intelligent software solutions while empowering professionals with industry-focused training programs.
              </p>
              <p className="text-sm sm:text-base text-muted/95 leading-relaxed font-medium">
                Whether you're looking to build enterprise AI solutions, train your workforce, or accelerate digital transformation, Provizient Solutions is your trusted technology partner.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-base font-semibold text-white shadow-lg shadow-primary/20 transition-all hover:bg-primary/95 hover:shadow-xl hover:translate-y-[-1px]"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>
              
              <Link
                href="/workbench"
                className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white px-7 py-4 text-base font-semibold text-primary transition-all hover:bg-primary/5 hover:border-primary/50 hover:translate-y-[-1px]"
              >
                Explore Training
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Feature badging row underneath buttons */}
            <div className="mt-12 grid grid-cols-2 gap-6 border-t border-card-border pt-8 sm:grid-cols-4">
              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Network className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">AI & ML</h3>
                <span className="text-[11px] text-muted font-medium">Expertise</span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Generative &</h3>
                <span className="text-[11px] text-muted font-medium">Agentic AI</span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Briefcase className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Enterprise</h3>
                <span className="text-[11px] text-muted font-medium">Solutions</span>
              </div>

              <div className="flex flex-col items-center text-center sm:items-start sm:text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xs font-bold text-foreground uppercase tracking-wider">Training &</h3>
                <span className="text-[11px] text-muted font-medium">Certification</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center items-center overflow-visible"
          >
            <HeroBrainVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
