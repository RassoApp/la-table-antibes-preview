import { Link } from 'react-router-dom';
import { PlaceholderImage } from '../components/PlaceholderImage';
import { useLocale } from '../App';

export function HomePage() {
  const { locale, buildLocalizedPath } = useLocale();

  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="eyebrow">{locale.hero.eyebrow}</p>
            <h1>{locale.hero.title}</h1>
            <p className="hero__lead">{locale.hero.text}</p>
            <div className="hero__actions">
              <Link className="button button--primary" to={buildLocalizedPath('contact')}>
                {locale.hero.primaryLabel}
              </Link>
              <Link className="button button--secondary" to={buildLocalizedPath('menu')}>
                {locale.hero.secondaryLabel}
              </Link>
            </div>
          </div>

          <PlaceholderImage label={locale.hero.imageLabel} aspect="hero" tone="dark" />
        </div>
      </section>

      <section className="info-strip">
        <div className="container info-strip__grid">
          {locale.infoStrip.map((item) => (
            <article className="info-strip__item" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--intro">
        <div className="container split-section">
          <div className="section-copy">
            <p className="eyebrow">{locale.home.intro.eyebrow}</p>
            <h2>{locale.home.intro.title}</h2>
            <p>{locale.home.intro.text}</p>
          </div>
          <div className="quote-block">
            <span>{locale.brand.microTag}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature-grid">
          <article className="feature-card feature-card--image-heavy">
            <div className="section-copy">
              <p className="eyebrow">{locale.home.terrace.eyebrow}</p>
              <h2>{locale.home.terrace.title}</h2>
              <p>{locale.home.terrace.text}</p>
            </div>
            <PlaceholderImage label={locale.home.terrace.imageLabel} aspect="wide" />
          </article>

          <article className="feature-card">
            <PlaceholderImage label={locale.home.cuisine.imageLabel} aspect="portrait" />
            <div className="section-copy">
              <p className="eyebrow">{locale.home.cuisine.eyebrow}</p>
              <h2>{locale.home.cuisine.title}</h2>
              <p>{locale.home.cuisine.text}</p>
              <Link className="text-link" to={buildLocalizedPath('menu')}>
                {locale.home.cuisine.ctaLabel}
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">{locale.home.gallery.eyebrow}</p>
            <h2>{locale.home.gallery.title}</h2>
            <p>{locale.home.gallery.text}</p>
          </div>

          <div className="gallery-preview">
            {locale.home.gallery.images.map((label) => (
              <PlaceholderImage key={label} label={label} aspect="card" />
            ))}
          </div>

          <Link className="button button--secondary" to={buildLocalizedPath('gallery')}>
            {locale.home.gallery.ctaLabel}
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container story-grid">
          <div className="section-copy">
            <p className="eyebrow">{locale.home.story.eyebrow}</p>
            <h2>{locale.home.story.title}</h2>
            <p>{locale.home.story.text}</p>
            <Link className="button button--secondary" to={buildLocalizedPath('about')}>
              {locale.home.story.ctaLabel}
            </Link>
          </div>

          <div className="stats-grid">
            {locale.home.story.stats.map((item) => (
              <article className="stat-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--access">
        <div className="container access-grid">
          <div className="section-copy">
            <p className="eyebrow">{locale.home.access.eyebrow}</p>
            <h2>{locale.home.access.title}</h2>
            <p>{locale.home.access.text}</p>
            <div className="action-row">
              <a className="button button--primary" href={locale.contactLinks.phoneHref}>
                {locale.actions.call}
              </a>
              <a className="button button--secondary" href={locale.contactLinks.whatsappHref} target="_blank" rel="noreferrer">
                {locale.actions.whatsapp}
              </a>
              <a className="button button--ghost" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                {locale.actions.directions}
              </a>
            </div>
          </div>

          <PlaceholderImage label={locale.home.access.imageLabel} aspect="wide" tone="light" />
        </div>
      </section>
    </>
  );
}
