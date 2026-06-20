"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Tag, User } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Article } from "@/types/article";

interface ArticleDetailContentProps {
  article: Article;
}

export default function ArticleDetailContent({ article }: ArticleDetailContentProps) {
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

          <div className="relative w-full h-[400px]">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-gray-900">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span className="font-medium text-gray-900">
                  {article.author || "BROAD India Engineering Team"}
                </span>
              </div>
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
