import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.ADMIN_EMAIL || "admin@provizient.com";
  const password = process.env.ADMIN_PASSWORD || "admin123";

  const hashedPassword = await bcrypt.hash(password, 12);

  await prisma.user.upsert({
    where: { email },
    update: {},
    create: {
      email,
      password: hashedPassword,
      name: "Admin",
      role: "ADMIN",
    },
  });

  const blogPosts = [
    {
      title: "Enterprise AI Adoption in 2026: Trends & Strategies",
      slug: "enterprise-ai-adoption-2026",
      excerpt:
        "Explore the key trends shaping enterprise AI adoption and how leading organizations are building competitive advantages.",
      content: `<p>The enterprise AI landscape in 2026 is characterized by a shift from experimentation to scaled production deployments.</p>`,
      author: "ProVizient Team",
      tags: ["AI Strategy", "Enterprise"],
      published: true,
    },
    {
      title: "Building a Responsible AI Governance Framework",
      slug: "responsible-ai-governance",
      excerpt:
        "A practical guide to establishing AI governance that balances innovation with ethics, compliance, and risk management.",
      content: `<p>As AI systems become more powerful, responsible governance is a business imperative.</p>`,
      author: "ProVizient Team",
      tags: ["Governance", "Ethics"],
      published: true,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.upsert({
      where: { slug: post.slug },
      update: {},
      create: post,
    });
  }

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO",
      company: "Meridian Financial Group",
      content:
        "ProVizient transformed our approach to AI. Their strategic guidance delivered a 40% improvement in fraud detection within six months.",
      rating: 5,
      featured: true,
    },
    {
      name: "James Rodriguez",
      role: "VP of Operations",
      company: "NovaTech Industries",
      content:
        "The team's expertise in intelligent automation helped us reduce operational costs by 35% while improving accuracy.",
      rating: 5,
      featured: true,
    },
  ];

  for (const t of testimonials) {
    const existing = await prisma.testimonial.findFirst({
      where: { name: t.name, company: t.company },
    });
    if (!existing) {
      await prisma.testimonial.create({ data: t });
    }
  }

  console.log("Seed completed successfully");
  console.log(`Admin login: ${email} / ${password}`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
