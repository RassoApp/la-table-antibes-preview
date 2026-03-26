import { useLocale } from '../../App';

export function V3LegalPage() {
  const { locale } = useLocale();

  return (
    <div className="v3-page">
      <section className="v3-page-hero">
        <div className="v3-container">
          <span className="v3-kicker">{locale.legalPage.eyebrow}</span>
          <h1>{locale.legalPage.title}</h1>
          <p>{locale.legalPage.text}</p>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v3-legal-panels">
          {locale.legalPage.sections.map((section, index) => (
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
