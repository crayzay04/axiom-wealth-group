"use client";

import Link from "next/link";
import AxiomLogo from "./AxiomLogo";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <AxiomLogo className="w-9 h-9" />
              <span
                className="text-foreground font-heading text-base tracking-widest"
                style={{ letterSpacing: "0.15em" }}
              >
                AXIOM WEALTH GROUP
              </span>
            </div>
            <p className="text-gold italic font-heading text-lg mb-4">
              {SITE.tagline}
            </p>
            <p className="text-muted text-sm leading-relaxed max-w-sm">
              {SITE.address}
              <br />
              {SITE.phone}
              <br />
              {SITE.email}
            </p>
          </div>

          {/* Company */}
          <div>
            <h4
              className="text-xs text-muted uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.15em" }}
            >
              Company
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-xs text-muted uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.15em" }}
            >
              Services
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs text-muted uppercase tracking-widest mb-4"
              style={{ letterSpacing: "0.15em" }}
            >
              Legal
            </h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted text-xs">
              © 2025 Axiom Wealth Group. All rights reserved. |{" "}
              <Link href="#" className="hover:text-gold transition-colors">
                Privacy Policy
              </Link>{" "}
              |{" "}
              <Link href="#" className="hover:text-gold transition-colors">
                Disclaimer
              </Link>
            </p>
          </div>
          <p className="text-muted/50 text-[10px] mt-4 leading-relaxed max-w-4xl">
            Axiom Wealth Group is a registered investment advisor. Information
            presented is for educational purposes only and does not intend to
            make an offer or solicitation for the sale or purchase of any
            specific securities, investments, or investment strategies.
            Investments involve risk and, unless otherwise stated, are not
            guaranteed. Past performance is not indicative of future results.
            Registration with the SEC does not imply a certain level of skill or
            training. FINRA member. SIPC protected.
          </p>
        </div>
      </div>
    </footer>
  );
}
