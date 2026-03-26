import { useLocale } from '../../App';
import { v3Media } from '../media';

const galleryImages = [
  { src: v3Media.galleryTerrace, caption: 'Terrasse' },
  { src: v3Media.galleryRoom, caption: 'Salle' },
  { src: v3Media.galleryOven, caption: 'Four a bois' },
  { src: v3Media.galleryDish, caption: 'Assiette' },
  { src: v3Media.galleryCutlery, caption: 'Table' },
  { src: v3Media.barInterior, caption: 'Bar' },
];

export function V3GalleryPage() {
  const { locale } = useLocale();

  return (
    <div className="v3-page">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{locale.galleryPage.eyebrow}</span>
          <h1>{locale.galleryPage.title}</h1>
          <p>{locale.galleryPage.text}</p>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-gallery-wall">
          {galleryImages.map((image, index) => (
            <figure key={image.caption} className={`v3-gallery-wall__item ${index === 0 ? 'is-wide' : ''}`}>
              <img src={image.src} alt={image.caption} />
              <figcaption>{image.caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
