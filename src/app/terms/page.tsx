import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Terms",
  description: "Terms of use for Patrika Media & Marketing Enterprise.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms" description="Basic terms governing use of this website and Patrika enquiry submissions." />
      <section className="section-shell prose-copy pb-20">
        <div className="card-border rounded-[2rem] p-8 sm:p-12">
          <p>Website content is provided for informational and commercial evaluation purposes. It should not be copied or republished without permission.</p>
          <p>Submitting an enquiry does not create a client relationship until scope, commercial terms, and mutual confirmation are completed.</p>
          <p>Patrika may update these terms as the business, services, or legal requirements evolve.</p>
        </div>
      </section>
    </>
  );
}
