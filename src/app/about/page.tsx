import { buildMetadata } from "@/lib/metadata";
import { founders } from "@/lib/site-data";
import { PageHero } from "@/components/site/page-hero";

export const metadata = buildMetadata({
  title: "About Patrika",
  description: "Meet the team building growth systems for trust-based businesses across West Bengal.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A premium growth partner for businesses where trust changes conversion."
        description="Patrika brings strategy, creative production, digital marketing, web systems, and automation into one connected operating model."
      />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        {founders.map((founder) => (
          <article key={founder.name} className="card-border rounded-[2rem] p-8">
            <div className="h-64 rounded-[1.5rem] bg-[linear-gradient(135deg,rgba(201,168,76,0.2),rgba(255,255,255,0.05))]" />
            <h2 className="mt-6 font-serif text-4xl">{founder.name}</h2>
            <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold">{founder.role}</p>
            <p className="mt-4 text-foreground/72">{founder.blurb}</p>
          </article>
        ))}
      </section>
    </>
  );
}
