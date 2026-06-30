import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { servicePillars } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Services",
  description: "Content production, growth marketing, websites, WhatsApp automation, and AI visibility strategy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Growth systems designed to work together."
        description="Each engagement combines strategic clarity with the production and technology layers needed to generate better enquiries."
      />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        {servicePillars.map((service) => (
          <Link key={service.slug} href={`/services/${service.slug}`} className="card-border rounded-[2rem] p-8">
            <h2 className="font-serif text-4xl">{service.name}</h2>
            <p className="mt-4 text-foreground/72">{service.summary}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
