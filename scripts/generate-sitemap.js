const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.broadindia.com";
const publicDir = path.join(__dirname, "../public");
const blogDir = path.join(__dirname, "../data/blogs");
const articlesDir = path.join(__dirname, "../data/articles");

if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

const generateUrls = (dir, basePath) => {
  return fs.existsSync(dir)
    ? fs.readdirSync(dir).flatMap((fileName) => {
        const id = fileName.replace(path.extname(fileName), "");
        return [
          `
          <url>
            <loc>${BASE_URL}/${basePath}/${id}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>`,
          `
          <url>
            <loc>${BASE_URL}/${basePath}/${id}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.7</priority>
          </url>`,
        ];
      })
    : [];
};

const blogPosts = generateUrls(blogDir, "blogs");
const articles = generateUrls(articlesDir, "articles");

// Static pages
const staticPages = [
  "",
  "about",
  "contactUs",
  "installations",
  "broadGroup",
  "blogs",
  "articles",
  "careers",
].map(
  (page) => `
    <url>
      <loc>${BASE_URL}/${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>`
);

// Generate final sitemap
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${[...staticPages, ...blogPosts, ...articles].join("\n")}
</urlset>`;

// Write to sitemap.xml
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
console.log("✅ Sitemap with detail pages updated successfully!");
