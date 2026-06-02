import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: real users never fill this. Silently accept so bots don't retry,
  // but do not process the submission.
  if (body.website) {
    return NextResponse.json({ success: true });
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email ?? "");

  if (!name || !email || !message || !emailValid) {
    return NextResponse.json(
      { error: "Missing or invalid fields." },
      { status: 400 }
    );
  }

  // TODO: Replace this log with a real email service (Resend, SendGrid, etc.).
  // Submissions currently only appear in server logs and are not delivered.
  console.log("--- Contact Form Submission ---");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Phone:", body.phone);
  console.log("Service:", body.service);
  console.log("Message:", message);
  console.log("-------------------------------");

  return NextResponse.json({ success: true });
}
