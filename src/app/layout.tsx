import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { StickyCta } from "@/components/site/sticky-cta";
import { ExitIntentModal } from "@/components/site/exit-intent-modal";
import { AnalyticsScripts } from "@/components/site/analytics-scripts";
import { siteConfig } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  keywords: [
    "Patrika Media",
    "West Bengal growth marketing",
    "healthcare marketing",
    "education marketing",
    "hospitality marketing",
    "AI visibility",
    "WhatsApp automation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-background text-foreground font-sans">
        <Header />
        <main className="flex min-h-screen flex-col">{children}</main>
        <Footer />
        <StickyCta />
        <FloatingWhatsApp />
        <ExitIntentModal />
        <AnalyticsScripts />
      </body>
    </html>
  );
}
