import { MetadataRoute } from 'next';
import { redirects } from '@/lib/redirects';
import { blogs } from '@/data/blogs';
import { caseStudies } from '@/data/caseStudies';

const baseUrl = 'https://www.broadindia.com';

/**
 * Last content update for the static pages. Bump this when those pages change
 * (a fixed date avoids telling Google every page changed on every deploy).
 */
const PAGES_UPDATED = new Date('2026-09-29');

type Entry = MetadataRoute.Sitemap[number];
type Freq = Entry['changeFrequency'];

// Indexable static pages. /privacy-policy is excluded because it is noindex.
const staticPages: { path: string; priority: number; changeFrequency: Freq }[] = [
  { path: '', priority: 1.0, changeFrequency: 'weekly' },

  // Product categories
  { path: '/vapour-absorption-chiller', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/cchp-systems', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/power-efficient-chiller', priority: 0.9, changeFrequency: 'monthly' },

  // Products
  { path: '/vapour-absorption-chiller/direct-fired-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/waste-heat-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/two-stage-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/single-stage-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/multi-energy-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/packaged-chiller', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/vapour-absorption-chiller/solar-driven', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/cchp-systems/broad-tri-generational-solutions', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/power-efficient-chiller/magnetic-bearing-oil-free', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/absorption-heat-pump', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/pumpsets', priority: 0.8, changeFrequency: 'monthly' },

  // Proof & industries
  { path: '/installations', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/industries', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/industries/industrial', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries/commercial', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries/healthcare', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries/data-centers', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries/retail', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/industries/hospitality', priority: 0.6, changeFrequency: 'monthly' },

  // Content & company
  { path: '/blogs', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/broad-group', priority: 0.5, changeFrequency: 'yearly' },
  { path: '/careers', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact-us', priority: 0.6, changeFrequency: 'yearly' },
  { path: '/terms-conditions', priority: 0.2, changeFrequency: 'yearly' },
];

const absolute = (src: string) => (src.startsWith('http') ? src : `${baseUrl}${encodeURI(src)}`);

/** Blog URLs that 301 to another post (merged content) must not be listed. */
const redirected = new Set(
  redirects.map((r) => decodeURIComponent(r.source)).filter((s) => s.startsWith('/blogs/') && !s.includes(':'))
);

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: PAGES_UPDATED,
    changeFrequency,
    priority,
  }));

  // Placeholder case studies are noindex until their content is complete
  const studies: MetadataRoute.Sitemap = caseStudies
    .filter((c) => c.status === 'complete')
    .map((c) => {
      const img = c.images.product[0]?.src ?? c.images.workplace.src;
      return {
        url: `${baseUrl}/installations/${c.slug}`,
        lastModified: PAGES_UPDATED,
        changeFrequency: 'yearly' as const,
        priority: 0.7,
        images: typeof img === 'string' ? [absolute(img)] : undefined,
      };
    });

  // One entry per URL: the first post wins for a duplicated id (that is the one /blogs/[id] renders)
  const seen = new Set<string>();
  const posts: MetadataRoute.Sitemap = blogs
    .filter((b) => {
      const path = `/blogs/${b.id}`;
      if (seen.has(b.id) || redirected.has(path)) return false;
      seen.add(b.id);
      return true;
    })
    .map((b) => ({
      url: `${baseUrl}/blogs/${b.id}`,
      lastModified: new Date(b.isoDate || b.date),
      changeFrequency: 'yearly' as const,
      priority: 0.6,
      images: b.image ? [absolute(b.image)] : undefined,
    }));

  return [...pages, ...studies, ...posts];
}
