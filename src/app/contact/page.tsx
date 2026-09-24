import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact Patrika",
  description: "Talk to Patrika about growth strategy, acquisition, web, CRM, AI visibility, content, and measurement.",
  path: "/contact",
});

export default function ContactPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where growth is getting stuck."
        description="Share the business goal, current bottleneck, and what you have already tried. We will assess the fit and recommend the most useful next step rather than forcing a generic package."
      />
      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="card-border rounded-[2rem] p-8">
          <p className="gold-label text-xs">Direct Contact</p>
          <h2 className="mt-4 font-serif text-4xl">Patrika Media & Marketing</h2>
          <div className="mt-6 space-y-4 text-foreground/72">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
          </div>
          <div className="mt-8 rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5">
            <p className="text-sm leading-6 text-foreground/65">
              If you are not sure which service you need, start with the Growth Diagnostic. It is designed to identify the bottleneck before implementation begins.
            </p>
            <Link href="/growth-diagnostic" className="mt-4 inline-block text-sm uppercase tracking-[0.16em] text-gold">
              Explore Growth Diagnostic
            </Link>
          </div>
          {calendarUrl ? (
            <div className="mt-8">
              <Button variant="secondary" asChild>
                <Link href={calendarUrl}>Open Calendar Booking</Link>
              </Button>
            </div>
          ) : null}
        </aside>
        <ContactForm />
      </section>
    </>
  );
}
