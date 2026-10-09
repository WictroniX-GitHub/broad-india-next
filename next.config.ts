import type { NextConfig } from "next";
import { redirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Improves debugging & performance
  // Never stream metadata: LinkedIn, Slack and AI fetchers must find title/OG/canonical in <head>
  htmlLimitedBots: /.*/,
  images: {
    qualities: [25, 50, 75, 80, 90, 100],
    remotePatterns: [
      { protocol: "https", hostname: "www.jswsteel.in" },
      { protocol: "https", hostname: "www.constructionweekonline.in" },
      { protocol: "https", hostname: "upload.wikimedia.org" },
      { protocol: "https", hostname: "download.logo.wine" },
      { protocol: "https", hostname: "animationvisarts.com" },
      { protocol: "https", hostname: "www.jsw.in" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "m.economictimes.com" },
      { protocol: "https", hostname: "media.proprofs.com" },
    ],
    formats: ["image/avif", "image/webp"], // Optimized image formats
    minimumCacheTTL: 60, // Cache images for 1 minute
  },
  experimental: {
    scrollRestoration: true, // Enables native browser scroll restoration
  },
  async redirects() {
    return redirects;
  },
  async headers() {
    return [
      // Gated case-study PDFs: reachable by direct link, kept out of search indexes
      {
        source: "/case-studies/:path*.pdf",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/(.*)",
        headers: [
          {
            key: "Vary",
            value: "User-Agent",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
