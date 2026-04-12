import Link from 'next/link';

import {
  heroContent,
  heroMicroProofs,
  heroSystemSignals,
} from '../_data/offerExperience';
import type { ProfileContent, ProfileKey } from '../_data/ofertaProfiles';
import { RetomadaAxisScene } from './RetomadaAxisScene';

type OfferHeroImmersiveProps = {
  content: ProfileContent;
  profileKey: ProfileKey;
};

export function OfferHeroImmersive({
  content,
  profileKey,
}: OfferHeroImmersiveProps) {
  const checkoutHref = `/checkout-bridge?perfil=${profileKey}`;

  return (
    <section className="hero hero-premium hero-premium-immersive">
      <div className="container">
        <div className="hero-proposition-shell">
          <div className="hero-proposition-meta">
            <div className="hero-badge">{heroContent.eyebrow}</div>

            <div className="hero-audience-pill">
              <span className="hero-context-label">{heroContent.contextLabel}</span>
              <strong>{heroContent.contextState}</strong>
            </div>
          </div>

          <div className="hero-proposition-copy">
            <h1>{heroContent.title}</h1>
            <p className="hero-subtitle">{heroContent.subtitle}</p>
          </div>

          <div className="hero-belief-strip">
            <span className="hero-status-dot" />

            <div className="hero-belief-copy">
              <span className="hero-status-label">{heroContent.diagnosticLabel}</span>
              <strong>{heroContent.diagnosticText}</strong>
            </div>
          </div>

          <div className="hero-mechanism hero-mechanism-premium">
            <div className="hero-mechanism-head">
              <span className="hero-mechanism-label">
                {heroContent.mechanismLabel}
              </span>
              <span className="hero-mechanism-state">entrada certa</span>
            </div>

            <p>{heroContent.mechanismText}</p>

            <div className="hero-system-strip" aria-label="Variáveis do eixo">
              {heroSystemSignals.map((item) => (
                <div className="hero-system-item" key={item.label}>
                  <span>{item.label}</span>
                  <strong>{item.title}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-actions hero-actions-emphasis">
            <Link href={checkoutHref} className="btn-primary">
              {heroContent.primaryCta}
            </Link>

            <a href="#jornada-retomada" className="btn-secondary">
              Ver a lógica da retomada
            </a>
          </div>

          <p className="hero-cta-note">{heroContent.ctaNote}</p>

          <div className="hero-trust">
            {heroMicroProofs.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>

        <div className="hero-support-grid">
          <div className="hero-context-card hero-context-card-premium hero-context-card-support">
            <div className="hero-context-top">
              <span className="hero-context-label">Para quem é</span>
              <span className="hero-context-state">{content.shortLabel}</span>
            </div>

            <strong>Não é mais um treino genérico.</strong>
            <p>{content.audience[0]}</p>
            <div className="hero-context-divider" />
            <p className="hero-context-support">{heroContent.contextSupport}</p>
          </div>

          <div className="hero-visual hero-visual-support hero-visual-depth">
            <div className="hero-visual-stage hero-visual-stage-support">
              <div className="hero-atmosphere hero-atmosphere-depth" />
              <div className="hero-depth-wash hero-depth-wash-back" />
              <RetomadaAxisScene
                profileLabel={content.shortLabel}
                variant="support"
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-premium-immersive {
          position: relative;
        }

        .hero-proposition-shell {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
        }

        .hero-proposition-meta {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          align-items: center;
        }

        .hero-audience-pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          min-height: 38px;
          padding: 0 14px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(19, 26, 35, 0.68);
          color: var(--text-secondary);
          backdrop-filter: blur(14px);
        }

        .hero-audience-pill strong {
          color: var(--text-primary);
          font-size: 13px;
          letter-spacing: -0.01em;
        }

        .hero-proposition-copy {
          margin-top: 20px;
        }

        .hero-proposition-copy h1 {
          max-width: 15ch;
          margin-inline: auto;
        }

        .hero-proposition-copy .hero-subtitle {
          max-width: 64ch;
          margin-inline: auto;
        }

        .hero-belief-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          max-width: 760px;
          margin: 22px auto 0;
          padding: 16px 18px;
          border-radius: 22px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background:
            linear-gradient(
              180deg,
              rgba(24, 33, 45, 0.88),
              rgba(19, 26, 35, 0.82)
            );
          box-shadow:
            inset 0 1px 0 rgba(255, 255, 255, 0.04),
            0 18px 42px rgba(0, 0, 0, 0.22);
          text-align: left;
        }

        .hero-status-dot {
          width: 10px;
          height: 10px;
          flex: 0 0 10px;
          border-radius: 999px;
          background: linear-gradient(180deg, var(--accent-support), var(--accent));
          box-shadow: 0 0 0 7px rgba(61, 214, 198, 0.08);
        }

        .hero-status-label {
          display: inline-flex;
          color: var(--text-secondary);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-belief-copy strong {
          display: block;
          margin-top: 8px;
          color: var(--text-primary);
          font-size: 18px;
          line-height: 1.45;
          letter-spacing: -0.02em;
        }

        .hero-mechanism-premium {
          position: relative;
          max-width: 820px;
          margin-inline: auto;
          text-align: left;
        }

        .hero-mechanism-head {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
        }

        .hero-mechanism-state,
        .hero-context-state {
          display: inline-flex;
          align-items: center;
          min-height: 28px;
          padding: 0 12px;
          border-radius: 999px;
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: var(--text-primary);
          background: rgba(255, 255, 255, 0.02);
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .hero-system-strip {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .hero-system-item {
          padding: 16px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          background:
            linear-gradient(
              180deg,
              rgba(24, 33, 45, 0.76),
              rgba(19, 26, 35, 0.74)
            );
        }

        .hero-system-item span {
          display: inline-flex;
          color: var(--accent-support);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }

        .hero-system-item strong {
          display: block;
          margin-top: 10px;
          font-size: 16px;
          line-height: 1.24;
          letter-spacing: -0.02em;
        }

        .hero-actions-emphasis {
          justify-content: center;
          margin-top: 28px;
        }

        .hero-cta-note,
        .hero-trust {
          justify-content: center;
        }

        .hero-support-grid {
          display: grid;
          grid-template-columns: minmax(0, 0.78fr) minmax(0, 1.22fr);
          gap: 24px;
          align-items: center;
          margin-top: 30px;
        }

        .hero-context-card-support {
          max-width: none;
          text-align: left;
        }

        .hero-context-card-premium {
          position: relative;
          overflow: hidden;
        }

        .hero-context-card-premium::after {
          content: '';
          position: absolute;
          inset: auto 18px 0 18px;
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(61, 214, 198, 0.24),
            rgba(124, 255, 107, 0.24),
            transparent
          );
        }

        .hero-context-top {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          align-items: center;
          justify-content: space-between;
        }

        .hero-context-divider {
          width: 100%;
          height: 1px;
          margin-top: 14px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.04),
            rgba(61, 214, 198, 0.2),
            rgba(255, 255, 255, 0.04)
          );
        }

        .hero-context-support {
          max-width: 50ch;
        }

        .hero-visual-support {
          min-height: auto;
          justify-content: flex-end;
        }

        .hero-visual-stage-support {
          min-height: 500px;
        }

        .hero-visual-support :global(.axis-scene) {
          width: min(100%, 470px);
          min-height: 430px;
        }

        .hero-atmosphere-depth {
          inset: 10% 10% 12% 12%;
          opacity: 0.78;
          filter: blur(18px);
        }

        .hero-depth-wash {
          position: absolute;
          border-radius: 40px;
          pointer-events: none;
          transform-style: preserve-3d;
        }

        .hero-depth-wash-back {
          inset: 12% 14% 14% 12%;
          transform: translateZ(-110px);
          background:
            radial-gradient(
              circle at 26% 26%,
              rgba(61, 214, 198, 0.08),
              transparent 24%
            ),
            radial-gradient(
              circle at 78% 72%,
              rgba(124, 255, 107, 0.06),
              transparent 20%
            ),
            linear-gradient(
              180deg,
              rgba(24, 33, 45, 0.28),
              rgba(7, 9, 13, 0.04)
            );
          border: 1px solid rgba(255, 255, 255, 0.04);
          opacity: 0.58;
        }

        @media (max-width: 980px) {
          .hero-system-strip,
          .hero-support-grid {
            grid-template-columns: 1fr;
          }

          .hero-support-grid {
            margin-top: 24px;
          }

          .hero-visual-support {
            justify-content: center;
          }

          .hero-visual-stage-support {
            min-height: 460px;
          }

          .hero-visual-support :global(.axis-scene) {
            width: min(100%, 460px);
          }
        }

        @media (max-width: 640px) {
          .hero-proposition-shell,
          .hero-proposition-copy,
          .hero-belief-strip,
          .hero-mechanism-premium {
            text-align: left;
          }

          .hero-proposition-meta,
          .hero-actions-emphasis,
          .hero-trust {
            justify-content: flex-start;
          }

          .hero-proposition-copy h1,
          .hero-proposition-copy .hero-subtitle {
            margin-inline: 0;
          }

          .hero-belief-strip {
            align-items: flex-start;
          }

          .hero-mechanism-head,
          .hero-context-top {
            justify-content: flex-start;
          }

          .hero-visual-stage-support {
            min-height: auto;
          }

          .hero-atmosphere-depth {
            inset: 10% 6% 12% 6%;
            filter: blur(12px);
          }

          .hero-depth-wash-back {
            inset: 12% 8% 14% 8%;
            opacity: 0.48;
          }
        }
      `}</style>
    </section>
  );
}
