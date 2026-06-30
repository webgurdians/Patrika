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
  industries,
  pricingTiers,
  servicePillars,
  siteConfig,
} from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <StructuredData
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: siteConfig.name,
            url: siteConfig.url,
            email: siteConfig.email,
            telephone: siteConfig.phone,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          },
        ]}
      />
      <section className="section-shell relative overflow-hidden pt-24 pb-18 sm:pt-32 sm:pb-24">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(201,168,76,0.15),transparent_22%),radial-gradient(circle_at_20%_40%,rgba(255,255,255,0.08),transparent_18%)]" />
        <div className="grid items-end gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-4xl">
            <p className="gold-label mb-6 text-xs">Healthcare. Education. Hospitality.</p>
            <h1 className="font-serif text-5xl leading-[0.96] sm:text-7xl">
              Growth Systems For Businesses Built On Trust.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-foreground/72 sm:text-xl">
              We help trust-based businesses generate more enquiries through content production,
              digital marketing, websites, and automation.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">Book Strategy Call</Link>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </div>
          <div className="card-border rounded-[2rem] p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              {[
                "150+ Projects Delivered",
                "8+ Years Production Experience",
                "West Bengal Focused",
                "Content + Marketing + Technology",
              ].map((item) => (
                <div key={item}>
                  <p className="text-3xl font-serif text-gold">{item.split(" ")[0]}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/72">
                    {item.replace(`${item.split(" ")[0]} `, "")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExperienceLegacySection />

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="Problems We Solve"
          title="Buyers decide before they enquire."
          description="Your audience is already comparing trust signals before they speak to your team. We build the systems that help them choose you sooner."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {industries.map((industry) => (
            <div key={industry.slug} className="card-border rounded-[1.8rem] p-6">
              <p className="font-serif text-3xl">{industry.name}</p>
              <p className="mt-4 text-sm leading-7 text-foreground/70">{industry.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading
          eyebrow="Service Pillars"
          title="One growth partner. Multiple connected systems."
          description="Patrika brings content, campaigns, websites, automation, and AI visibility into a single operating model."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {servicePillars.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="card-border group rounded-[1.9rem] p-7"
            >
              <p className="font-serif text-3xl">{service.name}</p>
              <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72">{service.summary}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.18em] text-gold">
                Explore service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Case Studies" title="Selected growth stories." />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link key={study.slug} href={`/case-studies/${study.slug}`} className="card-border rounded-[1.8rem] p-7">
              <p className="font-serif text-3xl">{study.name}</p>
              <div className="mt-5 space-y-3 text-sm text-foreground/72">
                <p><span className="text-gold">Challenge:</span> {study.challenge}</p>
                <p><span className="text-gold">Solution:</span> {study.solution}</p>
                <p><span className="text-gold">Outcome:</span> {study.outcome}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="Why Patrika"
            title="Business-first execution with local understanding."
            description="We stay close to business outcomes while keeping the craft premium enough for high-trust categories."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {["One Partner", "Business First", "Local Understanding", "Fast Execution"].map((point) => (
              <div key={point} className="card-border rounded-[1.7rem] p-6">
                <CheckCircle2 className="h-5 w-5 text-gold" />
                <p className="mt-4 text-xl font-medium">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Team" title="Led by growth and creative operators." />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {founders.map((founder) => (
            <div key={founder.name} className="card-border rounded-[2rem] p-8 flex flex-col justify-between">
              <div>
                <div className="relative h-72 sm:h-64 overflow-hidden rounded-[1.5rem] bg-neutral-900">
                  <picture>
                    <source media="(max-width: 640px)" srcSet={founder.mobileImage || founder.image} />
                    <img 
                      src={founder.image} 
                      alt={founder.name} 
                      className={`absolute inset-0 h-full w-full object-cover ${
                        founder.name.includes("Neel") ? "object-[50%_15%]" : "object-[50%_15%]"
                      }`}
                    />
                  </picture>
                </div>
                <p className="mt-6 font-serif text-4xl">{founder.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-gold">{founder.role}</p>
                <p className="mt-4 max-w-xl text-sm leading-7 text-foreground/72">{founder.blurb}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Process" title="From clarity to momentum." />
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          {["Discovery", "Strategy", "Production", "Launch", "Growth"].map((step, index) => (
            <div key={step} className="card-border rounded-[1.6rem] p-6">
              <p className="text-sm uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
              <p className="mt-8 font-serif text-3xl">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-18">
        <SectionHeading eyebrow="Pricing" title="Engagements shaped around ambition and stage." />
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
        <SectionHeading eyebrow="FAQ" title="Questions we hear before the first engagement." />
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
          <p className="gold-label mb-4 text-xs">Final CTA</p>
          <h2 className="font-serif text-5xl">Book A Strategy Session</h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/72">
            If you need a premium growth partner that understands trust-based buying behavior, we should talk.
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild>
              <Link href="/contact">Book Strategy Call</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
