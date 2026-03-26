import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v5PagePlaceholderContent } from '../pagePlaceholderContent';
import { v5Media } from '../media';

export function V5AboutPage() {
  const { lang, locale, buildLocalizedPath } = useLocale();
  const placeholders = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const page = placeholders.about;

  return (
    <div className="v3-page v5-page v5-page--about">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="v3-section v5-section--tight-top">
        <div className="v3-container v3-grid v3-grid--about-top">
          <figure className="v3-feature-image">
            <img src={v5Media.galleryRoom} alt="Photo de la salle principale" />
          </figure>

          <div className="v3-copy">
            <span className="v3-kicker">{page.frame.eyebrow}</span>
            <h2>{page.frame.title}</h2>
            <p>{page.frame.text}</p>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft v5-section--compact">
        <div className="v3-container v5-about-promise">
          <article className="v5-about-promise__card">
            <span className="v3-kicker">{page.promise.eyebrow}</span>
            <h2>{page.promise.title}</h2>
            <p>{page.promise.text}</p>

            <div className="v5-about-highlights">
              {page.highlights.map((item) => (
                <article key={item}>{item}</article>
              ))}
            </div>

            <div className="v3-button-row v5-about-promise__actions">
              <Link className="v3-button v3-button--primary" to={buildLocalizedPath('contact')}>
                {locale.actions.contact}
              </Link>
              <Link className="v3-button v3-button--secondary-dark" to={buildLocalizedPath('menu')}>
                {locale.actions.menu}
              </Link>
            </div>
          </article>

          <figure className="v3-feature-image v5-about-promise__image">
            <img src={v5Media.cuisineBottomLeft} alt="Photo cuisine 1" />
          </figure>

          <figure className="v3-feature-image v5-about-promise__image">
            <img src={v5Media.cuisineBottomRight} alt="Photo cuisine 2" />
          </figure>
        </div>
      </section>
    </div>
  );
}
