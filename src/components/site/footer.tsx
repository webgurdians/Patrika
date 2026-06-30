import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/8 bg-[#050505] text-foreground/80">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Column - Spans 6 columns on large screens */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <BrandMark glow={false} className="w-[110px] shrink-0 sm:w-[130px]" />
                <div className="h-6 w-px bg-white/10" />
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold leading-none">Patrika Media</p>
                  <p className="mt-1 text-[9px] uppercase tracking-[0.15em] text-foreground/40 leading-none">
                    West Bengal, India
                  </p>
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl leading-[1.15] text-foreground/90 max-w-xl">
                Growth systems for trust-based businesses across West Bengal.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-foreground/50">
                Content, strategy, websites, automation, and AI visibility for businesses built on trust.
              </p>
            </div>
          </div>

          {/* Spacer for layout balance */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Navigation Links Column */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Explore</p>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="/services" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Services</Link>
              <Link href="/industries" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Industries</Link>
              <Link href="/case-studies" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Case Studies</Link>
              <Link href="/resources" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Resources</Link>
            </nav>
          </div>

          {/* Legal / Location Column */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Contact & Legal</p>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="/privacy-policy" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Privacy Policy</Link>
              <Link href="/terms" className="transition-colors duration-200 hover:text-gold w-fit text-foreground/60 hover:text-foreground/90">Terms</Link>
              <span className="text-foreground/40 text-xs tracking-wide">{siteConfig.location}</span>
            </nav>
          </div>
        </div>

        {/* Contact Info Row - Anchored below main content with clear separation */}
        <div className="mt-12 pt-8 border-t border-white/5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-1.5">
            <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">Direct Email</p>
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-gold block">
              {siteConfig.email}
            </a>
          </div>
          <div className="space-y-1.5">
            <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">Call or WhatsApp</p>
            <a 
              href="https://wa.me/916297648194" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-foreground/80 transition-colors duration-200 hover:text-gold flex items-center gap-2"
            >
              <svg className="h-4.5 w-4.5 fill-current text-emerald-500 shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.864.002-2.637-1.023-5.116-2.887-6.98a9.808 9.808 0 0 0-6.983-2.875c-5.433 0-9.859 4.42-9.863 9.863-.001 1.716.463 3.39 1.343 4.873l-.99 3.619 3.706-.972zm11.758-5.326c-.328-.164-1.944-.959-2.242-1.068-.298-.11-.515-.164-.73.164-.216.328-.836 1.068-1.025 1.286-.19.217-.378.246-.706.082-.328-.164-1.386-.51-2.64-1.627-.975-.87-1.633-1.946-1.824-2.274-.19-.328-.02-.505.143-.668.147-.146.328-.382.492-.574.164-.19.219-.328.328-.547.11-.219.055-.411-.027-.574-.082-.164-.73-1.752-1.002-2.408-.265-.636-.53-.55-.73-.56-.19-.01-.41-.01-.628-.01-.219 0-.574.082-.876.411-.301.328-1.15 1.123-1.15 2.739 0 1.616 1.177 3.177 1.341 3.397.164.22 2.316 3.537 5.611 4.961.783.339 1.396.541 1.873.692.787.25 1.503.215 2.069.13.63-.094 1.944-.795 2.217-1.56.273-.767.273-1.424.19-1.56-.082-.136-.298-.218-.626-.382z"/>
              </svg>
              <span>{siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/5 bg-[#020202]">
        <div className="section-shell py-6 flex flex-col gap-4 text-[11px] tracking-[0.1em] text-foreground/30 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright © {year} Patrika Media & Marketing. All rights reserved.</p>
          <p>Built for trust-based business growth in West Bengal and India.</p>
        </div>
      </div>
    </footer>
  );
}
