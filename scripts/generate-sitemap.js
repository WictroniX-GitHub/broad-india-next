const fs = require("fs");
const path = require("path");

const BASE_URL = "https://www.broadindia.com"; // 🔹 Update with your actual domain

const generateSitemap = () => {
  const blogDir = path.join(__dirname, "../content/blog");
  const articlesDir = path.join(__dirname, "../content/articles");
  const publicDir = path.join(__dirname, "../public");

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  // 📌 Get all blog post slugs
  const blogPosts = fs.existsSync(blogDir)
    ? fs.readdirSync(blogDir).map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        return `
          <url>
            <loc>${BASE_URL}/blog/${slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq>weekly</changefreq>
            <priority>0.8</priority>
          </url>`;
      })
    : [];

  // 📌 Get all article slugs
  const articles = fs.existsSync(articlesDir)
    ? fs.readdirSync(articlesDir).map((fileName) => {
        const slug = fileName.replace(".mdx", "");
        return `
          <url>
            <loc>${BASE_URL}/articles/${slug}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <changefreq=weekly</changefreq>
            <priority>0.8</priority>
          </url>`;
      })
    : [];

  // 📌 Add static pages (update as needed)
  const staticPages = ["", "about", "contact", "blog", "articles"].map(
    (page) => `
      <url>
        <loc>${BASE_URL}/${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.6</priority>
      </url>`
  );

  // 📌 Combine all URLs into a sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${[...staticPages, ...blogPosts, ...articles].join("\n")}
  </urlset>`;

  // 📌 Write to public/sitemap.xml
  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap);
  console.log("✅ Sitemap updated successfully!");
};

// Run script
generateSitemap();
