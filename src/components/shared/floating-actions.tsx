"use client";

import Link from "next/link";
import { ArrowRight, Mail, MessageCircle, Sparkles } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  return (
    <>
      <div className="fixed bottom-6 left-1/2 z-40 hidden -translate-x-1/2 md:block">
        <Link
          href="/workbench"
          aria-label="Explore ProVizient training and consulting solutions"
          className={cn(
            "group flex items-center gap-3 rounded-full border border-primary/20 bg-white/95 px-6 py-3",
            "shadow-[0_8px_32px_rgba(0,102,255,0.18)] backdrop-blur-md",
            "transition-all hover:scale-[1.03] hover:border-primary/40 hover:shadow-[0_12px_40px_rgba(0,102,255,0.25)]"
          )}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">
            <Sparkles size={18} className="transition-transform group-hover:rotate-12" />
          </span>
          <span className="flex flex-col items-start leading-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary">
              ProVizient
            </span>
            <span className="mt-0.5 text-sm font-bold text-foreground">
              Training &amp; Consulting
            </span>
          </span>
          <ArrowRight
            size={18}
            className="text-primary transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>

      <Link
        href="/workbench"
        aria-label="Explore ProVizient training and consulting solutions"
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 flex items-center justify-center gap-2 border-t border-primary/15",
          "bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-bold text-white shadow-lg md:hidden"
        )}
      >
        <Sparkles size={16} />
        Training &amp; Consulting
        <ArrowRight size={16} />
      </Link>

      <div className="fixed bottom-20 right-4 z-40 flex flex-col gap-3 md:bottom-6 md:right-6">
        <a
          href={`mailto:${SITE_CONFIG.email}`}
          className={cn(
            "group flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white shadow-lg",
            "transition-all hover:scale-110 hover:shadow-xl"
          )}
          aria-label={`Email ${SITE_CONFIG.email}`}
          title={SITE_CONFIG.email}
        >
          <Mail size={20} className="transition-transform group-hover:scale-110" />
        </a>
        <Link
          href="/contact"
          className={cn(
            "group flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-white shadow-lg",
            "transition-all hover:scale-110 hover:shadow-xl"
          )}
          aria-label="Contact Us"
          title="Contact Us"
        >
          <MessageCircle
            size={20}
            className="transition-transform group-hover:scale-110"
          />
        </Link>
      </div>
    </>
  );
}
