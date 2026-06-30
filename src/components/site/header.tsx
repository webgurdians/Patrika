"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandMark } from "@/components/site/brand-mark";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-black/65 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="block"
          onClick={() => setIsOpen(false)}
        >
          <BrandMark className="w-[110px] sm:w-[138px]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm tracking-[0.18em] uppercase text-foreground/72 hover:text-gold",
                pathname === link.href && "text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button asChild className="hidden lg:inline-flex">
          <Link href="/contact">Book Strategy Call</Link>
        </Button>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 text-foreground/80 hover:text-gold lg:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer Dropdown */}
      {isOpen && (
        <div className="absolute inset-x-0 top-20 z-40 border-b border-white/8 bg-black/95 px-6 py-8 shadow-2xl backdrop-blur-2xl transition-all duration-300 lg:hidden">
          <nav className="flex flex-col space-y-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "text-base tracking-[0.2em] uppercase text-foreground/80 hover:text-gold py-1.5 border-b border-white/5",
                  pathname === link.href && "text-gold",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
