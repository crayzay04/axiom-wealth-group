import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import {
  AUDIENCES,
  PROCESS_STEPS,
  SERVICES,
  SITE,
  TEAM,
} from "@/lib/constants";
import { BODY_TEXT, CONTAINER } from "@/lib/ui";

export default function HomePage() {
  return (
    <>
      <HeroSection
        home
        eyebrow="Bakersfield, California"
        title={SITE.tagline}
        subtitle={SITE.description}
      />

      {/* Who we serve */}
      <SectionWrapper surface>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="Clients"
            title="Who we serve"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {AUDIENCES.map((audience) => (
              <IconCard key={audience.title} {...audience} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* What we do */}
      <SectionWrapper>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="Services"
            title="What we do"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-foreground border-b border-silver pb-1 transition-colors hover:border-foreground"
            >
              View all services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* How we work */}
      <SectionWrapper surface>
        <div className={`${CONTAINER} space-y-20`}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-line">
              <Image
                src={TEAM[0].image}
                alt={`${TEAM[0].name}, ${TEAM[0].title}`}
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="How we work"
                title="One team. One plan."
                className="mb-8"
              />
              <p className={BODY_TEXT}>
                Most people have pieces of a financial plan spread across an
                advisor, an insurance agent, a CPA, and an attorney who have
                never spoken to each other. We start by listening, then build a
                single strategy that covers cash flow, growth, protection, and
                legacy, and we coordinate with the other professionals in your
                life so the pieces fit.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] gap-12 md:gap-16 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-4">
                Fees and reasoning, in plain language.
              </h3>
              <p className={BODY_TEXT}>
                You will know what a recommendation costs and why we are making
                it before you decide. If a strategy cannot be explained simply,
                it is not the right strategy.
              </p>
            </div>
            <div className="bg-card rounded-xl border border-line p-10 md:p-12">
              <p className="font-heading text-4xl md:text-5xl leading-[1.1] text-foreground">
                {SITE.tagline}
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Our process */}
      <SectionWrapper>
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="Process"
            title="Our process"
          />
          <div className="relative">
            {/* Connector: vertical on mobile, horizontal on desktop */}
            <div
              aria-hidden="true"
              className="absolute bg-line left-6 top-0 bottom-0 w-px md:left-0 md:right-0 md:top-6 md:bottom-auto md:w-auto md:h-px"
            />
            <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
              {PROCESS_STEPS.map((step) => (
                <li key={step.step} className="flex gap-6 md:block">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-silver bg-background font-heading text-xl text-foreground">
                    {step.step}
                  </div>
                  <div className="md:mt-6">
                    <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-2">
                      {step.title}
                    </h3>
                    <p className="text-base leading-[1.7] text-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner surface />
    </>
  );
}
