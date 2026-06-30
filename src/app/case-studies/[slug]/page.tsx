import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) return {};

  return buildMetadata({
    title: `${study.name} Case Study`,
    description: study.outcome,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = caseStudies.find((entry) => entry.slug === slug);
  if (!study) notFound();

  return (
    <>
      <PageHero eyebrow="Case Study" title={study.name} description={study.outcome} />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-3">
        <div className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">Challenge</h2>
          <p className="mt-4 text-foreground/72">{study.challenge}</p>
        </div>
        <div className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">Solution</h2>
          <p className="mt-4 text-foreground/72">{study.solution}</p>
        </div>
        <div className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">Outcome</h2>
          <p className="mt-4 text-foreground/72">{study.outcome}</p>
        </div>
      </section>
    </>
  );
}
