import { useEffect, useId, useRef } from 'react';
import { useDropdowns } from './DropdownContext';
import { FacebookIcon, InstagramIcon } from './icons';

export function SocialDropdown({
  locale,
  buttonClassName = 'v6-mobile-action v6-mobile-action--link',
  className = '',
  buttonLabel,
}) {
  const generatedId = useId();
  const resolvedId = `social-${generatedId}`;
  const rootRef = useRef(null);
  const { activeId, closeDropdown, toggleDropdown } = useDropdowns();
  const open = activeId === resolvedId;

  useEffect(() => {
    function handlePointerDown(event) {
      if (!rootRef.current?.contains(event.target)) {
        closeDropdown(resolvedId);
      }
    }

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [closeDropdown, resolvedId]);

  return (
    <div ref={rootRef} className={`v6-social ${open ? 'is-open' : ''} ${className}`.trim()}>
      <button
        className={`${buttonClassName} v6-social__button`}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={locale.uiLabels.toggleSocialMenu}
        onClick={() => toggleDropdown(resolvedId)}
      >
        <InstagramIcon className="v6-mobile-action__icon" />
        <span>{buttonLabel ?? locale.actions.social}</span>
      </button>

      <div className="v6-social__menu" role="menu" aria-label={locale.uiLabels.socialMenuLabel}>
        <a
          href={locale.contactLinks.instagramHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => closeDropdown(resolvedId)}
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a
          href={locale.contactLinks.facebookHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => closeDropdown(resolvedId)}
        >
          <FacebookIcon />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}
