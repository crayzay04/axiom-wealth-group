import { NextResponse } from "next/server";
import { Resend } from "resend";
import { SERVICES } from "@/lib/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const ALLOWED_SERVICES = new Set(["", "Other", ...SERVICES.map((s) => s.title)]);

// Simple per-IP rate limit. In-memory is enough for this site's traffic; the
// map resets whenever the function instance is recycled.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );
  if (recent.length >= RATE_LIMIT_MAX) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);

  // Keep the map from growing without bound.
  if (hits.size > 1000) {
    for (const [key, times] of hits) {
      if (times.every((time) => now - time >= RATE_LIMIT_WINDOW_MS)) {
        hits.delete(key);
      }
    }
  }
  return false;
}

function field(value: unknown, maxLength: number): string | null {
  if (value === undefined || value === null) return "";
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length <= maxLength ? trimmed : null;
}

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return fail("Too many requests. Please try again in a few minutes.", 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return fail("Invalid request.", 400);
  }
  if (typeof body !== "object" || body === null) {
    return fail("Invalid request.", 400);
  }

  // Honeypot: report success so bots move on, but send nothing.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const name = field(body.name, 100);
  const email = field(body.email, 254);
  const phone = field(body.phone, 40);
  const service = field(body.service, 100);
  const message = field(body.message, 4000);

  if (
    name === null ||
    email === null ||
    phone === null ||
    service === null ||
    message === null
  ) {
    return fail("One or more fields are too long or malformed.", 400);
  }
  if (!name || !email || !message) {
    return fail("Please fill in your name, email, and message.", 400);
  }
  if (!EMAIL_PATTERN.test(email)) {
    return fail("Please enter a valid email address.", 400);
  }
  if (!ALLOWED_SERVICES.has(service)) {
    return fail("Please choose a service from the list.", 400);
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    console.error(
      "Contact form is not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL, and CONTACT_FROM_EMAIL."
    );
    return fail("Email delivery is not configured.", 503);
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `New contact form submission from ${name.replace(/[\r\n]+/g, " ")}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "Not provided"}`,
      `Service: ${service || "Not specified"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend failed to send contact email:", error);
    return fail("We could not send your message. Please try again.", 502);
  }

  return NextResponse.json({ ok: true });
}
