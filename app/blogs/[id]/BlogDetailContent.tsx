import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import type { Blog } from "@/types/blog";
import BlogContentRenderer from "@/components/BlogContentRenderer";
import RelatedPosts from "@/components/RelatedPosts";
import ProductFAQ from "@/components/ProductFAQ";
import Breadcrumbs from "@/components/ds/Breadcrumbs";
import CTABand from "@/components/ds/CTABand";
import { prepareArticleHtml } from "@/lib/articleHtml";
import { ArticleTocCard, ArticleTocMobile } from "@/components/blog/ArticleToc";

interface BlogDetailContentProps {
  blog: Blog;
  relatedBlogs?: Blog[];
  /** FAQs shown on the page; the page emits the matching FAQPage JSON-LD. */
  faqs: { question: string; answer: string }[];
}

export default function BlogDetailContent({ blog, relatedBlogs = [], faqs }: BlogDetailContentProps) {
  const article = typeof blog.content === "string" ? prepareArticleHtml(blog.content, blog.title) : null;
  const toc = article?.toc ?? [];
  const showToc = toc.length >= 3;
  // Most posts with their own FAQ already render it in the body; don't show it twice
  const bodyText = typeof blog.content === "string" ? blog.content : JSON.stringify(blog.content);
  const faqInBody = faqs.length > 0 && bodyText.includes(faqs[0].question.slice(0, 30));

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-gray-100 pb-10 pt-32 md:pt-40">
        <div aria-hidden className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full bg-brand-100/70 blur-[100px]" />
        <div className="container relative mx-auto max-w-4xl px-4 md:px-8">
          {/* Breadcrumb JSON-LD is emitted by the page, so render the trail without a second schema */}
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Blogs", href: "/blogs" }, { label: blog.category }]}
            schema={false}
            className="mb-8"
          />
          <span className="tag-pill">{blog.category}</span>
          <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 [text-wrap:balance]">
            {blog.title}
          </h1>
          {blog.description && <p className="mt-5 text-lg md:text-xl font-light text-gray-600 [text-wrap:pretty]">{blog.description}</p>}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-600">
            <span className="inline-flex items-center gap-2 font-medium text-gray-900">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                <User size={16} />
              </span>
              {blog.author || "BROAD India Engineering Team"}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={16} /> {blog.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={16} /> {blog.readTime}
            </span>
          </div>
        </div>
      </header>

      <div className="container mx-auto max-w-6xl px-4 md:px-8">
        <div className="relative -mt-px aspect-[16/8] w-full overflow-hidden rounded-b-3xl md:rounded-3xl md:mt-10">
          <Image src={blog.image} alt={blog.title} fill priority sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" />
        </div>

        <div className={showToc ? "mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] xl:gap-16" : "mt-12"}>
          <article id="article-content" className="mx-auto w-full max-w-3xl">
            {showToc && <ArticleTocMobile items={toc} articleId="article-content" />}
            {article ? (
              <div className="article-body" dangerouslySetInnerHTML={{ __html: article.html }} />
            ) : (
              <BlogContentRenderer content={blog.content as Exclude<Blog["content"], string>} />
            )}
          </article>

          {showToc && (
            <aside className="hidden lg:block">
              <ArticleTocCard items={toc} articleId="article-content" />
            </aside>
          )}
        </div>

        {!faqInBody && (
          <div className="mx-auto mt-16 max-w-3xl border-t border-gray-100 pt-12">
            <h2 className="mb-8 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Frequently Asked Questions</h2>
            <ProductFAQ faqs={faqs} bare schema={false} />
          </div>
        )}

        <div className="mx-auto max-w-5xl">
          <RelatedPosts posts={relatedBlogs} />
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <Link href="/blogs" className="inline-flex items-center gap-2 font-semibold text-brand-600 hover:text-brand-700">
            <ArrowLeft size={16} /> Back to blogs
          </Link>
        </div>
      </div>

      <CTABand
        title="Need Help With Your Cooling System?"
        text="BROAD India's engineering team can assess your facility's cooling requirements and recommend the most energy-efficient solution - from vapour absorption chillers to waste heat recovery systems."
        primary={{ label: "Contact Us Today", href: "/contact-us" }}
        secondary={{ label: "Browse FAQs", href: "/faq" }}
        showContacts={false}
      />
    </div>
  );
}
