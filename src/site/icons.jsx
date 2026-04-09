import appleMapsIcon from './assets/icons/apple-maps.svg';
import calendarIcon from './assets/icons/calendar.svg';
import copyIcon from './assets/icons/copy.svg';
import cutleryIcon from './assets/icons/cutlery.svg';
import emailIcon from './assets/icons/email.svg';
import facebookIcon from './assets/icons/facebook.svg';
import googleMapsIcon from './assets/icons/google-maps.svg';
import instagramIcon from './assets/icons/instagram.svg';
import phoneIcon from './assets/icons/phone.svg';
import pinIcon from './assets/icons/pin.svg';
import wazeIcon from './assets/icons/waze.svg';
import whatsappIcon from './assets/icons/whatsapp.svg';

function MaskIcon({ className = 'v5-icon', src }) {
  return <span className={`${className} v5-icon--mask`} style={{ '--icon-url': `url('${src}')` }} aria-hidden="true" />;
}

export function PhoneIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={phoneIcon} />;
}

export function PinIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={pinIcon} />;
}

export function CalendarIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={calendarIcon} />;
}

export function MailIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={emailIcon} />;
}

export function WhatsAppIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={whatsappIcon} />;
}

export function CutleryIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={cutleryIcon} />;
}

export function InstagramIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={instagramIcon} />;
}

export function FacebookIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={facebookIcon} />;
}

export function GoogleMapsIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={googleMapsIcon} />;
}

export function AppleMapsIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={appleMapsIcon} />;
}

export function WazeIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={wazeIcon} />;
}

export function CopyIcon({ className = 'v5-icon' }) {
  return <MaskIcon className={className} src={copyIcon} />;
}
