import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ConfirmText from "@/components/ConfirmText";
import {
  BROKERCHECK_URL,
  BROKERCHECK_LINE,
  DISCLOSURE_TEXT,
} from "@/lib/constants";

export const metadata: Metadata = {
  title: "Disclosures",
  description:
    "Regulatory disclosures for Axiom Wealth Group: FINRA BrokerCheck, Form CRS, privacy policy, business continuity, and general disclaimer.",
};

const SECTIONS = [
  {
    id: "brokercheck",
    title: "BrokerCheck",
    body: "Axiom Wealth Group is a member of FINRA. BrokerCheck is a free tool from FINRA that lets you research the professional background of firms and registered individuals.",
    link: { label: BROKERCHECK_LINE, href: BROKERCHECK_URL },
  },
  {
    id: "form-crs",
    title: "Form CRS",
    body: "Form CRS (Customer Relationship Summary) applies to broker-dealers serving retail customers. It describes the services offered, fees and costs, conflicts of interest, and disciplinary history in plain language. [[CONFIRM: Form CRS PDF]]",
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    body: "[[CONFIRM: privacy policy text]]",
  },
  {
    id: "business-continuity",
    title: "Business Continuity",
    body: "[[CONFIRM: business continuity summary]]",
  },
  {
    id: "disclaimer",
    title: "General Disclaimer",
    body: DISCLOSURE_TEXT,
  },
];

export default function DisclosuresPage() {
  return (
    <>
      <HeroSection
        eyebrow="Legal"
        title="Disclosures"
        subtitle="Regulatory information about Axiom Wealth Group and this website."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Disclosures", href: "/disclosures" },
        ]}
      />

      <section className="py-24 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[72ch] space-y-16">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="scroll-mt-28"
              >
                <h2 className="text-3xl md:text-4xl font-heading font-semibold text-foreground">
                  {section.title}
                </h2>
                <div className="w-10 h-px bg-silver mt-4 mb-6" />
                <p className="text-base md:text-[17px] leading-[1.7] text-foreground">
                  <ConfirmText text={section.body} />
                </p>
                {section.link && (
                  <p className="mt-4 text-base md:text-[17px] leading-[1.7]">
                    <a
                      href={section.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground underline underline-offset-4 decoration-silver hover:decoration-foreground transition-colors"
                    >
                      {section.link.label}
                    </a>
                    .
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
