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
          <article key={founder.name} className="card-border rounded-[2rem] p-8 flex flex-col justify-between">
            <div>
              <div className="relative h-64 overflow-hidden rounded-[1.5rem] bg-neutral-900 mb-6">
                {founder.image && (
                  <img 
                    src={founder.image} 
                    alt={founder.name} 
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                )}
              </div>
              <h2 className="font-serif text-4xl">{founder.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gold">{founder.role}</p>
              <p className="mt-4 text-foreground/72">{founder.blurb}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
