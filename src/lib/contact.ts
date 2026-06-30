"use server";

import fs from "node:fs/promises";
import path from "node:path";
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
});

async function storeLead(lead: z.infer<typeof leadSchema>) {
  const targetDir = path.join(process.cwd(), "data");
  const targetFile = path.join(targetDir, "leads.json");
  await fs.mkdir(targetDir, { recursive: true });

  let current: Array<Record<string, string>> = [];
  try {
    current = JSON.parse(await fs.readFile(targetFile, "utf8")) as Array<Record<string, string>>;
  } catch {
    current = [];
  }

  current.push({
    ...lead,
    submittedAt: new Date().toISOString(),
  });

  await fs.writeFile(targetFile, JSON.stringify(current, null, 2));
}

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

  await fetch("https://api.resend.com/emails", {
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
  });

  if (!parsed.success) {
    throw new Error("Please complete all required fields with valid details.");
  }

  await storeLead(parsed.data);

  const ownerEmail = process.env.LEAD_NOTIFICATION_EMAIL;
  if (ownerEmail) {
    await sendResendEmail({
      to: ownerEmail,
      subject: `New Patrika lead from ${parsed.data.name}`,
      html: `<p><strong>Company:</strong> ${parsed.data.company}</p><p><strong>Industry:</strong> ${parsed.data.industry}</p><p><strong>Budget:</strong> ${parsed.data.budget}</p><p>${parsed.data.message}</p>`,
    });
  }

  await sendResendEmail({
    to: parsed.data.email,
    subject: "Your strategy session request has been received",
    html: `<p>Thanks ${parsed.data.name}, we received your enquiry and will reach out shortly.</p>`,
  });

  redirect("/thank-you");
}
