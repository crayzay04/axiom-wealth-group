"use client";

import { motion } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import ServiceCard from "@/components/ServiceCard";
import { SERVICES, PROCESS_STEPS } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <HeroSection
        title="Comprehensive Financial Services"
        subtitle="Every service we offer is designed to work together — a unified strategy built for your life."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
        ]}
      />

      {/* Services Grid */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard
                key={service.title}
                {...service}
                expanded
                index={i}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Process */}
      <SectionWrapper className="py-20 md:py-28 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Process
            </h2>
            <div className="w-16 h-0.5 gold-gradient-bg mx-auto mt-4" />
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Connector line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(12.5%+16px)] right-[calc(12.5%+16px)] h-0.5 bg-gold/20" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step, i) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 rounded-full gold-gradient-bg flex items-center justify-center mx-auto mb-4 text-background font-bold text-lg relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
