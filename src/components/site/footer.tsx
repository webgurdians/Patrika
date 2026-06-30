import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[linear-gradient(180deg,rgba(6,6,6,0.96),rgba(3,3,3,1))]">
      <div className="section-shell py-14 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.65fr_0.85fr] lg:gap-18">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-5">
              <BrandMark glow={false} className="w-[104px] shrink-0 sm:w-[128px]" />
              <div className="space-y-2">
                <p className="gold-label text-[11px]">Patrika Media & Marketing Enterprise</p>
                <p className="text-xs uppercase tracking-[0.2em] text-foreground/42">
                  West Bengal, India
                </p>
              </div>
            </div>
            <p className="max-w-xl font-serif text-[2rem] leading-[1.12] sm:text-[2.6rem]">
            Growth systems for trust-based businesses across West Bengal.
            </p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-foreground/64 sm:text-base">
              Content, strategy, websites, automation, and AI visibility for businesses built on trust.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-sm text-foreground/66">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-gold">{siteConfig.email}</a>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-gold">{siteConfig.phone}</a>
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-1 lg:gap-12">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-gold">Explore</p>
              <div className="space-y-3 text-[15px] text-foreground/72">
                <Link href="/services" className="block hover:text-gold">Services</Link>
                <Link href="/industries" className="block hover:text-gold">Industries</Link>
                <Link href="/case-studies" className="block hover:text-gold">Case Studies</Link>
                <Link href="/resources" className="block hover:text-gold">Resources</Link>
              </div>
            </div>
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.22em] text-gold">Contact & Legal</p>
              <div className="space-y-3 text-[15px] text-foreground/72">
                <Link href="/privacy-policy" className="block hover:text-gold">Privacy Policy</Link>
                <Link href="/terms" className="block hover:text-gold">Terms</Link>
                <p>{siteConfig.location}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/8">
        <div className="section-shell flex flex-col gap-2 py-4 text-[11px] tracking-[0.12em] text-foreground/46 lg:flex-row lg:items-center lg:justify-between">
          <p>Copyright © {year} Patrika Media & Marketing Enterprise. All rights reserved.</p>
          <p>Built for trust-based business growth in West Bengal and India.</p>
        </div>
      </div>
    </footer>
  );
}
