import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
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

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="card-border rounded-[2rem] p-8">
      <h2 className="font-serif text-3xl">{title}</h2>
      <div className="mt-6 space-y-4">
        {items.map((item) => (
          <div key={item} className="flex gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
            <p className="text-sm leading-6 text-foreground/72">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
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
      <PageHero eyebrow="Capability" title={service.name} description={service.summary} />

      <section className="section-shell grid gap-6 pb-12 lg:grid-cols-2">
        <div className="card-border rounded-[2rem] p-8">
          <p className="gold-label text-xs">The Problem</p>
          <h2 className="mt-4 font-serif text-3xl">Where growth breaks</h2>
          <p className="mt-4 leading-7 text-foreground/72">{service.challenge}</p>
        </div>
        <div className="card-border rounded-[2rem] p-8">
          <p className="gold-label text-xs">The Outcome</p>
          <h2 className="mt-4 font-serif text-3xl">What changes</h2>
          <p className="mt-4 leading-7 text-foreground/72">{service.outcome}</p>
        </div>
      </section>

      <section className="section-shell grid gap-6 pb-12 lg:grid-cols-2">
        <DetailList title="Who this is for" items={service.forWho} />
        <DetailList title="What we examine" items={service.examine} />
        <DetailList title="What we build" items={service.build} />
        <DetailList title="What we measure" items={service.measure} />
      </section>

      <section className="section-shell pb-20">
        <div className="card-border rounded-[2.2rem] p-8 sm:p-10">
          <p className="gold-label text-xs">Engagement Model</p>
          <h2 className="mt-4 font-serif text-4xl">From diagnosis to measurable improvement.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-4">
            {service.engagement.map((step, index) => (
              <div key={step} className="rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5">
                <p className="text-xs uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
                <p className="mt-5 text-sm leading-6 text-foreground/75">{step}</p>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/growth-diagnostic">Start With A Growth Diagnostic</Link>
            </Button>
            <Button variant="secondary" asChild>
              <Link href="/case-studies">See Related Work</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
