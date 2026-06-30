type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="gold-label mb-4 text-xs">{eyebrow}</p> : null}
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-foreground/70 sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}
