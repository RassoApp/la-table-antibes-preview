import { useEffect, useRef, useState } from 'react';
import { AppleMapsIcon, CopyIcon, GoogleMapsIcon, PinIcon, WazeIcon } from './icons';

const directionMenuLabels = {
  fr: {
    menu: "Options d'itinéraire",
    google: 'Google Maps',
    apple: 'Plans',
    waze: 'Waze',
    copy: "Copier l’adresse",
    copied: 'Adresse copiée',
  },
  en: {
    menu: 'Directions options',
    google: 'Google Maps',
    apple: 'Apple Maps',
    waze: 'Waze',
    copy: 'Copy address',
    copied: 'Address copied',
  },
  it: {
    menu: 'Opzioni di percorso',
    google: 'Google Maps',
    apple: 'Mappe',
    waze: 'Waze',
    copy: 'Copia indirizzo',
    copied: 'Indirizzo copiato',
  },
  de: {
    menu: 'Routenoptionen',
    google: 'Google Maps',
    apple: 'Karten',
    waze: 'Waze',
    copy: 'Adresse kopieren',
    copied: 'Adresse kopiert',
  },
  nl: {
    menu: 'Routeopties',
    google: 'Google Maps',
    apple: 'Kaarten',
    waze: 'Waze',
    copy: 'Adres kopiëren',
    copied: 'Adres gekopieerd',
  },
  es: {
    menu: 'Opciones de ruta',
    google: 'Google Maps',
    apple: 'Mapas',
    waze: 'Waze',
    copy: 'Copiar dirección',
    copied: 'Dirección copiada',
  },
  ru: {
    menu: 'Варианты маршрута',
    google: 'Google Maps',
    apple: 'Карты',
    waze: 'Waze',
    copy: 'Скопировать адрес',
    copied: 'Адрес скопирован',
  },
  uk: {
    menu: 'Варіанти маршруту',
    google: 'Google Maps',
    apple: 'Карти',
    waze: 'Waze',
    copy: 'Скопіювати адресу',
    copied: 'Адресу скопійовано',
  },
  zh: {
    menu: '路线选项',
    google: 'Google 地图',
    apple: 'Apple 地图',
    waze: 'Waze',
    copy: '复制地址',
    copied: '地址已复制',
  },
  ja: {
    menu: '経路オプション',
    google: 'Googleマップ',
    apple: 'マップ',
    waze: 'Waze',
    copy: '住所をコピー',
    copied: '住所をコピーしました',
  },
  ko: {
    menu: '길찾기 옵션',
    google: '구글 지도',
    apple: '지도',
    waze: 'Waze',
    copy: '주소 복사',
    copied: '주소가 복사되었습니다',
  },
};

export function DirectionsDropdown({
  lang = 'fr',
  locale,
  align = 'left',
  direction = 'down',
  buttonClassName = 'v3-button v3-button--secondary',
  className = '',
  buttonLabel,
  showCaret = true,
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const rootRef = useRef(null);
  const supportsHoverRef = useRef(false);
  const copyTimerRef = useRef(null);
  const labels = directionMenuLabels[lang] ?? directionMenuLabels.en;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      supportsHoverRef.current = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleEscape);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleEscape);
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
    };
  }, []);

  async function handleCopyAddress() {
    try {
      await navigator.clipboard.writeText(locale.contactLinks.addressText);
      setCopied(true);
      setOpen(true);
      if (copyTimerRef.current) {
        window.clearTimeout(copyTimerRef.current);
      }
      copyTimerRef.current = window.setTimeout(() => {
        setCopied(false);
        setOpen(false);
      }, 1200);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div
      ref={rootRef}
      className={`v6-directions ${align === 'right' ? 'is-right' : 'is-left'} ${
        direction === 'up' ? 'is-up' : 'is-down'
      } ${open ? 'is-open' : ''} ${className}`.trim()}
      onMouseEnter={() => {
        if (supportsHoverRef.current) {
          setOpen(true);
        }
      }}
      onMouseLeave={() => {
        if (supportsHoverRef.current) {
          setOpen(false);
        }
      }}
    >
      <button
        className={`${buttonClassName} v6-directions__button`}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={labels.menu}
        onClick={() => setOpen((value) => !value)}
      >
        <PinIcon />
        <span>{buttonLabel ?? locale.actions.directions}</span>
        {showCaret ? (
          <span className="v6-directions__caret" aria-hidden="true">
            ▾
          </span>
        ) : null}
      </button>

      <div className="v6-directions__menu" role="menu" aria-label={labels.menu}>
        <a
          href={locale.contactLinks.googleMapsHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <GoogleMapsIcon />
          <span>{labels.google}</span>
        </a>
        <a
          href={locale.contactLinks.appleMapsHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <AppleMapsIcon />
          <span>{labels.apple}</span>
        </a>
        <a
          href={locale.contactLinks.wazeHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <WazeIcon />
          <span>{labels.waze}</span>
        </a>
        <button type="button" role="menuitem" onClick={handleCopyAddress}>
          <CopyIcon />
          <span>{copied ? labels.copied : labels.copy}</span>
        </button>
      </div>
    </div>
  );
}
