import { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navItems, supportedLanguages } from '../content/siteContent';
import { buildLocalizedPath } from '../utils/paths';

const languageFlags = {
  fr: '🇫🇷',
  en: '🇬🇧',
  it: '🇮🇹',
};

function LanguageSwitcher({ basePath, lang, locale, isOpen, onToggle, onClose }) {
  const location = useLocation();
  const baseSegmentCount = basePath.split('/').filter(Boolean).length;

  const restOfPath = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.slice(baseSegmentCount + 1).join('/');
  }, [baseSegmentCount, location.pathname]);

  return (
    <div className={`v2-language ${isOpen ? 'is-open' : ''}`}>
      <button
        className="v2-language__button"
        type="button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        <span>{languageFlags[lang]}</span>
      </button>

      <div className="v2-language__menu" role="menu" aria-label={locale.uiLabels.languageSwitcher}>
        {supportedLanguages.map((code) => (
          <NavLink
            key={code}
            className={({ isActive }) => `v2-language__item ${isActive && code === lang ? 'is-active' : ''}`}
            to={buildLocalizedPath(basePath, code, restOfPath)}
            onClick={onClose}
          >
            <span className="v2-language__flag">{languageFlags[code]}</span>
            <span>{locale.alternateLanguages[code]}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export function StitchLayout({ lang, locale, basePath }) {
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
    <div className="v2-shell">
      <header className="v2-header">
        <div className="v2-header__inner">
          <button
            className={`v2-header__menu ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={locale.uiLabels.toggleMenu}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <NavLink className="v2-brand" to={buildPath()}>
            <small>{locale.brand.district}</small>
            <strong>{locale.brand.name}</strong>
          </NavLink>

          <nav className="v2-header__desktop-nav" aria-label="Primary">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `v2-header__link ${isActive ? 'is-active' : ''}`}
                to={item.to}
                end={item.slug === ''}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="v2-header__actions">
            <LanguageSwitcher
              basePath={basePath}
              lang={lang}
              locale={locale}
              isOpen={languageOpen}
              onToggle={() => setLanguageOpen((value) => !value)}
              onClose={() => setLanguageOpen(false)}
            />

            <NavLink className="v2-header__cta" to={buildPath('contact')}>
              {locale.actions.contact}
            </NavLink>
          </div>
        </div>
      </header>

      <div className={`v2-drawer-backdrop ${menuOpen ? 'is-open' : ''}`} onClick={() => setMenuOpen(false)} />

      <aside className={`v2-drawer ${menuOpen ? 'is-open' : ''}`}>
        <div className="v2-drawer__head">
          <span>{locale.brand.name}</span>
        </div>

        <nav className="v2-drawer__nav" aria-label="Mobile primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              className={({ isActive }) => `v2-drawer__link ${isActive ? 'is-active' : ''}`}
              to={item.to}
              end={item.slug === ''}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="v2-drawer__footer">
          <NavLink className="v2-header__cta" to={buildPath('contact')}>
            {locale.actions.contact}
          </NavLink>
        </div>
      </aside>

      <main className="v2-main">
        <Outlet context={{ lang, locale, buildLocalizedPath: buildPath }} />
      </main>

      <footer className="v2-footer">
        <div className="v2-footer__inner">
          <div className="v2-footer__lead">
            <span className="v2-kicker">{locale.brand.microTag}</span>
            <h2>{locale.brand.name}</h2>
            <p>{locale.footer.summary}</p>
          </div>

          <div className="v2-footer__links">
            <div>
              <span className="v2-footer__title">{locale.navLabels.contact}</span>
              <a href={locale.contactLinks.phoneHref}>+33 0 00 00 00 00</a>
              <a href={locale.contactLinks.emailHref}>bonjour@latable-antibes.fr</a>
              <a href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                {locale.actions.directions}
              </a>
            </div>

            <div>
              <span className="v2-footer__title">Compare</span>
              <NavLink to="/v1/fr">Version 1</NavLink>
              <NavLink to="/v2/fr">Version 2</NavLink>
              <NavLink to="/">Overview</NavLink>
            </div>
          </div>
        </div>
      </footer>

      <nav className="v2-bottom-bar">
        <a href={locale.contactLinks.phoneHref}>{locale.actions.call}</a>
        <a href={locale.contactLinks.whatsappHref} target="_blank" rel="noreferrer">
          {locale.actions.whatsapp}
        </a>
        <a href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
          {locale.actions.directions}
        </a>
        <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={buildPath('menu')}>
          {locale.actions.menu}
        </NavLink>
      </nav>
    </div>
  );
}
