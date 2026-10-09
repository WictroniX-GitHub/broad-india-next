import { blogs } from "@/data/blogs";
import { notFound } from "next/navigation";
import BlogDetailContent from "./BlogDetailContent";
import { embeddedFaqs } from "@/lib/articleHtml";
import { isoDateIST, trimDescription } from "@/lib/seo";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Pre-render every post so its metadata ships in the static HTML <head>
export function generateStaticParams() {
  return [...new Set(blogs.map((b) => b.id))].map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    return {
      title: "Blog Not Found",
    };
  }

  const suffix = " | BROAD India";
  const maxTitleLen = 60 - suffix.length;
  // Cut at a word boundary so the SERP title never ends mid-word
  const truncatedTitle = blog.title.length > maxTitleLen
    ? blog.title.slice(0, maxTitleLen - 1).replace(/\s+\S*$/, "").replace(/[\s,:;–-]+$/, "") + "…"
    : blog.title;
  const pageTitle = `${truncatedTitle}${suffix}`;
  const description = trimDescription(blog.meta?.description || blog.description);

  return {
    title: pageTitle,
    description,
    keywords: blog.meta?.keywords,
    openGraph: {
      title: pageTitle,
      description,
      images: [encodeURI(blog.image)],
      type: "article",
      publishedTime: isoDateIST(blog.isoDate || blog.date),
      url: `https://www.broadindia.com/blogs/${blog.id}`,
      siteName: "BROAD India",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [encodeURI(blog.image)],
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
    image: [`https://www.broadindia.com${encodeURI(blog.image)}`],
    datePublished: isoDateIST(blog.isoDate || blog.date),
    dateModified: isoDateIST(blog.isoDate || blog.date),
    author: {
      "@type": "Organization",
      name: "BROAD India Engineering Team",
      url: "https://www.broadindia.com",
      logo: "https://www.broadindia.com/images/BROAD-India-final.png",
    },
    publisher: {
      "@type": "Organization",
      name: "BROAD Air Conditioning India Pvt. Ltd.",
      url: "https://www.broadindia.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.broadindia.com/images/BROAD-India-final.png",
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

  // Fallback FAQs for posts without their own; the same list is rendered and emitted as schema
  const standardBlogFaqs = [
    {
      question: "What is a Vapour Absorption Chiller?",
      answer: "It's a thermally-driven cooling system that uses water/LiBr solution and heat (from steam, hot water, exhaust, or gas) instead of electricity to produce chilled water, drastically reducing energy costs."
    },
    {
      question: "Can BROAD chillers run on waste heat?",
      answer: "Yes, our absorption chillers can capture waste heat from industrial processes, generator exhaust, or boiler steam to provide free cooling, resulting in significant OPEX savings."
    },
    {
      question: "Do you provide after-sales service in India?",
      answer: "Absolutely. BROAD India provides comprehensive design consultation, commissioning, operator training, and 24/7 after-sales support with remote monitoring capabilities."
    }
  ];

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

  const faqItems = blog.faq?.length ? blog.faq : standardBlogFaqs;
  // Only the post's own FAQs are marked up: its faq field, or a FAQPage embedded in the article HTML
  const ownFaqs = blog.faq?.length ? blog.faq : typeof blog.content === "string" ? embeddedFaqs(blog.content) : [];
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ownFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            // The generic fallback FAQ is shown but not marked up: identical FAQPage schema on hundreds of posts reads as spam
            ownFaqs.length ? [blogPostingSchema, breadcrumbSchema, faqSchema] : [blogPostingSchema, breadcrumbSchema]
          ),
        }}
      />
      <BlogDetailContent blog={blog} relatedBlogs={relatedBlogs} faqs={faqItems} />
    </>
  );
}
