import Link from "next/link";
import { BrandMark } from "@/components/site/brand-mark";
import { siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040404] text-foreground/80">
      <div className="section-shell py-16 sm:py-20">
        {/* Main Grid: All 4 columns align perfectly at the top */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          
          {/* Column 1: Brand & Logo (Spans 5 grid cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <BrandMark glow={false} className="w-[100px] shrink-0 sm:w-[115px]" />
              <div className="space-y-0.5">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold">Patrika Media</p>
                <p className="text-[9px] uppercase tracking-[0.15em] text-foreground/40">{siteConfig.location}</p>
              </div>
            </div>
            <p className="font-serif text-2xl sm:text-3xl leading-[1.2] text-foreground/90">
              Growth systems for trust-based businesses across West Bengal.
            </p>
            <p className="text-xs leading-relaxed text-foreground/50 max-w-sm">
              Content, strategy, websites, automation, and AI visibility for businesses built on trust.
            </p>
          </div>

          {/* Column 2: Explore Links (Spans 2 grid cols) */}
          <div className="lg:col-span-2 space-y-5 lg:pl-4">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Explore</p>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="/services" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Services</Link>
              <Link href="/industries" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Industries</Link>
              <Link href="/case-studies" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Case Studies</Link>
              <Link href="/resources" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Resources</Link>
            </nav>
          </div>

          {/* Column 3: Contact & Legal Links (Spans 2 grid cols) */}
          <div className="lg:col-span-2 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Legal</p>
            <nav className="flex flex-col space-y-3 text-sm">
              <Link href="/privacy-policy" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Privacy Policy</Link>
              <Link href="/terms" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Terms</Link>
              <Link href="/contact" className="text-foreground/60 transition-colors duration-200 hover:text-gold w-fit">Book Session</Link>
            </nav>
          </div>

          {/* Column 4: Contact Information (Spans 3 grid cols) */}
          <div className="lg:col-span-3 space-y-5">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold">Connect</p>
            <div className="space-y-4">
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">Email Us</p>
                <a href={`mailto:${siteConfig.email}`} className="text-sm text-foreground/80 transition-colors duration-200 hover:text-gold block break-all font-medium">
                  {siteConfig.email}
                </a>
              </div>
              <div className="space-y-1">
                <p className="text-[9px] uppercase tracking-[0.2em] text-foreground/40">WhatsApp / Call</p>
                <a 
                  href="https://wa.me/916297648194" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm text-foreground/80 transition-colors duration-200 hover:text-gold flex items-center gap-2 font-medium"
                >
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>{siteConfig.phone}</span>
                </a>
              </div>
            </div>
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
