import { homePageContent, pageContent, siteContent, supportedLanguages } from '../content/locales/index.js';
import { buildLocalizedPath } from '../utils/paths.js';

export const SITE_ORIGIN = 'https://la-table-antibes.com';
export const DEFAULT_LANGUAGE = 'fr';
export const SHARE_IMAGE_URL = `${SITE_ORIGIN}/og-image-v2.jpg`;

const homeTitleByLanguage = {
  fr: 'Restaurant au coeur du Vieil Antibes',
  en: 'Restaurant in the heart of Vieil Antibes',
  it: 'Ristorante nel cuore del Vieil Antibes',
  de: 'Restaurant im Herzen von Vieil Antibes',
  nl: 'Restaurant in het hart van Vieil Antibes',
  es: 'Restaurante en el corazón del Vieil Antibes',
  ru: 'Ресторан в самом сердце Старого Антиба',
  uk: 'Ресторан у самому серці Старого Антіба',
  zh: '位于安提布老城中心的餐厅',
  ja: 'ヴィエイユ・アンティーブの中心にあるレストラン',
  ko: '비에유 앙티브 중심에 자리한 레스토랑',
};

const ogLocaleByLanguage = {
  fr: 'fr_FR',
  en: 'en_GB',
  it: 'it_IT',
  de: 'de_DE',
  nl: 'nl_NL',
  es: 'es_ES',
  ru: 'ru_RU',
  uk: 'uk_UA',
  zh: 'zh_CN',
  ja: 'ja_JP',
  ko: 'ko_KR',
};

const dayCodeByFrenchDay = {
  Lundi: 'Monday',
  Mardi: 'Tuesday',
  Mercredi: 'Wednesday',
  Jeudi: 'Thursday',
  Vendredi: 'Friday',
  Samedi: 'Saturday',
  Dimanche: 'Sunday',
};

export const routeDefinitions = [
  { key: 'home', slug: '' },
  { key: 'menu', slug: 'menu' },
  { key: 'legal', slug: 'legal' },
];

function normalizeLanguage(lang) {
  return supportedLanguages.includes(lang) ? lang : DEFAULT_LANGUAGE;
}

export function getRouteKeyFromPath(pathname = '/', lang = DEFAULT_LANGUAGE) {
  const segments = pathname.split('/').filter(Boolean);
  const normalizedLang = normalizeLanguage(lang);
  const langIndex = segments.indexOf(normalizedLang);
  const slug = langIndex >= 0 ? segments[langIndex + 1] ?? '' : segments[0] ?? '';

  if (slug === 'menu') return 'menu';
  if (slug === 'legal') return 'legal';
  return 'home';
}

export function getRoutePath(lang, routeKey) {
  const route = routeDefinitions.find((entry) => entry.key === routeKey) ?? routeDefinitions[0];
  return buildLocalizedPath('', normalizeLanguage(lang), route.slug);
}

export function buildAbsoluteUrl(pathname) {
  return new URL(pathname, SITE_ORIGIN).toString();
}

function buildAlternates(routeKey) {
  const alternates = supportedLanguages.map((code) => ({
    lang: code,
    href: buildAbsoluteUrl(getRoutePath(code, routeKey)),
  }));

  alternates.push({
    lang: 'x-default',
    href: buildAbsoluteUrl(getRoutePath(DEFAULT_LANGUAGE, routeKey)),
  });

  return alternates;
}

function buildOpeningHoursSpecification() {
  const hours = pageContent[DEFAULT_LANGUAGE]?.contact?.hours ?? [];

  return hours
    .filter((entry) => entry.hours)
    .map((entry) => {
      const [opens = '11:00', closes = '22:00'] = entry.hours.split(' - ').map((value) => value.trim());
      return {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: `https://schema.org/${dayCodeByFrenchDay[entry.day] ?? 'Monday'}`,
        opens,
        closes,
      };
    });
}

function buildRestaurantSchema(routeUrl) {
  const locale = siteContent[DEFAULT_LANGUAGE];
  const socialLinks = [locale.contactLinks.instagramHref, locale.contactLinks.facebookHref].filter(
    (href) => typeof href === 'string' && href.startsWith('http'),
  );

  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    '@id': `${SITE_ORIGIN}/#restaurant`,
    name: locale.brand.name,
    url: routeUrl,
    image: SHARE_IMAGE_URL,
    telephone: '+33645163574',
    email: 'contact@la-table-antibes.com',
    servesCuisine: ['Cuisine traditionnelle', 'Cuisine méditerranéenne', 'Pizzas au feu de bois'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: '25-27 rue Sade',
      postalCode: '06600',
      addressLocality: 'Antibes',
      addressCountry: 'FR',
    },
    openingHoursSpecification: buildOpeningHoursSpecification(),
    sameAs: socialLinks,
  };
}

function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_ORIGIN}/#website`,
    url: SITE_ORIGIN,
    name: 'La Table Antibes',
    inLanguage: supportedLanguages,
  };
}

export function buildSeoData({ lang = DEFAULT_LANGUAGE, pathname = getRoutePath(DEFAULT_LANGUAGE, 'home') }) {
  const normalizedLang = normalizeLanguage(lang);
  const routeKey = getRouteKeyFromPath(pathname, normalizedLang);
  const locale = siteContent[normalizedLang];
  const home = homePageContent[normalizedLang];
  const page = pageContent[normalizedLang];
  const canonicalPath = getRoutePath(normalizedLang, routeKey);
  const canonicalUrl = buildAbsoluteUrl(canonicalPath);

  let title = `${locale.brand.name} | ${homeTitleByLanguage[normalizedLang] ?? homeTitleByLanguage.fr}`;
  let description = home?.hero?.text ?? '';

  if (routeKey === 'menu') {
    title = `${locale.menuPage?.title ?? locale.navLabels.menu} | ${locale.brand.name}`;
    description = locale.menuPage?.text ?? description;
  } else if (routeKey === 'legal') {
    title = `${page?.legal?.title ?? locale.actions.legal} | ${locale.brand.name}`;
    description = page?.legal?.text ?? description;
  }

  return {
    lang: normalizedLang,
    routeKey,
    title,
    description,
    canonicalUrl,
    ogLocale: ogLocaleByLanguage[normalizedLang] ?? ogLocaleByLanguage.fr,
    alternates: buildAlternates(routeKey),
    schema: [buildRestaurantSchema(canonicalUrl), buildWebsiteSchema()],
  };
}

export function buildSitemapXml() {
  const routes = supportedLanguages.flatMap((lang) =>
    routeDefinitions.map(({ key }) => buildAbsoluteUrl(getRoutePath(lang, key))),
  );
  const lastmod = new Date().toISOString().slice(0, 10);

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${routes
    .map(
      (url) =>
        `  <url>\n    <loc>${url}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`,
    )
    .join('\n')}\n</urlset>\n`;
}

export function buildRobotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE_ORIGIN}/sitemap.xml\n`;
}
