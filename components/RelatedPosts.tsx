import type { Blog } from "@/types/blog";
import BlogCard from "@/components/blog/BlogCard";

interface RelatedPostsProps {
  posts: Blog[];
}

export default function RelatedPosts({ posts }: RelatedPostsProps) {
  if (!posts || posts.length === 0) return null;

  return (
    <div className="mt-16 border-t border-gray-100 pt-12">
      <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Related Articles</h2>
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.id} blog={post} />
        ))}
      </div>
    </div>
  );
}
