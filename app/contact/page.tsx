"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import SectionWrapper from "@/components/SectionWrapper";
import { SITE, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;

    // Honeypot: a hidden field real users never see. If it's filled, it's a bot —
    // pretend success so the bot moves on, but don't submit anything.
    if (data.website) {
      setSubmitted(true);
      return;
    }

    const name = data.name?.trim();
    const email = data.email?.trim();
    const message = data.message?.trim();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");

    if (!name || !email || !message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    if (!emailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, name, email, message }),
      });
      if (!res.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your message. Please try again, or email us directly."
      );
    } finally {
      setSubmitting(false);
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

              {/* Map */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=5501%20Ming%20Avenue%20Suite%20265%20Bakersfield%20CA%2093309"
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 block aspect-[4/3] rounded-xl border border-border-gold overflow-hidden hover:border-gold/50 transition-colors"
                aria-label="Open Axiom Wealth Group location in Google Maps"
              >
                <iframe
                  title="Axiom Wealth Group — 5501 Ming Avenue, Suite 265, Bakersfield, CA 93309"
                  src="https://www.google.com/maps?q=5501%20Ming%20Avenue%20Suite%20265%20Bakersfield%20CA%2093309&output=embed"
                  className="w-full h-full pointer-events-none grayscale-[0.2] transition-all duration-300 group-hover:grayscale-0"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </a>
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
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  {/* Honeypot — hidden from humans, catches bots. Do not remove. */}
                  <div
                    aria-hidden="true"
                    style={{
                      position: "absolute",
                      left: "-9999px",
                      width: 1,
                      height: 1,
                      overflow: "hidden",
                    }}
                  >
                    <label htmlFor="website">Leave this field empty</label>
                    <input
                      id="website"
                      name="website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
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
                  {error && (
                    <p
                      role="alert"
                      className="text-sm text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3"
                    >
                      {error}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full gold-gradient-bg text-background font-semibold py-3 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
