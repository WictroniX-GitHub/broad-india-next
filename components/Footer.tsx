"use client";

import Link from "next/link";
import Image from "next/image";
import wxLogo from "@/public/images/wxWhite.svg";

export default function Footer() {
  return (
    <div className="bg-black pt-8 text-gray-400">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Socials */}
          <div className="flex flex-col items-center">
            <Image
              src="/images/BROAD INDIA.webp"
              alt="Broad India"
              width={120}
              height={120}
              className="filter invert"
            />
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.facebook.com/BROADAIRINDIA"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://instagram.com/broad_india"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/instagram.webp"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
              </a>
              <a
                href="https://youtube.com/channel/UCVaHso3cFpo0kQn2uTo1jtA"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/youtube.png"
                  alt="YouTube"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/broad-india/"
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  src="/images/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
              </a>
            </div>
          </div>
          {/* Links */}
          <div>
            <h4 className="text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:akshay@broad.net"
                  className="flex items-center space-x-2"
                >
                  ✉️ akshay@broad.net
                </a>
              </li>
              <li>
                <a
                  href="tel:9427851584"
                  className="flex items-center space-x-2"
                >
                  📞 9427851584
                </a>
              </li>
              <li>
                <a
                  href="tel:01244012824"
                  className="flex items-center space-x-2"
                >
                  📞 01244012824
                </a>
              </li>
            </ul>
          </div>
          {/* Company Info */}
          <div className="text-center">
            <h5>
              BROAD Air Conditioning India Pvt. Ltd. (BROAD India) is a
              subsidiary of BROAD Group.
            </h5>
            <p className="mt-4">Powered by</p>
            <a
              href="https://www.wictronix.com"
              target="_blank"
              rel="noreferrer"
              className="flex justify-center"
            >
              <Image src={wxLogo} alt="WictroniX" width={120} height={40} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
