import { blogs } from "@/data/blogs";
import PageHero from "@/components/ds/PageHero";
import Section from "@/components/ds/Section";
import BlogCard from "@/components/blog/BlogCard";
import BlogExplorer from "@/components/blog/BlogExplorer";
import Newsletter from "@/components/Newsletter";

export default function BlogsPage() {
  const [featured, ...rest] = blogs;

  // Merge case variants ("Chillers" / "chillers") into one topic keyed by lower case
  const topics = new Map<string, { name: string; count: number }>();
  for (const b of rest) {
    const key = b.category.trim().toLowerCase();
    const t = topics.get(key);
    if (t) t.count += 1;
    else topics.set(key, { name: b.category.trim(), count: 1 });
  }
  const categories = Array.from(topics.values()).sort((a, b) => b.count - a.count);

  return (
    <div className="bg-white">
      <PageHero
        variant="light"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blogs" }]}
        eyebrow="Insights"
        title="Our Blogs"
        subtitle="Engineering insights on vapour absorption chillers, waste heat recovery and sustainable industrial cooling in India."
      />

      {featured && (
        <Section surface="slate" className="pb-0 md:pb-0">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">Latest post</p>
          <BlogCard blog={featured} featured priority />
        </Section>
      )}

      <Section surface="slate">
        <BlogExplorer
          categories={categories}
          items={rest.map((blog) => ({ id: blog.id, category: topics.get(blog.category.trim().toLowerCase())!.name, card: <BlogCard blog={blog} /> }))}
        />
      </Section>

      <Newsletter />
    </div>
  );
}
