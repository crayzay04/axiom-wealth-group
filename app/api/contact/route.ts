import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Log the contact form submission
  // Replace with SendGrid, Resend, or other email service later
  console.log("--- Contact Form Submission ---");
  console.log("Name:", body.name);
  console.log("Email:", body.email);
  console.log("Phone:", body.phone);
  console.log("Service:", body.service);
  console.log("Message:", body.message);
  console.log("-------------------------------");

  return NextResponse.json({ success: true });
}
