"use client";

import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import TestimonialCard from "@/components/TestimonialCard";
import { TESTIMONIALS } from "@/lib/constants";

export default function TestimonialsPage() {
  return (
    <>
      <HeroSection
        title="Client Stories"
        subtitle="The measure of our success is the peace of mind of our clients."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Testimonials", href: "/testimonials" },
        ]}
      />

      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <TestimonialCard key={t.name} {...t} index={i} />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Trust Badges */}
      <SectionWrapper className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-lg font-heading text-foreground mb-6">
            Trusted By Families Across the Country
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 text-gold">
            <span className="text-sm font-semibold">$2.4B AUM</span>
            <span className="text-gold/30">|</span>
            <span className="text-sm font-semibold">500+ Clients</span>
            <span className="text-gold/30">|</span>
            <span className="text-sm font-semibold">25+ Years</span>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
