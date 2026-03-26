import { useLocale } from '../../App';
import { v3Media } from '../media';

export function V3MenuPage() {
  const { locale } = useLocale();

  return (
    <div className="v3-page">
      <section className="v3-page-hero v3-page-hero--split">
        <div className="v3-container v3-page-hero__grid">
          <div>
            <span className="v3-kicker">{locale.menuPage.eyebrow}</span>
            <h1>{locale.menuPage.title}</h1>
            <p>{locale.menuPage.text}</p>
          </div>

          <figure className="v3-page-hero__image">
            <img src={v3Media.pizza} alt="Pizza au feu de bois" />
          </figure>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container">
          <p className="v3-note">{locale.menuPage.note}</p>
          <div className="v3-chip-row">
            {locale.menuPage.categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-menu-columns">
          {locale.menuPage.categories.map((category, index) => (
            <article key={category.id} id={category.id} className={`v3-menu-panel ${index % 3 === 1 ? 'is-soft' : ''}`}>
              <span className="v3-kicker">{category.title}</span>
              <h2>{category.title}</h2>

              <div className="v3-menu-items">
                {category.items.map((item) => (
                  <div key={item.name} className="v3-menu-item">
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <strong>{item.price}</strong>
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
