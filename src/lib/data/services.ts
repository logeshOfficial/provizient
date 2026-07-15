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

/**
 * DETAILED_SERVICES — extended service list used on the /services page.
 * Includes 2 additional entries (RAG Systems, AI Adoption) not in DEV_SERVICES,
 * plus richer subitems for the full-page service cards.
 */
export const DETAILED_SERVICES = [
  {
    id: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    description: "Establish a robust foundation and roadmap for deploying enterprise-grade artificial intelligence.",
    icon: "Brain",
    color: "blue",
    subitems: [
      "Enterprise AI Strategy",
      "AI Roadmap Development",
      "AI Solution Architecture",
      "AI Modernization",
      "AI Product Development",
    ],
  },
  {
    id: "generative-ai",
    title: "Generative AI",
    description: "Leverage advanced language models to drive conversational intelligence and semantic search.",
    icon: "Sparkles",
    color: "purple",
    subitems: [
      "Enterprise Chatbots",
      "AI Assistants",
      "Knowledge Assistants",
      "Document Intelligence",
      "AI Search",
      "Semantic Search",
      "Prompt Engineering",
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Deploy autonomous systems that plan, collaborate, and execute complex workflows.",
    icon: "Bot",
    color: "blue",
    subitems: [
      "AI Agents",
      "Multi-Agent Systems",
      "Agent Orchestration",
      "Agent Harness",
      "MCP Integration",
      "A2A Protocol Integration",
      "AgentSkills Development",
      "Autonomous Workflow Automation",
    ],
  },
  {
    id: "rag-systems",
    title: "RAG & Knowledge Systems",
    description: "Connect generative models safely to proprietary enterprise knowledge bases and vector indexes.",
    icon: "FileSearch",
    color: "green",
    subitems: [
      "Retrieval-Augmented Generation (RAG)",
      "GraphRAG",
      "Enterprise Knowledge Bases",
      "Vector Databases",
      "Enterprise Search",
      "Knowledge Graph Solutions",
    ],
  },
  {
    id: "cloud-ai",
    title: "Cloud AI",
    description: "Scale, optimize, and host models securely on major cloud service providers.",
    icon: "Cloud",
    color: "slate",
    subitems: [
      "AWS AI Solutions",
      "Microsoft Azure AI",
      "Google Cloud AI",
      "Bedrock Solutions",
      "Azure OpenAI",
      "OpenAI Integration",
    ],
  },
  {
    id: "software-dev",
    title: "Software Development",
    description: "Build reliable, high-performance custom web, mobile, and system applications.",
    icon: "Code2",
    color: "green",
    subitems: [
      "Custom Software Development",
      "Web Applications",
      "Enterprise Applications",
      "API Development",
      "Cloud-Native Applications",
      "Microservices Architecture",
      "System Integration",
    ],
  },
  {
    id: "data-analytics",
    title: "Data & Analytics",
    description: "Clean, engineer, and orchestrate datasets to fuel dashboards, analytics, and models.",
    icon: "BarChart3",
    color: "orange",
    subitems: [
      "Data Engineering",
      "Data Pipelines",
      "Business Intelligence",
      "Data Lakes",
      "Data Warehouses",
      "Predictive Analytics",
    ],
  },
  {
    id: "ai-adoption",
    title: "AI Adoption Consulting",
    description: "Assess AI readiness, govern models responsibly, and review architecture standards.",
    icon: "Users",
    color: "blue",
    subitems: [
      "AI Readiness Assessment",
      "Technology Consulting",
      "Architecture Review",
      "AI Governance",
      "Proof of Concept (POC)",
      "Enterprise AI Transformation",
    ],
  },
] as const;
