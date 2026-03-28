import { useEffect, useRef, useState } from 'react';
import { FacebookIcon, InstagramIcon } from './icons';

export function SocialDropdown({
  locale,
  buttonClassName = 'v6-mobile-action v6-mobile-action--link',
  className = '',
  buttonLabel,
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
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
    <div ref={rootRef} className={`v6-social ${open ? 'is-open' : ''} ${className}`.trim()}>
      <button
        className={`${buttonClassName} v6-social__button`}
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={locale.uiLabels.toggleSocialMenu}
        onClick={() => setOpen((value) => !value)}
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
          onClick={() => setOpen(false)}
        >
          <InstagramIcon />
          <span>Instagram</span>
        </a>
        <a
          href={locale.contactLinks.facebookHref}
          target="_blank"
          rel="noreferrer"
          role="menuitem"
          onClick={() => setOpen(false)}
        >
          <FacebookIcon />
          <span>Facebook</span>
        </a>
      </div>
    </div>
  );
}
