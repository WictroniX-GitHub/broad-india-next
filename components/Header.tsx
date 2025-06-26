"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Offcanvas } from "react-bootstrap";
import logo from "@/public/images/broad-logo.webp";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
  };

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[80%] z-50 rounded-xl">
      <div className="bg-white/30 backdrop-blur-lg border border-white/20 px-6 py-3 flex justify-between items-center rounded-xl shadow-lg w-full">
        <Link
          href="/"
          className="flex items-center text-black font-semibold text-lg"
        >
          <Image
            src={logo}
            alt="logo"
            width={48}
            height={48}
            className="mr-3"
          />
          BROAD India
        </Link>
        {isMobile ? (
          <button onClick={() => setIsMenuOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="h-8 w-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        ) : (
          <nav className="flex items-center space-x-6 text-gray-800">
            <Link href="/">Home</Link>
            <div className="relative">
              <button
                onClick={() => setIsProductsOpen(!isProductsOpen)}
                className="focus:outline-none flex items-center gap-1"
              >
                Products
                <span className="text-xs">▼</span>
              </button>
              {isProductsOpen && (
                <div className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-lg z-50">
                  <Link
                    href="/vapour-absorption-chiller"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Vapour Absorption Chiller
                  </Link>
                  <Link
                    href="/cchp-systems"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    BROAD CCHP System
                  </Link>
                  <Link
                    href="/power-efficient-chiller"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Power Efficient Chiller
                  </Link>
                  <Link
                    href="/absorption-heat-pump"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Absorption Heat Pump
                  </Link>
                  <Link
                    href="/pumpsets"
                    className="block px-4 py-2 hover:bg-gray-200"
                  >
                    Pumpset
                  </Link>
                </div>
              )}
            </div>
            <Link href="/installations">Installations</Link>
            <Link href="/about">About</Link>
            <Link href="/broad-group">BROAD Group</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="/articles">Articles</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact-us">
              <div className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer">
                Contact Us
              </div>
            </Link>
          </nav>
        )}
      </div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={isMenuOpen}
        onHide={() => setIsMenuOpen(false)}
        placement="end"
        className="fixed top-0 left-0 w-full h-screen bg-white z-50 shadow-lg p-6 flex flex-col items-center space-y-4"
      >
        <button
          className="absolute top-5 right-5 text-black text-2xl"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <nav className="flex flex-col items-center space-y-4 text-gray-800 mt-10">
          <Link href="/" className="font-bold" onClick={handleCloseMenu}>
            Home
          </Link>

          <button
            onClick={() => setIsProductsOpen(!isProductsOpen)}
            className="flex items-center gap-2 font-bold focus:outline-none"
          >
            Products <span className="text-xs">▼</span>
          </button>
          {isProductsOpen && (
            <div className="w-full text-center">
              <Link
                href="/vapour-absorption-chiller"
                className="block py-2"
                onClick={handleCloseMenu}
              >
                Vapour Absorption Chiller
              </Link>
              <Link
                href="/cchp-systems"
                className="block py-2"
                onClick={handleCloseMenu}
              >
                BROAD CCHP System
              </Link>
              <Link
                href="/power-efficient-chiller"
                className="block py-2"
                onClick={handleCloseMenu}
              >
                Power Efficient Chiller
              </Link>
              <Link
                href="/absorption-heat-pump"
                className="block py-2"
                onClick={handleCloseMenu}
              >
                Absorption Heat Pump
              </Link>
              <Link
                href="/pumpsets"
                className="block py-2"
                onClick={handleCloseMenu}
              >
                Pumpset
              </Link>
            </div>
          )}

          <Link
            href="/installations"
            className="font-bold"
            onClick={handleCloseMenu}
          >
            Installations
          </Link>
          <Link href="/about" className="font-bold" onClick={handleCloseMenu}>
            About
          </Link>
          <Link
            href="/broad-group"
            className="font-bold"
            onClick={handleCloseMenu}
          >
            BROAD Group
          </Link>
          <Link href="/blogs" className="font-bold" onClick={handleCloseMenu}>
            Blogs
          </Link>
          <Link
            href="/articles"
            className="font-bold"
            onClick={handleCloseMenu}
          >
            Articles
          </Link>
          <Link href="/careers" className="font-bold" onClick={handleCloseMenu}>
            Careers
          </Link>

          <Link href="/contact-us" onClick={handleCloseMenu}>
            <div className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer w-full text-center">
              Contact Us
            </div>
          </Link>
        </nav>
      </Offcanvas>
    </div>
  );
}
