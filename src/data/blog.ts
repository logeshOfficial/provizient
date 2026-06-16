export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  tags: string[];
  createdAt: string;
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "enterprise-ai-adoption-2026",
    title: "Enterprise AI Adoption in 2026: Trends & Strategies",
    excerpt:
      "Explore the key trends shaping enterprise AI adoption and how leading organizations are building competitive advantages.",
    content: `<p>The enterprise AI landscape in 2026 is characterized by a shift from experimentation to scaled production deployments. Organizations that successfully navigate this transition share several common traits: executive sponsorship, clear governance frameworks, and a focus on measurable business outcomes.</p>
    <h2>Key Trends</h2>
    <p>Agentic AI systems are moving from proof-of-concept to production, with enterprises deploying autonomous agents for customer service, IT operations, and knowledge management. Meanwhile, the convergence of generative AI with traditional ML pipelines is creating hybrid architectures that deliver both creativity and precision.</p>
    <h2>Strategic Recommendations</h2>
    <p>Start with high-impact, well-defined use cases. Invest in data infrastructure and AI literacy across the organization. Establish clear governance from day one. And partner with experienced consultants who understand both the technology and your industry.</p>`,
    author: "ProVizient Team",
    tags: ["AI Strategy", "Enterprise"],
    createdAt: "2026-01-15",
  },
  {
    slug: "responsible-ai-governance",
    title: "Building a Responsible AI Governance Framework",
    excerpt:
      "A practical guide to establishing AI governance that balances innovation with ethics, compliance, and risk management.",
    content: `<p>As AI systems become more powerful and pervasive, responsible governance is no longer optional — it's a business imperative. Organizations need frameworks that enable innovation while managing risk.</p>
    <h2>Core Components</h2>
    <p>An effective AI governance framework includes: an AI ethics board, model risk management processes, bias detection and mitigation protocols, transparency requirements, and regular audits.</p>`,
    author: "ProVizient Team",
    tags: ["Governance", "Ethics"],
    createdAt: "2026-02-01",
  },
  {
    slug: "generative-ai-roi",
    title: "Measuring ROI from Generative AI Investments",
    excerpt:
      "How to quantify the business value of generative AI initiatives and build compelling business cases for stakeholders.",
    content: `<p>Generative AI investments require clear ROI frameworks. Start by identifying cost savings (automation, efficiency), revenue growth (new products, better customer experience), and risk reduction (compliance, quality).</p>
    <h2>Measurement Framework</h2>
    <p>Track both leading indicators (adoption rates, time savings) and lagging indicators (revenue impact, cost reduction). Establish baselines before deployment and measure continuously.</p>`,
    author: "ProVizient Team",
    tags: ["Generative AI", "ROI"],
    createdAt: "2026-03-10",
  },
];

export function getPublishedPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}
