import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import Head from "next/head";

interface ArticleData {
  title: string;
  description: string;
  date: string;
}

interface Article {
  data: ArticleData;
  content: string;
}

// Function to Fetch a Single Article
export async function getArticle(slug: string): Promise<Article | null> {
  const filePath = path.join("content/articles", `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return { data: data as ArticleData, content };
}

// Generate Static Paths for Articles
export async function generateStaticParams() {
  const articlesDir = "content/articles";
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir);
  return files.map((fileName) => ({ slug: fileName.replace(".mdx", "") }));
}

// Render Article Page
interface ArticlePageParams {
  params: { slug: string };
}

export default async function ArticlePage({ params }: ArticlePageParams) {
  const { slug } = params;
  const article = await getArticle(slug);

  if (!article) {
    return (
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-500">
          404 - Article Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-10 px-4">
      {/* SEO Meta Tags */}
      <Head>
        <title>{article.data.title} | Articles</title>
        <meta name="description" content={article.data.description} />
      </Head>

      {/* Article Header */}
      <h1 className="text-4xl font-bold text-center">{article.data.title}</h1>
      <p className="text-gray-500 text-center mt-2">{article.data.date}</p>
      <hr className="my-6" />

      {/* Article Content */}
      <div className="prose lg:prose-lg mx-auto">
        <MDXRemote
          source={article.content}
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
