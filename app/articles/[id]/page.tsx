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

  return {
    title: article.title,
    description: article.description || `Read about ${article.title} at BROAD India.`,
    openGraph: {
      title: article.title,
      description: article.description || `Read about ${article.title} at BROAD India.`,
      images: [article.image],
      type: "article",
      publishedTime: article.date,
    },
  };
}

export default async function ArticlesDetailPage({ params }: PageProps) {
  const { id } = await params;
  const article = articles.find((n) => n.id === id);

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    image: [article.image],
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "BROAD India",
    },
    description: article.description || `Read about ${article.title} at BROAD India.`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleDetailContent article={article} />
    </>
  );
}
