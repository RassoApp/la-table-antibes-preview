import { PlaceholderImage } from '../components/PlaceholderImage';
import { useLocale } from '../App';

export function GalleryPage() {
  const { locale } = useLocale();

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__copy">
          <p className="eyebrow">{locale.galleryPage.eyebrow}</p>
          <h1>{locale.galleryPage.title}</h1>
          <p>{locale.galleryPage.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="container stacked-gallery">
          {locale.galleryPage.sections.map((section) => (
            <article className="gallery-section" key={section.title}>
              <div className="section-head section-head--tight">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
              <div className="gallery-grid">
                {section.images.map((label) => (
                  <PlaceholderImage key={label} label={label} aspect="card" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
