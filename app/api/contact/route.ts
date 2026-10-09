import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  generateContactEmailHtml,
  generateContactEmailText,
} from "@/lib/email-template";
import { checkRateLimit } from "@/lib/rate-limit";

// Primary recipient as specified in requirements
const RECIPIENT_EMAIL =
  process.env.CONTACT_RECIPIENT_EMAIL || "bluesurgeqatar974@gmail.com";

// Verified sender from environment or fallback to Resend testing domain
const DEFAULT_FROM_EMAIL =
  process.env.RESEND_FROM_EMAIL || "POGO Inquiries <onboarding@resend.dev>";

// Email regex pattern for basic RFC 5322 compliance
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;

// Phone number regex pattern allowing international formats
const PHONE_REGEX = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{5,25}$/;

export async function POST(request: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const forwarded = request.headers.get("x-forwarded-for");
    const realIp = request.headers.get("x-real-ip");
    const clientIp = forwarded
      ? forwarded.split(",")[0].trim()
      : realIp || "127.0.0.1";

    const { isAllowed, resetInSeconds } = checkRateLimit(clientIp, 10, 10 * 60 * 1000);
    if (!isAllowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many submissions. Please wait ${resetInSeconds} seconds before trying again.`,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(resetInSeconds),
          },
        }
      );
    }

    // 2. Parse and Validate Request Payload
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON payload received." },
        { status: 400 }
      );
    }

    const {
      name,
      phone,
      email,
      message,
      _hp, // Honeypot field
      website, // Alternate honeypot field
    } = body;

    // 3. Spam Protection (Honeypot)
    // If a bot filled out hidden honeypot fields, respond with success but do not send email
    if (
      (typeof _hp === "string" && _hp.trim().length > 0) ||
      (typeof website === "string" && website.trim().length > 0)
    ) {
      console.warn("[Contact API] Bot honeypot triggered from IP:", clientIp);
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been submitted successfully.",
      });
    }

    // 4. Server-Side Field Validation
    const errors: Record<string, string> = {};

    // Validate Name
    if (typeof name !== "string" || name.trim().length === 0) {
      errors.name = "Full name is required.";
    } else if (name.trim().length < 2) {
      errors.name = "Full name must be at least 2 characters long.";
    } else if (name.trim().length > 100) {
      errors.name = "Full name cannot exceed 100 characters.";
    }

    // Validate Phone Number
    if (typeof phone !== "string" || phone.trim().length === 0) {
      errors.phone = "Phone number is required.";
    } else {
      const cleanPhone = phone.trim();
      if (cleanPhone.length < 6) {
        errors.phone = "Phone number must be at least 6 digits.";
      } else if (cleanPhone.length > 30) {
        errors.phone = "Phone number cannot exceed 30 characters.";
      } else if (!PHONE_REGEX.test(cleanPhone)) {
        errors.phone = "Please enter a valid phone number.";
      }
    }

    // Validate Email Address
    if (typeof email !== "string" || email.trim().length === 0) {
      errors.email = "Email address is required.";
    } else {
      const cleanEmail = email.trim();
      if (cleanEmail.length > 254) {
        errors.email = "Email address is too long.";
      } else if (!EMAIL_REGEX.test(cleanEmail)) {
        errors.email = "Please provide a valid email address.";
      }
    }

    // Validate Message
    if (typeof message !== "string" || message.trim().length === 0) {
      errors.message = "Message is required.";
    } else if (message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters long.";
    } else if (message.trim().length > 3000) {
      errors.message = "Message cannot exceed 3000 characters.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed. Please check the entered information.",
          details: errors,
        },
        { status: 400 }
      );
    }

    // Cleaned sanitized input values
    const cleanName = (name as string).trim();
    const cleanPhone = (phone as string).trim();
    const cleanEmail = (email as string).trim();
    const cleanMessage = (message as string).trim();
    const submissionDate = new Date();

    // 5. Environment & Credentials Verification
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey === "re_your_actual_api_key" || apiKey.trim() === "") {
      console.error(
        "[Contact API] RESEND_API_KEY is not configured or contains placeholder value."
      );
      return NextResponse.json(
        {
          success: false,
          error:
            "Email service is currently not configured. Please contact us directly at " +
            RECIPIENT_EMAIL,
        },
        { status: 503 }
      );
    }

    // 6. Send Email via Resend SDK
    const resend = new Resend(apiKey);

    const emailHtml = generateContactEmailHtml({
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      message: cleanMessage,
      submittedAt: submissionDate,
    });

    const emailText = generateContactEmailText({
      name: cleanName,
      phone: cleanPhone,
      email: cleanEmail,
      message: cleanMessage,
      submittedAt: submissionDate,
    });

    const { data, error } = await resend.emails.send({
      from: DEFAULT_FROM_EMAIL,
      to: [RECIPIENT_EMAIL],
      replyTo: cleanEmail,
      subject: `New Contact Inquiry — ${cleanName}`,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error("[Contact API] Resend SDK error:", error.message);
      return NextResponse.json(
        {
          success: false,
          error:
            "We were unable to deliver your message at this time. Please try again or reach out directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been submitted successfully.",
      id: data?.id,
    });
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "An unexpected error occurred.";
    console.error("[Contact API] Unhandled server error:", errorMessage);

    return NextResponse.json(
      {
        success: false,
        error: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
