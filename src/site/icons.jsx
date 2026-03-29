import { assetPath } from '../utils/assets';

function MaskIcon({ className = 'v5-icon', src }) {
  return <span className={`${className} v5-icon--mask`} style={{ '--icon-url': `url('${src}')` }} aria-hidden="true" />;
}

export function PhoneIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/phone.svg')} />;
}

export function PinIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/pin.svg')} />;
}

export function CalendarIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/calendar.svg')} />;
}

export function MailIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/email.svg')} />;
}

export function WhatsAppIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/whatsapp.svg')} />;
}

export function CutleryIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/cutlery.svg')} />;
}

export function InstagramIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/instagram.svg')} />;
}

export function FacebookIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/facebook3.svg')} />;
}

export function GoogleMapsIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/google-maps.svg')} />;
}

export function AppleMapsIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/apple-maps.svg')} />;
}

export function WazeIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/waze.svg')} />;
}

export function CopyIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={assetPath('/v5-assets/icons/copy.svg')} />;
}
