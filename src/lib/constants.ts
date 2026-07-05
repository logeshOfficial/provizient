export const SITE_CONFIG = {
  name: "Provizient Solutions",
  tagline: "Empowering Innovation Through Artificial Intelligence",
  subtitle: "AI • ML • Generative AI • Agentic AI",
  description:
    "Provizient Solutions is an AI-first technology consulting and training company specializing in Artificial Intelligence (AI), Machine Learning (ML), Generative AI, and Agentic AI. We help organizations modernize their businesses through intelligent software solutions while empowering professionals with industry-focused training programs.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.provizient.com",
  email: "info@provizient.com",
  phone: "+1 (214) 907-0925",
  phoneTel: "+14691234567",
  address: "Dallas–Fort Worth, Texas, USA",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/workbench", label: "Courses" },
  { href: "/services", label: "For Business" },
  { href: "/about", label: "Why Provizient" },
  { href: "/blog", label: "Resources" },
] as const;

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

// 9 Training tracks requested by the user
export const TRAINING_PROGRAMS = [
  {
    id: "ai-foundations",
    title: "Artificial Intelligence Foundations",
    description: "Build a strong foundation in classical AI, Machine Learning, and Deep Learning.",
    icon: "Brain",
    color: "yellow",
    topics: [
      "Introduction to AI",
      "Machine Learning Fundamentals",
      "Deep Learning",
      "Neural Networks",
      "Computer Vision",
      "Natural Language Processing"
    ]
  },
  {
    id: "generative-ai-training",
    title: "Generative AI",
    description: "Master Large Language Models (LLMs), prompt engineering, and fine-tuning techniques.",
    icon: "Sparkles",
    color: "purple",
    topics: [
      "Large Language Models (LLMs)",
      "Transformers",
      "Prompt Engineering",
      "Fine-Tuning",
      "AI Safety",
      "Model Evaluation"
    ]
  },
  {
    id: "agentic-ai-training",
    title: "Agentic AI",
    description: "Design and build autonomous AI agents, multi-agent orchestrations, and planning frameworks.",
    icon: "Bot",
    color: "blue",
    topics: [
      "AI Agents",
      "ReAct Framework",
      "Agent Design Patterns",
      "Multi-Agent Systems",
      "Agent Memory",
      "Planning & Reasoning",
      "Autonomous AI Applications"
    ]
  },
  {
    id: "rag-training",
    title: "Retrieval-Augmented Generation (RAG)",
    description: "Learn RAG architectures, GraphRAG, embedding models, and vector database optimization.",
    icon: "Search",
    color: "green",
    topics: [
      "RAG Architecture",
      "GraphRAG",
      "Knowledge Graphs",
      "Embedding Models",
      "Vector Databases",
      "Semantic Search",
      "Hybrid Search"
    ]
  },
  {
    id: "ai-frameworks",
    title: "AI Development Frameworks",
    description: "Build applications using modern orchestration tools like LangChain, CrewAI, and AutoGen.",
    icon: "Code2",
    color: "blue",
    topics: [
      "LangChain",
      "LangGraph",
      "Microsoft Agent Framework",
      "Semantic Kernel",
      "CrewAI",
      "AutoGen",
      "PydanticAI"
    ]
  },
  {
    id: "ai-protocols",
    title: "AI Communication Protocols",
    description: "Master the Model Context Protocol (MCP) and agent-to-agent (A2A) orchestration protocols.",
    icon: "Terminal",
    color: "slate",
    topics: [
      "Model Context Protocol (MCP)",
      "Agent-to-Agent (A2A)",
      "AgentSkills",
      "AI Tool Integration",
      "AI Workflow Orchestration"
    ]
  },
  {
    id: "cloud-ai-platforms",
    title: "Cloud AI Platforms",
    description: "Deploy production models on Bedrock, Vertex AI, and Azure OpenAI.",
    icon: "Cloud",
    color: "orange",
    topics: [
      "Amazon Bedrock",
      "Azure AI Foundry",
      "Azure OpenAI",
      "Google Vertex AI",
      "OpenAI APIs"
    ]
  },
  {
    id: "programming-ai",
    title: "Programming",
    description: "Master the core programming languages and toolchains required to develop AI applications.",
    icon: "Terminal",
    color: "blue",
    topics: [
      "Python for AI",
      "FastAPI",
      "REST APIs",
      "Docker",
      "Kubernetes",
      "Git",
      "SQL",
      "NoSQL"
    ]
  },
  {
    id: "data-engineering-ai",
    title: "Data Engineering",
    description: "Design and implement reliable, scalable data pipelines to power enterprise AI models.",
    icon: "BarChart3",
    color: "orange",
    topics: [
      "ETL Pipelines",
      "Apache Spark",
      "Data Warehousing",
      "Data Modeling",
      "Data Governance"
    ]
  }
] as const;

