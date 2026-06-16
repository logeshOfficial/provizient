import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";

export const metadata = generateSEO({
  title: "Blog",
  description:
    "Insights, trends, and thought leadership on enterprise AI from the ProVizient consulting team.",
  path: "/blog",
});

const FALLBACK_POSTS = [
  {
    slug: "enterprise-ai-adoption-2026",
    title: "Enterprise AI Adoption in 2026: Trends & Strategies",
    excerpt:
      "Explore the key trends shaping enterprise AI adoption and how leading organizations are building competitive advantages.",
    author: "ProVizient Team",
    tags: ["AI Strategy", "Enterprise"],
    createdAt: new Date("2026-01-15"),
  },
  {
    slug: "responsible-ai-governance",
    title: "Building a Responsible AI Governance Framework",
    excerpt:
      "A practical guide to establishing AI governance that balances innovation with ethics, compliance, and risk management.",
    author: "ProVizient Team",
    tags: ["Governance", "Ethics"],
    createdAt: new Date("2026-02-01"),
  },
  {
    slug: "generative-ai-roi",
    title: "Measuring ROI from Generative AI Investments",
    excerpt:
      "How to quantify the business value of generative AI initiatives and build compelling business cases for stakeholders.",
    author: "ProVizient Team",
    tags: ["Generative AI", "ROI"],
    createdAt: new Date("2026-03-10"),
  },
];

async function getPosts() {
  try {
    const posts = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
      select: {
        slug: true,
        title: true,
        excerpt: true,
        author: true,
        tags: true,
        createdAt: true,
      },
    });
    return posts.length > 0 ? posts : FALLBACK_POSTS;
  } catch {
    return FALLBACK_POSTS;
  }
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <>
      <section className="pt-32 pb-20 gradient-hero grid-pattern">
        <div className="container mx-auto px-4 lg:px-8">
          <SectionHeading
            badge="Blog"
            title="AI Insights & Thought Leadership"
            description="Stay ahead with expert perspectives on enterprise AI strategy, implementation, and industry trends."
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="glass-card p-6 flex flex-col group">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
              <h2 className="font-display text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>
              <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex items-center gap-2 text-xs text-muted">
                  <Calendar size={14} />
                  {formatDate(post.createdAt)}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:gap-2 transition-all"
                >
                  Read <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
