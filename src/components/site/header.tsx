"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <header className="sticky top-0 z-40 border-b border-white/8 bg-black/65 backdrop-blur-xl">
      <div className="section-shell flex h-20 items-center justify-between gap-6">
        <Link
          href="/"
          className="block"
        >
          <BrandMark className="w-[110px] sm:w-[138px]" />
        </Link>
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
        <Button asChild className="hidden lg:inline-flex">
          <Link href="/contact">Book Strategy Call</Link>
        </Button>
      </div>
    </header>
  );
}
