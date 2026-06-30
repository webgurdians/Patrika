import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="section-shell flex min-h-[70vh] items-center justify-center py-20">
      <div className="card-border max-w-2xl rounded-[2.4rem] p-10 text-center">
        <p className="gold-label mb-4 text-xs">404</p>
        <h1 className="font-serif text-5xl">This page doesn&apos;t exist.</h1>
        <p className="mt-5 text-foreground/72">Let&apos;s get you back to the main experience.</p>
        <div className="mt-8 flex justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
