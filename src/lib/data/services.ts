// 6 Core Services as shown in Screenshot 3
export const DEV_SERVICES = [
  {
    id: "ai-ml-solutions",
    title: "AI & ML Solutions",
    description: "Deploy intelligent models tailored to your business data.",
    icon: "Brain",
    color: "blue",
    subitems: [
      "AI Strategy & Roadmap",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "NLP Solutions"
    ]
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Harness LLMs to automate content creation and intelligence.",
    icon: "Sparkles",
    color: "purple",
    subitems: [
      "LLMs & Chatbots",
      "RAG & Knowledge AI",
      "Prompt Engineering",
      "AI Assistants",
      "Document Intelligence"
    ]
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Build autonomous agents that plan, reason, and execute.",
    icon: "Bot",
    color: "blue",
    subitems: [
      "AI Agents",
      "Multi-Agent Systems",
      "Agent Orchestration",
      "MCP & A2A Integration",
      "Autonomous Workflows"
    ]
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Power your AI applications with robust data pipelines.",
    icon: "BarChart3",
    color: "orange",
    subitems: [
      "Data Engineering",
      "Data Pipelines",
      "Analytics & BI",
      "Data Warehousing",
      "Predictive Analytics"
    ]
  },
  {
    id: "software-development",
    title: "Software Development",
    description: "Custom full-stack software built for scale and performance.",
    icon: "Code2",
    color: "green",
    subitems: [
      "Custom Applications",
      "Web & Mobile Apps",
      "API Development",
      "Cloud-Native Apps",
      "System Integration"
    ]
  },
  {
    id: "cloud-ai",
    title: "Cloud AI",
    description: "Scalable, secure cloud infrastructure for model deployment.",
    icon: "Cloud",
    color: "slate",
    subitems: [
      "AWS AI Services",
      "Azure AI Services",
      "Google Cloud AI",
      "Bedrock & OpenAI",
      "Cloud Architecture"
    ]
  }
] as const;

export const DEV_TRUST_ITEMS = [
  { icon: "RefreshCw", label: "Agile & Transparent Process" },
  { icon: "Users", label: "Experienced Tech Experts" },
  { icon: "Shield", label: "Secure & Scalable Solutions" },
  { icon: "Clock", label: "On-time Delivery Every Time" },
  { icon: "Headphones", label: "Ongoing Support & Maintenance" },
] as const;

export const WORKBENCH_CONSULTING_META: Record<
  string,
  { delivery: string; outcome: string; highlights: string[] }
> = {
  "ai-ml-solutions": {
    delivery: "Consulting & Delivery",
    outcome: "Custom Models",
    highlights: ["AI Strategy", "MLOps Pipelines", "Vision & NLP Models"],
  },
  "generative-ai": {
    delivery: "Advisory & Build",
    outcome: "Production GenAI",
    highlights: ["LLM Orchestration", "Secure RAG Systems", "AI Assistants"],
  },
  "agentic-ai": {
    delivery: "Architecture & POC",
    outcome: "Autonomous Agents",
    highlights: ["Multi-Agent Systems", "MCP Tool Harness", "Autonomous Workflows"],
  },
  "data-analytics": {
    delivery: "Engineering",
    outcome: "Clean Data Warehouse",
    highlights: ["ETL/ELT Pipelines", "Modern Data Lakes", "Predictive Analytics"],
  },
  "software-development": {
    delivery: "Full-Stack Dev",
    outcome: "Scalable Application",
    highlights: ["Custom Web/Mobile Apps", "Microservices Architecture", "API Delivery"],
  },
  "cloud-ai": {
    delivery: "Ops & Migration",
    outcome: "Optimized Cloud Ops",
    highlights: ["AWS, Azure & GCP", "Security-first Cloud", "Cost Optimization"],
  },
};

export const SERVICES = DEV_SERVICES;
