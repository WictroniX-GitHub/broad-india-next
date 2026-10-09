/**
 * Product registry used by the Category / PDP templates for the heat-source selector,
 * the comparison table and "related products". Figures are copied from each product page's specs.
 */
export type HeatSource = "Steam" | "Hot water" | "Exhaust gas" | "Natural gas / Oil" | "Solar thermal";

export interface ProductEntry {
  title: string;
  href: string;
  image: string;
  category: string;
  capacity?: string;
  heatSources?: HeatSource[];
  drive?: string;
  highlight?: string;
}

export const products: ProductEntry[] = [
  {
    title: "Direct-Fired Vapour Absorption Chiller",
    href: "/vapour-absorption-chiller/direct-fired-chiller",
    image: "/images/nonElec.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "66–3,300 TR",
    heatSources: ["Natural gas / Oil"],
    drive: "Natural Gas / Light Oil",
    highlight: "< 10 ppm NOx",
  },
  {
    title: "Waste-Heat-Driven Absorption Chiller",
    href: "/vapour-absorption-chiller/waste-heat-chiller",
    image: "/images/wasteHeat.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "100–3,300 TR",
    heatSources: ["Steam", "Exhaust gas"],
    drive: "Steam / Exhaust, 70–500°C+",
    highlight: "Zero Fuel Cost",
  },
  {
    title: "Two-Stage Absorption Chiller",
    href: "/vapour-absorption-chiller/two-stage-chiller",
    image: "/images/products/bh-model-chiller.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "30–3,300 TR",
    heatSources: ["Natural gas / Oil", "Steam", "Exhaust gas"],
    drive: "Gas / Steam / Exhaust",
    highlight: "COP 1.1–1.4",
  },
  {
    title: "Single-Stage Absorption Chiller",
    href: "/vapour-absorption-chiller/single-stage-chiller",
    image: "/images/products/bds-steam-chiller.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "100–3,300 TR",
    heatSources: ["Steam", "Hot water"],
    drive: "Hot water 70–95°C / Steam 0.1–1.5 kg/cm²",
    highlight: "COP 0.7–0.8",
  },
  {
    title: "Steam & Hot Water Absorption Chiller",
    href: "/vapour-absorption-chiller/steam-hot-water-absorption-chiller",
    image: "/images/products/bds-steam-chiller.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "30–3,300 TR",
    heatSources: ["Steam", "Hot water"],
    drive: "Steam 0.1–10.5 kg/cm² / Hot water 70–180°C",
    highlight: "COP 0.7–1.4",
  },
  {
    title: "Multi-Energy Absorption Chiller",
    href: "/vapour-absorption-chiller/multi-energy-chiller",
    image: "/images/products/bze-multi-energy-chiller.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "100–3,300 TR",
    heatSources: ["Exhaust gas", "Hot water", "Natural gas / Oil", "Steam"],
    drive: "Exhaust / Hot Water + Gas / Oil / Steam",
    highlight: "Seamless energy switching",
  },
  {
    title: "Packaged Absorption Chiller",
    href: "/vapour-absorption-chiller/packaged-chiller",
    image: "/images/products/packaged-chiller.jpg",
    category: "/vapour-absorption-chiller",
    capacity: "40–2,200 TR",
    heatSources: ["Natural gas / Oil", "Steam"],
    drive: "Gas / Oil / Steam",
    highlight: "< 10 ppm NOx",
  },
  {
    title: "Solar-Driven Vapour Absorption Chiller",
    href: "/vapour-absorption-chiller/solar-driven",
    image: "/images/product-vac-solar-driven.png",
    category: "/vapour-absorption-chiller",
    capacity: "100–3,300 TR",
    heatSources: ["Solar thermal", "Hot water"],
    drive: "Solar Thermal, 70–95°C",
    highlight: "Zero carbon emissions",
  },
  { title: "BROAD Tri-Generational Solutions", href: "/cchp-systems/broad-tri-generational-solutions", image: "/images/CCHP_1.jpg", category: "/cchp-systems" },
  { title: "Magnetic Bearing Oil-Free Chiller", href: "/power-efficient-chiller/magnetic-bearing-oil-free", image: "/images/products/magnetic-bearing-chiller.jpg", category: "/power-efficient-chiller" },
  { title: "Absorption Heat Pumps", href: "/absorption-heat-pump", image: "/images/Absorption Heat Pump.jpg", category: "/absorption-heat-pump" },
  { title: "Factory-Assembled Pumpsets", href: "/pumpsets", image: "/images/broadPump.webp", category: "/pumpsets" },
];

export const findProduct = (href: string) => products.find((p) => p.href === href);

/** Siblings in the same category; falls back to products from other families. */
export function relatedProducts(href: string, limit = 3): ProductEntry[] {
  const self = findProduct(href);
  const siblings = products.filter((p) => p.href !== href && self && p.category === self.category);
  if (siblings.length) return siblings.slice(0, limit);
  const seen = new Set<string>();
  return products
    .filter((p) => p.href !== href && !seen.has(p.category) && seen.add(p.category))
    .slice(0, limit);
}
