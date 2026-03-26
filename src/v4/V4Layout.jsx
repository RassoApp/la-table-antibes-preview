import { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navItems, supportedLanguages } from '../content/siteContent';
import { buildLocalizedPath } from '../utils/paths';

const languageFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
};

function V4LanguageSwitcher({ basePath, lang, locale, open, onToggle, onClose }) {
  const location = useLocation();
  const baseSegmentCount = basePath.split('/').filter(Boolean).length;

  const restOfPath = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.slice(baseSegmentCount + 1).join('/');
  }, [baseSegmentCount, location.pathname]);

  return (
    <div className={`v3-language ${open ? 'is-open' : ''}`}>
      <button className="v3-language__button" type="button" aria-expanded={open} onClick={onToggle}>
        <span>{languageFlags[lang]}</span>
      </button>

      <div className="v3-language__menu" aria-label={locale.uiLabels.languageSwitcher}>
        {supportedLanguages.map((code) => (
          <NavLink
            key={code}
            className={({ isActive }) =>
              `v3-language__item ${isActive && code === lang ? 'is-active' : ''}`
            }
            to={buildLocalizedPath(basePath, code, restOfPath)}
            onClick={onClose}
          >
            <span>{languageFlags[code]}</span>
            <span>{locale.alternateLanguages[code]}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export function V4Layout({ lang, locale, basePath }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const buildPath = (slug = '') => buildLocalizedPath(basePath, lang, slug);

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
  }, [location.pathname]);

  const nav = navItems.map((item) => ({
    ...item,
    label: locale.navLabels[item.key],
    to: buildPath(item.slug),
  }));

  return (
    <div className="v3-shell v4-shell">
      <header className="v3-header">
        <div className="v3-header__inner">
          <button
            className={`v3-header__menu ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={locale.uiLabels.toggleMenu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <NavLink className="v3-brand" to={buildPath()}>
            <small>{locale.brand.district}</small>
            <strong>{locale.brand.name}</strong>
          </NavLink>

          <nav className="v3-header__nav" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `v3-header__link ${isActive ? 'is-active' : ''}`}
                to={item.to}
                end={item.slug === ''}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="v3-header__actions">
            <V4LanguageSwitcher
              basePath={basePath}
              lang={lang}
              locale={locale}
              open={languageOpen}
              onToggle={() => setLanguageOpen((value) => !value)}
              onClose={() => setLanguageOpen(false)}
            />
            <NavLink className="v3-button v3-button--primary" to={buildPath('contact')}>
              {locale.actions.contact}
            </NavLink>
          </div>
        </div>
      </header>

      <div className={`v3-overlay ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`v3-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="v3-drawer__brand">{locale.brand.name}</div>
        <nav className="v3-drawer__nav">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `v3-drawer__link ${isActive ? 'is-active' : ''}`}
              to={item.to}
              end={item.slug === ''}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="v3-main">
        <Outlet context={{ lang, locale, buildLocalizedPath: buildPath }} />
      </main>

      <footer className="v3-footer">
        <div className="v3-footer__inner">
          <div className="v3-footer__intro">
            <span className="v3-kicker">{locale.brand.microTag}</span>
            <h2>{locale.brand.name}</h2>
            <p>{locale.footer.summary}</p>
          </div>

          <div className="v3-footer__cols">
            <div>
              <span className="v3-footer__title">{locale.navLabels.contact}</span>
              <a href={locale.contactLinks.phoneHref}>+33 0 00 00 00 00</a>
              <a href={locale.contactLinks.emailHref}>bonjour@latable-antibes.fr</a>
              <a href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                {locale.actions.directions}
              </a>
            </div>

            <div>
              <span className="v3-footer__title">{locale.navLabels.menu}</span>
              <NavLink to={buildPath('menu')}>{locale.navLabels.menu}</NavLink>
              <NavLink to={buildPath('gallery')}>{locale.navLabels.gallery}</NavLink>
              <NavLink to={buildPath('about')}>{locale.navLabels.about}</NavLink>
              <NavLink to={buildPath('legal')}>{locale.actions.legal}</NavLink>
            </div>
          </div>
        </div>
      </footer>

      <nav className="v3-mobile-bar">
        <a href={locale.contactLinks.phoneHref}>{locale.actions.call}</a>
        <a href={locale.contactLinks.whatsappHref} target="_blank" rel="noreferrer">
          {locale.actions.whatsapp}
        </a>
        <a href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
          {locale.actions.directions}
        </a>
        <NavLink className={({ isActive }) => (isActive ? 'is-active' : '')} to={buildPath('menu')}>
          {locale.actions.menu}
        </NavLink>
      </nav>
    </div>
  );
}
