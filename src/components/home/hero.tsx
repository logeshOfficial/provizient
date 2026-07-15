"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, CheckCircleIcon, Building2Icon, GraduationCapIcon } from "@/components/icons/provizient-icons";
import { HeroImageCard } from "@/components/home/hero-image-card";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";

const FLOATING_BADGES = [
  {
    id: "rag",
    label: "RAG & Search",
    sub: "Knowledge Systems",
    color: "from-primary to-primary/80",
    position: "top-3 left-3 sm:top-4 sm:left-4",
    delay: 0.6,
  },
  {
    id: "llm",
    label: "LLM Apps",
    sub: "GPT · Claude · Gemini",
    color: "from-accent to-accent/80",
    position: "top-3 right-3 sm:top-4 sm:right-4",
    delay: 0.75,
  },
  {
    id: "enterprise",
    label: "Enterprise Ready",
    sub: "Production-Grade",
    color: "from-secondary to-secondary/80",
    position: "bottom-3 left-3 sm:bottom-4 sm:left-4",
    delay: 0.9,
  },
  {
    id: "mlops",
    label: "MLOps & Cloud",
    sub: "AWS · Azure · GCP",
    color: "from-slate-700 to-slate-800",
    position: "bottom-3 right-3 sm:bottom-4 sm:right-4",
    delay: 1.05,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12 hex-grid-bg">
      <PerspectiveDeck />
      {/* Ambient glows */}
      <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-16">

          {/* ── Content Column ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center order-1"
          >
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 }}
              className="mb-4 inline-flex self-start items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-3.5 py-1.5"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary">
                AI Consulting · Training · Development
              </span>
            </motion.div>

            {/* Headline */}
            <h1 className="font-display font-bold leading-[1.1] tracking-tight text-foreground text-[1.75rem] sm:text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem]">
              AI Solutions for{" "}
              <span className="gradient-text">Enterprises.</span>
              <br />
              AI Training for{" "}
              <span className="gradient-text">Professionals.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-sm sm:text-base lg:text-base text-muted leading-relaxed max-w-lg">
              ProVizient is an AI-first company delivering{" "}
              <span className="font-semibold text-foreground">custom AI solutions</span> for
              organizations and{" "}
              <span className="font-semibold text-foreground">hands-on training programs</span> in
              AI, ML, Generative AI, and Agentic AI.
            </p>

            {/* Key capabilities */}
            <div className="mt-5 grid grid-cols-2 gap-x-3 gap-y-2.5">
              {[
                "Enterprise AI & ML Solutions",
                "Generative & Agentic AI",
                "AI Training & Certification",
                "Cloud AI Architecture",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-xs sm:text-sm text-muted">
                  <CheckCircleIcon size={13} className="text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl min-h-[44px] w-full sm:w-auto"
              >
                <Building2Icon size={15} />
                For Businesses
              </Link>
              <Link
                href="/workbench"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-card px-5 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/50 hover:-translate-y-0.5 min-h-[44px] w-full sm:w-auto"
              >
                <GraduationCapIcon size={15} />
                For Professionals
              </Link>
            </div>

            {/* Secondary link */}
            <div className="mt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-primary transition-colors"
              >
                Talk to our team
                <ArrowRightIcon size={13} />
              </Link>
            </div>
          </motion.div>

          {/* ── Visual Column ── */}
          {/* Tablet + Desktop only — hidden on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="order-2 hidden sm:flex w-full items-center justify-center overflow-visible min-h-[320px] sm:min-h-[400px] lg:min-h-[460px] xl:min-h-[500px]"
          >
            <div className="flex w-full flex-1 items-stretch overflow-visible">
              <HeroImageCard floatingBadges={FLOATING_BADGES} />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}