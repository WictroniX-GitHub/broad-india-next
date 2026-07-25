"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";
import BlogContentRenderer from "@/components/BlogContentRenderer";
import RelatedPosts from "@/components/RelatedPosts";
import ProductFAQ from "@/components/ProductFAQ";

interface BlogDetailContentProps {
  blog: Blog;
  relatedBlogs?: Blog[];
}

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

export default function BlogDetailContent({ blog, relatedBlogs = [] }: BlogDetailContentProps) {
  return (
    <div className="min-h-screen bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <Link href="/blogs">
            <Button
              variant="ghost"
              className="mb-8 text-primary hover:bg-gray-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to blogs
            </Button>
          </Link>

          <div className="relative w-full h-[400px]">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              priority
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">{blog.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-gray-900">
                  {blog.author || "BROAD India Engineering Team"}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span>{blog.category}</span>
              </div>
            </div>

            {typeof blog.content === "string" ? (
              <div
                className="prose prose-lg max-w-none text-gray-800"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            ) : (
              <BlogContentRenderer content={blog.content} />
            )}
          </div>

          {/* Standard FAQ Section for all blogs */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <ProductFAQ faqs={standardBlogFaqs} />
          </div>

          {/* Contact Us CTA Section */}
          <div className="mt-8">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl p-8 text-center text-white shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Need Help With Your Cooling System?
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto text-base md:text-lg">
                BROAD India&apos;s engineering team can assess your facility&apos;s
                cooling requirements and recommend the most energy-efficient
                solution — from vapor absorption chillers to waste heat recovery
                systems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-blue-700 bg-white rounded-lg hover:bg-blue-50 transition-colors shadow-sm"
                >
                  Contact Us Today
                </Link>
                <Link
                  href="/faq"
                  className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors"
                >
                  Browse FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <RelatedPosts posts={relatedBlogs} />
        </motion.div>
      </div>
    </div>
  );
}
