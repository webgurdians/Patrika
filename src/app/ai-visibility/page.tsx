import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "AI Visibility Strategy",
  description: "Patrika's AI visibility strategy for emerging recommendation engines and assistants.",
  path: "/ai-visibility",
});

export default function AiVisibilityPage() {
  return (
    <>
      <PageHero eyebrow="AI Visibility" title="Be easier for AI systems to recommend." description="We help businesses structure authority, content, and entity signals for the next generation of search behavior." />
      <section className="section-shell pb-20">
        <div className="card-border rounded-[2rem] p-8 text-foreground/72">
          AI visibility goes beyond traditional SEO. It requires clearer expertise signals, stronger case-based content, and structured information that models can interpret with confidence.
        </div>
      </section>
    </>
  );
}
