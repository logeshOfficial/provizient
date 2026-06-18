"use client";

import { CLIENT_NAMES, PLATFORM_PARTNERS } from "@/lib/constants";

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: readonly string[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];

  return (
    <div className="marquee-mask relative overflow-hidden py-4">
      <div
        className={
          direction === "left" ? "marquee-track-left" : "marquee-track-right"
        }
      >
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="marquee-item inline-flex shrink-0 items-center gap-3 px-8"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
            <span className="whitespace-nowrap text-sm font-semibold uppercase tracking-wider text-foreground/70 md:text-base">
              {name}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export function ClientMarquee() {
  return (
    <section className="border-y border-card-border bg-white py-6">
      <div className="container mx-auto px-4 lg:px-8 mb-2">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Certified Experts in Leading Enterprise Platforms
        </p>
      </div>
      <MarqueeRow items={PLATFORM_PARTNERS} direction="left" />

      <div className="container mx-auto px-4 lg:px-8 mt-6 mb-2">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted">
          Trusted by Our Global Enterprise Clients
        </p>
      </div>
      <MarqueeRow items={CLIENT_NAMES} direction="right" />
    </section>
  );
}
