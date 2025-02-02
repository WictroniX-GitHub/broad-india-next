import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";

// TypeScript Interfaces
interface PostData {
  title: string;
  description: string;
  date: string;
}

interface Post {
  data: PostData;
  content: string;
}

// Function to Fetch Blog Post Data
export async function getPost(slug: string): Promise<Post | null> {
  const filePath = path.join("content/blog", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data: data as PostData, content };
}

// Generate Static Paths for All Blog Posts
export async function generateStaticParams() {
  const blogDir = "content/blog";
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);
  return files.map((fileName) => ({ slug: fileName.replace(".mdx", "") }));
}

// Render Blog Post Page
interface BlogPostParams {
  params: { slug: string };
}

export default async function BlogPost({ params }: BlogPostParams) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-500">
          404 - Blog Post Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-10 px-4">
      {/* SEO Meta Tags */}
      <Head>
        <title>{post.data.title} | Blog</title>
        <meta name="description" content={post.data.description} />
      </Head>

      {/* Blog Header */}
      <h1 className="text-4xl font-bold text-center">{post.data.title}</h1>
      <p className="text-gray-500 text-center mt-2">{post.data.date}</p>
      <hr className="my-6" />

      {/* Blog Content */}
      <div className="prose lg:prose-lg mx-auto">
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeHighlight],
            },
          }}
        />
      </div>
    </div>
  );
}
