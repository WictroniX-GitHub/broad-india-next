"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import { blogs as allBlogs } from "@/data/blogs";

// The specific blog IDs we want to showcase on the Home page
const showcaseBlogIds = [
  "vcr-vs-var-operating-costs-comparison",
  "understanding-cop-absorption-chillers-roi",
  "top-5-vapor-absorption-machine-manufacturers-india-2025",
  "dx-chiller-vs-absorption-chiller-comparison",
  "4-key-components-absorption-chiller"
];

// Map over the IDs to maintain the exact order and extract the data from the main blogs array
const blogs = showcaseBlogIds.map(id => {
  const blogData = allBlogs.find(b => b.id === id);
  if (!blogData) return null;
  
  return {
    title: blogData.title,
    description: blogData.description,
    image: blogData.image,
    link: `/blogs/${blogData.id}`,
    category: blogData.category,
    readTime: blogData.readTime,
  };
}).filter((b): b is NonNullable<typeof b> => b !== null);

export default function RecentNews() {
  return (
    <section className="py-20 md:py-32 bg-slate-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              Latest Insights
            </h2>
            <p className="text-lg md:text-xl text-gray-600 font-light">
              Expert perspectives on industrial cooling technology, sustainability, and energy efficiency
            </p>
          </div>
          <Link 
            href="/blogs"
            className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View all blogs <ArrowRight size={20} />
          </Link>
        </motion.div>

        <FadeInStaggerContainer staggerDelay={0.1} className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {blogs.map((blog, index) => (
            <FadeInStaggerItem key={index} className="w-[85vw] md:w-auto shrink-0 snap-center h-full">
              <div className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 h-full">
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                  </motion.div>
                  {/* Category tag */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/90 backdrop-blur-md text-blue-700 shadow-sm">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Read time */}
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium mb-3">
                    <Clock size={14} />
                    {blog.readTime}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2 leading-tight">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 font-light flex-grow">
                    {blog.description}
                  </p>

                  {/* Outline CTA Button */}
                  <Link
                    href={blog.link}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg border-2 border-blue-100 text-blue-600 font-medium group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300"
                  >
                    Read blog
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </FadeInStaggerItem>
          ))}
        </FadeInStaggerContainer>
      </div>
    </section>
  );
}
