import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';
import { blogs } from '@/data/blogs';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.broadindia.com';

  const staticRoutes = [
    '',
    '/about',
    '/absorption-heat-pump',
    '/articles',
    '/blogs',
    '/broad-group',
    '/careers',
    '/cchp-systems',
    '/cchp-systems/broad-tri-generational-solutions',
    '/contact-us',
    '/faq',
    '/installations',
    '/power-efficient-chiller',
    '/power-efficient-chiller/magnetic-bearing-oil-free',
    '/privacy-policy',
    '/pumpsets',
    '/terms-conditions',
    '/vapour-absorption-chiller',
    '/vapour-absorption-chiller/direct-fired-chiller',
    '/vapour-absorption-chiller/multi-energy-chiller',
    '/vapour-absorption-chiller/packaged-chiller',
    '/vapour-absorption-chiller/single-stage-chiller',
    '/vapour-absorption-chiller/solar-driven',
    '/vapour-absorption-chiller/two-stage-chiller',
    '/vapour-absorption-chiller/waste-heat-chiller',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.id}`,
    lastModified: article.date ? new Date(article.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const blogRoutes = blogs.map((blog) => ({
    url: `${baseUrl}/blogs/${blog.id}`,
    lastModified: blog.date ? new Date(blog.date) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...blogRoutes];
}
