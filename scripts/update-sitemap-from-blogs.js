const fs = require("fs");
const path = require("path");

const repoRoot = path.resolve(__dirname, "..");
const blogsPath = path.join(repoRoot, "data", "blogs.ts");
const sitemapPath = path.join(repoRoot, "public", "sitemap.xml");
const base = "https://www.broadindia.com";

function extractBlogObjects(text) {
  const objRe = /\{([\s\S]*?)\}\s*,?/g;
  const objs = [];
  let m;
  while ((m = objRe.exec(text)) !== null) {
    const block = m[1];
    const idMatch = /id\s*:\s*"([^\"]+)"/.exec(block);
    if (!idMatch) continue;
    const id = idMatch[1];
    const dateMatch = /date\s*:\s*"([^\"]+)"/.exec(block);
    const dateRaw = dateMatch ? dateMatch[1] : null;
    let iso = null;
    if (dateRaw) {
      const parsed = new Date(dateRaw);
      if (!isNaN(parsed.getTime())) iso = parsed.toISOString();
    }
    objs.push({ id, date: iso });
  }
  return objs;
}

function parseSitemapLocs(xml) {
  const re = /<loc>([^<]+)<\/loc>/g;
  const locs = [];
  let m;
  while ((m = re.exec(xml)) !== null) {
    locs.push(m[1]);
  }
  return locs;
}

function buildEntry(url, lastmod) {
  const lm = lastmod || new Date().toISOString();
  return `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lm}</lastmod>\n    <priority>0.70</priority>\n  </url>`;
}

function main() {
  if (!fs.existsSync(blogsPath)) {
    console.error("blogs file not found:", blogsPath);
    process.exit(1);
  }
  if (!fs.existsSync(sitemapPath)) {
    console.error("sitemap file not found:", sitemapPath);
    process.exit(1);
  }

  const blogsText = fs.readFileSync(blogsPath, "utf8");
  const sitemapText = fs.readFileSync(sitemapPath, "utf8");

  const blogs = extractBlogObjects(blogsText);
  const locs = parseSitemapLocs(sitemapText);

  const existingBlogSlugs = new Set(
    locs
      .filter((l) => l.includes("/blogs/"))
      .map((l) => l.replace(/https?:\/\/[^/]+\/blogs\//, ""))
  );

  const missing = blogs.filter((b) => !existingBlogSlugs.has(b.id));

  if (missing.length === 0) {
    console.log("No missing blog entries. Sitemap already includes all blogs.");
    return;
  }

  // insert before closing </urlset>
  const insertIndex = sitemapText.lastIndexOf("</urlset>");
  if (insertIndex === -1) {
    console.error("Invalid sitemap: missing </urlset>");
    process.exit(1);
  }

  const entriesText =
    missing.map((b) => buildEntry(`${base}/blogs/${b.id}`, b.date)).join("\n") +
    "\n";

  const newSitemap =
    sitemapText.slice(0, insertIndex) +
    entriesText +
    sitemapText.slice(insertIndex);

  fs.writeFileSync(sitemapPath, newSitemap, "utf8");
  console.log(`Appended ${missing.length} blog entries to sitemap:`);
  missing.forEach((b) => console.log("-", b.id));
}

main();
