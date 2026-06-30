import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import readingTime from "reading-time";

const blogDir = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  author: string;
  readTime: string;
};

async function getFilePaths() {
  const entries = await fs.readdir(blogDir);
  return entries.filter((entry) => entry.endsWith(".mdx"));
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const entries = await getFilePaths();
  const posts = await Promise.all(
    entries.map(async (entry) => {
      const source = await fs.readFile(path.join(blogDir, entry), "utf8");
      const { data, content } = matter(source);
      return {
        slug: entry.replace(/\.mdx$/, ""),
        title: data.title as string,
        description: data.description as string,
        category: data.category as string,
        publishedAt: data.publishedAt as string,
        author: (data.author as string) ?? "Patrika Editorial",
        readTime: readingTime(content).text,
      };
    }),
  );

  return posts.sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt));
}

export async function getBlogPost(slug: string) {
  const source = await fs.readFile(path.join(blogDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(source);
  const compiled = await compileMDX({
    source: content,
    options: { parseFrontmatter: false },
  });

  return {
    slug,
    frontmatter: data as Record<string, string>,
    content: compiled.content,
    readTime: readingTime(content).text,
  };
}
