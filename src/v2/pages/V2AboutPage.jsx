import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { ArtPlaceholder } from '../ArtPlaceholder';

export function V2AboutPage() {
  const { locale, buildLocalizedPath } = useLocale();

  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <div className="v2-container">
          <span className="v2-kicker">{locale.aboutPage.eyebrow}</span>
          <h1>{locale.aboutPage.title}</h1>
          <p>{locale.aboutPage.text}</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-about-intro">
          <div className="v2-pullquote v2-pullquote--soft">
            <p>{locale.aboutPage.sections[0].text}</p>
          </div>

          <div className="v2-copy">
            <span className="v2-kicker">{locale.home.story.eyebrow}</span>
            <h2>{locale.home.story.title}</h2>
            <p>{locale.home.story.text}</p>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--tinted">
        <div className="v2-container v2-about-grid">
          <article className="v2-monolith">
            <span className="v2-kicker">{locale.aboutPage.sections[1].title}</span>
            <h3>{locale.aboutPage.sections[1].text}</h3>
          </article>

          <ArtPlaceholder label={locale.aboutPage.sections[1].imageLabel} kind="dish" ratio="portrait" />
          <ArtPlaceholder label={locale.aboutPage.sections[2].imageLabel} kind="bar" ratio="portrait" />
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-highlight-grid">
          <article className="v2-year-card">
            <span className="v2-kicker">{locale.brand.district}</span>
            <strong>1984</strong>
          </article>

          {locale.aboutPage.highlights.map((item) => (
            <article key={item} className="v2-highlight-card">
              <span>{item}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section v2-section--soft">
        <div className="v2-container v2-button-row">
          <Link className="v2-button v2-button--primary" to={buildLocalizedPath('contact')}>
            {locale.actions.contact}
          </Link>
          <Link className="v2-button v2-button--secondary" to={buildLocalizedPath('menu')}>
            {locale.actions.menu}
          </Link>
        </div>
      </section>
    </div>
  );
}
