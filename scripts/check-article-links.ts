// Self-check for linkProducts in lib/articleHtml.ts. Run: node scripts/check-article-links.ts
import assert from "node:assert/strict";
import { linkProducts } from "../lib/articleHtml.ts";

// First mention linked, most specific product wins, headings and existing links untouched
const out = linkProducts(
  '<h2>Two-stage chillers</h2><p>A two-stage absorption chiller beats a single-stage chiller.</p><p>Another two-stage chiller.</p><p><a href="/x">vapour absorption chiller</a></p>'
);
assert.match(out, /<h2>Two-stage chillers<\/h2>/);
assert.match(out, /<a href="\/vapour-absorption-chiller\/two-stage-chiller">two-stage absorption chiller<\/a> beats a single-stage chiller/);
assert.match(out, /<p>Another <a href="\/vapour-absorption-chiller\/single-stage-chiller">|<p>Another two-stage chiller/);
assert.equal((out.match(/two-stage-chiller"/g) ?? []).length, 1);
assert.match(out, /<a href="\/x">vapour absorption chiller<\/a>/);

// Budget counts links the post already has
const full = '<p><a href="/cchp-systems">a</a> <a href="/pumpsets">b</a> <a href="/absorption-heat-pump">c</a></p><p>trigeneration plant</p>';
assert.equal(linkProducts(full), full);

// Never more than 3 product links added
const many = "<p>CCHP</p><p>absorption heat pump</p><p>packaged chiller</p><p>multi-energy chiller</p>";
assert.equal((linkProducts(many).match(/<a /g) ?? []).length, 3);

console.log("article link checks passed");
