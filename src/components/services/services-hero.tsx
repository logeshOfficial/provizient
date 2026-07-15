"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";

export function ServicesHero() {
  return (
    <section className="relative overflow-x-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-16 hex-grid-bg">
      <PerspectiveDeck />
      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl flex flex-col items-center text-center"
        >
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            Software Development
            <span className="block gradient-text">&amp; Consulting</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted">
            Custom software. Smarter solutions. Scalable growth — built around your vision.
          </p>
          <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/book-consultation"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-primary/40 min-h-[44px]"
            >
              Start a Project
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary/10 hover:border-primary/50 hover:shadow-md min-h-[44px]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
