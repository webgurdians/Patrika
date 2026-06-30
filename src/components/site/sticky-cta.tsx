import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/8 bg-black/90 px-4 py-3 backdrop-blur lg:hidden">
      <Button asChild className="flex w-full">
        <Link href="/contact">Book Strategy Call</Link>
      </Button>
    </div>
  );
}
