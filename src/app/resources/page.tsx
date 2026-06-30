import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";

const resources = [
  "West Bengal clinic growth checklist",
  "Admissions funnel audit framework",
  "Hospitality launch campaign planner",
  "AI visibility audit worksheet",
];

export const metadata = buildMetadata({
  title: "Resources",
  description: "Downloadable frameworks and strategic resources for trust-based growth systems.",
  path: "/resources",
});

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Lead magnets and strategic tools."
        description="A resource library designed to support qualified enquiries and stronger discovery conversations."
      />
      <section className="section-shell grid gap-6 pb-20 md:grid-cols-2">
        {resources.map((resource) => (
          <Link key={resource} href="/contact" className="card-border rounded-[2rem] p-8">
            <h2 className="font-serif text-4xl">{resource}</h2>
            <p className="mt-4 text-foreground/72">Request access through a strategy session and we&apos;ll share the relevant framework.</p>
          </Link>
        ))}
      </section>
    </>
  );
}
