"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TypewriterText } from "@/components/shared/typewriter-text";
import { HeroHubVisual } from "@/components/home/hero-hub-visual";
import { HERO_TYPEWRITER_WORDS } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-20 hex-grid-bg">
      <div className="absolute top-24 right-0 h-96 w-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-4 py-2 shadow-sm">
              <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                New
              </span>
              <span className="text-sm font-semibold text-foreground">
                AI Training · Software · Consulting
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-[3.5rem]">
              Build Your
              <br />
              Future Workforce with
              <br />
              <TypewriterText
                words={HERO_TYPEWRITER_WORDS}
                className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold"
              />
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted leading-relaxed">
              AI solutions engineered to think, build &amp; deliver — from
              agentic AI training to enterprise software development.
            </p>

            <div className="mt-8">
              <Link
                href="/book-consultation"
                className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:bg-foreground/90 hover:shadow-xl"
              >
                Start Your Agentic Journey
                <ArrowRight size={20} />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <HeroHubVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
