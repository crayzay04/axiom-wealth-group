"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import * as Icons from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import { VALUES } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      <HeroSection
        title="About Us"
        subtitle="We exist to bring clarity, strategy, and integrity to every financial decision."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
      />

      {/* Our Story */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
                alt="Axiom Wealth Group office"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted leading-relaxed">
                <p>
                  Axiom Wealth Group was founded in 1998 on a simple but
                  powerful conviction: that every individual and family deserves
                  access to the same caliber of financial guidance available to
                  institutions.
                </p>
                <p>
                  Our founder, James Harmon, spent the first decade of his
                  career at a major Wall Street firm. He saw firsthand how
                  conflicts of interest and product-driven models failed the
                  very people they were meant to serve. He left to build
                  something different — a firm where the client&apos;s interests
                  are not just prioritized, but are the only interests that
                  matter.
                </p>
                <p>
                  Today, Axiom manages over $2.4 billion in assets for more
                  than 500 families. We have grown deliberately, never
                  sacrificing the depth of our relationships for breadth. Each
                  client works with a dedicated advisory team that understands
                  their full financial picture — not just their portfolio.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission & Values */}
      <SectionWrapper className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Values
            </h2>
            <div className="w-16 h-0.5 gold-gradient-bg mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {VALUES.map((value, i) => {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const IconComponent = (Icons as any)[value.icon] || Icons.Star;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{
                    y: -4,
                    boxShadow: "0 0 30px rgba(201,168,76,0.15)",
                  }}
                  className="bg-card rounded-xl p-8 border border-border-gold"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                    <IconComponent className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-gold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted text-sm">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </SectionWrapper>

      {/* Credentials */}
      <SectionWrapper className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3
            className="text-center text-xs text-muted uppercase tracking-widest mb-8"
            style={{ letterSpacing: "0.15em" }}
          >
            Credentials & Affiliations
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              "CFP® Certified",
              "CPA Licensed",
              "FINRA Member",
              "SEC Registered RIA",
            ].map((badge) => (
              <div
                key={badge}
                className="border border-gold/20 rounded-lg px-6 py-3 text-sm text-muted"
              >
                {badge}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
