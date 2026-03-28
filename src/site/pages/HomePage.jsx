import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { homeEventContent, homePageContent } from '../content/homePageContent';
import { pageContent } from '../content/pageContent';
import { CutleryIcon, PinIcon } from '../icons';
import { siteMedia } from '../media';
import { ReserveDropdown } from '../ReserveDropdown';

function ShowcaseCard({ src, alt }) {
  return (
    <figure className="v5-showcase-card">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}

export function HomePage() {
  const { lang, locale, buildLocalizedPath } = useLocale();
  const home = homePageContent[lang] ?? homePageContent.fr;
  const pages = pageContent[lang] ?? pageContent.fr;
  const contact = pages.contact;
  const events = homeEventContent[lang] ?? homeEventContent.en;

  return (
    <>
      <section className="v3-hero">
        <img
          className="v3-hero__image"
          src={siteMedia.heroTerrace}
          alt=""
          fetchPriority="high"
          decoding="async"
        />
        <div className="v3-hero__overlay" />

        <div className="v3-hero__content">
          <h1>{home.hero.title}</h1>
          <p>{home.hero.text}</p>

          <div className="v3-button-row">
            <ReserveDropdown locale={locale} />
            <Link className="v3-button v6-hero-menu-button" to={buildLocalizedPath('menu')}>
              <CutleryIcon />
              {locale.actions.menu}
            </Link>
            <div>
              <a
                className="v3-button v3-button--secondary v6-hero-directions-button"
                href={locale.contactLinks.directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                <PinIcon />
                {locale.actions.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v5-cuisine">
          <div className="v5-cuisine__intro">
            <span className="v3-kicker">{home.cuisine.eyebrow}</span>
            <h2>{home.cuisine.title}</h2>
            <p>{home.cuisine.text}</p>
            <div>
              <Link className="v3-button v3-button--primary" to={buildLocalizedPath('menu')}>
                <CutleryIcon />
                {locale.actions.menu}
              </Link>
            </div>
          </div>

          <div className="v5-cuisine__grid">
            <ShowcaseCard src={siteMedia.pizzaPainted} alt="" />
            <ShowcaseCard src={siteMedia.cuisineTopRight} alt="" />
            <ShowcaseCard src={siteMedia.cuisineBottomLeft} alt="" />
            <ShowcaseCard src={siteMedia.cuisineBottomRight} alt="" />
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v5-ambiance">
          <div className="v3-copy">
            <span className="v3-kicker">{home.ambiance.eyebrow}</span>
            <h2>{home.ambiance.title}</h2>
            <p>{home.ambiance.text}</p>
          </div>

          <div className="v5-cuisine__grid v5-ambiance__media">
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={siteMedia.barInterior} alt="" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={siteMedia.interiorSunlit} alt="" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={siteMedia.galleryRoom} alt="" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={siteMedia.galleryCutlery} alt="" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v6-events__grid">
          <div className="v3-copy v6-events__copy">
            <span className="v3-kicker">{events.eyebrow}</span>
            <h2>{events.title}</h2>
            <p>{events.text}</p>
            <div className="v6-events__tags" aria-label={events.aria}>
              {events.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <figure className="v3-feature-image v6-events__image">
            <img
              src={siteMedia.galleryCutlery}
              alt={events.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section id="access" className="v3-section">
        <div className="v3-container v6-contact-stack">
          <div className="v3-grid v3-grid--contact-page">
            <div className="v3-contact-copy">
              <div>
                <h2>{contact.addressTitle}</h2>
                <p>{contact.addressValue}</p>
              </div>

              <div>
                <h2>{contact.hoursTitle}</h2>
                <div className="v3-hours">
                  {locale.contactPage.hours.map((slot) => (
                    <div key={slot.day}>
                      <span>{slot.day}</span>
                      <strong>{contact.hourValue}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2>{contact.accessTitle}</h2>
                <p>{contact.accessText}</p>

                <div className="v3-button-row v6-access-actions">
                  <ReserveDropdown locale={locale} buttonClassName="v6-access-button v6-access-button--reserve" />
                  <a className="v6-access-link" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                    <PinIcon />
                    <span>{locale.actions.directions}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="v3-contact-media v5-contact-media">
              <figure className="v3-feature-image">
                <img src={siteMedia.homeAccess} alt="" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
