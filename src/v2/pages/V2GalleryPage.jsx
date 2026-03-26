import { useLocale } from '../../App';
import { ArtPlaceholder } from '../ArtPlaceholder';

export function V2GalleryPage() {
  const { locale } = useLocale();
  const kinds = ['terrace', 'dining', 'oven', 'dish', 'table', 'bar'];

  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <div className="v2-container">
          <span className="v2-kicker">{locale.galleryPage.eyebrow}</span>
          <h1>{locale.galleryPage.title}</h1>
          <p>{locale.galleryPage.text}</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-gallery-stack">
          {locale.galleryPage.sections.map((section) => (
            <article key={section.title} className="v2-gallery-section">
              <div className="v2-section-head">
                <span className="v2-kicker">{section.title}</span>
                <p>{section.text}</p>
              </div>

              <div className="v2-gallery-grid">
                {section.images.map((label, index) => (
                  <ArtPlaceholder
                    key={label}
                    label={label}
                    kind={kinds[index % kinds.length]}
                    ratio={index === 0 ? 'wide' : 'card'}
                  />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
