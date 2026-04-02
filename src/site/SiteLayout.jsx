import { useEffect, useMemo, useRef } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { nativeLanguageLabels, supportedLanguages } from '../content/siteContent';
import { assetPath } from '../utils/assets';
import { buildLocalizedPath } from '../utils/paths';
import { DropdownProvider, useDropdowns } from './DropdownContext';
import { CutleryIcon, FacebookIcon, InstagramIcon } from './icons';
import { DirectionsDropdown } from './DirectionsDropdown';
import { ReserveDropdown } from './ReserveDropdown';
import { SocialDropdown } from './SocialDropdown';

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

const headerLogoSrc = assetPath('/v5-assets/logos/la-table-header.svg');

const primaryNavKeys = ['home', 'menu'];
const MOBILE_MENU_DROPDOWN_ID = 'mobile-menu';
const LANGUAGE_DROPDOWN_ID = 'language-switcher';

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

function LanguageSwitcher({ basePath, lang, locale }) {
  const location = useLocation();
  const { activeId, closeDropdown, openDropdown, toggleDropdown } = useDropdowns();
  const open = activeId === LANGUAGE_DROPDOWN_ID;
  const rootRef = useRef(null);
  const supportsHoverRef = useRef(false);
  const baseSegmentCount = basePath.split('/').filter(Boolean).length;

  const restOfPath = useMemo(() => {
    const segments = location.pathname.split('/').filter(Boolean);
    return segments.slice(baseSegmentCount + 1).join('/');
  }, [baseSegmentCount, location.pathname]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      supportsHoverRef.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    function handlePointerDown(event) {
      if (open && !rootRef.current?.contains(event.target)) {
        closeDropdown(LANGUAGE_DROPDOWN_ID);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeDropdown, open]);

  return (
    <div
      ref={rootRef}
      className={`v3-language ${open ? 'is-open' : ''}`}
      onMouseEnter={() => {
        if (supportsHoverRef.current) {
          openDropdown(LANGUAGE_DROPDOWN_ID);
        }
      }}
      onMouseLeave={() => {
        if (supportsHoverRef.current) {
          closeDropdown(LANGUAGE_DROPDOWN_ID);
        }
      }}
    >
      <button
        className="v3-language__button"
        type="button"
        aria-expanded={open}
        onClick={() => toggleDropdown(LANGUAGE_DROPDOWN_ID)}
      >
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
            onClick={() => closeDropdown(LANGUAGE_DROPDOWN_ID)}
          >
            <img className="v5-flag v5-flag--small" src={languageFlags[code].src} alt={languageFlags[code].alt} />
            <span>{nativeLanguageLabels[code]}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

function SiteLayoutInner({ lang, locale, basePath }) {
  const location = useLocation();
  const menuButtonRef = useRef(null);
  const menuPanelRef = useRef(null);
  const { activeId, closeAll, closeDropdown, toggleDropdown } = useDropdowns();
  const menuOpen = activeId === MOBILE_MENU_DROPDOWN_ID;
  const buildPath = (slug = '') => buildLocalizedPath(basePath, lang, slug);
  const mobileLabels = {
    reserve: mobileActionLabelOverrides[lang]?.reserve ?? locale.actions.reserve,
    directions: mobileActionLabelOverrides[lang]?.directions ?? locale.actions.directions,
    menu: mobileActionLabelOverrides[lang]?.menu ?? locale.navLabels.menu,
    social: mobileActionLabelOverrides[lang]?.social ?? locale.actions.social,
  };

  useEffect(() => {
    closeAll();
  }, [closeAll, location.pathname]);

  useEffect(() => {
    function handlePointerDown(event) {
      if (
        menuOpen &&
        !menuButtonRef.current?.contains(event.target) &&
        !menuPanelRef.current?.contains(event.target)
      ) {
        closeDropdown(MOBILE_MENU_DROPDOWN_ID);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeDropdown, menuOpen]);

  const nav = primaryNavKeys.map((key) => ({
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
            ref={menuButtonRef}
            className={`v3-header__menu ${menuOpen ? 'is-open' : ''}`}
            type="button"
            aria-expanded={menuOpen}
            aria-label={locale.uiLabels.toggleMenu}
            onClick={() => toggleDropdown(MOBILE_MENU_DROPDOWN_ID)}
          >
            <span />
            <span />
          </button>

          <NavLink
            className="v3-brand"
            to={buildPath()}
            aria-label={`${locale.brand.name} - ${locale.brand.district}`}
          >
            <span
              className="v6-brand-logo"
              aria-hidden="true"
              style={{ '--brand-logo-url': `url(${headerLogoSrc})` }}
            />
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
            <LanguageSwitcher
              basePath={basePath}
              lang={lang}
              locale={locale}
            />
            <ReserveDropdown locale={locale} align="right" dropdownId="header-reserve" />
          </div>
        </div>

        <div ref={menuPanelRef} className={`v6-mobile-nav ${menuOpen ? 'is-open' : ''}`}>
          <nav className="v6-mobile-nav__panel" aria-label="Mobile">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                className={({ isActive }) => `v6-mobile-nav__link ${isActive ? 'is-active' : ''}`}
                to={item.to}
                end={item.slug === ''}
                onClick={() => closeDropdown(MOBILE_MENU_DROPDOWN_ID)}
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
        <ReserveDropdown
          locale={locale}
          direction="up"
          dropdownId="mobile-reserve"
          enableHover={false}
          className="v6-mobile-bar__reserve"
          buttonClassName="v6-mobile-action v6-mobile-action--reserve"
          buttonLabel={mobileLabels.reserve}
        />
        <DirectionsDropdown
          lang={lang}
          locale={locale}
          direction="up"
          dropdownId="mobile-directions"
          enableHover={false}
          className="v6-mobile-bar__directions"
          buttonClassName="v6-mobile-action v6-mobile-action--link"
          buttonLabel={mobileLabels.directions}
          showCaret={false}
        />
        <NavLink className={({ isActive }) => `v6-mobile-action v6-mobile-action--link ${isActive ? 'is-active' : ''}`} to={buildPath('menu')}>
          <CutleryIcon className="v6-mobile-action__icon" />
          <span>{mobileLabels.menu}</span>
        </NavLink>
        <SocialDropdown locale={locale} className="v6-mobile-bar__social" buttonLabel={mobileLabels.social} />
      </nav>
    </div>
  );
}

export function SiteLayout(props) {
  return (
    <DropdownProvider>
      <SiteLayoutInner {...props} />
    </DropdownProvider>
  );
}
