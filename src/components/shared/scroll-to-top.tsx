"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronUpIcon } from "@/components/icons/provizient-icons";
import { cn } from "@/lib/utils";

const SCROLL_THRESHOLD = 300;

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      title="Back to top"
      className={cn(
        "group flex h-12 w-12 items-center justify-center rounded-full",
        "border border-primary/20 bg-white/95 text-primary shadow-lg backdrop-blur-md",
        "transition-all duration-300 hover:scale-110 hover:border-primary/40 hover:shadow-xl"
      )}
    >
      <ChevronUpIcon
        size={22}
        strokeWidth={2.5}
        className="transition-transform group-hover:-translate-y-0.5"
      />
    </button>
  );
}
