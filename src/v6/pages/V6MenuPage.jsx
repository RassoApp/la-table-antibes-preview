import { useLocale } from '../../App';

export function V6MenuPage() {
  const { locale } = useLocale();
  const tagLabels = locale.menuPage.tagLabels ?? {};

  return (
    <div className="v3-page v5-page v5-page--menu v6-page--menu">
      <section className="v3-section v6-menu-section">
        <div className="v3-container">
          <div className="v3-chip-row v6-menu-chip-row">
            {locale.menuPage.categories.map((category) => (
              <a key={category.id} href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>

          <div className="v3-menu-columns">
            {locale.menuPage.categories.map((category, index) => (
              <article key={category.id} id={category.id} className={`v3-menu-panel ${index % 3 === 1 ? 'is-soft' : ''}`}>
                <h2>{category.title}</h2>

                <div className="v3-menu-items">
                  {category.items.map((item) => (
                    <div key={`${category.id}-${item.name}`} className="v3-menu-item">
                      <div className="v6-menu-item__copy">
                        <div className="v6-menu-item__title-row">
                          <h3>{item.name}</h3>
                          {item.tags?.length ? (
                            <div className="v6-menu-item__tags" aria-label="Dish tags">
                              {item.tags.map((tag) => (
                                <span key={`${item.name}-${tag}`} className={`v6-menu-tag is-${tag}`}>
                                  {tagLabels[tag] ?? tag}
                                </span>
                              ))}
                            </div>
                          ) : null}
                        </div>
                        <p>{item.description}</p>
                      </div>
                      <strong>{item.price}</strong>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
