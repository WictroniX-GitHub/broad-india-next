import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// 📌 Function to Fetch All Articles
export async function getAllArticles() {
  const articlesDir = "content/articles";
  if (!fs.existsSync(articlesDir)) return [];

  const files = fs.readdirSync(articlesDir);

  return files.map((fileName) => {
    const filePath = path.join(articlesDir, fileName);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContent);

    return {
      slug: fileName.replace(".mdx", ""),
      title: data.title,
      description: data.description,
      date: data.date,
    };
  });
}

// 📌 Render Articles List Page
export default async function ArticlesList() {
  const articles = await getAllArticles();

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">📚 Articles</h1>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500">No articles available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {articles.map((article) => (
            <div
              key={article.slug}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Link href={`/articles/${article.slug}`} className="block p-6">
                <h2 className="text-2xl font-semibold text-blue-600">
                  {article.title}
                </h2>
                <p className="text-gray-500 mt-2">{article.description}</p>
                <p className="text-gray-400 text-sm mt-4">{article.date}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