export const HANDS_ON_PROJECTS = [
  { title: "Enterprise AI Chatbot", description: "Secure, context-aware chatbot integrated with corporate directories." },
  { title: "RAG Applications", description: "Document search and Q&A engine powered by vector indexing & semantic search." },
  { title: "Multi-Agent Systems", description: "Collaborative agent clusters solving complex software engineering tasks." },
  { title: "AI Document Assistant", description: "Automated parsing, verification, and summary of complex PDF reports." },
  { title: "AI Coding Assistant", description: "Tailored code generator and refactor engine for specific codebases." },
  { title: "Voice AI", description: "Low-latency conversational voice agent for customer service operations." },
  { title: "AI Automation Platform", description: "Autonomous workflow system triggered by webhooks or natural language." },
  { title: "Production AI Deployment", description: "Containerized, autoscaling model serving on AWS/Azure Kubernetes." }
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
  "ai-foundations": {
    duration: "6–8 weeks",
    level: "Beginner",
    topics: ["Introduction to AI", "Machine Learning", "Neural Networks"],
  },
  "generative-ai-training": {
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["LLMs & Transformers", "Prompt Engineering", "Fine-Tuning"],
  },
  "agentic-ai-training": {
    duration: "8 weeks",
    level: "Advanced",
    topics: ["Agent design patterns", "Multi-Agent systems", "Autonomous workflows"],
  },
  "rag-training": {
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["Vector databases", "GraphRAG", "Hybrid Search"],
  },
  "ai-frameworks": {
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["LangChain & LangGraph", "CrewAI & AutoGen", "PydanticAI"],
  },
  "ai-protocols": {
    duration: "4 weeks",
    level: "Advanced",
    topics: ["Model Context Protocol", "A2A Protocol", "Tool Integration"],
  },
  "cloud-ai-platforms": {
    duration: "6 weeks",
    level: "Intermediate",
    topics: ["Amazon Bedrock", "Azure OpenAI", "Vertex AI"],
  },
  "programming-ai": {
    duration: "8 weeks",
    level: "Beginner → Intermediate",
    topics: ["Python for AI", "FastAPI & REST APIs", "Docker & Kubernetes"],
  },
  "data-engineering-ai": {
    duration: "8 weeks",
    level: "Intermediate",
    topics: ["ETL Pipelines", "Apache Spark", "Data Modeling"],
  },
};

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

// 10 Industries We Serve requested by the user
export const INDUSTRIES = [
  {
    title: "Manufacturing",
    description: "Predictive maintenance, quality control automation, and supply chain optimizations.",
    icon: "Factory",
  },
  {
    title: "Healthcare",
    description: "Clinical AI decision support, medical imaging analysis, and care delivery operations.",
    icon: "HeartPulse",
  },
  {
    title: "Financial Services",
    description: "Risk modeling, automated compliance, and real-time fraud detection systems.",
    icon: "Landmark",
  },
  {
    title: "Retail",
    description: "Demand forecasting, personalization engines, and inventory optimization.",
    icon: "ShoppingCart",
  },
  {
    title: "Insurance",
    description: "Automated underwriting, claims processing AI, and risk assessment systems.",
    icon: "ShieldCheck",
  },
  {
    title: "Education",
    description: "Personalized learning platforms, student analytics, and admin workflow automations.",
    icon: "GraduationCap",
  },
  {
    title: "Government",
    description: "Citizen service automation, secure policy analysis, and resource optimization.",
    icon: "Building2",
  },
  {
    title: "Energy & Utilities",
    description: "Smart grid analytics, asset performance tracking, and load forecasting.",
    icon: "Zap",
  },
  {
    title: "Logistics",
    description: "Route optimization, fleet management AI, and autonomous warehouse coordination.",
    icon: "Truck",
  },
  {
    title: "Technology",
    description: "Enterprise software modernization, AI agent integrations, and scalable cloud MLOps.",
    icon: "Laptop",
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
