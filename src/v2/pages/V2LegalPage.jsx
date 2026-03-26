import { useLocale } from '../../App';

export function V2LegalPage() {
  const { locale } = useLocale();

  return (
    <div className="v2-page">
      <section className="v2-page-hero">
        <div className="v2-container">
          <span className="v2-kicker">{locale.legalPage.eyebrow}</span>
          <h1>{locale.legalPage.title}</h1>
          <p>{locale.legalPage.text}</p>
        </div>
      </section>

      <section className="v2-section">
        <div className="v2-container v2-legal-grid">
          {locale.legalPage.sections.map((section, index) => (
            <article key={section.title} className={`v2-legal-card ${index === 1 ? 'is-accent' : ''}`}>
              <span className="v2-kicker">{section.title}</span>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
