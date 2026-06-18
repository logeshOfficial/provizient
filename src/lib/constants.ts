export const SITE_CONFIG = {
  name: "ProVizient",
  tagline: "Empowering Careers. Elevating Futures.",
  subtitle: "AI Training | Software Development | Consulting",
  description:
    "ProVizient delivers industry-aligned AI training, custom software development, and enterprise consulting to help you learn, build, and grow.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://provizient.com",
  email: "info@ProVizient.com",
  phone: "972 439 0452",
  phoneTel: "+19724390452",
  address: "12205 Settlers Drive, Frisco, TX 75035",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/workbench", label: "Courses" },
  { href: "/services", label: "For Business" },
  { href: "/about", label: "Why ProVizient" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "About Us" },
] as const;

export const DEV_SERVICES = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description:
      "End-to-end development of scalable, secure applications tailored to your business workflows and goals.",
    icon: "Code2",
    color: "blue",
  },
  {
    id: "product-engineering",
    title: "Product Engineering",
    description:
      "From concept to launch — we engineer digital products that users love and businesses rely on.",
    icon: "PieChart",
    color: "purple",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description:
      "Migrate, modernize, and optimize your infrastructure on AWS, Azure, and Google Cloud.",
    icon: "Cloud",
    color: "green",
  },
  {
    id: "devops",
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, infrastructure as code, and automation that accelerates delivery.",
    icon: "Settings",
    color: "orange",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    description:
      "Comprehensive testing strategies ensuring reliability, performance, and security.",
    icon: "ShieldCheck",
    color: "slate",
  },
  {
    id: "consulting",
    title: "IT Consulting",
    description:
      "Strategic technology guidance to align IT investments with business outcomes.",
    icon: "Users",
    color: "blue",
  },
] as const;

export const TRAINING_PROGRAMS = [
  {
    id: "genai",
    title: "GenAI",
    description:
      "Learn Generative AI concepts and build real-world applications using leading LLMs and tools.",
    icon: "Sparkles",
    color: "purple",
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description:
      "Build intelligent AI agents that plan, reason, and act autonomously to solve complex problems.",
    icon: "Bot",
    color: "blue",
  },
  {
    id: "rag",
    title: "RAG",
    description:
      "Master Retrieval Augmented Generation to build smarter, context-aware AI applications.",
    icon: "Search",
    color: "green",
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    description:
      "Learn machine learning basics to advanced models and build solutions that make an impact.",
    icon: "Brain",
    color: "yellow",
  },
  {
    id: "python",
    title: "Python",
    description:
      "From fundamentals to advanced programming — build strong coding skills for any career.",
    icon: "Terminal",
    color: "blue",
  },
  {
    id: "data-analyst",
    title: "Data Analyst",
    description:
      "Analyze data, uncover insights, and create impactful dashboards to drive better decisions.",
    icon: "BarChart3",
    color: "orange",
  },
] as const;

export const DEV_TRUST_ITEMS = [
  { icon: "RefreshCw", label: "Agile & Transparent Process" },
  { icon: "Users", label: "Experienced Tech Experts" },
  { icon: "Shield", label: "Secure & Scalable Solutions" },
  { icon: "Clock", label: "On-time Delivery Every Time" },
  { icon: "Headphones", label: "Ongoing Support & Maintenance" },
] as const;

export const TRAINING_TRUST_ITEMS = [
  { icon: "Award", label: "Industry Expert Trainers" },
  { icon: "Handshake", label: "Hands-on Projects" },
  { icon: "BadgeCheck", label: "Certification" },
  { icon: "Briefcase", label: "Career Support" },
] as const;

export const WORKBENCH_COURSE_META: Record<
  string,
  { duration: string; level: string; topics: string[] }
> = {
  genai: {
    duration: "6–8 weeks",
    level: "Intermediate",
    topics: ["LLM fundamentals", "Prompt engineering", "Real-world apps"],
  },
  "agentic-ai": {
    duration: "8 weeks",
    level: "Advanced",
    topics: ["Agent architecture", "Tool use & planning", "Autonomous workflows"],
  },
  rag: {
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["Vector databases", "Embeddings", "Context-aware AI"],
  },
  "ai-ml": {
    duration: "10 weeks",
    level: "Beginner → Advanced",
    topics: ["Supervised learning", "Deep learning", "Model deployment"],
  },
  python: {
    duration: "8 weeks",
    level: "All levels",
    topics: ["Core syntax", "APIs & automation", "Data scripting"],
  },
  "data-analyst": {
    duration: "8 weeks",
    level: "Beginner",
    topics: ["SQL & analytics", "Dashboards", "Business insights"],
  },
};

