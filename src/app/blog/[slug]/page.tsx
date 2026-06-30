import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { StructuredData } from "@/components/site/structured-data";
import { buildMetadata } from "@/lib/metadata";
import { getBlogPost, getBlogPosts } from "@/lib/content";
import { siteConfig } from "@/lib/site-data";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const post = posts.find((entry) => entry.slug === slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
  });
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getBlogPosts();
  const postMeta = posts.find((entry) => entry.slug === slug);
  if (!postMeta) notFound();

  const post = await getBlogPost(slug);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: postMeta.title,
          description: postMeta.description,
          datePublished: postMeta.publishedAt,
          author: {
            "@type": "Organization",
            name: siteConfig.shortName,
          },
        }}
      />
      <PageHero eyebrow={postMeta.category} title={postMeta.title} description={postMeta.description} />
      <article className="section-shell prose-copy pb-20">
        <div className="card-border rounded-[2rem] p-8 sm:p-12">{post.content}</div>
      </article>
    </>
  );
}
