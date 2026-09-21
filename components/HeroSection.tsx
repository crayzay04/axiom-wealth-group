import Link from "next/link";
import AxiomLogo from "./AxiomLogo";
import { Eyebrow } from "./SectionHeading";
import { BUTTON_PRIMARY, BUTTON_SECONDARY, CONTAINER } from "@/lib/ui";

interface HeroSectionProps {
  title: string;
  eyebrow?: string;
  subtitle?: React.ReactNode;
  breadcrumb?: { label: string; href: string }[];
  // Home variant: full height, logo watermark, and the two CTAs.
  home?: boolean;
}

const GOLD_GLOW =
  "radial-gradient(ellipse 70% 55% at 50% 0%, rgba(207,177,107,0.04), transparent 70%)";

export default function HeroSection({
  title,
  eyebrow,
  subtitle,
  breadcrumb,
  home = false,
}: HeroSectionProps) {
  return (
    <section
      className={`relative overflow-hidden bg-background ${
        home ? "flex min-h-screen items-center pt-28 pb-20" : "pt-36 pb-16 md:pt-44 md:pb-20"
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{ background: GOLD_GLOW }}
      />

      {home && (
        <div
          aria-hidden="true"
          className="absolute top-1/2 right-0 w-[95vw] max-w-[980px] -translate-y-1/2 translate-x-[32%] opacity-[0.07] pointer-events-none"
        >
          <AxiomLogo className="w-full h-auto" />
        </div>
      )}

      <div className={`relative z-10 w-full ${CONTAINER}`}>
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center text-sm text-muted">
              {breadcrumb.map((item, i) => {
                const current = i === breadcrumb.length - 1;
                return (
                  <li key={item.href} className="flex items-center">
                    {i > 0 && (
                      <span aria-hidden="true" className="mx-2 text-silver">
                        /
                      </span>
                    )}
                    <Link
                      href={item.href}
                      aria-current={current ? "page" : undefined}
                      className={`transition-colors hover:text-foreground ${
                        current ? "text-silver" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ol>
          </nav>
        )}

        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}

        <h1
          className={`font-heading font-normal leading-[1.05] text-foreground text-5xl md:text-6xl lg:text-7xl max-w-4xl ${
            eyebrow ? "mt-5" : ""
          }`}
        >
          {title}
        </h1>

        {subtitle && (
          <p className="mt-7 max-w-2xl text-base md:text-[17px] leading-[1.7] text-foreground">
            {subtitle}
          </p>
        )}

        {home && (
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <Link href="/contact#book" className={BUTTON_PRIMARY}>
              Schedule a Consultation
            </Link>
            <Link href="/team" className={BUTTON_SECONDARY}>
              Meet the Team
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
