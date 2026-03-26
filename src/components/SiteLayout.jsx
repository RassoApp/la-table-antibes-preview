import { useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { navItems, supportedLanguages } from '../content/siteContent';
import { buildLocalizedPath } from '../utils/paths';

function LanguageSwitcher({ basePath, lang, locale }) {
  const location = useLocation();
  const baseSegmentCount = basePath.split('/').filter(Boolean).length;

  const restOfPath = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.slice(baseSegmentCount + 1).join('/');
  }, [baseSegmentCount, location.pathname]);

  return (
    <div className="language-switcher" aria-label={locale.uiLabels.languageSwitcher}>
      {supportedLanguages.map((code) => (
        <NavLink
          key={code}
          className={({ isActive }) =>
            `language-switcher__link ${isActive && code === lang ? 'is-active' : ''}`
          }
          to={buildLocalizedPath(basePath, code, restOfPath)}
        >
          {locale.alternateLanguages[code]}
        </NavLink>
      ))}
    </div>
  );
}

export function SiteLayout({ lang, locale, basePath }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const buildPath = (slug = '') => buildLocalizedPath(basePath, lang, slug);

  const nav = navItems.map((item) => ({
    ...item,
    label: locale.navLabels[item.key],
    to: buildPath(item.slug),
  }));

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container site-header__inner">
          <NavLink className="brand-mark" to={buildPath()}>
            <span className="brand-mark__district">{locale.brand.district}</span>
            <span className="brand-mark__name">{locale.brand.name}</span>
          </NavLink>

          <div className="site-header__nav-wrap">
            <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  className={({ isActive }) => `site-nav__link ${isActive ? 'is-active' : ''}`}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  end={item.slug === ''}
                >
                  {item.label}
                </NavLink>
              ))}
              <NavLink
                className="button button--primary site-nav__cta mobile-only"
                to={buildPath('contact')}
                onClick={() => setMenuOpen(false)}
              >
                {locale.actions.contact}
              </NavLink>
            </nav>

            <LanguageSwitcher basePath={basePath} lang={lang} locale={locale} />

            <NavLink className="button button--primary desktop-only" to={buildPath('contact')}>
              {locale.actions.contact}
            </NavLink>

            <button
              className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
              type="button"
              aria-expanded={menuOpen}
              aria-label={locale.uiLabels.toggleMenu}
              onClick={() => setMenuOpen((value) => !value)}
            >
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <main>
        <Outlet context={{ lang, locale, buildLocalizedPath }} />
      </main>

      <footer className="site-footer">
        <div className="container site-footer__grid">
          <div className="site-footer__brand">
            <p className="eyebrow">{locale.brand.microTag}</p>
            <h2>{locale.brand.name}</h2>
            <p>{locale.footer.summary}</p>
          </div>

          <div>
            <p className="site-footer__title">{locale.navLabels.contact}</p>
            <ul className="footer-list">
              <li>
                <a href={locale.contactLinks.phoneHref}>+33 0 00 00 00 00</a>
              </li>
              <li>
                <a href={locale.contactLinks.emailHref}>bonjour@latable-antibes.fr</a>
              </li>
              <li>
                <a href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                  {locale.actions.directions}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="site-footer__title">{locale.navLabels.menu}</p>
            <ul className="footer-list">
              {nav
                .filter((item) => item.slug !== '')
                .map((item) => (
                  <li key={item.to}>
                    <NavLink to={item.to}>{item.label}</NavLink>
                  </li>
                ))}
              <li>
                <NavLink to={buildPath('legal')}>{locale.actions.legal}</NavLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="container site-footer__bottom">
          <span>{locale.footer.copyright}</span>
        </div>
      </footer>

      <div className="sticky-actions">
        {locale.quickActions.map((action) => (
          <a
            key={action.label}
            href={action.slug ? buildPath(action.slug) : action.href}
            className="sticky-actions__item"
          >
            {action.label}
          </a>
        ))}
      </div>
    </div>
  );
}
