/**
 * Email template generation and HTML sanitization utilities for Contact Form inquiries.
 */

/**
 * Escapes HTML characters to prevent HTML injection (XSS) in email clients.
 */
export function escapeHtml(unsafe: string): string {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export interface ContactEmailPayload {
  name: string;
  phone: string;
  email: string;
  message: string;
  submittedAt: Date;
}

/**
 * Formats submission date nicely with both Qatar AST (UTC+3) and UTC context.
 */
export function formatSubmissionDate(date: Date): string {
  try {
    const qatarFormatted = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
      timeZone: "Asia/Qatar",
    }).format(date);

    return `${qatarFormatted} (AST, GMT+3)`;
  } catch {
    return date.toUTCString();
  }
}

/**
 * Generates an elegant, responsive HTML email template for Blue Surge / POGO inquiries.
 */
export function generateContactEmailHtml(payload: ContactEmailPayload): string {
  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone);
  const safeMessage = escapeHtml(payload.message).replace(/\r\n|\n|\r/g, "<br />");
  const formattedDate = formatSubmissionDate(payload.submittedAt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Inquiry — ${safeName}</title>
</head>
<body style="margin: 0; padding: 0; background-color: #FAF8F3; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; color: #282820; line-height: 1.6;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF8F3; padding: 32px 16px;">
    <tr>
      <td align="center">
        <!-- Main Email Container -->
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; background-color: #ffffff; border-radius: 20px; overflow: hidden; border: 1px solid #E9E1D3; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);">
          
          <!-- Header Banner -->
          <tr>
            <td style="background-color: #282820; padding: 32px 32px 28px 32px; text-align: left;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td>
                    <span style="display: inline-block; background-color: rgba(216, 195, 155, 0.18); border: 1px solid #D8C39B; color: #D8C39B; font-size: 11px; font-weight: 700; letter-spacing: 0.18em; text-transform: uppercase; padding: 4px 12px; border-radius: 9999px;">
                      Official Contact Inquiry
                    </span>
                    <h1 style="margin: 14px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 700; letter-spacing: -0.01em;">
                      BLUE SURGE TRADING &amp; CONTRACTING
                    </h1>
                    <p style="margin: 4px 0 0 0; color: #D8C39B; font-size: 13px; font-weight: 500;">
                      POGO Smartwatches Qatar
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Intro Content -->
          <tr>
            <td style="padding: 32px 32px 20px 32px;">
              <h2 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #282820;">
                New Website Contact Inquiry
              </h2>
              <p style="margin: 0 0 24px 0; color: #817969; font-size: 15px; line-height: 1.5;">
                A new customer has submitted the contact form on your website. Below are the details of their message.
              </p>

              <!-- Customer Details Card -->
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color: #FAF8F3; border: 1px solid #E9E1D3; border-radius: 14px; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 20px 24px;">
                    <p style="margin: 0 0 16px 0; font-size: 12px; font-weight: 700; color: #9A7940; text-transform: uppercase; letter-spacing: 0.12em;">
                      Customer Details
                    </p>

                    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td width="90" style="padding: 6px 0; font-size: 13px; color: #817969; font-weight: 600; vertical-align: top;">Name:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #282820; font-weight: 600;">${safeName}</td>
                      </tr>
                      <tr>
                        <td width="90" style="padding: 6px 0; font-size: 13px; color: #817969; font-weight: 600; vertical-align: top;">Phone:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #282820;">
                          <a href="tel:${safePhone}" style="color: #9A7940; text-decoration: none; font-weight: 600;">
                            ${safePhone}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="90" style="padding: 6px 0; font-size: 13px; color: #817969; font-weight: 600; vertical-align: top;">Email:</td>
                        <td style="padding: 6px 0; font-size: 14px; color: #282820;">
                          <a href="mailto:${safeEmail}" style="color: #9A7940; text-decoration: none; font-weight: 600;">
                            ${safeEmail}
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td width="90" style="padding: 6px 0; font-size: 13px; color: #817969; font-weight: 600; vertical-align: top;">Date:</td>
                        <td style="padding: 6px 0; font-size: 13px; color: #555047;">${formattedDate}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Customer Message Box -->
              <p style="margin: 0 0 10px 0; font-size: 12px; font-weight: 700; color: #9A7940; text-transform: uppercase; letter-spacing: 0.12em;">
                Message
              </p>
              <div style="background-color: #ffffff; border: 1px solid #E9E1D3; border-left: 4px solid #B89555; border-radius: 10px; padding: 20px; font-size: 14px; line-height: 1.7; color: #282820; margin-bottom: 28px;">
                ${safeMessage}
              </div>

              <!-- Quick Reply Actions -->
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-bottom: 8px;">
                <tr>
                  <td style="padding-right: 12px;">
                    <a href="mailto:${safeEmail}?subject=Re:%20Your%20POGO%20Smartwatch%20Inquiry" style="display: inline-block; background-color: #282820; color: #ffffff; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 24px; border-radius: 9999px;">
                      Reply via Email
                    </a>
                  </td>
                  <td>
                    <a href="tel:${safePhone}" style="display: inline-block; background-color: #FAF8F3; border: 1px solid #D8C39B; color: #282820; font-size: 13px; font-weight: 600; text-decoration: none; padding: 12px 20px; border-radius: 9999px;">
                      Call Customer
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #FAF8F3; border-top: 1px solid #E9E1D3; padding: 24px 32px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #817969; line-height: 1.5;">
                This inquiry was submitted from the official POGO contact form.<br />
                Destination: <strong style="color: #555047;">bluesurgeqatar974@gmail.com</strong>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates a clean plain text fallback email version.
 */
export function generateContactEmailText(payload: ContactEmailPayload): string {
  const formattedDate = formatSubmissionDate(payload.submittedAt);

  return `New Website Contact Inquiry

A new customer has submitted the contact form on your website.

Customer Details
* Name: ${payload.name}
* Phone: ${payload.phone}
* Email: ${payload.email}
* Date: ${formattedDate}

Message:
${payload.message}

---
Submitted from the Blue Surge / POGO Contact Form.
Recipient: bluesurgeqatar974@gmail.com
`;
}
