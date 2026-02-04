import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailContent from "./BlogDetailContent";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      images: [blog.image],
      type: "article",
      publishedTime: blog.date,
    },
  };
}

export default async function BlogsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    image: [blog.image],
    datePublished: blog.date,
    author: {
      "@type": "Organization",
      name: "BROAD India",
    },
    description: blog.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogDetailContent blog={blog} />
    </>
  );
}
