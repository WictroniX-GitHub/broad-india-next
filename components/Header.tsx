"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Offcanvas, Dropdown } from "react-bootstrap";
import logo from "@/public/images/broad-logo.webp";

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 875);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="fixed top-0 w-full z-10">
      <div className="shadow-md bg-white/50 backdrop-blur-lg mx-auto mt-4 px-6 py-3 flex justify-between items-center rounded-xl w-[90%] md:w-[80%] lg:w-[70%]">
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
            <Dropdown>
              <Dropdown.Toggle className="bg-transparent text-gray-800 border-none">
                Products
              </Dropdown.Toggle>
              <Dropdown.Menu className="shadow-lg bg-white border-none">
                <Dropdown.Item>
                  <Link href="/vapAbsorptionChiller">
                    Vapour Absorption Chiller
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/Chillers">BROAD CCHP System</Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/magneticBearingChillers">
                    Magnetic Bearing Oil Free Chiller
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link href="/pump">Pumpset</Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Link href="/installations">Installations</Link>
            <Link href="/about">About</Link>
            <Link href="/broadGroup">BROAD Group</Link>
            <Link href="/blogs-and-articles">Blogs & Articles</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contactUs" className="btn btn-primary">
              Contact us
            </Link>
          </nav>
        )}
      </div>

      {/* Mobile Offcanvas Menu */}
      <Offcanvas
        show={isMenuOpen}
        onHide={() => setIsMenuOpen(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <nav className="flex flex-col items-center space-y-4 text-gray-800">
            <Link href="/">Home</Link>
            <h5>Products</h5>
            <Link href="/vapAbsorptionChiller">Vapour Absorption Chiller</Link>
            <Link href="/Chillers">BROAD CCHP System</Link>
            <Link href="/peChillers">Magnetic Bearing Oil Free Chiller</Link>
            <Link href="/pump">Pumpset</Link>
            <Link href="/installations">Installations</Link>
            <Link href="/about">About</Link>
            <Link href="/broadGroup">BROAD Group</Link>
            <Link href="/blogs-and-articles">Blogs & Articles</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contactUs" className="btn btn-primary">
              Contact us
            </Link>
          </nav>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
