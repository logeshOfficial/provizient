import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { generateSEO } from "@/lib/seo";
import { prisma } from "@/lib/prisma";
import { formatDate } from "@/lib/utils";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const FALLBACK_CONTENT: Record<string, { title: string; excerpt: string; content: string; author: string; tags: string[]; createdAt: Date }> = {
  "enterprise-ai-adoption-2026": {
    title: "Enterprise AI Adoption in 2026: Trends & Strategies",
    excerpt: "Explore the key trends shaping enterprise AI adoption.",
    content: `<p>The enterprise AI landscape in 2026 is characterized by a shift from experimentation to scaled production deployments. Organizations that successfully navigate this transition share several common traits: executive sponsorship, clear governance frameworks, and a focus on measurable business outcomes.</p>
    <h2>Key Trends</h2>
    <p>Agentic AI systems are moving from proof-of-concept to production, with enterprises deploying autonomous agents for customer service, IT operations, and knowledge management. Meanwhile, the convergence of generative AI with traditional ML pipelines is creating hybrid architectures that deliver both creativity and precision.</p>
    <h2>Strategic Recommendations</h2>
    <p>Start with high-impact, well-defined use cases. Invest in data infrastructure and AI literacy across the organization. Establish clear governance from day one. And partner with experienced consultants who understand both the technology and your industry.</p>`,
    author: "ProVizient Team",
    tags: ["AI Strategy", "Enterprise"],
    createdAt: new Date("2026-01-15"),
  },
  "responsible-ai-governance": {
    title: "Building a Responsible AI Governance Framework",
    excerpt: "A practical guide to establishing AI governance.",
    content: `<p>As AI systems become more powerful and pervasive, responsible governance is no longer optional — it's a business imperative. Organizations need frameworks that enable innovation while managing risk.</p>
    <h2>Core Components</h2>
    <p>An effective AI governance framework includes: an AI ethics board, model risk management processes, bias detection and mitigation protocols, transparency requirements, and regular audits.</p>`,
    author: "ProVizient Team",
    tags: ["Governance", "Ethics"],
    createdAt: new Date("2026-02-01"),
  },
  "generative-ai-roi": {
    title: "Measuring ROI from Generative AI Investments",
    excerpt: "How to quantify the business value of generative AI.",
    content: `<p>Generative AI investments require clear ROI frameworks. Start by identifying cost savings (automation, efficiency), revenue growth (new products, better customer experience), and risk reduction (compliance, quality).</p>
    <h2>Measurement Framework</h2>
    <p>Track both leading indicators (adoption rates, time savings) and lagging indicators (revenue impact, cost reduction). Establish baselines before deployment and measure continuously.</p>`,
    author: "ProVizient Team",
    tags: ["Generative AI", "ROI"],
    createdAt: new Date("2026-03-10"),
  },
};

async function getPost(slug: string) {
  try {
    const post = await prisma.blogPost.findUnique({ where: { slug, published: true } });
    if (post) return post;
  } catch {
    // fall through
  }
  return FALLBACK_CONTENT[slug] || null;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return generateSEO({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft size={16} /> Back to Blog
          </Link>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {post.title}
          </h1>

          <div className="flex items-center gap-6 text-sm text-muted mb-10 pb-8 border-b border-white/5">
            <span className="flex items-center gap-2">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar size={14} /> {formatDate(post.createdAt)}
            </span>
          </div>

          <div
            className="prose prose-invert prose-lg max-w-none prose-headings:font-display prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>
    </>
  );
}
