import { useLocale } from '../../App';
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '../V5Icons';
import { v5PagePlaceholderContent } from '../pagePlaceholderContent';
import { v5Media } from '../media';

const contactIcons = {
  phone: PhoneIcon,
  whatsapp: WhatsAppIcon,
  email: MailIcon,
};

export function V5ContactPage() {
  const { lang, locale } = useLocale();
  const placeholders = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const page = placeholders.contact;
  const contactCards = [
    {
      key: 'phone',
      title: page.cards[0].title,
      value: page.cards[0].value,
      href: locale.contactLinks.phoneHref,
      className: 'is-primary',
    },
    {
      key: 'whatsapp',
      title: page.cards[1].title,
      value: page.cards[1].value,
      href: locale.contactLinks.whatsappHref,
      className: 'is-whatsapp',
      external: true,
    },
    {
      key: 'email',
      title: page.cards[2].title,
      value: page.cards[2].value,
      href: locale.contactLinks.emailHref,
      className: 'is-outline',
    },
  ];

  return (
    <div className="v3-page v5-page v5-page--contact">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="v3-section v5-section--tight-top">
        <div className="v3-container v5-contact-actions">
          {contactCards.map((card) => {
            const Icon = contactIcons[card.key];

            return (
              <a
                key={card.title}
                href={card.href}
                className={`v5-contact-action ${card.className}`}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
              >
                <Icon />
                <div>
                  <small>{card.title}</small>
                  <strong>{card.value}</strong>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <section className="v3-section v5-section--compact">
        <div className="v3-container v3-grid v3-grid--contact-page">
          <div className="v3-contact-copy">
            <div>
              <h2>{page.addressTitle}</h2>
              <p>{page.addressValue}</p>
            </div>

            <div>
              <h2>{page.hoursTitle}</h2>
              <div className="v3-hours">
                {locale.contactPage.hours.map((slot) => (
                  <div key={slot.day}>
                    <span>{slot.day}</span>
                    <strong>{page.hourValue}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2>{page.accessTitle}</h2>
              <p>{page.accessText}</p>

              <a className="v3-button v5-button--outlined" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                <PinIcon />
                <span>{locale.actions.directions}</span>
              </a>
            </div>
          </div>

          <div className="v3-contact-media v5-contact-media">
            <figure className="v3-feature-image">
              <img src={v5Media.homeAccess} alt="Carte statique du quartier" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
