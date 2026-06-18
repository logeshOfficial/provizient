"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Code2,
  Cloud,
  Brain,
  Globe,
  Smartphone,
  ShieldCheck,
  Infinity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO_SERVICES_ORBIT } from "@/lib/constants";

const ORBIT_ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Infinity,
  Smartphone,
  Globe,
  Cloud,
  Brain,
  ShieldCheck,
};

export function Hero() {
  return (
    <section className="relative gradient-hero overflow-hidden pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Software Development &amp; Consulting
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6 text-foreground">
              Built Around{" "}
              <span className="gradient-text">Your Vision.</span>
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8 max-w-xl">
              Custom software. Smarter solutions. Scalable growth. We turn your
              ideas into powerful digital products.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8" asChild>
                <Link href="/book-consultation">
                  Schedule a Consultation
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary text-primary hover:bg-primary/5"
                asChild
              >
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative flex items-center justify-center min-h-[320px] lg:min-h-[400px]"
          >
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-8 rounded-3xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/10 flex items-center justify-center overflow-hidden">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Code2 size={40} className="text-primary" />
                  </div>
                  <p className="font-display font-bold text-lg text-foreground">
                    Enterprise-Grade Delivery
                  </p>
                  <p className="text-sm text-muted mt-2">
                    Web · Mobile · Cloud · AI
                  </p>
                </div>
              </div>

              {HERO_SERVICES_ORBIT.map((item, i) => {
                const angle = (i / HERO_SERVICES_ORBIT.length) * 2 * Math.PI - Math.PI / 2;
                const radius = 46;
                const x = 50 + radius * Math.cos(angle);
                const y = 50 + radius * Math.sin(angle);
                const Icon = ORBIT_ICONS[item.icon] || Code2;
                return (
                  <div
                    key={item.label}
                    className="absolute w-14 h-14 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${x}%`, top: `${y}%` }}
                  >
                    <div
                      className="w-full h-full rounded-full bg-white border border-card-border shadow-md flex items-center justify-center group hover:border-primary hover:shadow-lg transition-all"
                      title={item.label}
                    >
                      <Icon size={22} className="text-primary" />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
