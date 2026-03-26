import { useLocale } from '../../App';
import { v3Media } from '../media';

export function V3ContactPage() {
  const { locale } = useLocale();

  return (
    <div className="v3-page">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{locale.contactPage.eyebrow}</span>
          <h1>{locale.contactPage.title}</h1>
          <p>{locale.contactPage.text}</p>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-contact-cards">
          {locale.contactPage.cards.map((card, index) => (
            <a key={card.title} href={card.href} className={`v3-contact-card ${index === 0 ? 'is-primary' : ''}`}>
              <small>{card.title}</small>
              <strong>{card.value}</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-grid v3-grid--contact-page">
          <div className="v3-contact-copy">
            <div>
              <h2>{locale.contactPage.addressTitle}</h2>
              <p>{locale.contactPage.addressValue}</p>
            </div>

            <div>
              <h2>{locale.contactPage.hoursTitle}</h2>
              <div className="v3-hours">
                {locale.contactPage.hours.map((slot) => (
                  <div key={slot.day}>
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

          <div className="v3-contact-media">
            <figure className="v3-feature-image">
              <img src={v3Media.map} alt="Carte Antibes" />
            </figure>
            <figure className="v3-feature-image">
              <img src={v3Media.interiorSunlit} alt="Interieur lumineux" />
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
