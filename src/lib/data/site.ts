export const SITE_CONFIG = {
  name: "Provizient Solutions",
  tagline: "Empowering Innovation Through Artificial Intelligence",
  subtitle: "AI • ML • Generative AI • Agentic AI",
  description:
    "Provizient Solutions is an AI-first technology consulting and training company specializing in Artificial Intelligence (AI), Machine Learning (ML), Generative AI, and Agentic AI. We help organizations modernize their businesses through intelligent software solutions while empowering professionals with industry-focused training programs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.provizient.com",
  email: "info@provizient.com",
  phone: "+1 (214) 907-0925",
  phoneTel: "+12149070925",
  address: "Dallas–Fort Worth, Texas, USA",
} as const;

/**
 * SOCIAL_LINKS — single source of truth for all social/external profile URLs.
 * Update here and every footer, JSON-LD, and share link updates automatically.
 */
export const SOCIAL_LINKS = {
  linkedin: "https://linkedin.com/company/provizient",
  twitter: "https://twitter.com/provizient",
  youtube: "https://youtube.com/@provizient",
  github: "https://github.com/logeshOfficial/provizient",
  whatsapp: `https://wa.me/12149070925?text=${encodeURIComponent(
    "Hi ProVizient! I'm interested in learning more about your AI consulting and training services. Could you please share more details?"
  )}`,
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home", external: false },
  { href: "/workbench", label: "Courses", external: false },
  { href: "/services", label: "For Business", external: false },
  { href: "/about", label: "Why Provizient", external: false },
  { href: "/testimonials", label: "Testimonials", external: false },
  { href: "/blog", label: "Blogs", external: false },
] as const;

export const PLATFORM_PARTNERS = [
  "AWS",
  "Microsoft Azure",
  "Google Cloud",
  "Databricks",
  "OpenAI",
  "Python",
  "Snowflake",
  "Kubernetes",
  "Terraform",
  "LangChain",
] as const;

export const CLIENT_NAMES = [
  "Meridian Financial",
  "NovaTech Industries",
  "HealthFirst Network",
  "Global Retail Corp",
  "Summit Manufacturing",
  "Pacific Energy Group",
  "Vertex Logistics",
  "Atlas Healthcare",
  "Pinnacle BFSI",
  "Horizon Supply Chain",
] as const;

export const HERO_TYPEWRITER_WORDS = [
  "Advanced Agents",
  "Autonomous Agents",
  "Intelligent Agents",
] as const;

export const HERO_SERVICES_ORBIT = [
  { icon: "Infinity", label: "DevOps & Automation" },
  { icon: "Smartphone", label: "Mobile Development" },
  { icon: "Globe", label: "Web Development" },
  { icon: "Cloud", label: "Cloud Solutions" },
  { icon: "Brain", label: "AI/ML Solutions" },
  { icon: "ShieldCheck", label: "Testing & QA" },
] as const;

export const ABOUT_VALUES = [
  {
    key: "InnovationFirst",
    title: "Innovation First",
    description:
      "We embrace emerging technologies and cutting-edge paradigms like Agentic AI to create impactful solutions.",
  },
  {
    key: "CustomerSuccess",
    title: "Customer Success",
    description:
      "We are committed to delivering measurable business value and accelerating your digital transformation journey.",
  },
  {
    key: "PracticalLearning",
    title: "Practical Learning",
    description:
      "Our hands-on training is designed to transfer production-ready skills that apply directly to real-world projects.",
  },
  {
    key: "EngineeringExcellence",
    title: "Engineering Excellence",
    description:
      "We design robust, scalable, and secure software architectures using industry best practices and cloud-native standards.",
  },
  {
    key: "ContinuousImprovement",
    title: "Continuous Improvement",
    description:
      "We continuously evolve our methodologies, training curricula, and code assets to stay at the forefront of AI evolution.",
  },
  {
    key: "IntegrityTrust",
    title: "Integrity & Trust",
    description:
      "Responsible AI innovation, clear expectations, and honest partnership guide every consulting engagement.",
  },
] as const;
