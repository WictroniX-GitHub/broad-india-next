"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Blog } from "@/types/blog";

interface BlogDetailContentProps {
  blog: Blog;
}

export default function BlogDetailContent({ blog }: BlogDetailContentProps) {
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

            <div className="flex items-center space-x-4 text-sm text-gray-600">
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

            <div
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
