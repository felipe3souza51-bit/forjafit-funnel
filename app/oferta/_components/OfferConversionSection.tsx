import Link from 'next/link';

import { benefits, deliverables } from '../_data/offerExperience';
import type { ProfileContent, ProfileKey } from '../_data/ofertaProfiles';

type OfferConversionSectionProps = {
  content: ProfileContent;
  profileKey: ProfileKey;
};

export function OfferConversionSection({
  content,
  profileKey,
}: OfferConversionSectionProps) {
  const checkoutHref = `/checkout-bridge?perfil=${profileKey}`;

  return (
    <>
      <section className="section section-benefits" id="oferta-conversao">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">BENEFÍCIOS CENTRAIS</p>
            <h2>
              Clareza, praticidade e estrutura em uma experiência com mais cara
              de produto e menos cara de improviso.
            </h2>
          </div>

          <div className="benefit-grid">
            {benefits.map((item) => (
              <div className="feature-card" key={item.title}>
                <div className="feature-icon" />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-transformation">
        <div className="container">
          <div className="transformation-shell">
            <div className="transformation-copy">
              <p className="eyebrow">TRANSFORMAÇÃO GUIADA</p>
              <h2>{content.transformationTitle}</h2>
              <p>{content.transformationText}</p>

              <div className="transformation-points">
                <div className="transformation-point">
                  <span className="point-dot" />
                  <span>Mais direção para treinar sem improviso</span>
                </div>
                <div className="transformation-point">
                  <span className="point-dot" />
                  <span>Mais disciplina para sustentar sua rotina</span>
                </div>
                <div className="transformation-point">
                  <span className="point-dot" />
                  <span>Mais clareza para evoluir com consistência</span>
                </div>
              </div>
            </div>

            <div className="transformation-visual">
              <div className="body-frame">
                <div className="transform-image" />

                <div className="body-card body-card-top">
                  <span className="floating-title">Direção</span>
                  <strong>Plano claro</strong>
                </div>

                <div className="body-card body-card-middle">
                  <span className="floating-title">Disciplina</span>
                  <strong>Constância real</strong>
                </div>

                <div className="body-card body-card-bottom">
                  <span className="floating-title">Evolução</span>
                  <strong>Resultado possível</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-before-after">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">ANTES E DEPOIS DA DIREÇÃO CERTA</p>
            <h2>
              A diferença não está só no treino. Está na sensação de controle,
              clareza e evolução ao longo da rotina.
            </h2>
          </div>

          <div className="before-after-shell">
            <div className="before-panel">
              <div className="panel-label">{content.beforeLabel}</div>
              <div className="state-figure state-figure-before">
                <div className="state-image state-image-before" />
              </div>
              <p>{content.beforeText}</p>
            </div>

            <div className="center-divider">
              <span />
            </div>

            <div className="after-panel">
              <div className="panel-label panel-label-green">
                {content.afterLabel}
              </div>
              <div className="state-figure state-figure-after">
                <div className="state-image state-image-after" />
              </div>
              <p>{content.afterText}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">O QUE VOCÊ RECEBE</p>
            <h2>
              Com o Forja Fit, você ganha uma base mais organizada para começar,
              continuar e evoluir com menos atrito.
            </h2>
            <p className="section-text">
              Em vez de depender de motivação aleatória ou ficar montando treino
              do zero, você passa a ter uma estrutura mais clara para executar.
            </p>
          </div>

          <div className="deliverables">
            {deliverables.map((item) => (
              <div className="deliverable-item" key={item}>
                <span className="check-dot" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="highlight-band">
            <div>
              <p className="eyebrow">PARA QUEM ISSO FAZ MAIS SENTIDO</p>
              <h2>
                Essa recomendação não é genérica. Ela acompanha o perfil que
                você mostrou no quiz.
              </h2>
            </div>

            <div className="audience-list">
              {content.audience.map((item) => (
                <div className="audience-card" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="guarantee-box">
            <div className="guarantee-mark">15</div>

            <div className="guarantee-copy">
              <p className="eyebrow">SEGURANÇA</p>
              <h2>Você pode entrar no Forja Fit com mais segurança.</h2>
              <p>
                A oferta conta com garantia de 15 dias. Isso reduz o risco da
                decisão e deixa o foco onde ele deve estar: em começar com uma
                estrutura que realmente faça sentido para você.
              </p>

              <Link href={checkoutHref} className="btn-primary">
                Avançar para a etapa final
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">FAQ</p>
            <h2>Perguntas que normalmente aparecem antes de avançar.</h2>
          </div>

          <div className="faq-list">
            {content.faqs.map((item) => (
              <details className="faq-item" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-crossroads">
        <div className="container">
          <div className="crossroads-box">
            <div className="crossroads-header">
              <p className="eyebrow">DECISÃO FINAL</p>
              <h2>
                Você já entendeu por que trava. Agora decide o que fazer com
                isso.
              </h2>
              <p>O improviso continua igual. A direção começa aqui.</p>
            </div>

            <div className="crossroads-paths">
              <div className="crossroads-path crossroads-path-a">
                <div className="crossroads-path-header">
                  <span className="crossroads-path-label crossroads-label-muted">
                    Sem estrutura
                  </span>
                  <span className="crossroads-path-state">continuando igual</span>
                </div>
                <ul className="crossroads-path-list">
                  <li>Começa animado, trava no meio e recomeça do zero</li>
                  <li>Improvisa o treino e tenta forçar ritmo sem base</li>
                  <li>
                    Perde constância e interpreta isso como falta de disciplina
                  </li>
                  <li>Volta para a estaca zero mais uma vez</li>
                </ul>
              </div>

              <div className="crossroads-path crossroads-path-b">
                <div className="crossroads-path-header">
                  <span className="crossroads-path-label crossroads-label-accent">
                    Com o Forja Fit
                  </span>
                  <span className="crossroads-path-state">trilho certo</span>
                </div>
                <ul className="crossroads-path-list">
                  <li>Começa pelo ponto certo para o seu momento atual</li>
                  <li>Plano alinhado ao seu objetivo, nível e rotina real</li>
                  <li>Progressão mais coerente e mais provável de manter</li>
                  <li>Menos recomeços, mais constância desde o início</li>
                </ul>
              </div>
            </div>

            <div className="crossroads-footer">
              <Link href={checkoutHref} className="btn-primary crossroads-cta">
                Entrar no trilho certo agora
              </Link>
              <span className="cta-note">
                A condição atual aparece na etapa final antes do checkout.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
