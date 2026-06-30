import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040404] text-foreground/80">
      <div className="section-shell py-16 sm:py-20">
        {/* Main Grid: Left brand details, Right links */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Brand details & contact info */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <BrandMark glow={false} className="w-[100px] shrink-0 sm:w-[115px]" />
                <div className="space-y-0.5">
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Patrika Media</p>
                  <p className="text-[9px] uppercase tracking-[0.15em] text-foreground/40">{siteConfig.location}</p>
                </div>
              </div>
              <h2 className="font-serif text-3xl sm:text-[2.5rem] leading-[1.12] text-foreground/90 max-w-xl">
                Growth systems for trust-based businesses.
              </h2>
              <p className="max-w-lg text-sm leading-relaxed text-foreground/50">
                Premium strategy, content, websites, automation, and AI visibility built for businesses where trust drives conversion.
              </p>
            </div>

            {/* Direct Contact info integrated nicely inside the left block */}
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4 border-t border-white/5 max-w-lg">
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">Email Us</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground/80 transition-colors duration-200 hover:text-gold block">
                  {siteConfig.email}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">WhatsApp / Call</p>
                <a 
                  href="https://wa.me/916297648194" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-foreground/80 transition-colors duration-200 hover:text-gold flex items-center gap-1.5"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* Explore Links */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Explore</p>
            <nav className="flex flex-col space-y-3.5 text-sm">
              <Link href="/services" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Services</Link>
              <Link href="/industries" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Industries</Link>
              <Link href="/case-studies" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Case Studies</Link>
              <Link href="/resources" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Resources</Link>
            </nav>
          </div>

          {/* Legal / Location Links */}
          <div className="lg:col-span-3 space-y-6">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Contact & Legal</p>
            <nav className="flex flex-col space-y-3.5 text-sm">
              <Link href="/privacy-policy" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Privacy Policy</Link>
              <Link href="/terms" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Terms</Link>
              <Link href="/contact" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Book a Strategy Session</Link>
            </nav>
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
