"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PerspectiveDeck } from "@/components/workbench/perspective-deck";

type CtaLink = {
  href: string;
  label: string;
};

type MarketingPageHeroProps = {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  primaryCta?: CtaLink;
  secondaryCta?: CtaLink;
  visual: React.ReactNode;
};

export function MarketingPageHero({
  badge,
  title,
  titleHighlight,
  description,
  primaryCta,
  secondaryCta,
  visual,
}: MarketingPageHeroProps) {
  return (
    <section className="relative overflow-x-hidden pt-28 pb-16 lg:min-h-[540px] lg:pt-32 lg:pb-24 hex-grid-bg">
      <PerspectiveDeck />

      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid items-stretch gap-12 lg:grid-cols-2 lg:gap-6 xl:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-primary">
              {badge}
            </span>
            <h1 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              {title}
              {titleHighlight && (
                <span className="block gradient-text">{titleHighlight}</span>
              )}
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-muted lg:mx-0">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-foreground/90"
                  >
                    {primaryCta.label}
                    <ArrowRight size={18} />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center gap-2 rounded-full border border-card-border bg-white px-7 py-3.5 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex min-h-[380px] w-full items-stretch overflow-visible py-8 sm:min-h-[420px] lg:min-h-[460px] xl:min-h-[500px]"
          >
            <div className="flex w-full flex-1 items-stretch overflow-visible">
              {visual}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
