import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { servicePillars } from "@/lib/site-data";

export async function generateStaticParams() {
  return servicePillars.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicePillars.find((entry) => entry.slug === slug);
  if (!service) return {};

  return buildMetadata({
    title: service.name,
    description: service.summary,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = servicePillars.find((entry) => entry.slug === slug);
  if (!service) notFound();

  return (
    <>
      <PageHero eyebrow="Service" title={service.name} description={service.summary} />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        <div className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">Challenge</h2>
          <p className="mt-4 text-foreground/72">{service.challenge}</p>
        </div>
        <div className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-3xl">Outcome</h2>
          <p className="mt-4 text-foreground/72">{service.outcome}</p>
        </div>
      </section>
    </>
  );
}
