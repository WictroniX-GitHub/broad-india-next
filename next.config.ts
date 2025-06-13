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
  swcMinify: true, // Faster builds with SWC
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
        ],
      },
    ];
  },
};

module.exports = nextConfig;
