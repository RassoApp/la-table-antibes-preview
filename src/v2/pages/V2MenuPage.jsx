import { useLocale } from '../../App';

export function V2MenuPage() {
  const { locale } = useLocale();

  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <div className="v2-container">
          <span className="v2-kicker">{locale.menuPage.eyebrow}</span>
          <h1>{locale.menuPage.title}</h1>
          <p>{locale.menuPage.text}</p>
        </div>
      </section>

      <section className="v2-section v2-section--soft">
        <div className="v2-container">
          <p className="v2-note">{locale.menuPage.note}</p>
          <div className="v2-category-pills">
            {locale.menuPage.categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-menu-list">
          {locale.menuPage.categories.map((category, index) => (
            <article
              key={category.id}
              id={category.id}
              className={`v2-menu-block ${index % 3 === 1 ? 'is-accent' : ''}`}
            >
              <div className="v2-menu-block__header">
                <span className="v2-kicker">{locale.actions.jumpToCategory}</span>
                <h2>{category.title}</h2>
              </div>

              <div className="v2-menu-block__items">
                {category.items.map((item) => (
                  <div key={item.name} className="v2-menu-line">
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
