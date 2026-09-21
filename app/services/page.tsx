import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTABanner from "@/components/CTABanner";
import { SERVICES, SERVICE_PILLARS } from "@/lib/constants";
import { CONTAINER } from "@/lib/ui";

const PILLAR_LABELS = ["Pillar one", "Pillar two", "Pillar three"];

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wealth management, retirement, cash flow, insurance, estate, tax, and business financial planning, organized as one plan: Plan, Protect, Optimize.",
};

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Services"
        title="Plan. Protect. Optimize."
        subtitle="Every service we offer is designed to work together as one strategy built around your life."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {SERVICE_PILLARS.map((pillar, i) => (
        <SectionWrapper
          key={pillar.id}
          id={pillar.id}
          surface={i % 2 === 0}
          className="scroll-mt-20"
        >
          <div className={CONTAINER}>
            <SectionHeading
              eyebrow={PILLAR_LABELS[i]}
              title={pillar.title}
              intro={pillar.intro}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.filter((service) =>
                pillar.services.includes(service.title)
              ).map((service) => (
                <ServiceCard key={service.title} {...service} />
              ))}
            </div>
          </div>
        </SectionWrapper>
      ))}

      <CTABanner />
    </>
  );
}
