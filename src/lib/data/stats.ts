export const STATS = [
  { value: 20, suffix: "+", label: "AI Technologies Mastered" },
  { value: 9, suffix: "+", label: "Specialized Training Tracks" },
  { value: 10, suffix: "+", label: "Industries We Serve" },
  { value: 100, suffix: "%", label: "Post-Training Support" },
] as const;

/**
 * COMPANY_STATS — single source of truth for all company metrics.
 * Update these values here and they propagate everywhere automatically.
 */
export const COMPANY_STATS = {
  foundedYear: "2026",
  aiExperts: "200+",
  countries: "2+",
  valueCreated: "$2B+",
  projectsDone: "500+",
  clientSatisfaction: "98%",
  clientCount: "500+",
  reviewCount: "1,200+",
  facilitiesServed: "200+",
} as const;

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
