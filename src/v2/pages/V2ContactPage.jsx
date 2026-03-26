import { useLocale } from '../../App';
import { ArtPlaceholder } from '../ArtPlaceholder';

export function V2ContactPage() {
  const { locale } = useLocale();

  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <div className="v2-container">
          <span className="v2-kicker">{locale.contactPage.eyebrow}</span>
          <h1>{locale.contactPage.title}</h1>
          <p>{locale.contactPage.text}</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-contact-bento">
          {locale.contactPage.cards.map((card, index) => (
            <a key={card.title} href={card.href} className={`v2-contact-card ${index === 0 ? 'is-primary' : ''}`}>
              <small>{card.title}</small>
              <strong>{card.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-contact-layout">
          <div className="v2-contact-details">
            <div>
              <h2>{locale.contactPage.addressTitle}</h2>
              <p>{locale.contactPage.addressValue}</p>
            </div>

            <div>
              <h2>{locale.contactPage.hoursTitle}</h2>
              <div className="v2-hours">
                {locale.contactPage.hours.map((slot) => (
                  <div key={slot.day} className="v2-hours__row">
                    <span>{slot.day}</span>
                    <strong>{slot.hours}</strong>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2>{locale.contactPage.accessTitle}</h2>
              <p>{locale.contactPage.accessText}</p>
            </div>
          </div>

          <div className="v2-contact-media">
            <ArtPlaceholder label={locale.contactPage.mapLabel} kind="map" ratio="portrait" />
            <ArtPlaceholder label="Dining Room" kind="dining" ratio="landscape" caption={locale.brand.district} />
          </div>
        </div>
      </section>
    </div>
  );
}
