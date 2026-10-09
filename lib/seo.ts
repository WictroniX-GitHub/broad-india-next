import type { Metadata } from "next";

export const SITE_URL = "https://www.broadindia.com";
/** Matches the "@id" of the Organization schema on the homepage. */
export const ORG_ID = `${SITE_URL}/#organization`;

interface PageSeo {
  path: string;
  title: string;
  description: string;
  image?: string;
}

/** Share image for pages without a hero photo of their own. */
const DEFAULT_IMAGE = "/images/products/broad-product-range.jpg";

/** Shortens a meta description to `max` characters at a sentence end, else at a word boundary. Text is never reworded. */
export function trimDescription(text: string, max = 155): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const sentence = cut.lastIndexOf(". ");
  if (sentence >= 70) return cut.slice(0, sentence + 1);
  return cut.slice(0, max - 1).replace(/\s+\S*$/, "").replace(/[\s,:;–-]+$/, "") + "…";
}

/** Title, description, canonical, Open Graph and Twitter card for one page. */
export function pageMetadata({ path, title, description, image = DEFAULT_IMAGE }: PageSeo): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = [encodeURI(image)];
  description = trimDescription(description);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, images, type: "website", siteName: "BROAD India", locale: "en_IN" },
    twitter: { card: "summary_large_image", title, description, images },
  };
}

/** Product JSON-LD. No offers or reviews: BROAD publishes no prices and we do not invent ratings. */
export function productSchema({ path, name, description, image, category }: PageSeo & { name: string; category: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    url: `${SITE_URL}${path}`,
    image: image ? `${SITE_URL}${encodeURI(image)}` : undefined,
    category,
    brand: { "@type": "Brand", name: "BROAD" },
    manufacturer: { "@id": ORG_ID },
  };
}

/** "May 14, 2026" or "2026-05-14" → "2026-05-14T00:00:00+05:30": Google needs ISO 8601 with a timezone. */
export function isoDateIST(date: string): string | undefined {
  const iso = /^(\d{4})-(\d{2})-(\d{2})/.exec(date);
  if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}T00:00:00+05:30`;
  const d = new Date(date);
  if (isNaN(d.getTime())) return undefined;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T00:00:00+05:30`;
}
