"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/constants";
import { BUTTON_PRIMARY } from "@/lib/ui";

const FIELD =
  "w-full bg-background border border-line rounded-lg px-4 py-3 text-foreground text-base transition-colors focus:outline-none focus:border-silver focus:ring-2 focus:ring-silver/40";

const LABEL = "block text-sm text-muted mb-1.5";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;

    // Honeypot: a hidden field real users never see. If it is filled, it is a
    // bot. Pretend success so the bot moves on, but do not submit anything.
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
      const res = await fetch("https://formspree.io/f/xvznoddq", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone: data.phone,
          service: data.service,
          message,
          _subject: `New contact form submission from ${name}`,
        }),
      });
      const result = await res.json().catch(() => null);
      if (!res.ok || !result?.ok) throw new Error("Request failed");
      setSubmitted(true);
    } catch {
      setError(
        "Something went wrong sending your message. Please try again, or email us directly."
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        role="status"
        className="bg-card rounded-xl border border-line p-10"
      >
        <h3 className="text-xl md:text-2xl font-heading font-semibold text-foreground mb-3">
          Thank you.
        </h3>
        <p className="text-base leading-[1.7] text-foreground">
          Your message has been received. A member of our team will be in touch
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot: hidden from humans, catches bots. Do not remove. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
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
        <label htmlFor="name" className={LABEL}>
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={FIELD}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="contact-email" className={LABEL}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="phone" className={LABEL}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={FIELD}
          />
        </div>
      </div>
      <div>
        <label htmlFor="service" className={LABEL}>
          What can we help you with?
        </label>
        <select id="service" name="service" className={FIELD}>
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
        <label htmlFor="message" className={LABEL}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${FIELD} resize-none`}
        />
      </div>
      {error && (
        <p
          role="alert"
          className="text-sm text-red-300 bg-red-400/10 border border-red-400/30 rounded-lg px-4 py-3"
        >
          {error}
        </p>
      )}
      <button
        type="submit"
        disabled={submitting}
        className={`${BUTTON_PRIMARY} w-full`}
      >
        {submitting ? "Sending…" : "Send Message"}
      </button>
    </form>
  );
}
