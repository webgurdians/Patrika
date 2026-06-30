import type { MetadataRoute } from "next";
import { getBlogPosts } from "@/lib/content";
import { caseStudies, industries, servicePillars, siteConfig } from "@/lib/site-data";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getBlogPosts();
  const staticPages = [
    "",
    "/about",
    "/services",
    "/industries",
    "/case-studies",
    "/resources",
    "/blog",
    "/contact",
    "/privacy-policy",
    "/terms",
    "/ai-visibility",
    "/chatgpt-optimization",
    "/gemini-optimization",
    "/llm-seo",
    "/generative-engine-optimization",
  ];

  return [
    ...staticPages.map((path) => ({ url: `${siteConfig.url}${path}`, lastModified: new Date() })),
    ...servicePillars.map((service) => ({ url: `${siteConfig.url}/services/${service.slug}`, lastModified: new Date() })),
    ...industries.map((industry) => ({ url: `${siteConfig.url}/industries/${industry.slug}`, lastModified: new Date() })),
    ...caseStudies.map((study) => ({ url: `${siteConfig.url}/case-studies/${study.slug}`, lastModified: new Date() })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/blog/${post.slug}`, lastModified: new Date(post.publishedAt) })),
  ];
}
