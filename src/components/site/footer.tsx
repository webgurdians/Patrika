import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-black/80">
      <div className="section-shell grid gap-12 py-12 lg:grid-cols-[1.05fr_0.7fr_0.9fr] lg:gap-16">
        <div className="max-w-xl">
          <div className="mb-6 flex items-center gap-4">
            <BrandMark glow={false} className="w-[92px] shrink-0 sm:w-[110px]" />
            <div>
              <p className="gold-label mb-2 text-[11px]">Patrika Media & Marketing Enterprise</p>
              <p className="text-xs uppercase tracking-[0.2em] text-foreground/42">
                West Bengal, India
              </p>
            </div>
          </div>
          <p className="font-serif text-[2.1rem] leading-tight sm:text-4xl">
            Growth systems for trust-based businesses across West Bengal.
          </p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-foreground/64">
            Content, strategy, websites, automation, and AI visibility for businesses built on trust.
          </p>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-gold">Explore</p>
          <div className="space-y-3 text-sm text-foreground/72">
            <Link href="/services" className="block hover:text-gold">Services</Link>
            <Link href="/industries" className="block hover:text-gold">Industries</Link>
            <Link href="/case-studies" className="block hover:text-gold">Case Studies</Link>
            <Link href="/resources" className="block hover:text-gold">Resources</Link>
          </div>
        </div>
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.22em] text-gold">Contact & Legal</p>
          <div className="space-y-3 text-sm text-foreground/72">
            <Link href="/privacy-policy" className="block hover:text-gold">Privacy Policy</Link>
            <Link href="/terms" className="block hover:text-gold">Terms</Link>
            <a href={`mailto:${siteConfig.email}`} className="block hover:text-gold">{siteConfig.email}</a>
            <a href={`tel:${siteConfig.phone}`} className="block hover:text-gold">{siteConfig.phone}</a>
            <p>{siteConfig.location}</p>
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
