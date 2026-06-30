import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ContactForm } from "@/components/site/contact-form";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-data";

export const metadata = buildMetadata({
  title: "Contact",
  description: "Book a discovery call with Patrika Media & Marketing Enterprise.",
  path: "/contact",
});

export default function ContactPage() {
  const calendarUrl = process.env.NEXT_PUBLIC_CALENDAR_URL;

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Book a strategy session."
        description="Tell us about your goals, budget, and bottlenecks. We&apos;ll review the fit and suggest the strongest next move."
      />
      <section className="section-shell grid gap-8 pb-20 lg:grid-cols-[0.75fr_1.25fr]">
        <aside className="card-border rounded-[2rem] p-8">
          <h2 className="font-serif text-4xl">Contact details</h2>
          <div className="mt-6 space-y-4 text-foreground/72">
            <p>{siteConfig.location}</p>
            <p>{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
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
