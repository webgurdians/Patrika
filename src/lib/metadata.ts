import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-data";

export function buildMetadata({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "google-site-verification": "Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I",
    },
  };
}

export function generateSchema(type: "Organization" | "LocalBusiness" | "WebSite") {
  if (type === "Organization" || type === "LocalBusiness") {
    return {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": siteConfig.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/icon.png`,
      "image": `${siteConfig.url}/icon.png`,
      "email": siteConfig.email,
      "telephone": siteConfig.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "addressCountry": "IN",
      },
      "sameAs": [
        "https://github.com/webgurdians/Patrika",
      ],
      "priceRange": "$$",
    };
  }
  
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.name,
    "url": siteConfig.url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${siteConfig.url}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}
