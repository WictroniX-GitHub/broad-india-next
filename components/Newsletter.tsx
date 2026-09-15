"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { MailOpen, X, Maximize2, ChevronLeft, ChevronRight, Instagram } from "lucide-react";
import Link from "next/link";

const newsletters = [
  {
    id: 1,
    title: "Issue 06: July Updates",
    date: "July 2026",
    images: ["/newsletter/July/July_01.jpg", "/newsletter/July/July_02.jpg"],
    link: "https://www.instagram.com/p/DcQOE5rgYqb/"
  },
  {
    id: 2,
    title: "Issue 05: June Highlights",
    date: "June 2026",
    images: ["/newsletter/June/June_01.jpg", "/newsletter/June/June_02.jpg"],
    link: "https://www.instagram.com/p/Da0C9ElEqa3/"
  },
  {
    id: 3,
    title: "Issue 04: May Insights",
    date: "May 2026",
    images: ["/newsletter/May/May_01.jpg", "/newsletter/May/May_02.jpg"],
    link: "https://www.instagram.com/p/DZmQjp4k4qM/"
  },
  {
    id: 4,
    title: "Issue 03: April Newsletter",
    date: "April 2026",
    images: ["/newsletter/April/April_01.jpg", "/newsletter/April/April_02.jpg"],
    link: "https://www.instagram.com/p/DYeWkbnk6w_/"
  },
  {
    id: 5,
    title: "Issue 02: March Edition",
    date: "March 2026",
    images: ["/newsletter/March/March_01.jpg", "/newsletter/March/March_02.jpg", "/newsletter/March/March_03.jpg"],
    link: "https://www.instagram.com/p/DXEmVTqE1aF/"
  },
  {
    id: 6,
    title: "Issue 01: February Recap",
    date: "February 2026",
    images: ["/newsletter/February/February_01.jpg", "/newsletter/February/February_02.jpg"],
    link: "https://www.instagram.com/p/DV0WQQZk6Hg"
  }
];

export default function Newsletter() {
  const [selectedNewsletter, setSelectedNewsletter] = useState<typeof newsletters[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Close modal when pressing Escape
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
  };

  const openLightbox = (issue: typeof newsletters[0]) => {
    setSelectedNewsletter(issue);
    setCurrentImageIndex(0);
  };

  const closeLightbox = () => {
    setSelectedNewsletter(null);
    setCurrentImageIndex(0);
  };

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedNewsletter) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedNewsletter.images.length);
    }
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedNewsletter) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedNewsletter.images.length) % selectedNewsletter.images.length);
    }
  };

  return (
    <section className="py-20 md:py-24 bg-slate-50 border-t border-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Monthly Newsletter Archive
          </h2>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Browse through our recent newsletter issues covering case studies, technology deep-dives, and energy-saving strategies.
          </p>
        </div>

        {/* Auto-scrolling Carousel wrapper */}
        <div className="relative w-full overflow-hidden pb-8 mask-edges">
          <div className="flex animate-scroll hover:[animation-play-state:paused] gap-6 w-max">
            {/* Duplicate array for seamless infinite scroll */}
            {[...newsletters, ...newsletters].map((issue, index) => (
              <div
                key={`${issue.id}-${index}`}
                onClick={() => openLightbox(issue)}
                className="w-[320px] shrink-0 bg-white p-4 rounded-2xl shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 cursor-pointer group hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                {/* 2-Image Split Layout inside the card preview ONLY */}
                <div className="relative h-[200px] w-full rounded-xl overflow-hidden mb-4 bg-gray-100 flex">
                  <div className="w-1/2 h-full relative border-r border-white/20">
                    <Image src={issue.images[0]} alt="Page 1" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="160px" />
                  </div>
                  <div className="w-1/2 h-full relative">
                    <Image src={issue.images[1]} alt="Page 2" fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="160px" />
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <Maximize2 size={16} /> Read Issue
                    </div>
                  </div>
                </div>

                <div className="px-2">
                  <div className="text-xs font-semibold text-blue-600 mb-1">{issue.date}</div>
                  <h3 className="font-bold text-gray-900 leading-tight">
                    {issue.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Pop-up Modal with Single Image Scroll */}
      <AnimatePresence>
        {selectedNewsletter && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl max-w-5xl w-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="p-4 md:p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50 shrink-0">
                <div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl">{selectedNewsletter.title}</h3>
                  <p className="text-sm text-gray-500">{selectedNewsletter.date} • {currentImageIndex + 1} of {selectedNewsletter.images.length}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Link
                    href={selectedNewsletter.link}
                    target="_blank"
                    rel="noreferrer"
                    className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold hover:shadow-lg transition-all"
                  >
                    <Instagram size={18} /> View on Instagram
                  </Link>
                  <button
                    onClick={closeLightbox}
                    className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Image Carousel */}
              <div className="relative flex-grow bg-gray-100 flex items-center justify-center overflow-hidden h-[60vh] md:h-[70vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full p-4 md:p-8"
                  >
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={selectedNewsletter.images[currentImageIndex]}
                        alt={`Page ${currentImageIndex + 1}`}
                        fill
                        className="object-contain drop-shadow-2xl"
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        quality={100}
                      />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Left/Right Controls */}
                {selectedNewsletter.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-white flex items-center justify-center text-gray-800 shadow-lg hover:bg-white hover:scale-105 transition-all"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 backdrop-blur border border-white flex items-center justify-center text-gray-800 shadow-lg hover:bg-white hover:scale-105 transition-all"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </>
                )}

                {/* Mobile IG Button */}
                <Link
                  href={selectedNewsletter.link}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 sm:hidden flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-bold shadow-xl"
                >
                  <Instagram size={18} /> View on Instagram
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
        }
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-50% - 12px)); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
