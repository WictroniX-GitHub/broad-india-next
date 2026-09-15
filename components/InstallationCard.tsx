"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Installation {
  id: string | number;
  title: string;
  metric: string;
  industry: string;
  image: string | StaticImageData;
  description: string;
  slug?: string;
  product?: string;
}

interface InstallationCardProps {
  installation: Installation;
}

export default function InstallationCard({ installation }: InstallationCardProps) {
  const href = installation.slug ? `/installations/${installation.slug}` : "#";

  return (
    <Link href={href} className="block h-full">
      <div className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1 relative flex flex-col">
        {/* Image */}
        <div className="relative w-full h-48 overflow-hidden bg-slate-100">
          <motion.div
            className="w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <Image
              src={installation.image}
              alt={installation.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
          </motion.div>
          {/* Subtle gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          {/* Industry tag */}
          <div className="mb-4">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600 border border-blue-100 tracking-wide">
              {installation.industry}
            </span>
          </div>

          <h3 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
            {installation.title}
          </h3>

          {/* Metric highlight */}
          <p className="text-blue-600 font-bold text-sm mb-4">
            {installation.metric}
          </p>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light flex-grow">
            {installation.description}
          </p>

          {/* Hover link reveal */}
          <div className="flex items-center text-blue-600 font-medium mt-auto group-hover:text-blue-700 transition-colors duration-300">
            <span className="relative overflow-hidden flex items-center">
              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">View case study</span>
              <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">View case study</span>
            </span>
            <motion.div
              className="ml-2"
              initial={{ x: 0 }}
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </div>
        </div>
      </div>
    </Link>
  );
}
