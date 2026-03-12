import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, message } = await request.json();

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Sanitize and check API key at runtime
    const apiKey = (process.env.RESEND_API_KEY || "placeholder").trim();

    if (!apiKey || apiKey === "placeholder") {
      console.error("RESEND_API_KEY not configured");
      return NextResponse.json(
        { error: "Email service not configured. Please contact directly." },
        { status: 503 }
      );
    }

    // Initialize Resend client with sanitized API key
    const resend = new Resend(apiKey);

    // Send email using Resend
    await resend.emails.send({
      from: "Ducati Inquiries <inquiries@boothbeacon.org>",
      to: "jascha@kaykas.com",
      replyTo: email,
      subject: `Ducati Scrambler Inquiry from ${name}`,
      html: `
        <h2>New Inquiry for 2017 Ducati Scrambler Café Racer</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
