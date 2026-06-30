import { SectionHeading } from "@/components/site/section-heading";
import { experienceBrands } from "@/lib/site-data";

export function ExperienceLegacySection() {
  return (
    <section className="section-shell py-18">
      <SectionHeading
        eyebrow="Experience & Production Legacy"
        title="Experience Built Across Leading Brands & Institutions"
        description="Over the years, our team members have contributed to projects, productions, campaigns, and creative initiatives across hospitality, healthcare, education, luxury retail, and regional businesses throughout India."
      />

      <div className="mt-8 max-w-4xl rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-5 py-4 text-sm leading-7 text-foreground/52">
        The organisations below represent projects, productions, collaborations, professional
        experience, or team involvement accumulated throughout our careers and creative journey.
        Individual project scope and involvement varied by engagement.
      </div>

      <div className="mt-8 flex items-center justify-between gap-4">
        <p className="text-xs uppercase tracking-[0.22em] text-gold">Professional Experience Includes</p>
        <div className="hidden h-px flex-1 bg-[linear-gradient(90deg,rgba(201,168,76,0.34),transparent)] sm:block" />
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6">
        {experienceBrands.map((brand) => (
          <div
            key={brand.name}
            className="group relative overflow-visible rounded-[1.5rem] border border-white/8 bg-white/[0.02] p-5 hover:border-gold/35 hover:bg-gold/[0.04] hover:shadow-[0_18px_45px_rgba(0,0,0,0.18)]"
          >
            <div className="flex min-h-28 items-center justify-center rounded-[1.1rem] border border-white/6 bg-black/30 px-3 text-center">
              <p className="font-serif text-2xl leading-tight text-foreground/62 transition duration-200 group-hover:scale-[1.03] group-hover:text-gold">
                {brand.name}
              </p>
            </div>

            <div className="pointer-events-none absolute inset-x-3 -bottom-3 z-10 translate-y-full rounded-2xl border border-gold/25 bg-[#12100d] p-4 opacity-0 shadow-2xl transition duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
              <p className="font-medium text-foreground">{brand.name}</p>
              <p className="mt-1 text-sm text-foreground/65">{brand.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 grid gap-6 border-t border-white/8 pt-8 lg:grid-cols-[0.95fr_1.05fr]">
        <p className="font-serif text-3xl leading-tight">
          Our experience spans healthcare, hospitality, luxury retail, education, local commerce,
          and emerging digital brands across West Bengal and India.
        </p>
        <p className="max-w-2xl text-base leading-8 text-foreground/68">
          This breadth of exposure helps us build strategies grounded in real-world business
          challenges rather than generic marketing theory.
        </p>
      </div>
    </section>
  );
}
