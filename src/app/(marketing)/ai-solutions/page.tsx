import * as LucideIcons from "lucide-react";
import { Brain, Bot, Sparkles, BarChart3, Terminal, Search } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { TRAINING_PROGRAMS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  yellow: "service-card-yellow",
};

const ICONS: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Sparkles,
  Bot,
  Search,
  Brain,
  Terminal,
  BarChart3,
};

export const metadata = generateSEO({
  title: "AI Training & Courses",
  description:
    "Industry-aligned AI training programs — GenAI, Agentic AI, RAG, AI/ML, Python, and Data Analytics.",
  path: "/ai-solutions",
});

export default function AISolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 gradient-hero">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Courses"
            title="Future-Ready Skills Training"
            description="Industry-aligned training in AI, Data, and Programming to help you learn, grow, and lead."
          />
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINING_PROGRAMS.map((program) => {
            const Icon = ICONS[program.icon] || Brain;
            return (
              <div
                key={program.id}
                className={cn(
                  "rounded-2xl p-8 border border-card-border",
                  COLOR_MAP[program.color]
                )}
              >
                <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                  <Icon size={28} className="text-primary" />
                </div>
                <h2 className="font-display text-xl font-bold mb-3">
                  {program.title}
                </h2>
                <p className="text-muted leading-relaxed text-sm">
                  {program.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
