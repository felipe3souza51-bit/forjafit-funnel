import {
  narrativeContent,
  narrativePhases,
  narrativeSteps,
} from '../_data/offerExperience';
import type { ProfileContent } from '../_data/ofertaProfiles';

type OfferNarrativeScrollProps = {
  content: ProfileContent;
};

export function OfferNarrativeScroll({
  content,
}: OfferNarrativeScrollProps) {
  return (
    <section className="section section-narrative" id="jornada-retomada">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{narrativeContent.eyebrow}</p>
          <h2>{narrativeContent.title}</h2>
          <p>{narrativeContent.description}</p>
        </div>

        <div className="narrative-shell">
          <div className="narrative-command">
            <div className="narrative-command-copy">
              <span className="hero-mechanism-label">
                {narrativeContent.boardLabel}
              </span>
              <strong>{narrativeContent.boardTitle}</strong>
              <p>{narrativeContent.boardText}</p>
            </div>

            <div className="narrative-phase-map" aria-hidden="true">
              {narrativePhases.map((phase, index) => (
                <article className="narrative-phase-card" key={phase.label}>
                  <span className="narrative-phase-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <strong>{phase.label}</strong>
                  <p>{phase.text}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="narrative-grid">
            {narrativeSteps.map((step) => {
              const description = step.descriptionKey
                ? content[step.descriptionKey]
                : step.description;

              return (
                <article
                  className={`narrative-card narrative-card-premium narrative-card-${step.state}`}
                  key={step.step}
                >
                  <div className="narrative-card-head">
                    <div className="narrative-card-identity">
                      <div className="narrative-step">{step.step}</div>
                      <span className="narrative-signal">{step.signal}</span>
                    </div>
                    <span className="narrative-phase-tag">{step.phase}</span>
                  </div>

                  <div
                    className={`narrative-state-meter narrative-state-meter-${step.state}`}
                    aria-hidden="true"
                  >
                    <span />
                    <span />
                    <span />
                  </div>

                  <h3>{step.title}</h3>
                  <p>{description}</p>

                  <p className="narrative-summary">{step.summary}</p>

                  <div className="narrative-status">
                    <span className="narrative-status-dot" />
                    <span>{step.phase} em foco</span>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="narrative-highlight narrative-highlight-premium">
            <div className="narrative-highlight-copy">
              <span className="hero-mechanism-label">
                {narrativeContent.highlightLabel}
              </span>
              <strong>{narrativeContent.highlightTitle}</strong>
              <p>{content.highlight}</p>
            </div>

            <div className="narrative-highlight-meta">
              <span className="narrative-signal narrative-signal-accent">
                Começo certo
              </span>
              <p>{narrativeContent.highlightSupport}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
