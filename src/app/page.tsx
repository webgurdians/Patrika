import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExperienceLegacySection } from "@/components/site/experience-legacy-section";
import { SectionHeading } from "@/components/site/section-heading";
import { StructuredData } from "@/components/site/structured-data";
import {
  caseStudies,
  faqs,
  founders,
  growthSystemStages,
  industries,
  pricingTiers,
  servicePillars,
} from "@/lib/site-data";
import { buildMetadata, generateSchema } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Patrika Media & Marketing | Growth Systems for Trust-Based Businesses",
  description: "Patrika connects visibility, content, acquisition, websites, CRM, automation, and measurement into measurable growth systems for trust-based businesses.",
  path: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          generateSchema("WebSite"),
          generateSchema("Organization"),
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          },
        ]}
      />

      <section className="section-shell relative overflow-hidden pt-24 pb-18 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(201,168,76,0.15),transparent_22%),radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.08),transparent_18%)]" />
        <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-4xl">
            <p className="gold-label mb-6 text-xs">Healthcare. Education. Hospitality. Premium Local Business.</p>
            <h1 className="font-serif text-5xl leading-[0.96] sm:text-7xl">
              Growth Systems For Businesses Built On Trust.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72 sm:text-xl">
              We connect discovery, trust, conversion, CRM, acquisition, and measurement so marketing produces a stronger pipeline, not just more activity.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/growth-diagnostic">Start With A Growth Diagnostic</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="card-border rounded-[2rem] p-8">
            <p className="gold-label text-xs">What Patrika Connects</p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {["Visibility", "Content", "Conversion", "CRM", "Acquisition", "Measurement"].map((item) => (
                <div key={item} className="rounded-[1.2rem] border border-white/8 bg-white/[0.02] p-4">
                  <p className="font-serif text-2xl">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExperienceLegacySection />

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="The Growth System"
          title="Marketing is only useful when the whole journey works."
          description="Patrika treats discovery, trust, conversion, pipeline, revenue, and measurement as one connected operating system."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {growthSystemStages.map((stage, index) => (
            <div key={stage.name} className="card-border rounded-[1.6rem] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
              <p className="mt-6 font-serif text-2xl">{stage.name}</p>
              <p className="mt-3 text-xs leading-6 text-foreground/62">{stage.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="Industries"
          title="Built for categories where credibility changes conversion."
          description="We focus on businesses where buyers compare expertise, reputation, proof, and responsiveness before making a decision."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link key={industry.slug} href={`/industries/${industry.slug}`} className="card-border group rounded-[1.8rem] p-6">
              <p className="font-serif text-3xl">{industry.name}</p>
              <p className="mt-4 text-sm leading-7 text-foreground/70">{industry.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-gold">
                Explore
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="Capabilities"
          title="Specialists working inside one commercial system."
          description="Content, performance, web, Growth Operations, AI visibility, and analytics are connected to the same customer-acquisition journey."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {servicePillars.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="card-border group rounded-[1.9rem] p-7">
              <p className="font-serif text-3xl">{service.name}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold">
                Explore capability
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <div className="card-border grid gap-10 rounded-[2.4rem] p-8 lg:grid-cols-[1fr_0.8fr] lg:p-12">
          <div>
            <p className="gold-label text-xs">Growth Diagnostic</p>
            <h2 className="mt-5 max-w-3xl font-serif text-5xl">Find the bottleneck before spending more on marketing.</h2>
            <p className="mt-5 max-w-2xl leading-8 text-foreground/70">
              We audit discovery, trust, conversion, pipeline, revenue, and measurement, then turn the findings into a prioritised 90-day growth map.
            </p>
            <div className="mt-8">
              <Button asChild>
                <Link href="/growth-diagnostic">Explore The Diagnostic</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              "Business-first diagnosis",
              "Prioritised bottlenecks",
              "90-day action map",
              "Measurement framework",
            ].map((point) => (
              <div key={point} className="flex items-center gap-3 rounded-[1.4rem] border border-white/8 bg-white/[0.02] p-5">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <p>{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="Case Studies"
          title="Proof should explain the problem, intervention, and outcome."
          description="Selected work across trust-based categories. We use measured evidence where it exists and avoid inventing performance claims."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="card-border rounded-[1.8rem] p-7">
              <p className="font-serif text-3xl">{study.name}</p>
              <div className="mt-5 space-y-3 text-sm leading-6 text-foreground/72">
                <p><span className="text-gold">Challenge:</span> {study.challenge}</p>
                <p><span className="text-gold">Work:</span> {study.solution}</p>
                <p><span className="text-gold">Outcome:</span> {study.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Team" title="Growth strategy and premium creative under one roof." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <div key={founder.name} className="card-border rounded-[2rem] p-8">
              <div className="relative h-72 overflow-hidden rounded-[1.5rem] bg-neutral-900 sm:h-64">
                <picture>
                  <source media="(max-width: 640px)" srcSet={founder.mobileImage} />
                  <Image src={founder.image} alt={founder.name} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover object-[50%_15%]" />
                </picture>
              </div>
              <p className="mt-6 font-serif text-4xl">{founder.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">{founder.role}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72">{founder.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Engagements" title="Start with clarity. Expand only when the system needs it." />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {pricingTiers.map((tier) => (
            <div key={tier.name} className="card-border rounded-[1.8rem] p-7">
              <p className="text-sm uppercase tracking-[0.18em] text-gold">{tier.name}</p>
              <p className="mt-4 font-serif text-5xl">{tier.price}</p>
              <p className="mt-4 text-sm leading-7 text-foreground/72">{tier.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="FAQ" title="Questions before the first engagement." />
        <div className="mt-10 space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question} className="card-border rounded-[1.6rem] p-6">
              <p className="font-medium">{faq.question}</p>
              <p className="mt-3 text-sm leading-7 text-foreground/72">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell pt-14 pb-10 sm:pt-16 sm:pb-12">
        <div className="card-border rounded-[2.4rem] p-8 text-center sm:p-12">
          <p className="gold-label mb-4 text-xs">Start With Diagnosis</p>
          <h2 className="font-serif text-5xl">Know what to fix before choosing a channel.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/72">
            The Growth Diagnostic gives you a prioritised view of the acquisition system and a practical path for the next 90 days.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/growth-diagnostic">Request Growth Diagnostic</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
