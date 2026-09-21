import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import CalendlyEmbed from "@/components/CalendlyEmbed";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";
import { CONTAINER } from "@/lib/ui";

const DETAILS = [
  { icon: MapPin, label: "Address", value: SITE.address, href: SITE.mapsUrl },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phoneE164}` },
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Clock, label: "Hours", value: SITE.hours, href: null },
];

export default function ContactPage() {
  return (
    <>
      <HeroSection
        title="Contact"
        subtitle="Tell us what you are working toward. We will take it from there."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      {/* Book a time */}
      <SectionWrapper id="book" surface className="scroll-mt-20">
        <div className={CONTAINER}>
          <SectionHeading
            eyebrow="Schedule"
            title="Book a time"
            intro="Pick a time that works for you. A first meeting costs nothing and carries no obligation."
          />
          <CalendlyEmbed />
        </div>
      </SectionWrapper>

      {/* Details and form */}
      <SectionWrapper>
        <div className={CONTAINER}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <SectionHeading
                eyebrow="Visit or call"
                title="Get in touch"
                className="mb-10"
              />
              <dl className="space-y-6">
                {DETAILS.map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <Icon
                      className="w-5 h-5 text-silver mt-1 shrink-0"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-sm text-muted">{label}</dt>
                      <dd className="text-base text-foreground">
                        {href ? (
                          <a
                            href={href}
                            className="transition-colors hover:text-silver"
                            {...(href.startsWith("http")
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                          >
                            {value}
                          </a>
                        ) : (
                          value
                        )}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>

              {/* Map */}
              <a
                href={SITE.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 block aspect-[4/3] rounded-xl border border-line overflow-hidden transition-colors hover:border-line-gold"
                aria-label="Open Axiom Wealth Group location in Google Maps"
              >
                <iframe
                  title={`${SITE.name}, ${SITE.address}`}
                  src={SITE.mapsEmbedUrl}
                  className="w-full h-full border-0 pointer-events-none grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
            </div>

            <div>
              <SectionHeading
                eyebrow="Write to us"
                title="Send a message"
                className="mb-10"
              />
              <ContactForm />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
