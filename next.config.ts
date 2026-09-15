/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Improves debugging & performance
  images: {
    qualities: [25, 50, 75, 80, 90, 100],
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
      // Fix broken slug with spaces
      {
        source: "/blogs/real%20-%20cost%20-%20absorption%20-%20chillers%20-%20india%20-%20capex%20-%20opex%20-%20breakdown",
        destination: "/blogs/real-cost-absorption-chillers-india-capex-opex-breakdown",
        permanent: true,
      },
      // Group C: Blog competing with product page — rename to educational angle
      {
        source: "/blogs/vapor-absorption-chiller",
        destination: "/blogs/how-vapour-absorption-chillers-work",
        permanent: true,
      },
      // Group C: Merge "smart alternative" article into strongest "future" post
      {
        source: "/blogs/vapour-absorption-machine-vam-a-smart-alternative-for-energy-efficient-cooling",
        destination: "/blogs/vapor-absorption-machine-vam-the-future-of-energy-efficient-cooling",
        permanent: true,
      },
      // Group C: Merge "why future of cooling" article into strongest "future" post
      {
        source: "/blogs/why-vapor-absorption-chillers-are-the-future-of-cooling",
        destination: "/blogs/vapor-absorption-machine-vam-the-future-of-energy-efficient-cooling",
        permanent: true,
      },
      // Phase 3: Group D: Merge generic AI post into strongest AI monitoring post
      {
        source: "/blogs/how-ai-powered-hvac-system-optimization-is-revolutionizing-energy-efficiency",
        destination: "/blogs/ai-machine-learning-hvac",
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
