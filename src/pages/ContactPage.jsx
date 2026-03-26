import { PlaceholderImage } from '../components/PlaceholderImage';
import { useLocale } from '../App';

export function ContactPage() {
  const { locale } = useLocale();

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__copy">
          <p className="eyebrow">{locale.contactPage.eyebrow}</p>
          <h1>{locale.contactPage.title}</h1>
          <p>{locale.contactPage.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-cards">
            {locale.contactPage.cards.map((card) => (
              <a key={card.title} href={card.href} className="contact-card">
                <span>{card.title}</span>
                <strong>{card.value}</strong>
              </a>
            ))}
          </div>

          <div className="contact-panel">
            <div>
              <p className="contact-panel__label">{locale.contactPage.addressTitle}</p>
              <p>{locale.contactPage.addressValue}</p>
            </div>
            <div>
              <p className="contact-panel__label">{locale.contactPage.accessTitle}</p>
              <p>{locale.contactPage.accessText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container contact-grid contact-grid--split">
          <article className="hours-card">
            <p className="eyebrow">{locale.contactPage.hoursTitle}</p>
            <div className="hours-list">
              {locale.contactPage.hours.map((slot) => (
                <div className="hours-row" key={slot.day}>
                  <span>{slot.day}</span>
                  <strong>{slot.hours}</strong>
                </div>
              ))}
            </div>
          </article>

          <PlaceholderImage label={locale.contactPage.mapLabel} aspect="wide" />
        </div>
      </section>
    </div>
  );
}
