import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

// Function to fetch all blog posts
export async function getAllPosts() {
  const blogDir = "content/blog";
  if (!fs.existsSync(blogDir)) return [];

  const files = fs.readdirSync(blogDir);

  return files.map((fileName) => {
    const filePath = path.join(blogDir, fileName);
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

// Render Blog List Page
export default async function BlogList() {
  const posts = await getAllPosts();

  return (
    <div className="max-w-4xl mx-auto pt-32 pb-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-6">📝 Blog Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <div
            key={post.slug}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <Link href={`/blog/${post.slug}`} className="block p-6">
              <h2 className="text-2xl font-semibold text-blue-600">
                {post.title}
              </h2>
              <p className="text-gray-500 mt-2">{post.description}</p>
              <p className="text-gray-400 text-sm mt-4">{post.date}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
