import Link from "next/link";
import { ArrowLeftIcon } from "@/components/icons/provizient-icons";
import { Badge } from "@/components/ui/badge";
import { ConsultationCTA } from "@/components/home/consultation-cta";
import { generateSEO } from "@/lib/seo";
import { CASE_STUDIES } from "@/lib/constants";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const CASE_STUDY_CONTENT: Record<
  string,
  { challenge: string; solution: string; results: string[] }
> = {
  "global-bank-fraud-detection": {
    challenge:
      "A global financial institution was losing millions annually to sophisticated fraud schemes. Their legacy rule-based system generated high false-positive rates and couldn't adapt to evolving attack patterns.",
    solution:
      "ProVizient designed and deployed a real-time ML fraud detection platform using ensemble models, graph analytics for network fraud detection, and an adaptive learning pipeline that retrains weekly on new fraud patterns.",
    results: [
      "73% reduction in fraud losses within 12 months",
      "45% decrease in false positive rates",
      "2M+ transactions processed daily in under 50ms",
      "$18M annual savings in fraud prevention",
    ],
  },
  "healthcare-diagnostics": {
    challenge:
      "A major healthcare network needed to improve diagnostic accuracy and speed across 200+ facilities while maintaining strict HIPAA compliance and physician oversight.",
    solution:
      "We built a clinical decision support AI system integrating with existing EHR platforms, using federated learning to train models across facilities without centralizing patient data.",
    results: [
      "45% faster diagnosis times for common conditions",
      "92% physician adoption rate within 6 months",
      "30% reduction in misdiagnosis incidents",
      "Full HIPAA compliance maintained throughout",
    ],
  },
  "manufacturing-predictive": {
    challenge:
      "A manufacturing giant faced $20M+ in annual losses from unplanned equipment downtime across 50 global production facilities.",
    solution:
      "ProVizient implemented an IoT-integrated predictive maintenance platform with edge computing for real-time sensor analysis, digital twin modeling, and automated maintenance scheduling.",
    results: [
      "60% reduction in unplanned downtime",
      "$12M annual savings in maintenance costs",
      "35% extension in equipment lifespan",
      "ROI achieved within 8 months of deployment",
    ],
  },
};

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  if (!study) return {};
  return generateSEO({
    title: study.title,
    description: study.description,
    path: `/case-studies/${slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = CASE_STUDIES.find((s) => s.slug === slug);
  const content = CASE_STUDY_CONTENT[slug];

  if (!study || !content) notFound();

  return (
    <>
      <section className="pt-32 pb-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-muted hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeftIcon size={16} /> Back to Case Studies
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{study.industry}</Badge>
            <Badge variant="success">{study.result}</Badge>
          </div>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">
            {study.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{study.description}</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl space-y-12">
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold mb-4 text-primary">
              The Challenge
            </h2>
            <p className="text-muted leading-relaxed">{content.challenge}</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold mb-4 text-secondary">
              Our Solution
            </h2>
            <p className="text-muted leading-relaxed">{content.solution}</p>
          </div>
          <div className="glass-card p-8">
            <h2 className="font-display text-xl font-bold mb-4 text-accent">
              Results
            </h2>
            <ul className="space-y-3">
              {content.results.map((result) => (
                <li key={result} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  <span className="text-foreground">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ConsultationCTA />
    </>
  );
}
