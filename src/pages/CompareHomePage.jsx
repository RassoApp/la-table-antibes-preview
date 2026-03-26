import { Link } from 'react-router-dom';

export function CompareHomePage() {
  return (
    <div className="compare-page">
      <div className="compare-page__hero">
        <p className="eyebrow">La Table D&apos;Antibes</p>
        <h1>Choose the website version to review.</h1>
        <p>
          Version 1 is the first custom direction. Version 2 is the new Stitch-inspired editorial
          direction, rebuilt as a responsive site.
        </p>
      </div>

      <div className="compare-grid">
        <article className="compare-card">
          <span className="compare-card__tag">Version 1</span>
          <h2>Original custom direction</h2>
          <p>
            The first premium prototype with beige and terra-cotta styling, sharp geometry, and the
            original placeholder system.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v1/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v1/en">
              Open in English
            </Link>
          </div>
        </article>

        <article className="compare-card compare-card--accent">
          <span className="compare-card__tag">Version 2</span>
          <h2>Stitch-inspired editorial direction</h2>
          <p>
            A separate second attempt using the Stitch visual language as the UI reference, then
            expanded into tablet and desktop behavior.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v2/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v2/en">
              Open in English
            </Link>
          </div>
        </article>

        <article className="compare-card compare-card--accent">
          <span className="compare-card__tag">Version 3</span>
          <h2>Faithful Stitch translation</h2>
          <p>
            A corrected third attempt that uses the real Stitch imagery and a more faithful
            editorial composition, while still being fully responsive.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v3/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v3/en">
              Open in English
            </Link>
          </div>
        </article>

        <article className="compare-card compare-card--accent">
          <span className="compare-card__tag">Version 4</span>
          <h2>Polished responsive pass</h2>
          <p>
            A separate fourth version that keeps the same structure as version 3, but tightens the
            layout, contrast, card logic, and spacing issues spotted in review.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v4/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v4/en">
              Open in English
            </Link>
          </div>
        </article>

        <article className="compare-card compare-card--accent">
          <span className="compare-card__tag">Version 5</span>
          <h2>Simplified home page pass</h2>
          <p>
            A separate fifth version that keeps the stronger shell from version 4, but simplifies
            the home page structure, swaps in your new hero and pizza artwork, and removes the
            redundant sections.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v5/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v5/en">
              Open in English
            </Link>
          </div>
        </article>

        <article className="compare-card compare-card--accent">
          <span className="compare-card__tag">Version 6</span>
          <h2>Collapsed restaurant flow</h2>
          <p>
            A separate sixth version that removes the redundant inner pages from the main flow and
            turns the homepage into the real conversion page, while keeping the menu separate.
          </p>
          <div className="compare-card__actions">
            <Link className="button button--primary" to="/v6/fr">
              Open in French
            </Link>
            <Link className="button button--secondary" to="/v6/en">
              Open in English
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}
