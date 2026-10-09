import type { NextConfig } from "next";

type Redirect = Awaited<ReturnType<NonNullable<NextConfig["redirects"]>>>[number];

/**
 * Permanent redirects, shared by next.config.ts and app/sitemap.ts
 * (the sitemap must not list URLs that redirect elsewhere).
 */
export const redirects: Redirect[] = [
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
  // Old /articles section: every URL resolves in a single 301 hop
  {
    source: "/articles",
    destination: "/blogs",
    permanent: true,
  },
  {
    source: "/articles/vapour-absorption-machine-vam-a-smart-alternative-for-energy-efficient-cooling",
    destination: "/blogs/vapor-absorption-machine-vam-the-future-of-energy-efficient-cooling",
    permanent: true,
  },
  {
    source: "/articles/why-vapor-absorption-chillers-are-the-future-of-cooling",
    destination: "/blogs/vapor-absorption-machine-vam-the-future-of-energy-efficient-cooling",
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
  // Old /products/* section (was linked from the footer); specific paths first, catch-all last
  { source: "/products/cchp-systems", destination: "/cchp-systems", permanent: true },
  { source: "/products/power-efficient-chiller", destination: "/power-efficient-chiller", permanent: true },
  { source: "/products/absorption-heat-pumps", destination: "/absorption-heat-pump", permanent: true },
  { source: "/products/pumpsets", destination: "/pumpsets", permanent: true },
  { source: "/products/:slug*", destination: "/vapour-absorption-chiller", permanent: true },
  { source: "/vapAbsorptionChiller", destination: "/vapour-absorption-chiller", permanent: true },
  // Listicle is offline for now; temporary (307) so the URL can return as a 2026 edition later
  { source: "/blogs/top-5-vapor-absorption-machine-manufacturers-india-2025", destination: "/vapour-absorption-chiller", permanent: false },
  // Mistyped or truncated URLs that Google still shows impressions for (GSC Pages export, Oct 2026)
  { source: "/absorption-heat-punk", destination: "/absorption-heat-pump", permanent: true },
  { source: "/blogs/understanding-vapour-absorption-machines", destination: "/blogs/understanding-vapour-absorption-machines-vam-and-their-role-in-energy-efficiency", permanent: true },
  { source: "/blogs/central-air-conditoners-in-india-the-ultimate-solution-to-beating-the-heat", destination: "/blogs/central-air-conditioners-in-india-the-ultimate-solution-to-beating-the-heat", permanent: true },
  { source: "/blogs/chillers-definition-calculation-absorption-systems", destination: "/blogs/tr-in-chillers-definition-calculation-absorption-systems", permanent: true },
  { source: "/blogs/vapor-absorption-chiller-the-smart-way-to-reduce-energy-costs", destination: "/blogs/vapor-absorption-chillers-the-smart-way-to-reduce-energy-costs", permanent: true },
  { source: "/blogs/what-is-vampour-absorption-machine", destination: "/blogs/what-is-a-vapour-absorption-machine", permanent: true },
];
