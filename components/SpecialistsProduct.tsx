"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeInStaggerContainer, FadeInStaggerItem } from "@/components/ui/FadeInStagger";
import pumpImg from "@/public/images/broadPump.webp";

const products = [
  {
    id: 1,
    title: "Vapour Absorption Chiller (VAC / VAM)",
    image: "https://broadusa.com/broad/wp-content/uploads/2020/04/home_DFA.jpg",
    description:
      "Thermally-driven cooling systems available in 40–3,300 TR capacity, powered by steam, waste heat, natural gas, or solar energy. Eliminate electricity-driven compressors and reduce peak demand by up to 90% across industrial and commercial facilities.",
    link: "/vapour-absorption-chiller",
  },
  {
    id: 2,
    title: "Power Efficient Chiller",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_power-efficient-chillers.jpg",
    description:
      "Magnetic-bearing, oil-free compressor technology achieving COP up to 11 - the highest in its class. Designed for high-performance applications where energy savings, whisper-quiet operation, and zero oil contamination are critical.",
    link: "/power-efficient-chiller",
  },
  {
    id: 3,
    title: "CCHP Systems",
    image:
      "https://broadusa.com/broad/wp-content/uploads/2020/04/home_CCHP-300x195.jpg",
    description:
      "Trigeneration systems that produce cooling, heating, and power from a single natural gas source. Achieve 80–90% total energy utilisation, drastically reducing energy costs, carbon footprint, and grid dependency for large facilities.",
    link: "/cchp-systems",
  },
  {
    id: 4,
    title: "Absorption Heat Pumps",
    image: "/images/Absorption Heat Pump.jpg",
    description:
      "Gas-fired absorption heat pumps that recover and upgrade low-grade waste heat (30–80°C) for process heating, hot water, and space heating - without adding new primary energy sources to your facility.",
    link: "/absorption-heat-pump",
  },
  {
    id: 5,
    title: "Pumpsets",
    image: pumpImg,
    description:
      "Corrosion-resistant, HVAC-grade circulation pumps engineered for industrial cooling water transfer, thermal system circulation, and long-lasting performance in demanding chiller and heat pump installations.",
    link: "/pumpsets",
  },
];

export default function SpecialistsProduct() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-100/30 blur-[120px] rounded-full z-0 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Our Products</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          Precision-engineered, high-efficiency chillers and systems that power
          sustainable industries across India.
        </p>
      </motion.div>

      <FadeInStaggerContainer staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto relative z-10">
        {products.map((product) => (
          <FadeInStaggerItem key={product.id}>
            <Link href={product.link} className="block group h-full">
              <motion.div 
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="h-full rounded-2xl bg-white/60 backdrop-blur-xl border border-gray-100/50 overflow-hidden shadow-lg shadow-gray-200/40 relative"
              >
                {/* Image container with subtle spring zoom */}
                <div className="relative h-56 overflow-hidden bg-gray-50/50">
                  <motion.div
                    className="w-full h-full"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 font-light">
                    {product.description}
                  </p>
                  
                  {/* Subtle link reveal */}
                  <div className="flex items-center text-blue-600 font-medium">
                    <span className="relative overflow-hidden flex items-center">
                      <span className="inline-block transition-transform duration-300 group-hover:-translate-y-[120%]">Learn more</span>
                      <span className="absolute left-0 top-0 inline-block translate-y-[120%] transition-transform duration-300 group-hover:translate-y-0">Learn more</span>
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
                
                {/* Soft glow on hover */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-blue-500/0 group-hover:ring-blue-500/20 transition-all duration-500" />
              </motion.div>
            </Link>
          </FadeInStaggerItem>
        ))}
      </FadeInStaggerContainer>
    </section>
  );
}
