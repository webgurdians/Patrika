import { SectionHeading } from "@/components/site/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="section-shell pt-20 pb-12 sm:pt-28 sm:pb-16">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
    </section>
  );
}
