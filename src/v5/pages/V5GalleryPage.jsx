import { useLocale } from '../../App';
import { v5PagePlaceholderContent } from '../pagePlaceholderContent';
import { v5Media } from '../media';

const galleryImages = [
  { src: v5Media.heroTerrace },
  { src: v5Media.galleryRoom },
  { src: v5Media.ovenFire },
  { src: v5Media.cuisineBottomLeft },
  { src: v5Media.galleryCutlery },
  { src: v5Media.barInterior },
];

export function V5GalleryPage() {
  const { lang } = useLocale();
  const placeholders = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const page = placeholders.gallery;

  return (
    <div className="v3-page v5-page v5-page--gallery">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="v3-section v5-section--tight-top">
        <div className="v3-container v3-gallery-wall">
          {galleryImages.map((image, index) => (
            <figure key={page.captions[index]} className={`v3-gallery-wall__item ${index === 0 ? 'is-wide' : ''}`}>
              <img src={image.src} alt={page.captions[index]} />
              <figcaption>{page.captions[index]}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
