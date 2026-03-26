import { useLocale } from '../../App';
import { v5PagePlaceholderContent } from '../pagePlaceholderContent';
import { v5Media } from '../media';

export function V5MenuPage() {
  const { lang, locale } = useLocale();
  const placeholders = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const page = placeholders.menu;

  return (
    <div className="v3-page v5-page v5-page--menu">
      <section className="v3-page-hero v3-page-hero--split">
        <div className="v3-container v3-page-hero__grid">
          <div>
            <span className="v3-kicker">{page.eyebrow}</span>
            <h1>{page.title}</h1>
            <p>{page.text}</p>
          </div>

          <figure className="v3-page-hero__image">
            <img src={v5Media.pizzaPainted} alt="Illustration de pizza au feu de bois" />
          </figure>
        </div>
      </section>

      <section className="v3-section v3-section--soft v5-section--tight-top">
        <div className="v3-container">
          <p className="v3-note">{page.note}</p>
          <div className="v3-chip-row">
            {locale.menuPage.categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-section v5-section--compact">
        <div className="v3-container v3-menu-columns">
          {locale.menuPage.categories.map((category, index) => (
            <article key={category.id} id={category.id} className={`v3-menu-panel ${index % 3 === 1 ? 'is-soft' : ''}`}>
              <span className="v3-kicker">{category.title}</span>
              <h2>{category.title}</h2>

              <div className="v3-menu-items">
                {Array.from({ length: 3 }).map((_, itemIndex) => (
                  <div key={`${category.id}-${itemIndex}`} className="v3-menu-item">
                    <div>
                      <h3>
                        {page.itemName} {itemIndex + 1}
                      </h3>
                      <p>{page.itemDescription}</p>
                    </div>
                    <strong>{page.itemPrice}</strong>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
