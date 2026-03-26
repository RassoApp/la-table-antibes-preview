import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v3Media } from '../media';

function ImageCard({ src, alt, caption, kicker, className = '' }) {
  return (
    <figure className={`v3-image-card ${className}`}>
      <img src={src} alt={alt} />
      {(caption || kicker) && (
        <figcaption>
          {kicker ? <small>{kicker}</small> : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      )}
    </figure>
  );
}

export function V3HomePage() {
  const { locale, buildLocalizedPath } = useLocale();
  const featuredPizza = locale.menuPage.categories.find((category) => category.id === 'pizzas')?.items[1];
  const featuredMain = locale.menuPage.categories.find((category) => category.id === 'mains')?.items[0];

  return (
    <>
      <section className="v3-hero">
        <img className="v3-hero__image" src={v3Media.heroTerrace} alt="Terrasse ensoleillee a Antibes" />
        <div className="v3-hero__overlay" />

        <div className="v3-hero__content">
          <span className="v3-kicker">{locale.hero.eyebrow}</span>
          <h1>{locale.hero.title}</h1>
          <p>{locale.hero.text}</p>

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
          {locale.infoStrip.map((item) => (
            <article key={item.label}>
              <small>{item.label}</small>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-grid v3-grid--terrace">
          <div className="v3-copy v3-copy--lead">
            <span className="v3-kicker">{locale.home.terrace.eyebrow}</span>
            <h2>{locale.home.terrace.title}</h2>
            <p>{locale.home.terrace.text}</p>
          </div>

          <ImageCard
            src={v3Media.terraceTable}
            alt="Table de terrasse a Antibes"
            caption={locale.home.terrace.imageLabel}
            kicker={locale.brand.district}
          />
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container">
          <div className="v3-section-head">
            <span className="v3-kicker">{locale.home.cuisine.eyebrow}</span>
            <h2>{locale.home.cuisine.title}</h2>
            <p>{locale.home.cuisine.text}</p>
          </div>

          <div className="v3-menu-teaser">
            <ImageCard
              src={v3Media.pizza}
              alt="Pizza au feu de bois"
              caption={featuredPizza?.name}
              kicker={locale.menuPage.categories.find((category) => category.id === 'pizzas')?.title}
              className="v3-menu-teaser__media"
            />

            <article className="v3-menu-teaser__card">
              <div>
                <span className="v3-kicker">Signature</span>
                <h3>{featuredMain?.name}</h3>
                <p>{featuredMain?.description}</p>
              </div>
              <Link className="v3-button v3-button--ghost-light" to={buildLocalizedPath('contact')}>
                {locale.actions.contact}
              </Link>
            </article>
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-grid v3-grid--atmosphere">
          <div className="v3-copy">
            <span className="v3-kicker">{locale.home.gallery.eyebrow}</span>
            <h2>{locale.home.gallery.title}</h2>
            <p>{locale.home.gallery.text}</p>

            <div className="v3-check-list">
              {locale.aboutPage.highlights.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>

          <div className="v3-stack">
            <ImageCard src={v3Media.barInterior} alt="Bar et salle" caption="Bar & salle" kicker="Ambiance" />
            <div className="v3-stack__offset">
              <ImageCard src={v3Media.interiorSunlit} alt="Salle ensoleillee" caption="Salle lumineuse" kicker={locale.brand.district} />
            </div>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--quote">
        <div className="v3-container v3-grid v3-grid--quote">
          <blockquote className="v3-quote">{locale.home.story.title}</blockquote>

          <div className="v3-copy">
            <span className="v3-kicker">{locale.home.story.eyebrow}</span>
            <p>{locale.home.story.text}</p>

            <div className="v3-stat-row">
              {locale.home.story.stats.map((item) => (
                <article key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v3-grid v3-grid--contact">
          <div className="v3-copy">
            <span className="v3-kicker">{locale.home.access.eyebrow}</span>
            <h2>{locale.home.access.title}</h2>
            <p>{locale.home.access.text}</p>

            <div className="v3-button-row">
              <a className="v3-button v3-button--primary" href={locale.contactLinks.phoneHref}>
                {locale.actions.call}
              </a>
              <a className="v3-button v3-button--secondary-dark" href={locale.contactLinks.whatsappHref} target="_blank" rel="noreferrer">
                {locale.actions.whatsapp}
              </a>
              <a className="v3-button v3-button--link" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                {locale.actions.directions}
              </a>
            </div>
          </div>

          <ImageCard src={v3Media.map} alt="Plan d acces Antibes" caption={locale.home.access.imageLabel} kicker={locale.brand.district} />
        </div>
      </section>
    </>
  );
}
