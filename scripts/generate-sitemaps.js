import fs from 'fs';
import path from 'path';

// Load static logic natively for exact string maps
import { locations } from '../src/data/locations.js';

const DOMAIN = "https://www.excelinspectionsolutions.co.uk"; // Generic absolute domain
const today = new Date().toISOString().split('T')[0];

const services = [
  { slug: "lifting-equipment", file: "lifting-equipment-inspections" },
  { slug: "crane-inspections", file: "crane-inspections" },
  { slug: "passenger-and-goods-lifts-inspections", file: "passenger-and-goods-lifts-inspections" },
  { slug: "work-at-height-equipment-inspections", file: "work-at-height-equipment-inspections" },
  { slug: "mobile-plant-inspection", file: "mobile-plant-inspection" },
  { slug: "garage-equipment-inspections", file: "garage-equipment-inspections" },
  { slug: "firefighting-and-evacuation-lift-inspections", file: "firefighting-and-evacuation-lift-inspections" }
];

const counties = Object.keys(locations);

function header() { return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`; }
function footer() { return `</urlset>`; }
function urlTag(loc, priority = "0.8") {
  return `  <url>\n    <loc>${DOMAIN}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>\n`;
}

// 1. SERVICES SITEMAP (/sitemaps/services.xml)
let servicesXml = header();
servicesXml += urlTag("/", "1.0");
servicesXml += urlTag("/faq", "0.7");
for (const s of services) {
  servicesXml += urlTag(`/${s.file}`, "0.9");
}
servicesXml += footer();

// 2. COUNTIES SITEMAP (/sitemaps/counties.xml)
let countiesXml = header();
for (const s of services) {
  for (const c of counties) {
    countiesXml += urlTag(`/loler/${s.slug}/${c}/`, "0.8");
  }
}
countiesXml += footer();

// 3. TOWNS SITEMAP (/sitemaps/towns.xml)
let townsXml = header();
for (const s of services) {
  for (const c of counties) {
    const localTowns = locations[c];
    for (const t of localTowns) {
      townsXml += urlTag(`/loler/${s.slug}/${c}/${t}/`, "0.6");
    }
  }
}
townsXml += footer();

// 4. MAIN INDEX (/sitemap.xml)
const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${DOMAIN}/sitemaps/services.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemaps/counties.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
  <sitemap>
    <loc>${DOMAIN}/sitemaps/towns.xml</loc>
    <lastmod>${today}</lastmod>
  </sitemap>
</sitemapindex>`;

// Write outputs to public directory
const publicDir = path.join(process.cwd(), 'dist'); // Output straight to dist to respect final built outputs
const sitemapsDir = path.join(publicDir, 'sitemaps');

if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });
if (!fs.existsSync(sitemapsDir)) fs.mkdirSync(sitemapsDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), indexXml);
fs.writeFileSync(path.join(sitemapsDir, 'services.xml'), servicesXml);
fs.writeFileSync(path.join(sitemapsDir, 'counties.xml'), countiesXml);
fs.writeFileSync(path.join(sitemapsDir, 'towns.xml'), townsXml);

console.log("✅ Successfully generated clustered XML sitemaps.");
