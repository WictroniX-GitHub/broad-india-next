"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import wxLogo from "@/public/images/wxWhite.svg";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 pt-20 pb-8 border-t border-gray-900">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col">
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/BROAD INDIA.webp"
                alt="Broad India"
                width={140}
                height={40}
                className="filter invert object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-xs font-light">
              Pioneering non-electric, sustainable cooling across India since 2001. We help industries slash energy usage and decarbonize operations.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://www.facebook.com/BROADAIRINDIA"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-500 transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://instagram.com/broad_india"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white hover:border-pink-500 transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://youtube.com/channel/UCVaHso3cFpo0kQn2uTo1jtA"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-red-600 hover:text-white hover:border-red-500 transition-all duration-300"
              >
                <Youtube size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/broad-india/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2] transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Industries", href: "/industries" },
                { name: "Installations", href: "/installations" },
                { name: "Blogs", href: "/blogs" },
                { name: "Careers", href: "/careers" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Products & Solutions */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Solutions</h3>
            <ul className="space-y-4">
              {[
                { name: "Vapour Absorption Chiller", href: "/vapour-absorption-chiller" },
                { name: "CCHP Systems", href: "/products/cchp-systems" },
                { name: "Power Efficient Chiller", href: "/products/power-efficient-chiller" },
                { name: "Absorption Heat Pumps", href: "/products/absorption-heat-pumps" },
                { name: "Pumpsets", href: "/products/pumpsets" },
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="group flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                    <span className="transform group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 tracking-tight">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:akshay@broad.net"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Mail size={14} />
                  </div>
                  <span className="mt-1.5">akshay@broad.net</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919427851584"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Phone size={14} />
                  </div>
                  <div className="mt-1.5 flex flex-col">
                    <span>+91 94278 51584</span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:01244012824"
                  className="flex items-start gap-3 text-gray-400 hover:text-white transition-colors group text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Phone size={14} />
                  </div>
                  <span className="mt-1.5">0124-4012824</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-xs font-light text-gray-500">
            <p>© {new Date().getFullYear()} BROAD Air Conditioning India Pvt. Ltd. All rights reserved.</p>
            <div className="hidden md:block h-3 w-px bg-gray-700" />
            <div className="flex gap-4">
              <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms-conditions" className="hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 font-light">Powered by</span>
            <a
              href="https://www.wictronix.com"
              target="_blank"
              rel="noreferrer"
              className="opacity-70 hover:opacity-100 transition-opacity"
            >
              <Image src={wxLogo} alt="WictroniX" width={180} height={56} className="object-contain" />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
