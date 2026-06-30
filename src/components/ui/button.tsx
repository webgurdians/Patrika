import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({
  className,
  asChild = false,
  variant = "primary",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium tracking-[0.18em] uppercase",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-gold text-black hover:-translate-y-0.5 hover:bg-[#dfbb5c]",
        variant === "secondary" &&
          "border border-border bg-transparent text-foreground hover:bg-white/5",
        variant === "ghost" && "text-foreground hover:text-gold",
        className,
      )}
      {...props}
    />
  );
}
