"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, SITE } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection
        title="Clarity in Every Decision."
        subtitle={SITE.description}
        showCTA
        showScroll
        fullHeight
      />

      {/* Services Preview */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What We Do
            </h2>
            <div className="w-16 h-0.5 gold-gradient-bg mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="group inline-flex items-center gap-1 text-gold text-sm border-b border-gold/30 hover:border-gold transition-all pb-1"
            >
              View All Services
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Why Axiom */}
      <SectionWrapper className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop"
                alt="Client meeting"
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
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                A Personalized Approach
              </h3>
              <p className="text-muted leading-relaxed">
                No two families share the same financial picture. At Axiom, we
                begin every relationship by listening — deeply and
                intentionally. Your plan is built from the ground up, reflecting
                your unique circumstances, aspirations, and values. We do not
                believe in templates or one-size-fits-all strategies.
              </p>
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="order-2 md:order-1"
            >
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Built on Trust and Transparency
              </h3>
              <p className="text-muted leading-relaxed">
                Putting your interests first is the foundation of how we work.
                Transparency is woven into our culture. Every fee is disclosed,
                every strategy explained, and every decision made
                collaboratively with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative aspect-[4/3] rounded-xl overflow-hidden order-1 md:order-2"
            >
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&h=600&fit=crop"
                alt="Trust and transparency"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Banner */}
      <section className="py-20 md:py-28 relative overflow-hidden bg-card">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, rgba(201,168,76,0.12), rgba(201,168,76,0.06), rgba(201,168,76,0.12))",
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px" }}
          transition={{ duration: 0.7 }}
          className="relative z-10 max-w-3xl mx-auto px-4 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Ready to take control of your financial future?
          </h2>
          <Link
            href="/contact"
            className="inline-block gold-gradient-bg text-background font-semibold px-10 py-4 rounded-lg transition-all duration-200 hover:opacity-90 hover:scale-[1.03] hover:shadow-[0_0_32px_rgba(201,168,76,0.45)] active:scale-[0.98]"
          >
            Schedule Your Free Consultation
          </Link>
          <p className="text-muted text-sm mt-4">
            No commitment required. Appointments available in-person or
            virtually.
          </p>
          {/* <!-- Calendly embed will go here --> */}
          {/* <div id="calendly-placeholder"></div> */}
        </motion.div>
      </section>
    </>
  );
}
