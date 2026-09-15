"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram, Linkedin, ArrowUpRight, CalendarDays } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";

interface EventGalleryImage {
  id?: number | string;
  image?: string;
  src?: string;
  title?: string;
  alt?: string;
  link?: string;
}

interface EventsGalleryProps {
  images?: EventGalleryImage[];
  compact?: boolean;
}

const DEFAULT_EVENTS: EventGalleryImage[] = [
  {
    id: 1,
    image: "/events/CII_Steel_Summit.jpg",
    title: "CII Steel Summit",
    link: "https://www.instagram.com/p/DcK_vN5gQzz"
  },
  {
    id: 2,
    image: "/events/CPD_Training_Session.jpg",
    title: "CPD Training Session",
    link: "https://www.instagram.com/p/Dbp7WYdATc2"
  },
  {
    id: 3,
    image: "/events/International_Webinar.jpg",
    title: "International webinar",
    link: "https://www.instagram.com/p/DauDdijEtxZ/"
  },
  {
    id: 4,
    image: "/events/Joining_CII_Panel.jpg",
    title: "Joining CII's Panel",
    link: "https://www.instagram.com/p/DZB8bzBE4p4/"
  }
];

export default function EventsGallery({ images, compact = false }: EventsGalleryProps = {}) {
  const displayEvents = images || DEFAULT_EVENTS;

  // Reduce height if compact mode is enabled (for case study pages)
  const heightClass = compact ? 'h-48 sm:h-56 md:h-64' : 'h-64 sm:h-72 md:h-80';

  return (
    <section className="py-12 md:py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        
        {/* DESKTOP LAYOUT (lg and above) */}
        <div className="hidden lg:flex justify-between items-start gap-12 xl:gap-16">
          {/* Left Sticky Sidebar */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/3 sticky top-28"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-4 border border-white/20">
              <CalendarDays size={14} />
              Events & Exhibitions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
              See Us in Action
            </h2>
            <p className="text-base text-white/70 font-light mb-8 max-w-md leading-relaxed">
              Follow our journey across India. From major trade shows to site commissioning milestones, stay updated on our social channels.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Magnetic intensity={10}>
                <a 
                  href="https://www.instagram.com/broad_india/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-full shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <Instagram size={18} />
                  Instagram
                </a>
              </Magnetic>
              <Magnetic intensity={10}>
                <a 
                  href="https://www.linkedin.com/company/broad-india/?viewAsMember=true" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0A66C2] text-white font-bold rounded-full shadow-[0_0_20px_rgba(10,102,194,0.3)] hover:shadow-[0_0_30px_rgba(10,102,194,0.5)] hover:-translate-y-0.5 transition-all duration-300 text-sm"
                >
                  <Linkedin size={18} />
                  LinkedIn
                </a>
              </Magnetic>
            </div>
          </motion.div>

          {/* Right Desktop 2-Column Grid */}
          <div className="lg:w-2/3 w-full">
            <FadeInStaggerContainer staggerDelay={0.12} className="grid grid-cols-2 gap-6">
              {displayEvents.map((event, index) => {
                const imgSource = event.image || event.src || "";
                const imgAlt = event.title || event.alt || "Gallery Image";
                
                return (
                  <FadeInStaggerItem key={event.id || index} className={`${heightClass} relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-xl`}>
                    <Image
                      src={imgSource}
                      alt={imgAlt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1200px) 33vw, 400px"
                    />
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                    
                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-6 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="flex justify-between items-end gap-3">
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors line-clamp-2">
                            {imgAlt}
                          </h3>
                        </div>
                        {event.link && (
                          <a 
                            href={event.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${imgAlt} on social`}
                            className="w-10 h-10 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
                          >
                            <ArrowUpRight size={20} />
                          </a>
                        )}
                      </div>
                    </div>
                  </FadeInStaggerItem>
                );
              })}
            </FadeInStaggerContainer>
          </div>
        </div>

        {/* MOBILE & TABLET LAYOUT (< lg) */}
        <div className="block lg:hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-xs font-semibold mb-3 border border-white/20">
              <CalendarDays size={14} />
              Events & Exhibitions
            </div>
            <h2 className="text-3xl font-bold mb-3 tracking-tight">
              See Us in Action
            </h2>
            <p className="text-sm text-white/70 font-light max-w-lg mx-auto">
              Follow our journey across India. From trade shows to site milestones, stay updated on our social channels.
            </p>
          </div>

          {/* Swipeable Horizontal Scroll for Mobile */}
          <FadeInStaggerContainer 
            staggerDelay={0.1} 
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {displayEvents.map((event, index) => {
              const imgSource = event.image || event.src || "";
              const imgAlt = event.title || event.alt || "Gallery Image";
              
              return (
                <FadeInStaggerItem 
                  key={event.id || index} 
                  className="w-[78vw] sm:w-[45vw] shrink-0 snap-center h-64 relative group overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-lg"
                >
                  <Image
                    src={imgSource}
                    alt={imgAlt}
                    fill
                    className="object-cover"
                    sizes="80vw"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 w-full p-5 flex justify-between items-end gap-2">
                    <h3 className="text-base font-bold text-white line-clamp-2">
                      {imgAlt}
                    </h3>
                    {event.link && (
                      <a 
                        href={event.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${imgAlt} on social`}
                        className="w-9 h-9 shrink-0 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white active:bg-blue-600"
                      >
                        <ArrowUpRight size={18} />
                      </a>
                    )}
                  </div>
                </FadeInStaggerItem>
              );
            })}
          </FadeInStaggerContainer>

          {/* Social CTA Buttons on Mobile */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6 justify-center">
            <a 
              href="https://www.instagram.com/broad_india/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold rounded-full shadow-md text-sm"
            >
              <Instagram size={18} />
              Instagram
            </a>
            <a 
              href="https://www.linkedin.com/company/broad-india/?viewAsMember=true" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[#0A66C2] text-white font-bold rounded-full shadow-md text-sm"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}

