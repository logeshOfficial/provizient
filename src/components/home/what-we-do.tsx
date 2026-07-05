"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Brain, Sparkles, Bot, BarChart3, Code2, Cloud, ArrowRight } from "lucide-react";
import { DEV_SERVICES, DEV_TRUST_ITEMS } from "@/lib/constants";
import { TrustBar } from "@/components/shared/trust-bar";

const ICON_MAP = {
  Brain,
  Sparkles,
  Bot,
  BarChart3,
  Code2,
  Cloud,
};

export function WhatWeDo() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-surface border-t border-card-border">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            OUR SERVICES
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            End-to-End AI &amp; Software Solutions
          </h2>
          <div className="section-title-line mt-3" />
        </motion.div>

        {/* 6 Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEV_SERVICES.map((service, i) => {
            const IconComponent = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Brain;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl p-6 border border-card-border bg-white shadow-sm hover:shadow-md hover:border-primary/20 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Icon centered circle */}
                  <div className="w-14 h-14 rounded-full border-2 border-primary/20 bg-primary/5 flex items-center justify-center mx-auto mb-5">
                    <IconComponent size={26} className="text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-lg text-center mb-4 text-foreground">
                    {service.title}
                  </h3>

                  {/* Subitems Bullets */}
                  <ul className="space-y-2.5 mb-6 text-sm text-muted">
                    {service.subitems.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More link */}
                <div className="border-t border-card-border pt-4 text-center">
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-foreground hover:bg-primary px-4 py-1.5 rounded-full transition-colors"
                  >
                    Learn More
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
      <TrustBar items={DEV_TRUST_ITEMS} className="mt-20" />
    </section>
  );
}
