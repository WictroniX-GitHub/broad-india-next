import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import type { Blog } from "@/types/blog";
import { cn } from "@/lib/utils";

interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
  priority?: boolean;
  className?: string;
}

export default function BlogCard({ blog, featured = false, priority = false, className }: BlogCardProps) {
  return (
    <Link
      href={`/blogs/${blog.id}`}
      className={cn(
        "group flex h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover",
        featured ? "flex-col lg:flex-row" : "flex-col",
        className
      )}
    >
      <div className={cn("relative overflow-hidden bg-slate-100", featured ? "aspect-[16/9] lg:aspect-auto lg:w-3/5" : "aspect-[16/9]")}>
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          priority={priority}
          sizes={featured ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className={cn("flex flex-1 flex-col p-6", featured && "lg:justify-center lg:p-10")}>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="tag-pill">{blog.category}</span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={13} /> {blog.date}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={13} /> {blog.readTime}
          </span>
        </div>
        <h2
          className={cn(
            "mt-4 font-bold tracking-tight text-gray-900 transition-colors group-hover:text-brand-700 [text-wrap:balance]",
            featured ? "text-2xl md:text-3xl" : "text-lg line-clamp-3"
          )}
        >
          {blog.title}
        </h2>
        <p className={cn("mt-3 flex-1 font-light leading-relaxed text-gray-600", featured ? "text-base md:text-lg" : "text-sm line-clamp-3")}>
          {blog.description}
        </p>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          Read post
          <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
