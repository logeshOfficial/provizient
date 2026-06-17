import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { getPublishedPosts } from "@/data/blog";
import { formatDate } from "@/lib/utils";

export const metadata = generateSEO({
  title: "Blog",
  description:
    "Insights, trends, and thought leadership on enterprise AI from the ProVizient consulting team.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPublishedPosts();

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
