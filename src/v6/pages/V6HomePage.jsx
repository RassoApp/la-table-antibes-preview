import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v5HomePlaceholderContent } from '../../v5/homePlaceholderContent';
import { v5PagePlaceholderContent } from '../../v5/pagePlaceholderContent';
import { CutleryIcon, PinIcon } from '../../v5/V5Icons';
import { v5Media } from '../../v5/media';
import { V6ReserveDropdown } from '../ReserveDropdown';

function ShowcaseCard({ src, alt }) {
  return (
    <figure className="v5-showcase-card">
      <img src={src} alt={alt} />
    </figure>
  );
}

export function V6HomePage() {
  const { lang, locale, buildLocalizedPath } = useLocale();
  const home = v5HomePlaceholderContent[lang] ?? v5HomePlaceholderContent.fr;
  const pages = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const contact = pages.contact;

  return (
    <>
      <section className="v3-hero">
        <img className="v3-hero__image" src={v5Media.heroTerrace} alt="Grande terrasse peinte dans le Vieil Antibes" />
        <div className="v3-hero__overlay" />

        <div className="v3-hero__content">
          <h1>{home.hero.title}</h1>
          <p>{home.hero.text}</p>

          <div className="v3-button-row">
            <V6ReserveDropdown locale={locale} />
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
            <span className="v3-kicker">{home.ambiance.eyebrow}</span>
            <h2>{home.ambiance.title}</h2>
            <p>{home.ambiance.text}</p>
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
        <div className="v3-container v6-events__grid">
          <div className="v3-copy v6-events__copy">
            {lang === 'fr' ? (
              <>
                <span className="v3-kicker">Événements & groupes</span>
                <h2>Privatisez pour vos événements !</h2>
                <p>
                  La Table Antibes peut accueillir vos groupes en salle ou en terrasse pour un
                  événement privé ou professionnel dans le Vieil Antibes, dans un cadre pensé pour
                  les moments à partager.
                </p>
                <div className="v6-events__tags" aria-label="Types d'événements">
                  <span>Mariages</span>
                  <span>Anniversaires</span>
                  <span>Repas de groupe</span>
                </div>
              </>
            ) : (
              <>
                <span className="v3-kicker">Events & groups</span>
                <h2>Host your events with us</h2>
                <p>
                  La Table Antibes can host private or professional groups indoors or on its
                  terrace in the heart of Vieil Antibes, in a setting designed for shared moments.
                </p>
                <div className="v6-events__tags" aria-label="Event types">
                  <span>Weddings</span>
                  <span>Birthdays</span>
                  <span>Group meals</span>
                </div>
              </>
            )}
          </div>

          <figure className="v3-feature-image v6-events__image">
            <img src={v5Media.galleryCutlery} alt={lang === 'fr' ? 'Table dressée pour recevoir un groupe' : 'Set table prepared for a group event'} />
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
                  <V6ReserveDropdown locale={locale} buttonClassName="v6-access-button v6-access-button--reserve" />
                  <a className="v6-access-link" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                    <PinIcon />
                    <span>{locale.actions.directions}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="v3-contact-media v5-contact-media">
              <figure className="v3-feature-image">
                <img src={v5Media.homeAccess} alt="Carte statique du quartier" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
