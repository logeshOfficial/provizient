"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/provizient-icons";
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
    <section className="relative overflow-x-hidden pt-24 pb-10 sm:pt-28 sm:pb-12 lg:min-h-[520px] lg:pt-32 lg:pb-20 hex-grid-bg">
      <PerspectiveDeck />

      <div className="pointer-events-none absolute top-20 right-0 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-10 xl:gap-14">

          {/* Content — always first on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center text-center lg:text-left order-1"
          >
            <span className="mb-3 inline-block self-center lg:self-start rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
              {badge}
            </span>
            <h1 className="font-display text-[2rem] sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
              {title}
              {titleHighlight && (
                <span className="block gradient-text">{titleHighlight}</span>
              )}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg leading-relaxed text-muted lg:mx-0">
              {description}
            </p>
            {(primaryCta || secondaryCta) && (
              <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
                {primaryCta && (
                  <Link
                    href={primaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-foreground/90"
                  >
                    {primaryCta.label}
                    <ArrowRightIcon size={16} />
                  </Link>
                )}
                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-card-border bg-white px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/30 hover:shadow-md"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            )}
          </motion.div>

          {/* Visual — second on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="order-2 flex w-full items-center justify-center overflow-visible
                       min-h-[240px] sm:min-h-[300px] lg:min-h-[420px] xl:min-h-[460px]"
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
