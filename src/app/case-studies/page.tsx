import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { caseStudies } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Case Studies",
  description: "Selected Patrika growth engagements across trust-based sectors.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected stories shaped around trust, positioning, and conversion."
        description="A snapshot of how Patrika combines premium execution with business-led growth systems."
      />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <Link key={study.slug} href={`/case-studies/${study.slug}`} className="card-border rounded-[2rem] p-8">
            <h2 className="font-serif text-4xl">{study.name}</h2>
            <p className="mt-4 text-foreground/72">{study.challenge}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
