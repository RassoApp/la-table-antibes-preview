import { useEffect, useRef, useState } from 'react';
import { CalendarIcon, MailIcon, PhoneIcon, WhatsAppIcon } from '../v5/V5Icons';

export function V6ReserveDropdown({
  locale,
  align = 'left',
  direction = 'down',
  buttonClassName = 'v3-button v3-button--primary',
  className = '',
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const supportsHoverRef = useRef(false);

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
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className={`v6-reserve ${align === 'right' ? 'is-right' : 'is-left'} ${
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
        className={`${buttonClassName} v6-reserve__button`}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={locale.uiLabels.toggleReserveMenu}
        onClick={() => setOpen((value) => !value)}
      >
        <CalendarIcon />
        <span>{locale.actions.reserve}</span>
        <span className="v6-reserve__caret" aria-hidden="true">
          ▾
        </span>
      </button>

      <div className="v6-reserve__menu" role="menu" aria-label={locale.uiLabels.reserveMenuLabel}>
        <a href={locale.contactLinks.phoneHref} role="menuitem" onClick={() => setOpen(false)}>
          <PhoneIcon />
          <span>{locale.uiLabels.reserveMenuPhone}</span>
        </a>
        <a
          href={locale.contactLinks.whatsappHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <WhatsAppIcon />
          <span>{locale.uiLabels.reserveMenuWhatsapp}</span>
        </a>
        <a href={locale.contactLinks.emailHref} role="menuitem" onClick={() => setOpen(false)}>
          <MailIcon />
          <span>{locale.actions.email}</span>
        </a>
      </div>
    </div>
  );
}
