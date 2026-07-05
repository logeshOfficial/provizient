"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Network, Sparkles, Briefcase, Award, CheckCircle } from "lucide-react";
import { assetPath } from "@/lib/utils";

const FLOATING_BADGES = [
  {
    id: "agents",
    label: "Agentic AI",
    sub: "Multi-Agent Systems",
    color: "from-primary/90 to-primary",
    position: "top-6 left-4",
    delay: 0.6,
  },
  {
    id: "genai",
    label: "Generative AI",
    sub: "LLMs · RAG · Chatbots",
    color: "from-accent/90 to-accent",
    position: "top-6 right-4",
    delay: 0.75,
  },
  {
    id: "enterprise",
    label: "Enterprise Solutions",
    sub: "Production-Ready",
    color: "from-secondary/90 to-secondary",
    position: "bottom-6 left-4",
    delay: 0.9,
  },
  {
    id: "training",
    label: "AI Training",
    sub: "Hands-on Programs",
    color: "from-slate-700/90 to-slate-800",
    position: "bottom-6 right-4",
    delay: 1.05,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-12 lg:pt-36 lg:pb-24 hex-grid-bg">
      {/* Background ambient glows */}
      <div className="absolute top-24 right-0 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-primary/3 blur-[100px] pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

          {/* ── Left Content Column ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.65 }}
            className="flex flex-col justify-center order-2 lg:order-1"
          >
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4 sm:mb-6 inline-flex self-start items-center gap-2 rounded-full border border-primary/25 bg-primary/8 px-4 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-primary">
                Build · Learn · Innovate
              </span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="font-display text-[2.5rem] font-bold leading-[1.12] text-foreground sm:text-5xl lg:text-[3.1rem] tracking-tight">
              Empowering Businesses
              <br className="hidden sm:block" />
              <span className="gradient-text"> with AI.</span>
              <br />
              <span className="text-[2rem] sm:text-[2.5rem] lg:text-[2.6rem] font-bold text-foreground/90 leading-[1.2] block mt-1">
                Empowering Professionals
                <span className="gradient-text"> with Knowledge.</span>
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-6 max-w-xl text-base sm:text-lg text-muted leading-relaxed">
              An AI-first technology consulting and training company specializing in{" "}
              <span className="font-semibold text-foreground">AI, ML, Generative AI,</span> and{" "}
              <span className="font-semibold text-foreground">Agentic AI</span> — helping organizations modernize
              and professionals build future-ready skills.
            </p>

            {/* Key Points */}
            <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-2">
              {[
                "Enterprise AI Solutions",
                "Workforce AI Training",
                "Agentic AI Development",
                "Cloud AI Architecture",
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-muted">
                  <CheckCircle size={15} className="text-primary shrink-0" />
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons — full-width stacked pills on mobile, inline row from sm up */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4">
              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/workbench"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-primary/25 bg-white px-7 py-3.5 text-base font-semibold text-primary transition-all hover:bg-primary/5 hover:border-primary/50 hover:-translate-y-0.5"
              >
                Explore Training
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border-2 border-card-border bg-white px-7 py-3.5 text-base font-semibold text-foreground transition-all hover:bg-surface hover:border-foreground/30 hover:-translate-y-0.5"
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* 4-Feature Icon Row */}
            <div className="mt-8 pt-6 sm:mt-10 sm:pt-8 border-t border-card-border grid grid-cols-2 gap-5 sm:grid-cols-4">
              {[
                { icon: Network, label: "AI & ML", sub: "Expertise" },
                { icon: Sparkles, label: "Generative &", sub: "Agentic AI" },
                { icon: Briefcase, label: "Enterprise", sub: "Solutions" },
                { icon: Award, label: "Training &", sub: "Certification" },
              ].map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex flex-col items-center text-center sm:items-start sm:text-left">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-2.5 border border-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-[11px] font-bold text-foreground uppercase tracking-wide leading-tight">{label}</p>
                  <p className="text-[11px] text-muted">{sub}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Visual Column ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative flex justify-center items-center order-1 lg:order-2"
          >
            {/* Dark panel that frames the image — bridges the light/dark gap */}
            <div className="relative w-full max-w-lg lg:max-w-none">

              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20 blur-2xl opacity-70 animate-pulse-glow pointer-events-none" />

              {/* Dark card container */}
              <div className="relative rounded-[2rem] overflow-hidden border border-primary/20 shadow-2xl shadow-primary/15 bg-slate-950">

                {/* Top accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-primary via-accent to-secondary" />

                {/* Header bar inside card */}
                <div className="flex items-center justify-between px-5 py-3 bg-slate-900/80 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500 tracking-widest uppercase">
                    Provizient AI Platform
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] text-primary font-semibold">LIVE</span>
                  </div>
                </div>

                {/* The AI Brain Image */}
                <div className="relative">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Image
                      src={assetPath("/hero-ai-brain.jpg")}
                      alt="AI-powered digital brain circuit visualization — Provizient Solutions"
                      width={640}
                      height={640}
                      priority
                      className="w-full h-auto object-cover"
                    />
                  </motion.div>

                  {/* Bottom fade so image blends into card footer */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

                  {/* Floating Stat Badges ON the image */}
                  {FLOATING_BADGES.map((badge) => (
                    <motion.div
                      key={badge.id}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: badge.delay }}
                      className={`absolute ${badge.position} z-10`}
                    >
                      <div className={`bg-gradient-to-br ${badge.color} rounded-xl px-3 py-2 shadow-lg backdrop-blur-sm border border-white/10`}>
                        <p className="text-[11px] font-bold text-white leading-tight">{badge.label}</p>
                        <p className="text-[10px] text-white/70 font-medium">{badge.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Card footer bar */}
                <div className="px-5 py-3 bg-slate-900/80 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-mono">
                    AI • ML • GenAI • Agentic AI
                  </span>
                  <div className="flex items-center gap-3">
                    {["Training", "Consulting", "Cloud"].map((tag) => (
                      <span key={tag} className="text-[10px] text-primary/80 font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Floating side decorators */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-5 top-1/3 z-20 hidden xl:flex flex-col items-center gap-1 bg-white rounded-2xl shadow-xl border border-card-border px-4 py-3"
              >
                <span className="text-2xl font-black text-primary">98%</span>
                <span className="text-[10px] text-muted font-semibold text-center">Client<br />Satisfaction</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -left-5 bottom-1/3 z-20 hidden xl:flex flex-col items-center gap-1 bg-white rounded-2xl shadow-xl border border-card-border px-4 py-3"
              >
                <span className="text-2xl font-black text-secondary">72+</span>
                <span className="text-[10px] text-muted font-semibold text-center">AI Use Cases<br />Delivered</span>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}