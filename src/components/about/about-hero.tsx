"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";
import { AboutEnterpriseVisual } from "@/components/about/about-enterprise-visual";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24 hex-grid-bg">
      <PerspectiveDeck />

      <div className="pointer-events-none absolute top-16 left-0 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              About ProVizient
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Pioneering
              <span className="block gradient-text">Enterprise AI Excellence</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              Founded by AI researchers and industry veterans, ProVizient bridges
              the gap between cutting-edge artificial intelligence and real-world
              business impact.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="#mission"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-foreground/90"
              >
                Our Mission
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:shadow-md"
              >
                Work With Us
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm sm:max-w-md">
              <AboutEnterpriseVisual />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
