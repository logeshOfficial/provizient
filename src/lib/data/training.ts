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

export const AI_SOLUTIONS = TRAINING_PROGRAMS;
