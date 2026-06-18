"use client";

import { AgentOption1 } from "@/components/workbench/alternatives/agent-option-1";
import { AgentOption2 } from "@/components/workbench/alternatives/agent-option-2";
import { AgentOption3 } from "@/components/workbench/alternatives/agent-option-3";
import { AgentOption4 } from "@/components/workbench/alternatives/agent-option-4";
import { AgentOption5 } from "@/components/workbench/alternatives/agent-option-5";

const OPTIONS = [
  {
    id: 1,
    title: "Classic Chip Agent",
    desc: "Full circuit lines + chip frame + blinking eyes. Matches homepage style.",
    component: AgentOption1,
  },
  {
    id: 2,
    title: "Hologram Float Bot",
    desc: "Clean floating robot with orbit ring and soft glow. Modern & minimal.",
    component: AgentOption2,
  },
  {
    id: 3,
    title: "Neural Network Hub",
    desc: "Abstract AI brain with connected nodes. No humanoid robot.",
    component: AgentOption3,
  },
  {
    id: 4,
    title: "Friendly SNS Style",
    desc: "Cute round-face robot in card with horizontal circuit lines.",
    component: AgentOption4,
  },
  {
    id: 5,
    title: "AI Lab Console",
    desc: "Dark monitor mockup — tech lab / developer aesthetic.",
    component: AgentOption5,
  },
] as const;

export function WorkbenchAlternatives() {
  return (
    <section className="border-t border-card-border bg-surface py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Pick Your Design
          </p>
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            5 Workbench Hero Alternatives
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted">
            Reply with <strong>1</strong>, <strong>2</strong>, <strong>3</strong>,{" "}
            <strong>4</strong>, or <strong>5</strong> and I&apos;ll apply it to the
            workbench page.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {OPTIONS.map(({ id, title, desc, component: Component }) => (
            <article
              key={id}
              className="flex flex-col overflow-hidden rounded-2xl border-2 border-card-border bg-white shadow-sm transition-shadow hover:border-primary/30 hover:shadow-md"
            >
              <div className="border-b border-card-border bg-gradient-to-b from-sky-50/50 to-white px-3 py-2 text-center">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                  {id}
                </span>
              </div>
              <div className="flex min-h-[320px] flex-1 items-center justify-center p-4">
                <Component />
              </div>
              <div className="border-t border-card-border p-4">
                <h3 className="font-display text-sm font-bold text-foreground">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-muted">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
