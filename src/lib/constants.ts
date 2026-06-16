export const SITE_CONFIG = {
  name: "ProVizient",
  tagline: "Transforming Businesses Through Intelligent AI Solutions.",
  description:
    "ProVizient is a premium enterprise AI consulting firm helping organizations design, build, and deploy intelligent solutions that drive measurable business outcomes.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://provizient.com",
  email: "contact@provizient.com",
  phone: "+1 (555) 123-4567",
  address: "100 Innovation Drive, Suite 500, San Francisco, CA 94105",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/ai-solutions", label: "AI Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "ai-strategy",
    title: "AI Strategy Consulting",
    description:
      "Develop comprehensive AI roadmaps aligned with your business objectives, risk tolerance, and competitive landscape.",
    icon: "Compass",
    features: [
      "AI maturity assessment",
      "Strategic roadmap development",
      "ROI modeling & business case",
      "Governance framework design",
    ],
  },
  {
    id: "custom-ai",
    title: "Custom AI Applications",
    description:
      "Build bespoke AI-powered applications tailored to your unique workflows, data assets, and operational requirements.",
    icon: "Code2",
    features: [
      "End-to-end development",
      "ML model training & deployment",
      "Scalable cloud architecture",
      "Continuous optimization",
    ],
  },
  {
    id: "automation",
    title: "Intelligent Automation",
    description:
      "Streamline operations with intelligent process automation that reduces costs while improving accuracy and speed.",
    icon: "Zap",
    features: [
      "Process mining & analysis",
      "RPA + AI integration",
      "Workflow orchestration",
      "Performance monitoring",
    ],
  },
  {
    id: "ai-agents",
    title: "AI Agent Solutions",
    description:
      "Deploy autonomous AI agents that handle complex tasks, customer interactions, and decision-making at scale.",
    icon: "Bot",
    features: [
      "Multi-agent orchestration",
      "Conversational AI agents",
      "Task automation agents",
      "Human-in-the-loop design",
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI Solutions",
    description:
      "Harness the power of generative AI for content creation, code generation, and creative problem-solving.",
    icon: "Sparkles",
    features: [
      "LLM integration & fine-tuning",
      "RAG pipeline development",
      "Content generation systems",
      "Prompt engineering",
    ],
  },
  {
    id: "integration",
    title: "AI Integration Services",
    description:
      "Seamlessly integrate AI capabilities into your existing technology stack, ERP, CRM, and data platforms.",
    icon: "Plug",
    features: [
      "API & microservices design",
      "Legacy system modernization",
      "Data pipeline integration",
      "Security & compliance",
    ],
  },
] as const;

export const AI_SOLUTIONS = [
  {
    title: "Enterprise Knowledge AI",
    description:
      "Transform organizational knowledge into intelligent, searchable, and actionable insights.",
    image: "/images/solutions/knowledge-ai.jpg",
  },
  {
    title: "Predictive Analytics Engine",
    description:
      "Anticipate market trends, customer behavior, and operational risks with advanced predictive models.",
    image: "/images/solutions/predictive-analytics.jpg",
  },
  {
    title: "Intelligent Document Processing",
    description:
      "Automate document classification, extraction, and processing with 99%+ accuracy.",
    image: "/images/solutions/document-processing.jpg",
  },
  {
    title: "AI-Powered Customer Intelligence",
    description:
      "Deliver hyper-personalized experiences through real-time customer behavior analysis.",
    image: "/images/solutions/customer-intelligence.jpg",
  },
] as const;

export const INDUSTRIES = [
  {
    title: "Financial Services",
    description: "Risk modeling, fraud detection, and algorithmic trading solutions.",
    icon: "Landmark",
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Clinical decision support, drug discovery, and patient care optimization.",
    icon: "HeartPulse",
  },
  {
    title: "Manufacturing",
    description: "Predictive maintenance, quality control, and supply chain optimization.",
    icon: "Factory",
  },
  {
    title: "Retail & E-Commerce",
    description: "Demand forecasting, personalization, and inventory management.",
    icon: "ShoppingCart",
  },
  {
    title: "Energy & Utilities",
    description: "Grid optimization, asset management, and sustainability analytics.",
    icon: "Zap",
  },
  {
    title: "Government & Public Sector",
    description: "Citizen services automation, policy analysis, and resource allocation.",
    icon: "Building2",
  },
] as const;

export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We analyze your business landscape, data maturity, and AI readiness to identify high-impact opportunities.",
  },
  {
    step: 2,
    title: "Strategy & Roadmap",
    description:
      "Our experts craft a tailored AI strategy with clear milestones, KPIs, and governance frameworks.",
  },
  {
    step: 3,
    title: "Design & Prototype",
    description:
      "Rapid prototyping and proof-of-concept development to validate solutions before full-scale investment.",
  },
  {
    step: 4,
    title: "Build & Deploy",
    description:
      "Enterprise-grade development with rigorous testing, security audits, and seamless deployment.",
  },
  {
    step: 5,
    title: "Optimize & Scale",
    description:
      "Continuous monitoring, model retraining, and performance optimization to maximize long-term value.",
  },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Enterprise Clients" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 500, suffix: "+", label: "AI Projects Delivered" },
  { value: 40, suffix: "%", label: "Average ROI Increase" },
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
