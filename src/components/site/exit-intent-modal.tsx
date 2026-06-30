"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem("patrika-exit-modal");
    if (dismissed) return;

    const onMouseLeave = (event: MouseEvent) => {
      if (event.clientY <= 0) {
        setOpen(true);
        sessionStorage.setItem("patrika-exit-modal", "true");
      }
    };

    document.addEventListener("mouseout", onMouseLeave);
    return () => document.removeEventListener("mouseout", onMouseLeave);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-6">
      <div className="card-border w-full max-w-xl rounded-[2rem] p-8">
        <p className="gold-label mb-4 text-xs">Before You Go</p>
        <h3 className="font-serif text-4xl">Take the case study playbook with you.</h3>
        <p className="mt-4 text-foreground/72">
          Book a discovery call and we&apos;ll share the same lead-generation framework we use for healthcare,
          education, and hospitality brands.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Button asChild>
            <Link href="/contact">Claim the Playbook</Link>
          </Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Continue Browsing
          </Button>
        </div>
      </div>
    </div>
  );
}
