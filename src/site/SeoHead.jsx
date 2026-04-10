import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildSeoData } from './seo.js';

function upsertMeta({ key, value, content }) {
  let node = document.head.querySelector(`meta[${key}="${value}"]`);

  if (!node) {
    node = document.createElement('meta');
    node.setAttribute(key, value);
    document.head.appendChild(node);
  }

  node.setAttribute('content', content);
}

function upsertLink({ rel, href, hreflang, marker }) {
  let selector = `link[rel="${rel}"]`;
  if (hreflang) selector += `[hreflang="${hreflang}"]`;
  if (marker) selector += `[data-seo-marker="${marker}"]`;

  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement('link');
    node.setAttribute('rel', rel);
    if (hreflang) node.setAttribute('hreflang', hreflang);
    if (marker) node.setAttribute('data-seo-marker', marker);
    document.head.appendChild(node);
  }

  node.setAttribute('href', href);
}

export function SeoHead({ lang }) {
  const location = useLocation();

  useEffect(() => {
    const seo = buildSeoData({ lang, pathname: location.pathname });

    document.documentElement.lang = seo.lang;
    document.title = seo.title;

    upsertMeta({ key: 'name', value: 'description', content: seo.description });
    upsertMeta({ key: 'property', value: 'og:type', content: 'website' });
    upsertMeta({ key: 'property', value: 'og:site_name', content: 'La Table Antibes' });
    upsertMeta({ key: 'property', value: 'og:title', content: seo.title });
    upsertMeta({ key: 'property', value: 'og:description', content: seo.description });
    upsertMeta({ key: 'property', value: 'og:url', content: seo.canonicalUrl });
    upsertMeta({ key: 'property', value: 'og:image', content: 'https://la-table-antibes.com/og-image.jpg' });
    upsertMeta({ key: 'property', value: 'og:image:width', content: '1200' });
    upsertMeta({ key: 'property', value: 'og:image:height', content: '630' });
    upsertMeta({
      key: 'property',
      value: 'og:image:alt',
      content: 'La Table Antibes, restaurant au coeur du Vieil Antibes.',
    });
    upsertMeta({ key: 'property', value: 'og:locale', content: seo.ogLocale });
    upsertMeta({ key: 'name', value: 'twitter:card', content: 'summary_large_image' });
    upsertMeta({ key: 'name', value: 'twitter:title', content: seo.title });
    upsertMeta({ key: 'name', value: 'twitter:description', content: seo.description });
    upsertMeta({ key: 'name', value: 'twitter:image', content: 'https://la-table-antibes.com/og-image.jpg' });

    upsertLink({ rel: 'canonical', href: seo.canonicalUrl, marker: 'canonical' });

    document.head
      .querySelectorAll('link[rel="alternate"][data-seo-marker="alternate"]')
      .forEach((node) => node.remove());

    seo.alternates.forEach((alternate) => {
      upsertLink({
        rel: 'alternate',
        href: alternate.href,
        hreflang: alternate.lang,
        marker: 'alternate',
      });
    });

    const existingSchema = document.getElementById('seo-structured-data');
    if (existingSchema) existingSchema.remove();

    const schemaTag = document.createElement('script');
    schemaTag.id = 'seo-structured-data';
    schemaTag.type = 'application/ld+json';
    schemaTag.textContent = JSON.stringify(seo.schema);
    document.head.appendChild(schemaTag);
  }, [lang, location.pathname]);

  return null;
}
