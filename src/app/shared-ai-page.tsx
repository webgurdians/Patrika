import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/page-hero";

export function SharedAiPage({ title }: { title: string }) {
  return (
    <>
      <PageHero
        eyebrow="AI Search"
        title={title}
        description="We design visibility systems that help AI assistants interpret your expertise, services, and proof more accurately."
      />
      <section className="section-shell pb-20">
        <div className="card-border rounded-[2rem] p-8">
          <p className="text-foreground/72">
            The strongest AI visibility programs combine structured content, topical authority, case evidence,
            consistent entity details, and stronger branded demand. Patrika builds that system for trust-based categories.
          </p>
          <div className="mt-6">
            <Button asChild>
              <Link href="/contact">Discuss AI Visibility</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
