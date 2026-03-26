import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v3Media } from '../media';

export function V3AboutPage() {
  const { locale, buildLocalizedPath } = useLocale();

  return (
    <div className="v3-page">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{locale.aboutPage.eyebrow}</span>
          <h1>{locale.aboutPage.title}</h1>
          <p>{locale.aboutPage.text}</p>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-grid v3-grid--about-top">
          <figure className="v3-feature-image">
            <img src={v3Media.aboutRoom} alt="Salle bistrot" />
          </figure>

          <div className="v3-copy">
            <span className="v3-kicker">{locale.aboutPage.sections[0].title}</span>
            <h2>{locale.aboutPage.sections[1].title}</h2>
            <p>{locale.aboutPage.sections[0].text}</p>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v3-about-story">
          <article className="v3-about-story__card">
            <span className="v3-kicker">{locale.aboutPage.sections[1].title}</span>
            <h3>{locale.aboutPage.sections[1].text}</h3>
          </article>

          <figure className="v3-feature-image">
            <img src={v3Media.aboutTerrace} alt="Terrasse Antibes" />
          </figure>

          <figure className="v3-feature-image">
            <img src={v3Media.aboutOven} alt="Four a bois" />
          </figure>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-highlight-band">
          {locale.aboutPage.highlights.map((item, index) => (
            <article key={item} className={index === 0 ? 'is-accent' : ''}>
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v3-button-row">
          <Link className="v3-button v3-button--primary" to={buildLocalizedPath('contact')}>
            {locale.actions.contact}
          </Link>
          <Link className="v3-button v3-button--secondary-dark" to={buildLocalizedPath('menu')}>
            {locale.actions.menu}
          </Link>
        </div>
      </section>
    </div>
  );
}
