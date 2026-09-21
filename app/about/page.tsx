import Image from "next/image";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading, { Eyebrow } from "@/components/SectionHeading";
import IconCard from "@/components/IconCard";
import ConfirmText from "@/components/ConfirmText";
import BrokerCheckLink from "@/components/BrokerCheckLink";
import { BROKERCHECK_URL, TEAM, VALUES } from "@/lib/constants";
import { BODY_TEXT, CONTAINER } from "@/lib/ui";

const HERO_SUBTITLE =
  'Independent guidance for the people who trust us with their plans. [[CONFIRM: is "independent" accurate given the broker-dealer relationship?]]';

const FOUNDER_STORY =
  'Jason founded Axiom Wealth Group in Bakersfield to give families and business owners the kind of coordinated planning that is usually reserved for institutions. [[CONFIRM: one or two sentences of Jason\'s actual background, credentials, and why he started the firm.]] Today the firm serves clients across California with a team that works together on every plan. [[CONFIRM: "across California" or a narrower geography]]';

const PENDING_CREDENTIALS = [
  "[[CONFIRM: SIPC]]",
  "[[CONFIRM: any designations held by staff, e.g. CFP, ChFC, CLU]]",
];

export default function AboutPage() {
  const founder = TEAM[0];

  return (
    <>
      <HeroSection
        title="About Axiom"
        subtitle={<ConfirmText text={HERO_SUBTITLE} />}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Founder */}
      <SectionWrapper surface>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] gap-12 md:gap-16 items-center">
            <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden rounded-xl border border-line">
              <Image
                src={founder.image}
                alt={`${founder.name}, ${founder.title}`}
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our founder"
                title="Built by Jason Doss-Carter."
                className="mb-8"
              />
              <p className={BODY_TEXT}>
                <ConfirmText text={FOUNDER_STORY} />
              </p>
              <BrokerCheckLink
                name={founder.name}
                url={founder.brokerCheckUrl}
                className="mt-6"
              />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper>
        <div className={CONTAINER}>
          <SectionHeading eyebrow="What guides us" title="Our values" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value) => (
              <IconCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Credentials */}
      <SectionWrapper surface>
        <div className={CONTAINER}>
          <Eyebrow>Credentials and affiliations</Eyebrow>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href={BROKERCHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-line px-6 py-3 text-sm text-foreground transition-colors hover:border-silver"
            >
              Member FINRA
            </a>
            {PENDING_CREDENTIALS.map((item) => (
              <div
                key={item}
                className="rounded-lg border border-line px-6 py-3 text-sm"
              >
                <ConfirmText text={item} />
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
