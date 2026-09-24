import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { SectionHeading } from "@/components/site/section-heading";
import { buildMetadata } from "@/lib/metadata";
import { diagnosticAreas } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Growth Diagnostic",
  description: "A structured Patrika audit of discovery, trust, conversion, pipeline, revenue, and measurement with a prioritised growth map.",
  path: "/growth-diagnostic",
});

export default function GrowthDiagnosticPage() {
  return (
    <>
      <PageHero
        eyebrow="Entry Engagement"
        title="Find the bottleneck before spending more on marketing."
        description="The Patrika Growth Diagnostic reviews the full customer-acquisition journey and turns it into a prioritised growth map: what is working, what is leaking, and what should be fixed or tested next."
      />

      <section className="section-shell pb-18">
        <SectionHeading
          eyebrow="Diagnostic Framework"
          title="Six connected areas. One commercial view."
          description="The audit is designed to prevent channel-by-channel recommendations that ignore what happens before and after a lead is generated."
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {diagnosticAreas.map((area, index) => (
            <div key={area.name} className="card-border rounded-[1.8rem] p-7">
              <p className="text-xs uppercase tracking-[0.22em] text-gold">0{index + 1}</p>
              <h2 className="mt-5 font-serif text-3xl">{area.name}</h2>
              <p className="mt-4 text-sm leading-7 text-foreground/70">{area.summary}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card-border rounded-[2rem] p-8">
          <p className="gold-label text-xs">What You Receive</p>
          <h2 className="mt-4 font-serif text-4xl">A decision document, not a vanity report.</h2>
          <div className="mt-7 space-y-4">
            {[
              "Current-state diagnosis across the six growth areas",
              "Priority bottlenecks ranked by commercial impact",
              "90-day action map with recommended experiments",
              "Measurement plan for the metrics that matter",
              "Clear recommendation on whether Patrika should implement the work",
            ].map((item) => (
              <div key={item} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm leading-6 text-foreground/72">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 border-t border-white/8 pt-7">
            <p className="text-sm uppercase tracking-[0.18em] text-gold">Starting at</p>
            <p className="mt-2 font-serif text-5xl">₹15k+</p>
            <p className="mt-3 text-sm leading-6 text-foreground/60">
              Scope depends on business complexity, locations, channels, and the amount of data available.
            </p>
          </div>
          <div className="mt-8">
            <Button variant="secondary" asChild>
              <Link href="/case-studies">Review Our Work</Link>
            </Button>
          </div>
        </div>

        <div>
          <p className="mb-5 text-sm uppercase tracking-[0.2em] text-gold">Request A Diagnostic</p>
          <ContactForm intent="Growth Diagnostic" submitLabel="Request Growth Diagnostic" />
        </div>
      </section>
    </>
  );
}
