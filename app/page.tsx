"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import StatCounter from "@/components/StatCounter";
import ServiceCard from "@/components/ServiceCard";
import { STATS, SERVICES, SITE } from "@/lib/constants";
import { Marquee } from "@/components/ui/3d-testimonials";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const MARQUEE_TESTIMONIALS = [
  {
    name: "Michael T.",
    role: "Retired Executive",
    quote: "Axiom completely transformed how we think about our finances. For the first time, every piece of our plan is working together.",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Sandra M.",
    role: "Business Owner",
    quote: "After years with large firms where I felt like a number, Axiom was a breath of fresh air. They truly know our family.",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Robert & Linda K.",
    role: "Retirees",
    quote: "The tax strategies alone saved us more than we expected. But beyond the numbers, the team genuinely cares.",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Daniel W.",
    role: "Entrepreneur",
    quote: "When I sold my company, I needed a team I could trust. Axiom developed a plan that gave me confidence for generations.",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Patricia H.",
    role: "Physician",
    quote: "What sets Axiom apart is their transparency. Every decision is explained, every fee is clear. It is exactly what a financial relationship should be.",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Jennifer & Mark S.",
    role: "Educators",
    quote: "We came during a major life transition and they handled everything with incredible sensitivity. They helped us find clarity.",
    img: "https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Thomas B.",
    role: "Corporate Executive",
    quote: "The estate planning guidance alone was worth every dollar. Axiom made a complex process feel completely manageable.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "Angela R.",
    role: "Small Business Owner",
    quote: "I had never had an advisor who looked at the full picture — business and personal together. Axiom changed that.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    name: "George L.",
    role: "Real Estate Investor",
    quote: "Sophisticated strategies explained in plain language. That is the Axiom difference. I finally feel in control.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
];

function TestimonialMarqueeCard({
  img,
  name,
  role,
  quote,
}: {
  img: string;
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <Card className="w-52 bg-card border-gold/20">
      <CardContent className="pt-4">
        <div className="flex items-center gap-2 mb-3">
          <Avatar className="size-8 border border-gold/20">
            <AvatarImage src={img} alt={name} />
            <AvatarFallback>{name[0]}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-xs font-semibold text-foreground leading-tight">{name}</p>
            <p className="text-[10px] text-gold leading-tight">{role}</p>
          </div>
        </div>
        <div className="flex gap-0.5 mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="w-2.5 h-2.5 text-gold fill-gold" />
          ))}
        </div>
        <blockquote className="text-[11px] text-muted leading-relaxed line-clamp-4">
          &ldquo;{quote}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
}

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

      {/* Stats Bar */}
      <SectionWrapper className="py-16 bg-bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-x divide-gold/20">
            {STATS.map((stat) => (
              <StatCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </SectionWrapper>

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
                We are a fiduciary firm — meaning we are legally obligated to
                act in your best interest. Beyond compliance, transparency is
                woven into our culture. Every fee is disclosed, every strategy
                explained, and every decision made collaboratively with you.
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

      {/* Testimonials — 3D Marquee */}
      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              What Our Clients Say
            </h2>
            <div className="w-16 h-0.5 gold-gradient-bg mx-auto mt-4" />
          </div>
        </div>

        {/* 3D Marquee container */}
        <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden gap-1.5 [perspective:300px]">
          <div
            className="flex flex-row items-center gap-4"
            style={{
              transform:
                "translateX(-40px) translateY(0px) translateZ(-40px) rotateX(8deg) rotateY(-3deg) rotateZ(6deg)",
            }}
          >
            <Marquee vertical pauseOnHover repeat={2} className="[--duration:35s]">
              {MARQUEE_TESTIMONIALS.map((t) => (
                <TestimonialMarqueeCard key={t.name} {...t} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={2} className="[--duration:35s]">
              {MARQUEE_TESTIMONIALS.map((t) => (
                <TestimonialMarqueeCard key={t.name + "-r"} {...t} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover repeat={2} className="[--duration:35s] hidden md:flex">
              {MARQUEE_TESTIMONIALS.map((t) => (
                <TestimonialMarqueeCard key={t.name + "-2"} {...t} />
              ))}
            </Marquee>
            <Marquee vertical pauseOnHover reverse repeat={2} className="[--duration:35s] hidden lg:flex">
              {MARQUEE_TESTIMONIALS.map((t) => (
                <TestimonialMarqueeCard key={t.name + "-3"} {...t} />
              ))}
            </Marquee>
          </div>
          {/* Gradient fade edges */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-background" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background" />
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background" />
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
