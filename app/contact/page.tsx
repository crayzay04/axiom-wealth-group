"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import { SITE, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <HeroSection
        title="Contact Us"
        subtitle="We would love to hear from you. Reach out to start a conversation about your financial future."
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
      />

      <SectionWrapper className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">
                      Address
                    </p>
                    <p className="text-muted text-sm">{SITE.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">Phone</p>
                    <p className="text-muted text-sm">{SITE.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">Email</p>
                    <p className="text-muted text-sm">{SITE.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 text-gold mt-0.5 shrink-0" />
                  <div>
                    <p className="text-foreground text-sm font-medium">Hours</p>
                    <p className="text-muted text-sm">{SITE.hours}</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 aspect-[4/3] bg-card rounded-xl border border-border-gold flex items-center justify-center">
                <p className="text-muted text-sm">Map coming soon</p>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {submitted ? (
                <div className="bg-card rounded-xl border border-gold/30 p-10 text-center">
                  <h3 className="text-2xl font-heading font-bold text-gold mb-3">
                    Thank You
                  </h3>
                  <p className="text-muted">
                    Your message has been received. A member of our team will be
                    in touch shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm text-muted mb-1.5"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm text-muted mb-1.5"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm text-muted mb-1.5"
                      >
                        Phone
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm text-muted mb-1.5"
                    >
                      What can we help you with?
                    </label>
                    <select
                      id="service"
                      name="service"
                      className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all"
                    >
                      <option value="">Select a service</option>
                      {SERVICES.map((s) => (
                        <option key={s.title} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm text-muted mb-1.5"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      className="w-full bg-background border border-border-gold rounded-lg px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold/50 transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-background font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>

      {/* Calendly CTA */}
      <SectionWrapper className="py-16 bg-bg-secondary">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
            Prefer to schedule directly?
          </h3>
          <p className="text-muted text-sm mb-6">
            Book a complimentary consultation at a time that works for you.
          </p>
          {/* <!-- Calendly embed will go here --> */}
          {/* <div id="calendly-embed-contact"></div> */}
          <div className="border border-border-gold rounded-xl p-10 text-muted text-sm">
            Calendly scheduling widget will be embedded here.
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
