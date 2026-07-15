"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, SvcAIMLIcon } from "@/components/icons/provizient-icons";
import { DEV_SERVICES, DEV_TRUST_ITEMS } from "@/lib/constants";
import { TrustBar } from "@/components/shared/trust-bar";
import { SectionHeading } from "@/components/shared/section-heading";
import { SERVICE_ICON_MAP } from "@/lib/icon-maps";

export function WhatWeDo() {
  return (
    <section id="services" className="scroll-mt-24 py-12 sm:py-16 lg:py-24 bg-surface border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <SectionHeading
          badge="Our Services"
          title="End-to-End AI & Software Solutions"
          description="From strategy and architecture to deployment and support — we deliver the full stack of AI capabilities your organization needs."
        />

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {DEV_SERVICES.map((service, i) => {
            const IconComponent = SERVICE_ICON_MAP[service.icon as keyof typeof SERVICE_ICON_MAP] || SvcAIMLIcon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-6 border border-card-border bg-surface-alt shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-surface-alt shadow-sm border border-card-border flex items-center justify-center mb-4 shrink-0">
                  <IconComponent size={28} />
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-foreground mb-2">
                  {service.title}
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-4">
                  {service.description}
                </p>

                <ul className="space-y-1.5 mb-5 flex-1">
                  {service.subitems.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-muted">
                      <span className="w-1 h-1 rounded-full bg-primary/50 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-card-border pt-4">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:gap-2.5 transition-all"
                  >
                    Learn More
                    <ArrowRightIcon size={13} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5 hover:border-primary/40 transition-all"
          >
            View All Services
            <ArrowRightIcon size={15} />
          </Link>
        </div>
      </div>
      <TrustBar items={DEV_TRUST_ITEMS} className="mt-16" />
    </section>
  );
}

