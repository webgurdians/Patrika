"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(8),
  email: z.string().email(),
  company: z.string().min(2),
  industry: z.string().min(2),
  budget: z.string().min(2),
  message: z.string().min(10),
  intent: z.string().min(2).default("Strategy Session"),
});

async function sendResendEmail({
  subject,
  html,
  to,
}: {
  subject: string;
  html: string;
  to: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  if (!apiKey || !from) return;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send lead notification email.");
  }
}

async function sendLeadToWebhook(lead: z.infer<typeof leadSchema>) {
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (!webhookUrl) return;

  const response = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...lead,
      source: "patrikamedia.in",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error("Unable to send lead to the configured CRM webhook.");
  }
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };
    return entities[character];
  });
}

export async function submitLeadAction(formData: FormData) {
  const parsed = leadSchema.safeParse({
    name: formData.get("name"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    company: formData.get("company"),
    industry: formData.get("industry"),
    budget: formData.get("budget"),
    message: formData.get("message"),
    intent: formData.get("intent") || "Strategy Session",
  });

  if (!parsed.success) {
    throw new Error("Please complete all required fields with valid details.");
  }

  await sendLeadToWebhook(parsed.data);

  const ownerEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  if (ownerEmail) {
    await sendResendEmail({
      to: ownerEmail,
      subject: `New Patrika ${parsed.data.intent} lead from ${parsed.data.name}`,
      html: `
        <p><strong>Intent:</strong> ${escapeHtml(parsed.data.intent)}</p>
        <p><strong>Name:</strong> ${escapeHtml(parsed.data.name)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(parsed.data.phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(parsed.data.email)}</p>
        <p><strong>Company:</strong> ${escapeHtml(parsed.data.company)}</p>
        <p><strong>Industry:</strong> ${escapeHtml(parsed.data.industry)}</p>
        <p><strong>Budget:</strong> ${escapeHtml(parsed.data.budget)}</p>
        <p><strong>Message:</strong> ${escapeHtml(parsed.data.message)}</p>
      `,
    });
  }

  await sendResendEmail({
    to: parsed.data.email,
    subject: `Your Patrika ${parsed.data.intent.toLowerCase()} request has been received`,
    html: `<p>Thanks ${escapeHtml(parsed.data.name)}, we received your enquiry and will reach out shortly.</p>`,
  });

  redirect("/thank-you");
}
