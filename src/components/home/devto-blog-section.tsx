"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon, ClockIcon } from "@/components/icons/provizient-icons";

const DEVTO_PROFILE = "https://dev.to/sreeni5018";

const LATEST_POSTS = [
  {
    title: "The Architecture of Becoming: Why Your Life is a Transformer Network",
    url: "https://dev.to/sreeni5018/the-architecture-of-becoming-why-your-life-is-a-transformer-network-4aco",
    date: "Jul 2, 2026",
    readTime: "8 min read",
    tags: ["AI", "Architecture", "LLM"],
  },
  {
    title: "Stop Chasing Smarter Models. Start Engineering Better Context.",
    url: "https://dev.to/sreeni5018/stop-chasing-smarter-models-start-engineering-better-context-5014",
    date: "Jun 21, 2026",
    readTime: "5 min read",
    tags: ["AI", "LLM", "Engineering"],
  },
  {
    title: "Most Enterprise AI Agents Fail in Production for the Same Reason — And It's Not the Model",
    url: "https://dev.to/sreeni5018/most-enterprise-ai-agents-fail-in-production-for-the-same-reason-and-its-not-the-model-4ad7",
    date: "Jun 19, 2026",
    readTime: "7 min read",
    tags: ["Agents", "AI", "Architecture"],
  },
] as const;

export function DevToBlogSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-card-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
        >
          <div>
            <span className="inline-block text-[11px] font-bold uppercase tracking-widest text-primary mb-2">
              From Our Blog
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground leading-tight">
              AI Insights &amp; Thought Leadership
            </h2>
            <p className="mt-2 text-sm text-muted max-w-md">
              Expert perspectives on Agentic AI, LLMs, RAG, and enterprise architecture — published on dev.to.
            </p>
          </div>

          {/* View all — links to dev.to profile */}
          <Link
            href={DEVTO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 hover:border-primary/40 transition-all shrink-0"
          >
            View All Articles
            <ExternalLinkIcon size={14} />
          </Link>
        </motion.div>

        {/* Blog post cards — title only, clean and minimal */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
          {LATEST_POSTS.map((post, i) => (
            <motion.div
              key={post.url}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full rounded-2xl border border-card-border bg-surface p-5 sm:p-6 hover:border-primary/25 hover:shadow-md hover:bg-white transition-all"
              >
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/8 text-primary border border-primary/15"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-sm sm:text-base text-foreground leading-snug group-hover:text-primary transition-colors flex-1 mb-4">
                  {post.title}
                </h3>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-card-border">
                  <div className="flex items-center gap-3 text-[11px] text-muted">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <ClockIcon size={11} />
                      {post.readTime}
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary group-hover:gap-2 transition-all">
                    Read
                    <ArrowRightIcon size={12} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Show more — prominent bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-center"
        >
          <Link
            href={DEVTO_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
          >
            Show More on dev.to
            <ExternalLinkIcon size={15} />
          </Link>
          <p className="mt-3 text-xs text-muted">
            193+ articles on AI, Agents, LLMs, RAG and Cloud Architecture
          </p>
        </motion.div>

      </div>
    </section>
  );
}
