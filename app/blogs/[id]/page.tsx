"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { blogs } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation";

export default function BlogsDetailPage() {
  const { id } = useParams();
  const blog = blogs.find((n) => n.id === id);

  if (!blog) {
    notFound();
    return null;
  }

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

          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />

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

            <div className="prose prose-lg max-w-none text-gray-800">
              <p className="leading-relaxed whitespace-pre-wrap">
                {blog.content}
                <br />
                <Link
                  href="/register"
                  className="text-primary font-semibold hover:underline"
                >
                  Sign up{" "}
                </Link>{" "}
                now to join the revolution!
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