export const WORKBENCH_CONSULTING_META: Record<
  string,
  { delivery: string; outcome: string; highlights: string[] }
> = {
  "custom-software": {
    delivery: "Agile sprints",
    outcome: "Scalable apps",
    highlights: ["Full-stack delivery", "Cloud-native", "Security-first"],
  },
  "product-engineering": {
    delivery: "End-to-end",
    outcome: "Market-ready products",
    highlights: ["MVP to scale", "UX-focused", "Continuous iteration"],
  },
  cloud: {
    delivery: "Migration & ops",
    outcome: "Modern infrastructure",
    highlights: ["AWS · Azure · GCP", "Cost optimization", "High availability"],
  },
  devops: {
    delivery: "CI/CD pipelines",
    outcome: "Faster releases",
    highlights: ["IaC automation", "Monitoring", "Zero-downtime deploys"],
  },
  qa: {
    delivery: "Test automation",
    outcome: "Reliable software",
    highlights: ["Performance testing", "Security audits", "Regression suites"],
  },
  consulting: {
    delivery: "Strategic advisory",
    outcome: "Aligned IT roadmap",
    highlights: ["Architecture review", "Tech stack planning", "Team enablement"],
  },
};

export const HERO_TYPEWRITER_WORDS = [
  "Advanced Agents",
  "Autonomous Agents",
  "Intelligent Agents",
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

export const HERO_SERVICES_ORBIT = [
  { icon: "Infinity", label: "DevOps & Automation" },
  { icon: "Smartphone", label: "Mobile Development" },
  { icon: "Globe", label: "Web Development" },
  { icon: "Cloud", label: "Cloud Solutions" },
  { icon: "Brain", label: "AI/ML Solutions" },
  { icon: "ShieldCheck", label: "Testing & QA" },
] as const;

export const SERVICES = DEV_SERVICES;
export const AI_SOLUTIONS = TRAINING_PROGRAMS;

export const INDUSTRIES = [
  {
    title: "Financial Services",
    description: "Risk modeling, fraud detection, and digital transformation.",
    icon: "Landmark",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Clinical AI, diagnostics, and patient care optimization.",
    icon: "HeartPulse",
  },
  {
    title: "Manufacturing",
    description: "Predictive maintenance, quality control, and supply chain.",
    icon: "Factory",
  },
  {
    title: "Retail & E-Commerce",
    description: "Personalization, demand forecasting, and inventory.",
    icon: "ShoppingCart",
  },
  {
    title: "Energy & Utilities",
    description: "Grid optimization and sustainability analytics.",
    icon: "Zap",
  },
  {
    title: "Government & Public Sector",
    description: "Citizen services automation and policy analysis.",
    icon: "Building2",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discover & Strategy",
    description:
      "Align business goals, assess opportunities, and define a clear roadmap.",
  },
  {
    step: 2,
    title: "Design & Prototype",
    description:
      "Build pilots, prove concepts, and refine features before full investment.",
  },
  {
    step: 3,
    title: "Build & Deploy",
    description:
      "Enterprise-grade development with rigorous testing and seamless deployment.",
  },
  {
    step: 4,
    title: "Optimize & Scale",
    description:
      "Continuous monitoring and optimization to maximize long-term value.",
  },
] as const;

export const STATS = [
  { value: 37, suffix: "+", label: "Enterprise Clients" },
  { value: 72, suffix: "+", label: "AI Use Cases Delivered" },
  { value: 50, suffix: "+", label: "Active Projects" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
] as const;

export const CASE_STUDIES = [
  {
    slug: "global-bank-fraud-detection",
    title: "Global Bank: AI-Powered Fraud Detection",
    industry: "Financial Services",
    result: "73% reduction in fraud losses",
    description:
      "Implemented real-time ML fraud detection system processing 2M+ transactions daily.",
  },
  {
    slug: "healthcare-diagnostics",
    title: "Healthcare Network: Diagnostic AI Assistant",
    industry: "Healthcare",
    result: "45% faster diagnosis times",
    description:
      "Deployed clinical decision support AI across 200+ facilities improving patient outcomes.",
  },
  {
    slug: "manufacturing-predictive",
    title: "Manufacturing Giant: Predictive Maintenance",
    industry: "Manufacturing",
    result: "$12M annual savings",
    description:
      "Built IoT-integrated predictive maintenance platform reducing unplanned downtime by 60%.",
  },
] as const;
