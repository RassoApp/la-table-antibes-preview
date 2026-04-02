import {
  homeEventContent,
  homePageContent,
  nativeLanguageLabels,
  pageContent,
  siteContent,
  supportedLanguages,
} from '../src/content/locales/index.js';

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

for (const lang of supportedLanguages) {
  const locale = siteContent[lang];
  const home = homePageContent[lang];
  const events = homeEventContent[lang];
  const page = pageContent[lang];
  const menu = locale?.menuPage;

  assert(locale, `Missing site locale for "${lang}"`);
  assert(home, `Missing home content for "${lang}"`);
  assert(events, `Missing home event content for "${lang}"`);
  assert(page, `Missing page content for "${lang}"`);
  assert(menu, `Missing menu content for "${lang}"`);

  assert(typeof locale.localeName === 'string' && locale.localeName.length > 0, `Missing localeName for "${lang}"`);
  assert(typeof locale.actions?.reserve === 'string', `Missing reserve label for "${lang}"`);
  assert(typeof home.hero?.title === 'string', `Missing hero title for "${lang}"`);
  assert(Array.isArray(page.contact?.hours) && page.contact.hours.length > 0, `Missing contact hours for "${lang}"`);
  assert(Array.isArray(page.legal?.sections) && page.legal.sections.length === 3, `Missing legal sections for "${lang}"`);

  assert(Array.isArray(menu.tabs) && menu.tabs.length > 0, `Locale "${lang}" is not on the final tabbed menu shape`);
  assert(menu.filters && Array.isArray(menu.filters.options), `Locale "${lang}" is missing dietary filters`);
  assert(!Array.isArray(menu.categories), `Locale "${lang}" still exposes legacy categories`);

  const filterableTabs = new Set(menu.filters.filterableTabs ?? []);
  assert(filterableTabs.has('cuisine') && filterableTabs.has('pizzas'), `Locale "${lang}" is missing expected filterable tabs`);

  assert(locale.alternateLanguages, `Missing alternateLanguages on "${lang}"`);
  for (const otherLang of supportedLanguages) {
    assert(
      typeof locale.alternateLanguages[otherLang] === 'string' &&
        locale.alternateLanguages[otherLang] === nativeLanguageLabels[otherLang],
      `Locale "${lang}" has inconsistent alternateLanguages entry for "${otherLang}"`,
    );
  }
}

console.log(`Locale validation passed for ${supportedLanguages.length} languages.`);
