import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { ArtPlaceholder } from '../ArtPlaceholder';

export function V2HomePage() {
  const { locale, buildLocalizedPath } = useLocale();
  const featuredPizza = locale.menuPage.categories.find((category) => category.id === 'pizzas')?.items[1];
  const featuredMain = locale.menuPage.categories.find((category) => category.id === 'mains')?.items[0];

  return (
    <>
      <section className="v2-hero">
        <ArtPlaceholder label={locale.hero.imageLabel} kind="terrace" ratio="hero" />
        <div className="v2-hero__veil" />

        <div className="v2-hero__content">
          <span className="v2-kicker">{locale.hero.eyebrow}</span>
          <h1>{locale.hero.title}</h1>
          <p>{locale.hero.text}</p>
          <div className="v2-hero__actions">
            <Link className="v2-button v2-button--primary" to={buildLocalizedPath('menu')}>
              {locale.actions.menu}
            </Link>
            <Link className="v2-button v2-button--secondary" to={buildLocalizedPath('contact')}>
              {locale.actions.contact}
            </Link>
          </div>
        </div>
      </section>

      <section className="v2-info-band">
        <div className="v2-container v2-info-band__grid">
          {locale.infoStrip.map((item) => (
            <article key={item.label} className="v2-info-band__item">
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-split">
          <div className="v2-copy">
            <span className="v2-kicker">{locale.home.terrace.eyebrow}</span>
            <h2>{locale.home.terrace.title}</h2>
            <p>{locale.home.terrace.text}</p>
          </div>

          <ArtPlaceholder label={locale.home.terrace.imageLabel} kind="terrace-detail" ratio="portrait" />
        </div>
      </section>

      <section className="v2-section v2-section--tinted">
        <div className="v2-container">
          <div className="v2-section-head">
            <span className="v2-kicker">{locale.home.cuisine.eyebrow}</span>
            <h2>{locale.home.cuisine.title}</h2>
            <p>{locale.home.cuisine.text}</p>
          </div>

          <div className="v2-editorial-grid">
            <article className="v2-editorial-card">
              <ArtPlaceholder label="Signature Dish" kind="dish" ratio="wide" />
              <div className="v2-editorial-card__copy">
                <h3>{featuredPizza?.name}</h3>
                <p>{featuredPizza?.description}</p>
                <div className="v2-editorial-card__meta">
                  <span>{locale.menuPage.categories.find((category) => category.id === 'pizzas')?.title}</span>
                  <strong>{featuredPizza?.price}</strong>
                </div>
              </div>
            </article>

            <article className="v2-monolith">
              <span className="v2-kicker">Signature</span>
              <h3>{featuredMain?.name}</h3>
              <p>{featuredMain?.description}</p>
              <Link className="v2-button v2-button--ghost" to={buildLocalizedPath('contact')}>
                {locale.actions.contact}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-atmosphere">
          <div className="v2-atmosphere__media">
            <ArtPlaceholder label="Dining Room" kind="dining" ratio="tall" />
            <div className="v2-atmosphere__block" />
          </div>

          <div className="v2-copy">
            <span className="v2-kicker">{locale.home.gallery.eyebrow}</span>
            <h2>{locale.home.gallery.title}</h2>
            <p>{locale.home.gallery.text}</p>

            <div className="v2-checks">
              {locale.aboutPage.highlights.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--quote">
        <div className="v2-container v2-quote-grid">
          <div className="v2-pullquote">
            <p>{locale.home.story.title}</p>
          </div>

          <div className="v2-copy">
            <span className="v2-kicker">{locale.home.story.eyebrow}</span>
            <p>{locale.home.story.text}</p>
            <div className="v2-stat-grid">
              {locale.home.story.stats.map((item) => (
                <article key={item.label} className="v2-stat-card">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v2-section v2-section--soft">
        <div className="v2-container v2-contact-grid">
          <div className="v2-copy">
            <span className="v2-kicker">{locale.home.access.eyebrow}</span>
            <h2>{locale.home.access.title}</h2>
            <p>{locale.home.access.text}</p>

            <div className="v2-button-row">
              <a className="v2-button v2-button--primary" href={locale.contactLinks.phoneHref}>
                {locale.actions.call}
              </a>
              <a className="v2-button v2-button--secondary" href={locale.contactLinks.whatsappHref} target="_blank" rel="noreferrer">
                {locale.actions.whatsapp}
              </a>
              <a className="v2-button v2-button--ghost" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                {locale.actions.directions}
              </a>
            </div>
          </div>

          <ArtPlaceholder label={locale.home.access.imageLabel} kind="map" ratio="portrait" />
        </div>
      </section>
    </>
  );
}
