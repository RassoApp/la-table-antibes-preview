import { useEffect, useId, useRef } from 'react';
import { useDropdowns } from './DropdownContext';
import { CalendarIcon, MailIcon, PhoneIcon, WhatsAppIcon } from './icons';

export function ReserveDropdown({
  locale,
  align = 'left',
  direction = 'down',
  buttonClassName = 'v3-button v3-button--primary',
  className = '',
  buttonLabel,
  dropdownId,
  enableHover = true,
}) {
  const generatedId = useId();
  const resolvedId = dropdownId ?? `reserve-${generatedId}`;
  const rootRef = useRef(null);
  const supportsHoverRef = useRef(false);
  const { activeId, closeDropdown, openDropdown, toggleDropdown } = useDropdowns();
  const open = activeId === resolvedId;

  useEffect(() => {
    if (typeof window !== 'undefined') {
      supportsHoverRef.current =
        enableHover && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    }

    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        closeDropdown(resolvedId);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeDropdown, enableHover, resolvedId]);

  return (
    <div
      ref={rootRef}
      className={`v6-reserve ${align === 'right' ? 'is-right' : 'is-left'} ${
        direction === 'up' ? 'is-up' : 'is-down'
      } ${open ? 'is-open' : ''} ${className}`.trim()}
      onMouseEnter={() => {
        if (supportsHoverRef.current) {
          openDropdown(resolvedId);
        }
      }}
      onMouseLeave={() => {
        if (supportsHoverRef.current) {
          closeDropdown(resolvedId);
        }
      }}
    >
      <button
        className={`${buttonClassName} v6-reserve__button`}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={locale.uiLabels.toggleReserveMenu}
        onClick={() => toggleDropdown(resolvedId)}
      >
        <CalendarIcon />
        <span>{buttonLabel ?? locale.actions.reserve}</span>
        <span className="v6-reserve__caret" aria-hidden="true">
          ▾
        </span>
      </button>

      <div className="v6-reserve__menu" role="menu" aria-label={locale.uiLabels.reserveMenuLabel}>
        <a href={locale.contactLinks.phoneHref} role="menuitem" onClick={() => closeDropdown(resolvedId)}>
          <PhoneIcon />
          <span>{locale.uiLabels.reserveMenuPhone}</span>
        </a>
        <a
          href={locale.contactLinks.whatsappHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => closeDropdown(resolvedId)}
        >
          <WhatsAppIcon />
          <span>{locale.uiLabels.reserveMenuWhatsapp}</span>
        </a>
        <a href={locale.contactLinks.emailHref} role="menuitem" onClick={() => closeDropdown(resolvedId)}>
          <MailIcon />
          <span>{locale.actions.email}</span>
        </a>
      </div>
    </div>
  );
}
