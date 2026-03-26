import { useLocale } from '../App';

export function LegalPage() {
  const { locale } = useLocale();

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__copy">
          <p className="eyebrow">{locale.legalPage.eyebrow}</p>
          <h1>{locale.legalPage.title}</h1>
          <p>{locale.legalPage.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="container legal-grid">
          {locale.legalPage.sections.map((section) => (
            <article className="legal-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
