/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Improves debugging & performance
  images: {
    domains: [
      "broadusa.com",
      "www.jswsteel.in",
      "www.constructionweekonline.in",
      "upload.wikimedia.org",
      "download.logo.wine",
      "animationvisarts.com",
      "www.jsw.in",
    ],
    formats: ["image/avif", "image/webp"], // Optimized image formats
    minimumCacheTTL: 60, // Cache images for 1 minute
  },
  experimental: {
    scrollRestoration: true, // Enables native browser scroll restoration
  },
  async headers() {
    return [
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

module.exports = nextConfig;
