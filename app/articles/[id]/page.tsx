"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";
import { articles } from "@/data/articles";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useParams } from "next/navigation"; // Import useParams

export default function ArticlesDetailPage() {
  const { id } = useParams(); // Use useParams hook to unwrap params
  const article = articles.find((n) => n.id === id);

  if (!article) {
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
          <Link href="/articles">
            <Button
              variant="ghost"
              className="mb-8 text-primary hover:bg-gray-200"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to articles
            </Button>
          </Link>

          <img
            src={article.image}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              {article.title}
            </h1>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4" />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Tag className="h-4 w-4" />
                <span>{article.category}</span>
              </div>
            </div>

            <div
              className="prose prose-lg max-w-none text-gray-800"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
