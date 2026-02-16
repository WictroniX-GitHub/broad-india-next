"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react";
import { articles } from "@/data/articles";
import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  return (
    <div className="min-h-screen py-20 bg-white text-black">
      {/* Hero Section */}
      <div className="relative h-[20vh] overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mt-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Our Articles
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden transition-shadow hover:shadow-xl bg-white border border-gray-200 rounded-lg">
                <div className="relative w-full h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{article.date}</span>
                    <span>•</span>
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {article.title}
                  </h2>
                  <p className="text-gray-800">{article.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Tag className="h-4 w-4 text-primary" />
                      <span className="text-sm text-gray-700">
                        {article.category}
                      </span>
                    </div>
                    <Link href={`/articles/${article.id}`}>
                      <Button
                        variant="ghost"
                        className="hover:translate-x-2 transition-transform text-primary"
                      >
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
