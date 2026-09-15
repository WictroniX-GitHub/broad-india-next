"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import broadBG1 from "@/public/images/broad-bg-1.webp";
import broadBG2 from "@/public/images/broad-bg-2.webp";
import broadBG3 from "@/public/images/13Podium.webp";
import Magnetic from "@/components/ui/Magnetic";

const slides = [
  {
    src: broadBG1,
    headline: "Vapour Absorption Chillers & Non-Electric HVAC Solutions",
    subline: "Powering India's industries with zero-electricity cooling since 2001",
    cta: { text: "Get a Free Consultation", href: "/contact-us" },
  },
  {
    src: broadBG2,
    headline: "500+ MW Installed Across India's Largest Industries",
    subline: "Trusted by JSW, NTPC, ITC, IOCL, DLF and 50+ industrial facilities nationwide",
    cta: { text: "View Installations", href: "/installations" },
  },
  {
    src: broadBG3,
    headline: "Sustainable Cooling Powered by Waste Heat, Steam & Gas",
    subline: "Cut electricity consumption by up to 90% - reduce costs and carbon footprint simultaneously",
    cta: { text: "Explore Products", href: "/vapour-absorption-chiller" },
  },
];

const SLIDE_INTERVAL = 7000;

export default function HomePageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden -mt-[80px]"
      aria-label="Hero carousel"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background images with Ken-Burns zoom */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
        >
          <div
            className="absolute inset-0"
            style={{
              animation: currentSlide === index ? "kenBurns 8s ease-out forwards" : "none",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.headline}
              fill
              priority={index === 0}
              quality={100}
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent backdrop-blur-[1px]" />
        </div>
      ))}

      {/* Slide content with scroll parallax and animations */}
      <motion.div
        className="absolute inset-0 z-20 flex items-end"
        style={{ y: textY, opacity: textOpacity }}
      >
        <div className="container mx-auto px-6 pb-28 md:pb-32 max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} // Impeccable ease curve
            >
              {currentSlide === 0 ? (
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-5 tracking-tight drop-shadow-xl">
                  {slides[currentSlide].headline}
                </h1>
              ) : (
                <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white leading-tight mb-5 tracking-tight drop-shadow-xl">
                  {slides[currentSlide].headline}
                </h2>
              )}
              <p className="text-base md:text-xl text-white/90 mb-8 max-w-3xl font-light drop-shadow-md">
                {slides[currentSlide].subline}
              </p>
              <Link
                href={slides[currentSlide].cta.href}
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full shadow-lg shadow-blue-600/30 transition-all duration-300 text-sm md:text-base hover:-translate-y-1"
              >
                {slides[currentSlide].cta.text}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-500 ease-out ${currentSlide === index
                ? "w-10 bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll-cue indicator */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-white/70"
        style={{ animation: "scrollCueBounce 2s ease-in-out infinite" }}
      >
        <ChevronDown size={28} strokeWidth={1.5} />
      </div>
    </section>
  );
}
