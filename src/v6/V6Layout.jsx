import { useEffect, useMemo, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { nativeLanguageLabels, supportedLanguages } from '../content/siteContent';
import { assetPath } from '../utils/assets';
import { buildLocalizedPath } from '../utils/paths';
import { CutleryIcon, FacebookIcon, InstagramIcon, PinIcon } from '../v5/V5Icons';
import { V6ReserveDropdown } from './ReserveDropdown';
import { V6SocialDropdown } from './SocialDropdown';

const languageFlags = {
  fr: {
    src: assetPath('/v5-assets/flags/france.svg'),
    alt: 'Français',
  },
  en: {
    src: assetPath('/v5-assets/flags/uk.svg'),
    alt: 'English',
  },
  it: {
    src: assetPath('/v5-assets/flags/italy.svg'),
    alt: 'Italiano',
  },
  de: {
    src: assetPath('/v5-assets/flags/germany.svg'),
    alt: 'Deutsch',
  },
  nl: {
    src: assetPath('/v5-assets/flags/netherland.svg'),
    alt: 'Nederlands',
  },
  es: {
    src: assetPath('/v5-assets/flags/spain.svg'),
    alt: 'Español',
  },
  ru: {
    src: assetPath('/v5-assets/flags/russia.svg'),
    alt: 'Русский',
  },
  uk: {
    src: assetPath('/v5-assets/flags/ukraine-flag.svg'),
    alt: 'Українська',
  },
  zh: {
    src: assetPath('/v5-assets/flags/china.svg'),
    alt: '中文',
  },
  ja: {
    src: assetPath('/v5-assets/flags/japan.svg'),
    alt: '日本語',
  },
  ko: {
    src: assetPath('/v5-assets/flags/south-korea.svg'),
    alt: '한국어',
  },
};

const v6NavKeys = ['home', 'menu'];

const mobileActionLabelOverrides = {
  it: {
    reserve: 'Prenota',
    directions: 'Percorso',
  },
  de: {
    reserve: 'Buchen',
  },
  nl: {
    reserve: 'Boeken',
  },
  es: {
    directions: 'Ruta',
  },
  ru: {
    reserve: 'Бронь',
  },
  uk: {
    reserve: 'Бронь',
  },
};

function V6LanguageSwitcher({ basePath, lang, locale, open, onToggle, onClose }) {
  const location = useLocation();
  const baseSegmentCount = basePath.split('/').filter(Boolean).length;

  const restOfPath = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.slice(baseSegmentCount + 1).join('/');
  }, [baseSegmentCount, location.pathname]);

  return (
    <div className={`v3-language ${open ? 'is-open' : ''}`}>
      <button className="v3-language__button" type="button" aria-expanded={open} onClick={onToggle}>
        <img className="v5-flag" src={languageFlags[lang].src} alt={languageFlags[lang].alt} />
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
            <img className="v5-flag v5-flag--small" src={languageFlags[code].src} alt={languageFlags[code].alt} />
            <span>{nativeLanguageLabels[code]}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export function V6Layout({ lang, locale, basePath }) {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const buildPath = (slug = '') => buildLocalizedPath(basePath, lang, slug);
  const mobileLabels = {
    reserve: mobileActionLabelOverrides[lang]?.reserve ?? locale.actions.reserve,
    directions: mobileActionLabelOverrides[lang]?.directions ?? locale.actions.directions,
    menu: mobileActionLabelOverrides[lang]?.menu ?? locale.navLabels.menu,
    social: mobileActionLabelOverrides[lang]?.social ?? locale.actions.social,
  };

  useEffect(() => {
    setMenuOpen(false);
    setLanguageOpen(false);
  }, [location.pathname]);

  const nav = v6NavKeys.map((key) => ({
    key,
    slug: key === 'home' ? '' : 'menu',
    label: locale.navLabels[key],
    to: key === 'home' ? buildPath() : buildPath('menu'),
  }));

  return (
    <div className="v3-shell v5-shell v6-shell">
      <header className="v3-header">
        <div className="v3-header__inner">
          <button
            className={`v3-header__menu ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={locale.uiLabels.toggleMenu}
            onClick={() => {
              setLanguageOpen(false);
              setMenuOpen((value) => !value);
            }}
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
            <div className="v6-header-socials">
              <a
                className="v6-header-social"
                href={locale.contactLinks.instagramHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
              <a
                className="v6-header-social"
                href={locale.contactLinks.facebookHref}
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
            </div>
            <V6LanguageSwitcher
              basePath={basePath}
              lang={lang}
              locale={locale}
              open={languageOpen}
              onToggle={() => {
                setMenuOpen(false);
                setLanguageOpen((value) => !value);
              }}
              onClose={() => setLanguageOpen(false)}
            />
            <V6ReserveDropdown locale={locale} align="right" />
          </div>
        </div>

        <div className={`v6-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          <nav className="v6-mobile-nav__panel" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `v6-mobile-nav__link ${isActive ? 'is-active' : ''}`}
                to={item.to}
                end={item.slug === ''}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main className="v3-main">
        <Outlet context={{ lang, locale, buildLocalizedPath: buildPath }} />
      </main>

      <footer className="v3-footer">
        <div className="v3-footer__inner v6-footer__inner">
          <NavLink className="v6-footer__legal" to={buildPath('legal')}>
            {locale.actions.legal}
          </NavLink>
          <span className="v6-footer__copyright">© 2026 {locale.brand.name}</span>
        </div>
      </footer>

      <nav className="v3-mobile-bar v6-mobile-bar">
        <V6ReserveDropdown
          locale={locale}
          direction="up"
          className="v6-mobile-bar__reserve"
          buttonClassName="v6-mobile-action v6-mobile-action--reserve"
          buttonLabel={mobileLabels.reserve}
        />
        <a className="v6-mobile-action v6-mobile-action--link" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
          <PinIcon className="v6-mobile-action__icon" />
          <span>{mobileLabels.directions}</span>
        </a>
        <NavLink className={({ isActive }) => `v6-mobile-action v6-mobile-action--link ${isActive ? 'is-active' : ''}`} to={buildPath('menu')}>
          <CutleryIcon className="v6-mobile-action__icon" />
          <span>{mobileLabels.menu}</span>
        </NavLink>
        <V6SocialDropdown locale={locale} className="v6-mobile-bar__social" buttonLabel={mobileLabels.social} />
      </nav>
    </div>
  );
}
