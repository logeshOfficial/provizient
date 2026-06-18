"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { DEV_SERVICES, DEV_TRUST_ITEMS } from "@/lib/constants";
import { TrustBar } from "@/components/shared/trust-bar";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  yellow: "service-card-yellow",
  slate: "service-card-slate",
};

export function WhatWeDo() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            What We Do
          </h2>
          <div className="section-title-line" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEV_SERVICES.map((service, i) => {
            const Icon =
              LucideIcons[service.icon as keyof typeof LucideIcons] as React.ComponentType<{
                size?: number;
                className?: string;
              }>;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={cn(
                  "rounded-2xl p-6 border border-transparent hover:border-primary/20 transition-all",
                  COLOR_MAP[service.color]
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-4">
                  {Icon && <Icon size={24} className="text-primary" />}
                </div>
                <h3 className="font-display font-bold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
      <TrustBar items={DEV_TRUST_ITEMS} className="mt-16" />
    </section>
  );
}
