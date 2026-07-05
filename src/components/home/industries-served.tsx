"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  ShieldCheck,
  GraduationCap,
  Building2,
  Zap,
  Truck,
  Laptop,
} from "lucide-react";
import { INDUSTRIES } from "@/lib/constants";

const ICON_MAP = {
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  ShieldCheck,
  GraduationCap,
  Building2,
  Zap,
  Truck,
  Laptop,
};

export function IndustriesServed() {
  return (
    <section className="py-16 bg-white border-t border-card-border">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-10">
          <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-muted">
            INDUSTRIES WE SERVE
          </h2>
        </div>

        {/* Horizontal Row of Industries */}
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {INDUSTRIES.map((industry, i) => {
            const IconComponent = ICON_MAP[industry.icon as keyof typeof ICON_MAP] || Laptop;
            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex flex-col items-center group"
              >
                <Link href="/industries" className="flex flex-col items-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-surface border border-card-border flex items-center justify-center mb-2 group-hover:bg-primary/5 group-hover:border-primary/20 transition-all">
                    <IconComponent
                      size={20}
                      className="text-muted group-hover:text-primary transition-colors"
                    />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-muted group-hover:text-foreground transition-colors text-center max-w-[90px] leading-tight">
                    {industry.title}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
