import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { industries } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Industries",
  description: "Explore Patrika's focus sectors across healthcare, education, hospitality, and premium local businesses.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Specialized for sectors where buyers need trust before they commit."
        description="We focus on categories where authority, credibility, and clarity have a direct effect on demand generation."
      />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        {industries.map((industry) => (
          <Link key={industry.slug} href={`/industries/${industry.slug}`} className="card-border rounded-[2rem] p-8">
            <h2 className="font-serif text-4xl">{industry.name}</h2>
            <p className="mt-4 text-foreground/72">{industry.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
