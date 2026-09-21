import Link from "next/link";
import AxiomLogo from "./AxiomLogo";
import ConfirmText from "./ConfirmText";
import {
  SITE,
  FOOTER_LINKS,
  BROKERCHECK_URL,
  BROKERCHECK_LINE,
  DISCLOSURE_TEXT,
} from "@/lib/constants";

const COLUMNS = [
  { heading: "Company", links: FOOTER_LINKS.company },
  { heading: "Services", links: FOOTER_LINKS.services },
  { heading: "Legal", links: FOOTER_LINKS.legal },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-line">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <AxiomLogo className="w-9 h-9" />
              <span className="text-foreground font-heading text-base tracking-[0.15em]">
                AXIOM WEALTH GROUP
              </span>
            </div>
            <p className="text-foreground italic font-heading text-lg mb-4">
              {SITE.tagline}
            </p>
            <address className="text-muted text-sm leading-relaxed not-italic">
              {SITE.address}
              <br />
              <a
                href={`tel:${SITE.phoneE164}`}
                className="hover:text-foreground transition-colors"
              >
                {SITE.phone}
              </a>
              <br />
              <a
                href={`mailto:${SITE.email}`}
                className="hover:text-foreground transition-colors"
              >
                {SITE.email}
              </a>
            </address>
          </div>

          {COLUMNS.map((column) => (
            <nav key={column.heading} aria-label={column.heading}>
              <h2 className="font-body text-xs text-silver uppercase tracking-[0.18em] mb-4">
                {column.heading}
              </h2>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>

      {/* BrokerCheck and disclosures */}
      <div className="border-t border-line">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-4">
          <p className="text-sm text-foreground">
            <a
              href={BROKERCHECK_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-silver hover:decoration-foreground transition-colors"
            >
              {BROKERCHECK_LINE}
            </a>
            .
          </p>
          <p className="text-[13px] text-muted leading-relaxed max-w-[72ch] text-left">
            <ConfirmText text={DISCLOSURE_TEXT} />
          </p>
          <p className="text-[13px] text-muted">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
