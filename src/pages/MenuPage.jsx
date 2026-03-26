import { useLocale } from '../App';

export function MenuPage() {
  const { locale } = useLocale();

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__copy">
          <p className="eyebrow">{locale.menuPage.eyebrow}</p>
          <h1>{locale.menuPage.title}</h1>
          <p>{locale.menuPage.text}</p>
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <p className="section-note">{locale.menuPage.note}</p>
          <div className="category-nav">
            {locale.menuPage.categories.map((category) => (
              <a key={category.id} className="category-nav__link" href={`#${category.id}`}>
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container menu-sections">
          {locale.menuPage.categories.map((category) => (
            <article id={category.id} className="menu-category" key={category.id}>
              <div className="menu-category__header">
                <h2>{category.title}</h2>
              </div>
              <div className="menu-category__items">
                {category.items.map((item) => (
                  <div className="menu-item" key={item.name}>
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
