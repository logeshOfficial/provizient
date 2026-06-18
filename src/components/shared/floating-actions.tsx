"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  return (
    <>
      <div
        className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
        aria-hidden="false"
      >
        <Link
          href="/workbench"
          className="flex items-center gap-2 rounded-l-xl bg-primary px-3 py-5 text-xs font-bold uppercase tracking-widest text-white shadow-lg transition-transform hover:translate-x-[-2px] [writing-mode:vertical-rl] rotate-180"
        >
          AI Training Hub
        </Link>
      </div>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
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
