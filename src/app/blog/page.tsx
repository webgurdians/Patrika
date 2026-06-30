import Link from "next/link";
import { PageHero } from "@/components/site/page-hero";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPosts } from "@/lib/content";

export const metadata = buildMetadata({
  title: "Blog",
  description: "Marketing, healthcare growth, hospitality, AI visibility, and automation insights from Patrika.",
  path: "/blog",
});

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Editorial content built for search, authority, and AI visibility."
        description="Launch-ready articles across marketing, healthcare growth, education, hospitality, automation, and AI-driven discovery."
      />
      <section className="section-shell grid gap-6 pb-20 lg:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="card-border rounded-[2rem] p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-gold">{post.category}</p>
            <h2 className="mt-3 font-serif text-4xl">{post.title}</h2>
            <p className="mt-4 text-foreground/72">{post.description}</p>
            <p className="mt-5 text-sm text-foreground/50">{post.publishedAt} · {post.readTime}</p>
          </Link>
        ))}
      </section>
    </>
  );
}
