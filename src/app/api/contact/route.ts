import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod
    const parsed = contactFormSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, company, subject, message } = parsed.data;

    // 1) Save to NeonDB
    if (process.env.DATABASE_URL) {
      try {
        const { getDb } = await import("@/lib/db");
        const sql = getDb();
        await sql`
          INSERT INTO contact_submissions (name, email, company, subject, message, status, ip_address)
          VALUES (${name}, ${email}, ${company || null}, ${subject}, ${message}, 'pending', ${request.headers.get("x-forwarded-for") || null})
        `;
      } catch (dbErr) {
        console.error("NeonDB error (non-fatal):", dbErr);
      }
    }

    // 2) Send notification + auto-reply via Nodemailer
    if (process.env.SMTP_EMAIL && process.env.SMTP_PASSWORD) {
      try {
        const { sendMail, SMTP_EMAIL } = await import("@/lib/mailer");

        // Notification email to Sahid
        await sendMail({
          to: SMTP_EMAIL,
          subject: `[Portfolio] New Message: ${subject}`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #7c3aed;">New Contact Form Submission</h2>
              <table style="width:100%; border-collapse:collapse;">
                <tr><td style="padding:8px;font-weight:600;color:#555;">Name</td><td style="padding:8px;">${name}</td></tr>
                <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:600;color:#555;">Email</td><td style="padding:8px;">${email}</td></tr>
                ${company ? `<tr><td style="padding:8px;font-weight:600;color:#555;">Company</td><td style="padding:8px;">${company}</td></tr>` : ""}
                <tr style="background:#f9f9f9;"><td style="padding:8px;font-weight:600;color:#555;">Subject</td><td style="padding:8px;">${subject}</td></tr>
              </table>
              <div style="margin-top:16px;padding:16px;background:#f4f4f4;border-radius:8px;">
                <p style="font-weight:600;color:#555;margin:0 0 8px;">Message:</p>
                <p style="margin:0;line-height:1.7;">${message}</p>
              </div>
            </div>
          `,
        });

        // Auto-reply to sender
        await sendMail({
          to: email,
          subject: `Thanks for reaching out, ${name}! — Md. Sahid`,
          html: `
            <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
              <div style="background: linear-gradient(135deg, #7c3aed, #06b6d4); padding: 32px; border-radius: 16px; text-align:center; margin-bottom:24px;">
                <h1 style="color:white;margin:0;font-size:28px;">Md. Sahid</h1>
                <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;">Data Operations Analyst & AI Engineer</p>
              </div>
              <h2>Thanks for your message, ${name}! 👋</h2>
              <p style="line-height:1.7;color:#555;">I've received your message about <strong>"${subject}"</strong> and I'll get back to you within 24 hours.</p>
              <p style="line-height:1.7;color:#555;">In the meantime, feel free to explore my portfolio or connect with me on GitHub.</p>
              <div style="margin-top:24px;">
                <a href="https://github.com/msahid-cse" style="display:inline-block;background:#7c3aed;color:white;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:600;">View GitHub →</a>
              </div>
              <hr style="margin:32px 0;border:none;border-top:1px solid #eee;">
              <p style="font-size:12px;color:#999;">Dhaka, Bangladesh · msahid.cse@gmail.com</p>
            </div>
          `,
        });
      } catch (emailErr) {
        console.error("Nodemailer error (non-fatal):", emailErr);
      }
    }

    return NextResponse.json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
