"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { INDUSTRIES } from "@/lib/constants";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Landmark,
  HeartPulse,
  Factory,
  ShoppingCart,
  Zap,
  Building2,
};

export function IndustriesServed() {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 lg:px-8 relative">
        <SectionHeading
          badge="Industries"
          title="Industries We Serve"
          description="Deep domain expertise across regulated and high-impact sectors, delivering AI solutions that meet industry-specific requirements."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((industry, i) => {
            const Icon = iconMap[industry.icon] || Building2;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <Link href="/industries" className="block">
                  <div className="glass-card p-6 text-center group cursor-pointer h-full">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/10 transition-colors">
                      <Icon
                        size={28}
                        className="text-muted group-hover:text-primary transition-colors"
                      />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted">{industry.description}</p>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
