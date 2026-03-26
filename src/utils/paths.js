export function buildLocalizedPath(basePath, lang, slug = '') {
  const normalizedBase = basePath?.trim() ? basePath.replace(/\/$/, '') : '';
  const localeRoot = normalizedBase ? `${normalizedBase}/${lang}` : `/${lang}`;

  return slug ? `${localeRoot}/${slug}` : localeRoot;
}
