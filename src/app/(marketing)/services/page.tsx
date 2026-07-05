import {
  Brain,
  Sparkles,
  Bot,
  Search,
  Cloud,
  Code2,
  BarChart3,
  Users,
  CheckCircle,
} from "lucide-react";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { ServicesHero } from "@/components/services/services-hero";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "AI & Software Consulting Services",
  description:
    "We help organizations design, build, and deploy intelligent enterprise solutions. Specialized in Agentic AI, Generative AI, RAG, custom software development and data engineering.",
  path: "/services",
});

const DETAILED_SERVICES = [
  {
    id: "ai-solutions",
    title: "Artificial Intelligence Solutions",
    description: "Establish a robust foundation and roadmap for deploying enterprise-grade artificial intelligence.",
    icon: Brain,
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
    icon: Sparkles,
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
    icon: Bot,
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
    icon: Search,
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
    icon: Cloud,
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
    icon: Code2,
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
    icon: BarChart3,
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
    icon: Users,
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
];

const COLOR_MAP: Record<string, string> = {
  purple: "service-card-purple",
  blue: "service-card-blue",
  green: "service-card-green",
  orange: "service-card-orange",
  slate: "service-card-slate",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Page Section Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              AI &amp; Software Consulting
            </h2>
            <p className="mt-4 text-lg text-muted">
              We help organizations design, build, and deploy intelligent enterprise solutions.
            </p>
            <div className="section-title-line mt-4" />
          </div>

          {/* Grid of 8 services cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {DETAILED_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`rounded-2xl p-8 scroll-mt-24 border border-card-border ${COLOR_MAP[service.color] || "bg-white"}`}
                >
                  <div className="w-14 h-14 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 border border-card-border">
                    <Icon size={28} className="text-primary" />
                  </div>
                  
                  <h3 className="font-display text-xl font-bold mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed text-sm mb-6">
                    {service.description}
                  </p>
                  
                  {/* Detailed Offerings Grid */}
                  <div className="grid sm:grid-cols-2 gap-3 border-t border-slate-900/5 pt-4">
                    {service.subitems.map((subitem) => (
                      <div key={subitem} className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                        <CheckCircle size={14} className="text-primary mt-0.5 shrink-0" />
                        <span>{subitem}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
