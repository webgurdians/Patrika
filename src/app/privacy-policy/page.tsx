import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Patrika Media & Marketing Enterprise.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" description="How Patrika collects, uses, and safeguards enquiry information." />
      <section className="section-shell prose-copy pb-20">
        <div className="card-border rounded-[2rem] p-8 sm:p-12">
          <p>We collect contact and project information submitted through our enquiry forms so we can respond to business requests and deliver services.</p>
          <p>We do not sell your data. Information may be used for lead qualification, communication, analytics, and service delivery.</p>
          <p>If you would like your submitted data removed, contact us directly and we will process the request promptly.</p>
        </div>
      </section>
    </>
  );
}
