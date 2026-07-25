import { articles } from "@/data/articles";
import { notFound } from "next/navigation";
import ArticleDetailContent from "./ArticleDetailContent";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const article = articles.find((n) => n.id === id);

  if (!article) {
    return {
      title: "Article Not Found",
    };
  }

  const pageTitle = `${article.title} | BROAD India`;
  const description = article.meta?.description || article.description || `Read about ${article.title} at BROAD India.`;

  return {
    title: pageTitle,
    description,
    keywords: article.meta?.keywords,
    openGraph: {
      title: pageTitle,
      description,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
      url: `https://www.broadindia.com/articles/${article.id}`,
      siteName: "BROAD India",
      locale: "en_IN",
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [article.image],
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
      canonical: `https://www.broadindia.com/articles/${article.id}`,
    },
  };
}

export default async function ArticlesDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((n) => n.id === id);

  if (!article) {
    notFound();
  }

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.meta?.description || article.description || `Read about ${article.title} at BROAD India.`,
    image: [`https://www.broadindia.com${article.image}`],
    datePublished: article.date,
    dateModified: article.date,
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
      "@id": `https://www.broadindia.com/articles/${article.id}`,
    },
    articleSection: article.category,
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
        name: "Articles",
        item: "https://www.broadindia.com/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://www.broadindia.com/articles/${article.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([articleSchema, breadcrumbSchema]),
        }}
      />
      <ArticleDetailContent article={article} />
    </>
  );
}
