import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { growthSystemStages, servicePillars } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Growth Systems & Services",
  description: "Patrika connects discovery, trust, conversion, CRM, acquisition, AI visibility, and measurement into one growth operating system.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Growth System"
        title="Marketing should not stop at lead generation."
        description="Patrika connects discovery, trust, conversion, pipeline, revenue, and measurement so every specialist capability contributes to the same commercial system."
      />

      <section className="section-shell pb-18">
        <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {growthSystemStages.map((stage, index) => (
            <div key={stage.name} className="card-border rounded-[1.6rem] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
              <h2 className="mt-6 font-serif text-2xl">{stage.name}</h2>
              <p className="mt-3 text-sm leading-6 text-foreground/65">{stage.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pb-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {servicePillars.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="card-border group rounded-[2rem] p-8">
              <h2 className="font-serif text-4xl">{service.name}</h2>
              <p className="mt-4 leading-7 text-foreground/72">{service.summary}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold">
                Explore capability
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/growth-diagnostic">Start With A Growth Diagnostic</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
