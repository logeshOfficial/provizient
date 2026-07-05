import {
  SvcAIMLIcon,
  SvcGenAIIcon,
  SvcAgenticAIIcon,
  TrnRAGKnowledgeIcon,
  SvcCloudAIIcon,
  SvcSoftwareDevIcon,
  SvcDataAnalyticsIcon,
  UsersIcon,
  CheckCircleIcon,
} from "@/components/icons/provizient-icons";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { ServicesHero } from "@/components/services/services-hero";
import { IndustriesServed } from "@/components/home/industries-served";
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
    icon: SvcAIMLIcon,
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
    icon: SvcGenAIIcon,
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
    icon: SvcAgenticAIIcon,
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
    icon: TrnRAGKnowledgeIcon,
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
    icon: SvcCloudAIIcon,
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
    icon: SvcSoftwareDevIcon,
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
    icon: SvcDataAnalyticsIcon,
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
    icon: UsersIcon,
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

      <section className="py-14 sm:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Section Heading */}
          <div className="text-center mb-10 sm:mb-14 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              AI &amp; Software Consulting
            </h2>
            <p className="mt-3 text-base sm:text-lg text-muted">
              We help organizations design, build, and deploy intelligent enterprise solutions.
            </p>
            <div className="section-title-line mt-4" />
          </div>

          {/* Grid of 8 service cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
            {DETAILED_SERVICES.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`rounded-2xl p-6 sm:p-8 scroll-mt-24 border border-card-border ${COLOR_MAP[service.color] || "bg-white"}`}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-white shadow-sm border border-card-border flex items-center justify-center mb-4 sm:mb-5 shrink-0">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="font-display text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-foreground">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted leading-relaxed text-sm mb-4 sm:mb-6">
                    {service.description}
                  </p>
                  
                  {/* Detailed Offerings Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 border-t border-slate-900/5 pt-4">
                    {service.subitems.map((subitem) => (
                      <div key={subitem} className="flex items-start gap-2 text-xs font-semibold text-foreground/80">
                        <CheckCircleIcon size={13} className="text-primary mt-0.5 shrink-0" />
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

      <IndustriesServed />

      <ConsultationCTA />
    </>
  );
}
