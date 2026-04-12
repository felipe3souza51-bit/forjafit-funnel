import { mechanismContent } from '../_data/offerExperience';

type ProgressionMechanismRevealProps = {
  profileLabel: string;
};

export function ProgressionMechanismReveal({
  profileLabel,
}: ProgressionMechanismRevealProps) {
  return (
    <section className="section section-mechanism" id="mecanismo">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{mechanismContent.eyebrow}</p>
          <h2>{mechanismContent.title}</h2>
          <p>{mechanismContent.description}</p>
        </div>

        <div className="mechanism-shell mechanism-shell-premium">
          <div className="mechanism-command">
            <div className="mechanism-command-copy">
              <span className="hero-mechanism-label">
                {mechanismContent.systemLabel}
              </span>
              <strong>{mechanismContent.systemTitle}</strong>
            </div>

            <div className="mechanism-command-status">
              <span className="mechanism-command-dot" />
              <p>{mechanismContent.systemStatus}</p>
            </div>
          </div>

          <div className="mechanism-rail">
            {mechanismContent.rail.map((item) => (
              <div className="mechanism-rail-item" key={item.title}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <p>{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mechanism-layout">
            <div className="mechanism-column mechanism-column-inputs">
              <div className="mechanism-panel-head">
                <p>Entradas reais</p>
                <span>sem treino genérico</span>
              </div>

              {mechanismContent.inputs.map((item, index) => (
                <article
                  className="mechanism-card mechanism-card-premium"
                  key={item.label}
                >
                  <div className="mechanism-card-head">
                    <span>{item.label}</span>
                    <strong className="mechanism-input-index">
                      {String(index + 1).padStart(2, '0')}
                    </strong>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>

            <div className="mechanism-center-stage">
              <div className="mechanism-core-shell">
                <div className="mechanism-core-grid" />

                <div className="mechanism-core">
                  <span className="mechanism-core-kicker">
                    Mapa de Progressão Inicial
                  </span>
                  <strong>Entrada certa para o seu momento</strong>
                  <p>
                    O plano para <span>{profileLabel}</span> começa alinhando as
                    variáveis certas antes de pedir mais intensidade.
                  </p>

                  <div className="mechanism-convergence">
                    <div className="mechanism-convergence-head">
                      <span className="hero-mechanism-label">
                        {mechanismContent.convergenceLabel}
                      </span>
                      <p>{mechanismContent.convergenceTitle}</p>
                    </div>

                    <div className="mechanism-convergence-stage" aria-hidden="true">
                      {mechanismContent.rail.map((item, index) => (
                        <div
                          className={`mechanism-convergence-node mechanism-convergence-node-${index + 1}`}
                          key={item.label}
                        >
                          <span>{item.title}</span>
                        </div>
                      ))}

                      <div className="mechanism-convergence-hub">
                        <span>Eixo ativo</span>
                        <strong>Entrada coerente</strong>
                      </div>

                      <div className="mechanism-convergence-output">
                        <span>Saída</span>
                        <strong>Progressão possível</strong>
                      </div>
                    </div>

                    <p className="mechanism-convergence-text">
                      {mechanismContent.convergenceText}
                    </p>
                  </div>

                  <div className="mechanism-core-flow">
                    {mechanismContent.flow.map((item) => (
                      <div className="mechanism-flow-step" key={item.title}>
                        <span>{item.label}</span>
                        <strong>{item.title}</strong>
                        <p>{item.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mechanism-column mechanism-column-outputs">
              <div className="mechanism-panel-head">
                <p>Saídas que importam</p>
                <span>clareza para seguir</span>
              </div>

              {mechanismContent.outputs.map((item) => (
                <article
                  className="mechanism-output mechanism-output-premium"
                  key={item.title}
                >
                  <span className="check-dot" />
                  <div className="mechanism-output-copy">
                    <span className="mechanism-output-label">{item.label}</span>
                    <strong>{item.title}</strong>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
