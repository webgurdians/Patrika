import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/site-data";

export async function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((entry) => entry.slug === slug);
  if (!industry) return {};

  return buildMetadata({
    title: `${industry.name} Marketing`,
    description: industry.summary,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industries.find((entry) => entry.slug === slug);
  if (!industry) notFound();

  return (
    <>
      <PageHero eyebrow="Industry Focus" title={industry.name} description={industry.summary} />
      <section className="section-shell grid gap-6 pb-20 md:grid-cols-3">
        {industry.points.map((point) => (
          <div key={point} className="card-border rounded-[1.8rem] p-6">
            <p className="font-serif text-3xl">{point}</p>
          </div>
        ))}
      </section>
    </>
  );
}
