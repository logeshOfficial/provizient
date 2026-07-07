"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";
import { ServicesDevVisual } from "@/components/services/services-dev-visual";

export function ServicesHero() {
  return (
    <section className="relative overflow-x-hidden pt-24 pb-8 sm:pt-24 sm:pb-10 lg:pt-24 lg:pb-12 hex-grid-bg">
      <PerspectiveDeck />

      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left order-1 w-full"
          >
            <span className="mb-3 inline-block self-center lg:self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              For Business
            </span>
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] break-words">
              Software Development
              <span className="block gradient-text">&amp; Consulting</span>
            </h1>
            <p className="mx-auto lg:mx-0 mt-4 max-w-xl text-sm sm:text-base lg:text-lg leading-relaxed text-muted">
              Custom software. Smarter solutions. Scalable growth — built around your vision.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Link
                href="/book-consultation"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-foreground/90 min-h-[44px]"
              >
                Start a Project
                <ArrowRightIcon size={16} />
              </Link>
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:shadow-md min-h-[44px]"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>

          {/* Visual — hidden on mobile, visible from lg */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="order-2 hidden lg:flex w-full items-center justify-center overflow-visible min-h-[360px] xl:min-h-[400px]"
          >
            <div className="flex w-full flex-1 items-stretch overflow-visible">
              <ServicesDevVisual />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
