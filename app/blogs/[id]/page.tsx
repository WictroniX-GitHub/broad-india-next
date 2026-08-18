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

  const pageTitle = `${blog.title} | BROAD India Blog`;
  const description = blog.meta?.description || blog.description;

  return {
    title: pageTitle,
    description,
    keywords: blog.meta?.keywords,
    openGraph: {
      title: pageTitle,
      description,
      images: [blog.image],
      type: "article",
      publishedTime: blog.isoDate || blog.date,
      url: `https://www.broadindia.com/blogs/${blog.id}`,
      siteName: "BROAD India",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [blog.image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://www.broadindia.com/blogs/${blog.id}`,
    },
  };
}

export default async function BlogsDetailPage({ params }: PageProps) {
  const { id } = await params;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    notFound();
  }

  // Get related blogs by same category (for RelatedPosts component)
  const relatedBlogs = blogs
    .filter((b) => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blog.title,
    description: blog.meta?.description || blog.description,
    image: [`https://www.broadindia.com${blog.image}`],
    datePublished: blog.isoDate || blog.date,
    dateModified: blog.isoDate || blog.date,
    author: {
      "@type": "Organization",
      name: "BROAD India Engineering Team",
      url: "https://www.broadindia.com",
      logo: "https://www.broadindia.com/images/logo.png",
    },
    publisher: {
      "@type": "Organization",
      name: "BROAD Air Conditioning India Pvt. Ltd.",
      url: "https://www.broadindia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.broadindia.com/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.broadindia.com/blogs/${blog.id}`,
    },
    articleSection: blog.category,
    wordCount: typeof blog.content === "string"
      ? blog.content.replace(/<[^>]*>/g, "").split(/\s+/).length
      : undefined,
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.broadindia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blogs",
        item: "https://www.broadindia.com/blogs",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: blog.title,
        item: `https://www.broadindia.com/blogs/${blog.id}`,
      },
    ],
  };

  const faqSchema = blog.faq?.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: blog.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            [blogPostingSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])]
          ),
        }}
      />
      <BlogDetailContent blog={blog} relatedBlogs={relatedBlogs} />
    </>
  );
}
