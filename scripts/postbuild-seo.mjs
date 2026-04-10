import fs from 'node:fs/promises';
import path from 'node:path';
import { buildRobotsTxt, buildSeoData, buildSitemapXml, routeDefinitions } from '../src/site/seo.js';
import { supportedLanguages } from '../src/content/locales/index.js';

const distDir = path.resolve('dist');

function escapeHtml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');
}

function applySeoToHtml(template, seo) {
  const alternatesMarkup = seo.alternates
    .map(
      (alternate) =>
        `    <link rel="alternate" hreflang="${alternate.lang}" href="${alternate.href}" data-seo-marker="alternate" />`,
    )
    .join('\n');

  const schemaMarkup = `    <script id="seo-structured-data" type="application/ld+json">${JSON.stringify(
    seo.schema,
  )}</script>`;

  return template
    .replace(/<html lang="[^"]+">/, `<html lang="${seo.lang}">`)
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seo.title)}</title>`)
    .replace(
      /<meta\s+name="description"\s+content="[^"]*"\s*\/>/,
      `<meta name="description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:title" content="${escapeHtml(seo.title)}" />`,
    )
    .replace(
      /<meta\s+property="og:description"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(
      /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:url" content="${seo.canonicalUrl}" />`,
    )
    .replace(
      /<meta\s+property="og:locale"\s+content="[^"]*"\s*\/>/,
      `<meta property="og:locale" content="${seo.ogLocale}" />`,
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:title" content="${escapeHtml(seo.title)}" />`,
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${escapeHtml(seo.description)}" />`,
    )
    .replace(
      /<link rel="canonical" href="[^"]*" data-seo-marker="canonical" \/>/,
      `<link rel="canonical" href="${seo.canonicalUrl}" data-seo-marker="canonical" />`,
    )
    .replace(/<!-- SEO_ALTERNATES -->/, alternatesMarkup)
    .replace(/<!-- SEO_SCHEMA -->/, schemaMarkup);
}

async function ensureRouteHtml(routePath, html) {
  const segments = routePath.split('/').filter(Boolean);
  const targetDir = path.join(distDir, ...segments);
  await fs.mkdir(targetDir, { recursive: true });
  await fs.writeFile(path.join(targetDir, 'index.html'), html);
}

async function main() {
  const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf8');

  const rootSeo = buildSeoData({ lang: 'fr', pathname: '/fr' });
  const rootHtml = applySeoToHtml(template, rootSeo);
  await fs.writeFile(path.join(distDir, 'index.html'), rootHtml);

  for (const lang of supportedLanguages) {
    for (const route of routeDefinitions) {
      const routePath = route.slug ? `/${lang}/${route.slug}` : `/${lang}`;
      const seo = buildSeoData({ lang, pathname: routePath });
      const html = applySeoToHtml(template, seo);
      await ensureRouteHtml(routePath, html);
    }
  }

  await fs.writeFile(path.join(distDir, 'robots.txt'), buildRobotsTxt());
  await fs.writeFile(path.join(distDir, 'sitemap.xml'), buildSitemapXml());
}

await main();
