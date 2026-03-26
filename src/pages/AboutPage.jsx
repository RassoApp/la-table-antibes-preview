import { PlaceholderImage } from '../components/PlaceholderImage';
import { useLocale } from '../App';

export function AboutPage() {
  const { locale } = useLocale();

  return (
    <div className="page">
      <section className="page-hero">
        <div className="container page-hero__copy">
          <p className="eyebrow">{locale.aboutPage.eyebrow}</p>
          <h1>{locale.aboutPage.title}</h1>
          <p>{locale.aboutPage.text}</p>
        </div>
      </section>

      <section className="section">
        <div className="container about-sections">
          {locale.aboutPage.sections.map((section, index) => (
            <article className={`about-block ${index % 2 === 1 ? 'is-reversed' : ''}`} key={section.title}>
              <PlaceholderImage label={section.imageLabel} aspect="wide" />
              <div className="section-copy">
                <h2>{section.title}</h2>
                <p>{section.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--dense">
        <div className="container">
          <div className="section-head section-head--tight">
            <p className="eyebrow">{locale.uiLabels.aboutDetailsEyebrow}</p>
            <h2>{locale.uiLabels.aboutDetailsTitle}</h2>
          </div>

          <div className="highlights-grid">
            {locale.aboutPage.highlights.map((item) => (
              <article className="highlight-card" key={item}>
                <span>{item}</span>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
