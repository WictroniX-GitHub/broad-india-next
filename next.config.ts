/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Improves debugging & performance
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "broadusa.com" },
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
    return [
      {
        source: "/hvac-systems",
        destination: "/vapour-absorption-chiller",
        permanent: true,
      },
      {
        source: "/cchp",
        destination: "/cchp-systems",
        permanent: true,
      },
      {
        source: "/articles/:slug*",
        destination: "/blogs/:slug*",
        permanent: true,
      },
    ];
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
