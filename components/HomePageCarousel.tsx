"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import broadBG1 from "@/public/images/broad-bg-1.webp";
import broadBG2 from "@/public/images/broad-bg-2.webp";
import broadBG3 from "@/public/images/13Podium.webp";
import broadBG4 from "@/public/images/FTower.webp";

const slides = [
  { src: broadBG1, text: "BROAD India" },
  { src: broadBG2, text: "Serving India Since 2001" },
  {
    src: broadBG3,
    text: "Vapor Absorption Machines and Sustainable HVAC Solutions",
  },
  {
    src: broadBG4,
    text: "Want to know more?",
    link: "/contact-us",
  },
];

export default function HomePageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden -mt-[80px]">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.src}
            alt="carousel image"
            fill
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/60 text-white p-4 rounded-lg text-center">
            <h1 className="text-2xl md:text-4xl uppercase">{slide.text}</h1>
            {slide.link && (
              <a
                href={slide.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded-md text-lg"
              >
                Contact Us
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
