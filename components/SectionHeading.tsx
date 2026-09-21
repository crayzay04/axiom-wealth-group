interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  intro?: string;
  className?: string;
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[13px] uppercase tracking-[0.18em] text-silver">
      {children}
    </p>
  );
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  className = "mb-14",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl md:text-4xl font-heading font-semibold text-foreground">
        {title}
      </h2>
      <div className="mt-5 h-px w-10 bg-silver" />
      {intro && (
        <p className="mt-6 max-w-2xl text-base md:text-[17px] leading-[1.7] text-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}
