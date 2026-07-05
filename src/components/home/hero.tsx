"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { assetPath } from "@/lib/utils";
import {
  AgenticAIIcon,
  GenerativeAIIcon,
  CloudAIIcon,
  AITrainingIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  Building2Icon,
  GraduationCapIcon,
} from "@/components/icons/provizient-icons";

const FLOATING_BADGES = [
  {
    id: "agents",
    label: "Agentic AI",
    sub: "Multi-Agent Systems",
    color: "from-primary/90 to-primary",
    position: "top-4 left-3 sm:top-6 sm:left-4",
    delay: 0.6,
  },
  {
    id: "genai",
    label: "Generative AI",
    sub: "LLMs · RAG · Chatbots",
    color: "from-accent/90 to-accent",
    position: "top-4 right-3 sm:top-6 sm:right-4",
    delay: 0.75,
  },
  {
    id: "enterprise",
    label: "Enterprise Ready",
    sub: "Production-Grade",
    color: "from-secondary/90 to-secondary",
    position: "bottom-4 left-3 sm:bottom-6 sm:left-4",
    delay: 0.9,
  },
  {
    id: "training",
    label: "AI Training",
    sub: "Hands-on Programs",
    color: "from-slate-700/90 to-slate-800",
    position: "bottom-4 right-3 sm:bottom-6 sm:right-4",
    delay: 1.05,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-20 hex-grid-bg">
      {/* Ambient glows */}
      <div className="absolute top-20 right-0 h-[400px] w-[400px] rounded-full bg-primary/6 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/*
          Mobile: content first (order-1), image second (order-2)
          Desktop (lg+): content left (order-1), image right (order-2)
        */}
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-20">

          {/* ── Content Column — always first on mobile ── */}
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
              <span className="text-[11px] font-bold uppercase tracking-widest text-primary">
                AI Consulting · Training · Development
              </span>
            </motion.div>

            {/* Headline — single clear value prop */}
            <h1 className="font-display font-bold leading-[1.1] tracking-tight text-foreground text-[2.2rem] sm:text-[2.8rem] lg:text-[3rem] xl:text-[3.25rem]">
              AI Solutions for{" "}
              <span className="gradient-text">Enterprises.</span>
              <br />
              AI Training for{" "}
              <span className="gradient-text">Professionals.</span>
            </h1>

            {/* Sub-headline */}
            <p className="mt-4 text-base sm:text-lg text-muted leading-relaxed max-w-lg">
              ProVizient is an AI-first company delivering{" "}
              <span className="font-semibold text-foreground">custom AI solutions</span> for
              organizations and{" "}
              <span className="font-semibold text-foreground">hands-on training programs</span> in
              AI, ML, Generative AI, and Agentic AI.
            </p>

            {/* Key capabilities */}
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {[
                "Enterprise AI & ML Solutions",
                "Generative & Agentic AI",
                "AI Training & Certification",
                "Cloud AI Architecture",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircleIcon size={14} className="text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Primary CTAs — 2 clear paths */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm sm:max-w-none">
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Building2Icon size={16} />
                For Businesses
              </Link>
              <Link
                href="/workbench"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/30 bg-white px-6 py-3.5 text-sm font-semibold text-primary transition-all hover:bg-primary/5 hover:border-primary/50 hover:-translate-y-0.5"
              >
                <GraduationCapIcon size={16} />
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
                <ArrowRightIcon size={14} />
              </Link>
            </div>

            {/* Capability highlights */}
            <div className="mt-7 pt-6 border-t border-card-border grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { Icon: AgenticAIIcon,    label: "Agentic AI",    sub: "Multi-Agent Systems" },
                { Icon: GenerativeAIIcon, label: "Generative AI", sub: "LLMs · RAG · Chatbots" },
                { Icon: CloudAIIcon,      label: "Cloud AI",      sub: "AWS · Azure · GCP" },
                { Icon: AITrainingIcon,   label: "AI Training",   sub: "Hands-on Programs" },
              ].map(({ Icon, label, sub }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <div className="shrink-0">
                    <Icon size={36} />
                  </div>
                  <div className="mt-0.5">
                    <p className="text-[11px] font-bold text-foreground leading-tight">{label}</p>
                    <p className="text-[10px] text-muted mt-0.5 leading-tight">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Visual Column — second on mobile, right on desktop ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="relative flex justify-center items-center order-2"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-none mx-auto">

              {/* Glow ring */}
              <div className="absolute -inset-3 rounded-[2.5rem] bg-gradient-to-br from-primary/15 via-accent/8 to-secondary/15 blur-2xl opacity-60 animate-pulse-glow pointer-events-none" />

              {/* Dark card */}
              <div className="relative rounded-[1.75rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/10 bg-slate-950">
                {/* Accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

                {/* Card header */}
                <div className="flex items-center justify-between px-4 py-2.5 bg-slate-900/80 border-b border-white/5">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                    ProVizient AI Platform
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] text-primary font-semibold">LIVE</span>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={assetPath("/hero-ai-brain.jpg")}
                      alt="AI-powered digital brain circuit — ProVizient Solutions"
                      width={640}
                      height={640}
                      priority
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

                  {/* Floating badges */}
                  {FLOATING_BADGES.map((badge) => (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: badge.delay }}
                      className={`absolute ${badge.position} z-10`}
                    >
                      <div className={`bg-gradient-to-br ${badge.color} rounded-xl px-2.5 py-1.5 shadow-lg backdrop-blur-sm border border-white/10`}>
                        <p className="text-[10px] font-bold text-white leading-tight">{badge.label}</p>
                        <p className="text-[9px] text-white/70 font-medium">{badge.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card footer */}
                <div className="px-4 py-2.5 bg-slate-900/80 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">
                    AI • ML • GenAI • Agentic AI
                  </span>
                  <div className="flex items-center gap-3">
                    {["Training", "Consulting", "Cloud"].map((tag) => (
                      <span key={tag} className="text-[10px] text-primary/80 font-semibold">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating capability pills — only on xl */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-5 top-1/3 z-20 hidden xl:flex flex-col items-center gap-1 bg-white rounded-2xl shadow-xl border border-card-border px-4 py-3"
              >
                <span className="text-lg font-black text-primary leading-none">Gen AI</span>
                <span className="text-[10px] text-muted font-semibold text-center">LLMs &amp;<br />RAG Systems</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-5 bottom-1/3 z-20 hidden xl:flex flex-col items-center gap-1 bg-white rounded-2xl shadow-xl border border-card-border px-4 py-3"
              >
                <span className="text-lg font-black text-secondary leading-none">Agentic</span>
                <span className="text-[10px] text-muted font-semibold text-center">Multi-Agent<br />Systems</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}