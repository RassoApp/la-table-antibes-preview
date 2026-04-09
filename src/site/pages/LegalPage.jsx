import { useLocale } from '../../App';
import { pageContent } from '../../content/locales/index.js';

export function LegalPage() {
  const { lang } = useLocale();
  const placeholders = pageContent[lang] ?? pageContent.fr;
  const page = placeholders.legal;

  return (
    <div className="v3-page v5-page v5-page--legal">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{page.eyebrow}</span>
          <h1>{page.title}</h1>
          <p>{page.text}</p>
        </div>
      </section>

      <section className="v3-section v5-section--tight-top">
        <div className="v3-container v3-legal-panels">
          {page.sections.map((section, index) => (
            <article key={section.title} className={index === 1 ? 'is-soft' : ''}>
              <span className="v3-kicker">{section.title}</span>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
