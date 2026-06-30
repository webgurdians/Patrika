import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  glow?: boolean;
};

export function BrandMark({ className, glow = true }: BrandMarkProps) {
  return (
    <div className={cn("relative inline-flex items-center justify-center", className)}>
      {glow ? (
        <div className="absolute inset-[10%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),rgba(255,255,255,0.04)_52%,transparent_78%)] blur-xl" />
      ) : null}
      <Image
        src="/patrika-logo-transparent.png"
        alt="Patrika Media & Marketing logo"
        width={1600}
        height={1218}
        sizes="(max-width: 768px) 160px, 280px"
        className="relative z-10 h-auto w-full drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)]"
        priority
      />
    </div>
  );
}
