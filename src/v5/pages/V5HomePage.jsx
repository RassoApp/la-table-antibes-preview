import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v5HomePlaceholderContent } from '../homePlaceholderContent';
import { PhoneIcon, PinIcon, WhatsAppIcon } from '../V5Icons';
import { v5Media } from '../media';

function ShowcaseCard({ src, alt }) {
  return (
    <figure className="v5-showcase-card">
      <img src={src} alt={alt} />
    </figure>
  );
}

export function V5HomePage() {
  const { lang, locale, buildLocalizedPath } = useLocale();
  const placeholders = v5HomePlaceholderContent[lang] ?? v5HomePlaceholderContent.fr;

  return (
    <>
      <section className="v3-hero">
        <img className="v3-hero__image" src={v5Media.heroTerrace} alt="Grande terrasse peinte dans le Vieil Antibes" />
        <div className="v3-hero__overlay" />

        <div className="v3-hero__content">
          <h1>{placeholders.hero.title}</h1>
          <p>{placeholders.hero.text}</p>

          <div className="v3-button-row">
            <Link className="v3-button v3-button--primary" to={buildLocalizedPath('menu')}>
              {locale.actions.menu}
            </Link>
            <Link className="v3-button v3-button--secondary" to={buildLocalizedPath('contact')}>
              {locale.actions.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="v3-practical-band">
        <div className="v3-container v3-practical-band__grid">
          {placeholders.infoStrip.map((item) => (
            <article key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v5-cuisine">
          <div className="v5-cuisine__intro">
            <span className="v3-kicker">{placeholders.cuisine.eyebrow}</span>
            <h2>{placeholders.cuisine.title}</h2>
            <p>{placeholders.cuisine.text}</p>
            <Link className="v3-button v3-button--primary" to={buildLocalizedPath('menu')}>
              {locale.actions.menu}
            </Link>
          </div>

          <div className="v5-cuisine__grid">
            <ShowcaseCard src={v5Media.pizzaPainted} alt="Pizza peinte au feu de bois" />
            <ShowcaseCard src={v5Media.cuisineTopRight} alt="Pizza peinte dans le four" />
            <ShowcaseCard src={v5Media.cuisineBottomLeft} alt="Plat peint avec légumes verts et citron" />
            <ShowcaseCard src={v5Media.cuisineBottomRight} alt="Plat peint sur table en bois" />
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v5-ambiance">
          <div className="v3-copy">
            <span className="v3-kicker">{placeholders.ambiance.eyebrow}</span>
            <h2>{placeholders.ambiance.title}</h2>
            <p>{placeholders.ambiance.text}</p>
          </div>

          <div className="v5-cuisine__grid v5-ambiance__media">
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.barInterior} alt="Bar et salle" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.interiorSunlit} alt="Salle lumineuse" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.galleryRoom} alt="Grande salle bistrot" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.galleryCutlery} alt="Table dressée" />
            </figure>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v3-grid v3-grid--contact">
          <div className="v3-copy">
            <span className="v3-kicker">{placeholders.access.eyebrow}</span>
            <h2>{placeholders.access.title}</h2>
            <p>{placeholders.access.text}</p>

            <div className="v3-button-row">
              <a className="v3-button v3-button--primary" href={locale.contactLinks.phoneHref}>
                <PhoneIcon />
                <span>{locale.actions.reserve}</span>
              </a>
              <a
                className="v3-button v3-button--secondary-dark v5-whatsapp-button"
                href={locale.contactLinks.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon />
                <span>{locale.actions.whatsapp}</span>
              </a>
              <a className="v3-button v5-button--outlined" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                <PinIcon />
                <span>{locale.actions.directions}</span>
              </a>
            </div>
          </div>

          <figure className="v5-contact-figure">
            <img src={v5Media.homeAccess} alt="Vue aérienne du Vieil Antibes avec repère" />
          </figure>
        </div>
      </section>
    </>
  );
}
