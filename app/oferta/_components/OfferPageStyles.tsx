export function OfferPageStyles() {
  return (
    <style jsx global>{`
      @keyframes accentDrift {
        0% {
          transform: translate3d(0, 0, 0) scale(1);
          opacity: 0.7;
        }

        100% {
          transform: translate3d(0, -18px, 0) scale(1.04);
          opacity: 1;
        }
      }

      @keyframes surfaceSweep {
        0% {
          transform: translateX(-18%);
          opacity: 0;
        }

        35% {
          opacity: 0.36;
        }

        100% {
          transform: translateX(18%);
          opacity: 0;
        }
      }

      @keyframes softPulse {
        0%,
        100% {
          opacity: 0.42;
          transform: scale(0.98);
        }

        50% {
          opacity: 0.62;
          transform: scale(1.02);
        }
      }

      .sales-page {
        --bg-main: #07090d;
        --bg-secondary: #0e1218;
        --bg-tertiary: #111722;
        --surface: rgba(19, 26, 35, 0.82);
        --surface-high: rgba(24, 33, 45, 0.92);
        --surface-deep: rgba(12, 17, 24, 0.92);
        --text-primary: #f3f6f8;
        --text-secondary: #98a6b8;
        --text-muted: #6e7b8c;
        --text-accent-soft: #c9f7d0;
        --line: rgba(255, 255, 255, 0.08);
        --line-strong: rgba(255, 255, 255, 0.14);
        --accent: #7cff6b;
        --accent-support: #3dd6c6;
        --accent-cta: #f97316;
        --accent-warning-soft: #ffb86a;
        --glow-green: rgba(124, 255, 107, 0.18);
        --glow-cyan: rgba(61, 214, 198, 0.18);
        --glow-orange: rgba(249, 115, 22, 0.16);
        position: relative;
        min-height: 100vh;
        overflow: hidden;
        background:
          radial-gradient(circle at 12% 6%, rgba(61, 214, 198, 0.1), transparent 26%),
          radial-gradient(circle at 86% 14%, rgba(124, 255, 107, 0.08), transparent 18%),
          radial-gradient(circle at 50% 48%, rgba(255, 255, 255, 0.03), transparent 34%),
          linear-gradient(180deg, #0b0f15 0%, var(--bg-tertiary) 18%, var(--bg-secondary) 36%, var(--bg-main) 74%);
        color: var(--text-primary);
        font-family:
          'Segoe UI Variable Text',
          'Segoe UI',
          'Helvetica Neue',
          sans-serif;
      }

      .sales-page::before,
      .sales-page::after {
        content: '';
        position: absolute;
        inset: 0;
        pointer-events: none;
      }

      .sales-page::before {
        background:
          radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.04), transparent 24%),
          linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 18%);
        opacity: 0.65;
      }

      .sales-page::after {
        background:
          radial-gradient(circle at 22% 24%, rgba(61, 214, 198, 0.06), transparent 18%),
          radial-gradient(circle at 74% 72%, rgba(249, 115, 22, 0.04), transparent 16%);
        opacity: 0.85;
      }

      .grid-mask {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px);
        background-size: 48px 48px;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.54), transparent 88%);
        pointer-events: none;
      }

      .bg-orb {
        position: absolute;
        border-radius: 999px;
        filter: blur(110px);
        pointer-events: none;
        opacity: 0.28;
      }

      .orb-1 {
        width: 360px;
        height: 360px;
        background: rgba(61, 214, 198, 0.2);
        top: 70px;
        left: -80px;
      }

      .orb-2 {
        width: 280px;
        height: 280px;
        background: rgba(124, 255, 107, 0.16);
        top: 300px;
        right: -40px;
      }

      .orb-3 {
        width: 320px;
        height: 320px;
        background: rgba(249, 115, 22, 0.08);
        bottom: 180px;
        right: 18%;
      }

      .container {
        position: relative;
        z-index: 1;
        width: min(1200px, calc(100% - 40px));
        margin: 0 auto;
      }

      .hero {
        padding: 56px 0 42px;
      }

      .hero-badge,
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 28px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background: rgba(19, 26, 35, 0.72);
        color: var(--accent-support);
        font-size: 11px;
        line-height: 1;
        letter-spacing: 0.12em;
        text-transform: uppercase;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
      }

      .hero-grid-premium {
        display: grid;
        grid-template-columns: minmax(0, 1.04fr) minmax(0, 0.96fr);
        gap: 40px;
        margin-top: 22px;
        align-items: center;
      }

      .hero-copy h1 {
        margin: 20px 0 0;
        font-family:
          'Segoe UI Variable Display',
          'Segoe UI',
          'Helvetica Neue',
          sans-serif;
        font-size: clamp(36px, 5vw, 60px);
        font-weight: 760;
        line-height: 0.99;
        letter-spacing: -0.05em;
        max-width: 14ch;
        text-wrap: balance;
      }

      .hero-subtitle {
        margin: 24px 0 0;
        max-width: 700px;
        color: var(--text-secondary);
        font-size: 19px;
        line-height: 1.76;
        text-wrap: pretty;
      }

      .hero-context-card,
      .hero-mechanism,
      .narrative-highlight,
      .mechanism-card,
      .mechanism-core {
        border: 1px solid var(--line);
        background: linear-gradient(180deg, rgba(24, 33, 45, 0.86), rgba(19, 26, 35, 0.84));
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.04),
          0 22px 54px rgba(0, 0, 0, 0.24);
        backdrop-filter: blur(14px);
      }

      .hero-context-card {
        max-width: 580px;
        padding: 20px 22px;
        border-radius: 24px;
      }

      .hero-context-label,
      .hero-mechanism-label,
      .axis-kicker,
      .mechanism-core-kicker,
      .floating-title,
      .mechanism-card span,
      .axis-node span,
      .axis-result span,
      .narrative-step {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 0 12px;
        border-radius: 999px;
        background: rgba(61, 214, 198, 0.12);
        border: 1px solid rgba(61, 214, 198, 0.2);
        color: var(--accent-support);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .hero-context-card strong {
        display: block;
        margin-top: 14px;
        font-size: 26px;
        line-height: 1.12;
        letter-spacing: -0.04em;
      }

      .hero-context-card p,
      .hero-mechanism p,
      .mechanism-card p,
      .mechanism-core p,
      .narrative-card p,
      .axis-node p,
      .axis-center p {
        margin: 12px 0 0;
        color: var(--text-secondary);
        line-height: 1.74;
      }

      .hero-mechanism {
        max-width: 720px;
        margin-top: 20px;
        padding: 20px 22px;
        border-radius: 24px;
      }

      .hero-actions,
      .final-cta-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        align-items: center;
        margin-top: 30px;
      }

      .btn-primary,
      .btn-secondary {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 54px;
        padding: 0 22px;
        border-radius: 14px;
        text-decoration: none;
        font-weight: 700;
        letter-spacing: -0.01em;
        transition:
          transform 0.2s ease,
          box-shadow 0.2s ease,
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .btn-primary {
        background: linear-gradient(180deg, #fb923c 0%, var(--accent-cta) 100%);
        color: #1f0a00;
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.26),
          0 18px 42px rgba(249, 115, 22, 0.28);
      }

      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.28),
          0 20px 44px rgba(249, 115, 22, 0.34);
      }

      .btn-secondary {
        color: var(--text-primary);
        border: 1px solid var(--line);
        background: rgba(255, 255, 255, 0.02);
      }

      .btn-secondary:hover {
        border-color: rgba(255, 255, 255, 0.18);
        background: rgba(255, 255, 255, 0.05);
        transform: translateY(-1px);
      }

      .hero-cta-note {
        margin: 14px 0 0;
        color: var(--text-accent-soft);
        font-size: 15px;
        line-height: 1.6;
      }

      .hero-trust {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 20px;
      }

      .hero-trust span,
      .panel-label {
        display: inline-flex;
        align-items: center;
        min-height: 34px;
        padding: 0 14px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.025);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: var(--text-secondary);
        font-size: 13px;
      }

      .hero-visual {
        position: relative;
        min-height: 660px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .hero-atmosphere {
        position: absolute;
        inset: 10% 8% 10% 8%;
        border-radius: 40px;
        background:
          radial-gradient(circle at 48% 42%, rgba(61, 214, 198, 0.2), transparent 24%),
          radial-gradient(circle at 78% 20%, rgba(124, 255, 107, 0.12), transparent 18%),
          linear-gradient(180deg, rgba(24, 33, 45, 0.6), rgba(7, 9, 13, 0.18));
        filter: blur(8px);
        animation: accentDrift 16s ease-in-out infinite alternate;
      }

      .hero.hero-premium-immersive {
        padding-top: 44px;
      }

      .hero.hero-premium-immersive .container {
        display: grid;
        gap: 34px;
      }

      .hero.hero-premium-immersive .hero-proposition-shell {
        position: relative;
        display: grid;
        gap: 18px;
        max-width: 920px;
        padding: 12px 0 0;
      }

      .hero.hero-premium-immersive .hero-proposition-shell::before {
        content: '';
        position: absolute;
        inset: -20px -28px -22px;
        border-radius: 36px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background:
          radial-gradient(circle at 50% 0%, rgba(61, 214, 198, 0.08), transparent 42%),
          linear-gradient(
            180deg,
            rgba(18, 24, 33, 0.7),
            rgba(11, 15, 21, 0.28)
          );
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.04),
          0 26px 68px rgba(0, 0, 0, 0.2);
        pointer-events: none;
        z-index: -1;
      }

      .hero.hero-premium-immersive .hero-proposition-copy h1 {
        margin-top: 0;
        max-width: 14.5ch;
        font-size: clamp(44px, 6vw, 76px);
        line-height: 0.96;
        letter-spacing: -0.062em;
      }

      .hero.hero-premium-immersive .hero-subtitle {
        margin-top: 0;
        max-width: 62ch;
        font-size: clamp(18px, 2.2vw, 21px);
        line-height: 1.72;
        color: #b2bfce;
      }

      .hero.hero-premium-immersive .hero-belief-strip {
        max-width: 780px;
      }

      .hero.hero-premium-immersive .hero-belief-copy strong {
        font-size: 19px;
        line-height: 1.42;
      }

      .hero.hero-premium-immersive .hero-mechanism {
        max-width: 840px;
        padding: 22px 24px;
      }

      .hero.hero-premium-immersive .hero-mechanism p {
        max-width: 58ch;
      }

      .hero.hero-premium-immersive .hero-system-strip {
        gap: 10px;
      }

      .hero.hero-premium-immersive .hero-system-item {
        min-height: 108px;
      }

      .hero.hero-premium-immersive .hero-system-item strong {
        font-size: 17px;
        line-height: 1.28;
      }

      .hero.hero-premium-immersive .hero-actions-emphasis {
        margin-top: 8px;
      }

      .hero.hero-premium-immersive .hero-actions-emphasis .btn-primary {
        min-height: 58px;
        padding: 0 28px;
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.26),
          0 22px 46px rgba(249, 115, 22, 0.26);
      }

      .hero.hero-premium-immersive .hero-actions-emphasis .btn-secondary {
        background: rgba(255, 255, 255, 0.03);
      }

      .hero.hero-premium-immersive .hero-cta-note {
        max-width: 54ch;
        margin-inline: auto;
      }

      .hero.hero-premium-immersive .hero-support-grid {
        position: relative;
        grid-template-columns: minmax(0, 0.82fr) minmax(0, 1.18fr);
        gap: 22px;
        margin-top: 0;
      }

      .hero.hero-premium-immersive .hero-context-card-support {
        min-height: 100%;
        padding: 22px 24px;
      }

      .hero.hero-premium-immersive .hero-context-card-support strong {
        max-width: 15ch;
        font-size: clamp(24px, 2.4vw, 30px);
      }

      .hero.hero-premium-immersive .hero-context-support {
        color: var(--text-primary);
      }

      .hero.hero-premium-immersive .hero-visual-support {
        min-height: 0;
      }

      .hero.hero-premium-immersive .hero-visual-stage-support {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 460px;
        padding: 28px 24px;
        border-radius: 34px;
        border: 1px solid rgba(255, 255, 255, 0.05);
        background:
          linear-gradient(
            180deg,
            rgba(17, 23, 31, 0.82),
            rgba(9, 12, 17, 0.38)
          );
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
        overflow: hidden;
      }

      .hero.hero-premium-immersive .hero-visual-support .hero-atmosphere {
        opacity: 0.58;
      }

      .hero.hero-premium-immersive .hero-visual-support .axis-scene {
        width: min(100%, 430px);
        min-height: 398px;
        box-shadow:
          0 28px 64px rgba(0, 0, 0, 0.38),
          inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }

      .hero.hero-premium-immersive .axis-scene-support .axis-node strong,
      .hero.hero-premium-immersive .axis-scene-support .axis-result strong {
        font-size: 18px;
      }

      .axis-scene {
        position: relative;
        z-index: 2;
        width: min(100%, 570px);
        min-height: 540px;
        border-radius: 34px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background:
          radial-gradient(circle at 50% 50%, rgba(61, 214, 198, 0.1), transparent 24%),
          radial-gradient(circle at 86% 14%, rgba(124, 255, 107, 0.08), transparent 18%),
          linear-gradient(180deg, rgba(24, 33, 45, 0.96), rgba(10, 13, 18, 0.96));
        box-shadow:
          0 36px 84px rgba(0, 0, 0, 0.48),
          inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }

      .axis-grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
        background-size: 40px 40px;
        opacity: 0.2;
      }

      .axis-center,
      .axis-node,
      .axis-result {
        position: absolute;
        padding: 18px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.92),
            rgba(19, 26, 35, 0.86)
          );
        box-shadow: 0 22px 46px rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(14px);
      }

      .axis-center {
        top: 50%;
        left: 50%;
        width: min(72%, 306px);
        transform: translate(-50%, -50%);
        text-align: center;
      }

      .axis-center strong,
      .axis-node strong,
      .axis-result strong,
      .mechanism-core strong,
      .narrative-highlight strong {
        display: block;
        margin-top: 12px;
        font-size: 22px;
        line-height: 1.16;
        letter-spacing: -0.035em;
      }

      .axis-node {
        width: min(42%, 220px);
      }

      .axis-node-1 {
        top: 40px;
        left: 24px;
      }

      .axis-node-2 {
        top: 48px;
        right: 24px;
      }

      .axis-node-3 {
        bottom: 104px;
        left: 36px;
      }

      .axis-result {
        right: 24px;
        bottom: 42px;
        width: min(44%, 232px);
      }

      .section {
        padding: 54px 0;
      }

      .section-head {
        max-width: 900px;
      }

      .section-head h2,
      .transformation-copy h2,
      .highlight-band h2,
      .guarantee-copy h2,
      .final-cta-box h2,
      .mechanism-card h3 {
        margin: 14px 0 0;
        font-family:
          'Segoe UI Variable Display',
          'Segoe UI',
          'Helvetica Neue',
          sans-serif;
        font-size: clamp(30px, 4vw, 48px);
        font-weight: 760;
        line-height: 1.04;
        letter-spacing: -0.048em;
        text-wrap: balance;
      }

      .mechanism-card h3 {
        font-size: 24px;
        line-height: 1.16;
      }

      .section-head p,
      .section-text,
      .guarantee-copy p,
      .final-cta-box p,
      .transformation-copy p,
      .narrative-highlight p {
        color: var(--text-secondary);
        line-height: 1.82;
        font-size: 17px;
        text-wrap: pretty;
      }

      .section-narrative {
        padding-top: 28px;
      }

      .narrative-shell {
        position: relative;
        margin-top: 32px;
        padding: 28px;
        border-radius: 34px;
        border: 1px solid var(--line);
        background:
          linear-gradient(
            180deg,
            rgba(14, 18, 24, 0.97),
            rgba(9, 11, 15, 0.95)
          );
        overflow: hidden;
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.03),
          0 28px 66px rgba(0, 0, 0, 0.24);
      }

      .narrative-shell::before,
      .mechanism-shell-premium::before {
        content: '';
        position: absolute;
        inset: -10% -14%;
        background:
          radial-gradient(circle at 20% 18%, rgba(61, 214, 198, 0.12), transparent 22%),
          radial-gradient(circle at 78% 68%, rgba(124, 255, 107, 0.08), transparent 20%),
          radial-gradient(circle at 56% 24%, rgba(249, 115, 22, 0.05), transparent 18%);
        pointer-events: none;
        animation: accentDrift 18s ease-in-out infinite alternate;
      }

      .narrative-command {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: minmax(0, 0.94fr) minmax(0, 1.06fr);
        gap: 18px;
        align-items: start;
      }

      .narrative-command-copy {
        padding: 22px 22px 20px;
        border-radius: 24px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.9),
            rgba(19, 26, 35, 0.8)
          );
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
      }

      .narrative-command-copy strong {
        display: block;
        margin-top: 14px;
        font-size: 28px;
        line-height: 1.08;
        letter-spacing: -0.04em;
      }

      .narrative-command-copy p {
        margin: 14px 0 0;
        color: var(--text-secondary);
        line-height: 1.72;
      }

      .narrative-phase-map {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 12px;
      }

      .narrative-phase-card {
        position: relative;
        padding: 18px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.84),
            rgba(19, 26, 35, 0.76)
          );
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.02);
      }

      .narrative-phase-index {
        display: inline-flex;
        color: var(--accent-support);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .narrative-phase-card strong {
        display: block;
        margin-top: 12px;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      .narrative-phase-card p {
        margin: 12px 0 0;
        color: var(--text-secondary);
        line-height: 1.65;
        font-size: 14px;
      }

      .narrative-grid {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 16px;
        margin-top: 24px;
      }

      .narrative-grid::before {
        content: '';
        position: absolute;
        top: 34px;
        left: 12%;
        right: 12%;
        height: 1px;
        background: linear-gradient(
          90deg,
          rgba(249, 115, 22, 0.12),
          rgba(61, 214, 198, 0.26),
          rgba(124, 255, 107, 0.12)
        );
        pointer-events: none;
      }

      .narrative-card,
      .feature-card,
      .deliverable-item,
      .audience-card,
      .faq-item,
      .highlight-band,
      .guarantee-box,
      .final-cta-box,
      .before-panel,
      .after-panel {
        border: 1px solid var(--line);
        background:
          linear-gradient(
            180deg,
            rgba(19, 26, 35, 0.86),
            rgba(14, 18, 24, 0.84)
          );
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
      }

      .narrative-card {
        position: relative;
        border-radius: 24px;
        padding: 22px;
        overflow: hidden;
        transition:
          transform 0.22s ease,
          border-color 0.22s ease,
          box-shadow 0.22s ease,
          background 0.22s ease;
      }

      .narrative-card::after {
        content: '';
        position: absolute;
        inset: 1px;
        border-radius: inherit;
        background: linear-gradient(
          135deg,
          rgba(255, 255, 255, 0.04),
          transparent 28%
        );
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.22s ease;
      }

      .narrative-card:hover {
        transform: translateY(-4px);
        border-color: rgba(255, 255, 255, 0.12);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.04),
          0 24px 42px rgba(0, 0, 0, 0.24);
      }

      .narrative-card:hover::after {
        opacity: 1;
      }

      .narrative-card-head {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 12px;
      }

      .narrative-card-identity {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 10px;
      }

      .narrative-signal {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 0 12px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(255, 255, 255, 0.03);
        color: var(--text-secondary);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .narrative-signal-accent {
        color: var(--accent-support);
        border-color: rgba(61, 214, 198, 0.18);
        background: rgba(61, 214, 198, 0.08);
      }

      .narrative-phase-tag {
        color: var(--text-secondary);
        font-size: 12px;
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .narrative-card h3 {
        margin: 16px 0 0;
        font-size: 24px;
        line-height: 1.18;
        letter-spacing: -0.03em;
      }

      .narrative-summary {
        margin: 16px 0 0;
        padding-top: 14px;
        border-top: 1px solid rgba(255, 255, 255, 0.07);
        color: var(--text-primary);
        font-size: 14px;
        line-height: 1.64;
      }

      .narrative-state-meter {
        display: grid;
        gap: 8px;
        margin-top: 18px;
      }

      .narrative-state-meter span {
        display: block;
        height: 6px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.08);
      }

      .narrative-state-meter-culpa span:nth-child(1) {
        width: 82%;
        background: rgba(249, 115, 22, 0.74);
      }

      .narrative-state-meter-culpa span:nth-child(2) {
        width: 36%;
      }

      .narrative-state-meter-culpa span:nth-child(3) {
        width: 22%;
      }

      .narrative-state-meter-diagnostico span:nth-child(1) {
        width: 74%;
        background: rgba(249, 115, 22, 0.56);
      }

      .narrative-state-meter-diagnostico span:nth-child(2) {
        width: 68%;
        background: rgba(61, 214, 198, 0.48);
      }

      .narrative-state-meter-diagnostico span:nth-child(3) {
        width: 32%;
      }

      .narrative-state-meter-alinhamento span:nth-child(1) {
        width: 80%;
        background: rgba(61, 214, 198, 0.52);
      }

      .narrative-state-meter-alinhamento span:nth-child(2) {
        width: 88%;
        background: rgba(61, 214, 198, 0.72);
      }

      .narrative-state-meter-alinhamento span:nth-child(3) {
        width: 70%;
        background: rgba(124, 255, 107, 0.4);
      }

      .narrative-state-meter-comeco span:nth-child(1) {
        width: 84%;
        background: rgba(61, 214, 198, 0.58);
      }

      .narrative-state-meter-comeco span:nth-child(2) {
        width: 92%;
        background: rgba(124, 255, 107, 0.72);
      }

      .narrative-state-meter-comeco span:nth-child(3) {
        width: 100%;
        background: rgba(124, 255, 107, 0.9);
      }

      .narrative-card-culpa {
        background:
          linear-gradient(
            180deg,
            rgba(30, 22, 19, 0.82),
            rgba(19, 26, 35, 0.86)
          );
      }

      .narrative-card-diagnostico {
        background:
          linear-gradient(
            180deg,
            rgba(28, 24, 22, 0.82),
            rgba(19, 26, 35, 0.86)
          );
      }

      .narrative-card-alinhamento {
        background:
          linear-gradient(
            180deg,
            rgba(20, 31, 34, 0.86),
            rgba(19, 26, 35, 0.86)
          );
      }

      .narrative-card-comeco {
        background:
          linear-gradient(
            180deg,
            rgba(22, 34, 28, 0.88),
            rgba(19, 26, 35, 0.86)
          );
      }

      .narrative-status {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        margin-top: 18px;
        color: var(--text-secondary);
        font-size: 13px;
      }

      .narrative-status-dot {
        width: 8px;
        height: 8px;
        flex: 0 0 8px;
        border-radius: 999px;
        background: var(--accent-support);
        box-shadow: 0 0 0 6px rgba(61, 214, 198, 0.08);
      }

      .narrative-highlight {
        margin-top: 22px;
        border-radius: 30px;
        padding: 24px;
      }

      .narrative-highlight-premium {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
        gap: 20px;
        background: linear-gradient(180deg, rgba(24, 33, 45, 0.92), rgba(15, 19, 25, 0.9));
      }

      .narrative-highlight-copy strong {
        margin-top: 14px;
      }

      .narrative-highlight-meta {
        padding-left: 18px;
        border-left: 1px solid rgba(255, 255, 255, 0.08);
        align-self: center;
      }

      .narrative-highlight-meta p {
        margin-top: 14px;
      }

      .section-mechanism {
        padding-top: 16px;
      }

      .mechanism-shell {
        margin-top: 32px;
      }

      .mechanism-shell-premium {
        position: relative;
        padding: 28px;
        border-radius: 34px;
        border: 1px solid var(--line);
        background:
          linear-gradient(
            180deg,
            rgba(14, 18, 24, 0.98),
            rgba(9, 11, 15, 0.95)
          );
        overflow: hidden;
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.03),
          0 28px 66px rgba(0, 0, 0, 0.24);
      }

      .mechanism-command {
        position: relative;
        z-index: 1;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 16px;
        align-items: center;
        margin-bottom: 18px;
      }

      .mechanism-command-copy {
        max-width: 620px;
      }

      .mechanism-command-copy strong {
        display: block;
        margin-top: 14px;
        font-size: 28px;
        line-height: 1.08;
        letter-spacing: -0.04em;
      }

      .mechanism-command-status {
        display: inline-flex;
        align-items: center;
        gap: 12px;
        max-width: 360px;
        padding: 14px 16px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.86),
            rgba(19, 26, 35, 0.78)
          );
      }

      .mechanism-command-status p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.6;
      }

      .mechanism-command-dot {
        width: 10px;
        height: 10px;
        flex: 0 0 10px;
        border-radius: 999px;
        background: linear-gradient(180deg, var(--accent-support), var(--accent));
        box-shadow: 0 0 0 7px rgba(61, 214, 198, 0.08);
      }

      .mechanism-rail {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 12px;
        margin-bottom: 18px;
      }

      .mechanism-rail-item {
        padding: 16px 18px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.06);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.82),
            rgba(19, 26, 35, 0.74)
          );
      }

      .mechanism-rail-item span {
        display: inline-flex;
        color: var(--accent-support);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .mechanism-rail-item strong {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      .mechanism-rail-item p {
        margin: 10px 0 0;
        color: var(--text-secondary);
        line-height: 1.58;
        font-size: 14px;
      }

      .mechanism-layout {
        position: relative;
        z-index: 1;
        display: grid;
        grid-template-columns: 0.94fr 1.12fr 0.94fr;
        gap: 18px;
        align-items: stretch;
      }

      .mechanism-column {
        display: grid;
        gap: 14px;
      }

      .mechanism-panel-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 2px 2px 4px;
      }

      .mechanism-panel-head p {
        margin: 0;
        color: var(--text-primary);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .mechanism-panel-head span {
        color: var(--text-secondary);
        font-size: 12px;
      }

      .mechanism-card,
      .mechanism-core {
        border-radius: 26px;
        padding: 22px;
      }

      .mechanism-card-premium {
        position: relative;
        overflow: hidden;
      }

      .mechanism-card-premium::after {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(
          140deg,
          rgba(255, 255, 255, 0.04),
          transparent 26%
        );
        pointer-events: none;
      }

      .mechanism-card-head {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
      }

      .mechanism-input-index {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-width: 38px;
        color: var(--accent-support);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.08em;
      }

      .mechanism-center-stage {
        display: flex;
      }

      .mechanism-core-shell {
        position: relative;
        flex: 1;
        min-height: 100%;
        border-radius: 28px;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.92),
            rgba(14, 18, 24, 0.94)
          );
      }

      .mechanism-core-shell::after {
        content: '';
        position: absolute;
        inset: 0;
        background:
          linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.06),
            transparent
          );
        transform: translateX(-18%);
        animation: surfaceSweep 8s ease-in-out infinite;
        pointer-events: none;
      }

      .mechanism-core-grid {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
        background-size: 40px 40px;
        opacity: 0.2;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 90%);
      }

      .mechanism-core {
        position: relative;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 20px;
        background:
          radial-gradient(circle at 50% 18%, rgba(61, 214, 198, 0.12), transparent 24%),
          radial-gradient(circle at 84% 64%, rgba(124, 255, 107, 0.1), transparent 18%),
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.82),
            rgba(14, 18, 24, 0.72)
          );
      }

      .mechanism-core p span {
        color: var(--accent);
        font-weight: 700;
      }

      .mechanism-convergence {
        padding: 18px;
        border-radius: 22px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.82),
            rgba(19, 26, 35, 0.72)
          );
      }

      .mechanism-convergence-head p {
        margin: 14px 0 0;
        color: var(--text-primary);
        line-height: 1.6;
      }

      .mechanism-convergence-stage {
        position: relative;
        margin-top: 18px;
        padding-top: 10px;
        min-height: 220px;
      }

      .mechanism-convergence-stage::before,
      .mechanism-convergence-stage::after {
        content: '';
        position: absolute;
        left: 50%;
        border-radius: 999px;
        transform: translateX(-50%);
        pointer-events: none;
      }

      .mechanism-convergence-stage::before {
        top: 62px;
        width: 2px;
        height: 88px;
        background: linear-gradient(
          180deg,
          rgba(61, 214, 198, 0.24),
          rgba(124, 255, 107, 0.58),
          transparent
        );
      }

      .mechanism-convergence-stage::after {
        top: 44px;
        width: 64%;
        height: 2px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(61, 214, 198, 0.3),
          rgba(124, 255, 107, 0.22),
          transparent
        );
      }

      .mechanism-convergence-node,
      .mechanism-convergence-hub,
      .mechanism-convergence-output {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.9),
            rgba(19, 26, 35, 0.84)
          );
        box-shadow: 0 18px 34px rgba(0, 0, 0, 0.22);
      }

      .mechanism-convergence-node {
        top: 0;
        min-width: 110px;
        min-height: 46px;
        padding: 0 16px;
        border-radius: 999px;
        color: var(--text-secondary);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      .mechanism-convergence-node-1 {
        left: 0;
      }

      .mechanism-convergence-node-2 {
        left: 50%;
        transform: translateX(-50%);
      }

      .mechanism-convergence-node-3 {
        right: 0;
      }

      .mechanism-convergence-hub {
        top: 88px;
        left: 50%;
        width: min(68%, 240px);
        min-height: 88px;
        padding: 18px;
        border-radius: 22px;
        transform: translateX(-50%);
      }

      .mechanism-convergence-hub span,
      .mechanism-convergence-output span {
        display: inline-flex;
        color: var(--accent-support);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .mechanism-convergence-hub strong,
      .mechanism-convergence-output strong {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      .mechanism-convergence-output {
        bottom: 0;
        left: 50%;
        width: min(72%, 256px);
        min-height: 72px;
        padding: 16px;
        border-radius: 20px;
        transform: translateX(-50%);
      }

      .mechanism-convergence-text {
        margin-top: 16px;
        color: var(--text-secondary);
        line-height: 1.68;
      }

      .mechanism-core-flow {
        display: grid;
        gap: 12px;
      }

      .mechanism-flow-step {
        position: relative;
        padding: 16px 18px;
        border-radius: 18px;
        border: 1px solid rgba(255, 255, 255, 0.07);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.82),
            rgba(19, 26, 35, 0.74)
          );
      }

      .mechanism-flow-step strong {
        display: block;
        margin-top: 10px;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      .mechanism-flow-step p {
        margin: 10px 0 0;
        color: var(--text-secondary);
        line-height: 1.7;
      }

      .mechanism-column-outputs {
        align-content: start;
      }

      .mechanism-output {
        display: flex;
        align-items: flex-start;
        gap: 14px;
        border-radius: 18px;
        padding: 18px;
        line-height: 1.6;
        border: 1px solid rgba(255, 255, 255, 0.08);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.84),
            rgba(19, 26, 35, 0.78)
          );
        transition:
          transform 0.2s ease,
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .mechanism-output:hover,
      .mechanism-flow-step:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.12);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.92),
            rgba(19, 26, 35, 0.86)
          );
      }

      .mechanism-output-copy strong {
        display: block;
        font-size: 18px;
        line-height: 1.2;
        letter-spacing: -0.03em;
      }

      .mechanism-output-label {
        display: inline-flex;
        color: var(--accent-support);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        margin-bottom: 8px;
      }

      .mechanism-output-copy p {
        margin: 8px 0 0;
        color: var(--text-secondary);
        line-height: 1.68;
      }

      .section-benefits {
        padding-top: 20px;
      }

      .benefit-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 28px;
      }

      .feature-card {
        border-radius: 22px;
        padding: 22px;
        transition:
          transform 0.2s ease,
          border-color 0.2s ease,
          background 0.2s ease;
      }

      .feature-card:hover,
      .deliverable-item:hover,
      .audience-card:hover,
      .faq-item:hover {
        transform: translateY(-2px);
        border-color: rgba(255, 255, 255, 0.12);
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.94),
            rgba(19, 26, 35, 0.9)
          );
      }

      .feature-icon {
        width: 12px;
        height: 12px;
        border-radius: 999px;
        margin-bottom: 16px;
        background: linear-gradient(180deg, var(--accent), var(--accent-support));
        box-shadow: 0 0 20px rgba(61, 214, 198, 0.28);
      }

      .feature-card h3 {
        margin: 0 0 10px;
        font-size: 22px;
        line-height: 1.2;
        letter-spacing: -0.02em;
      }

      .feature-card p {
        margin: 0;
        color: var(--text-secondary);
        line-height: 1.75;
      }

      .section-transformation {
        padding-top: 18px;
      }

      .transformation-shell {
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;
        gap: 26px;
        align-items: center;
        border-radius: 34px;
        padding: 28px;
        border: 1px solid var(--line);
        background:
          linear-gradient(
            180deg,
            rgba(14, 18, 24, 0.96),
            rgba(19, 26, 35, 0.82)
          );
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
      }

      .transformation-points {
        display: grid;
        gap: 12px;
        margin-top: 22px;
      }

      .transformation-point {
        display: flex;
        align-items: center;
        gap: 12px;
        color: var(--text-primary);
        line-height: 1.6;
      }

      .point-dot,
      .check-dot {
        width: 11px;
        height: 11px;
        flex: 0 0 11px;
        border-radius: 999px;
        background: var(--accent-support);
        box-shadow: 0 0 18px rgba(61, 214, 198, 0.3);
      }

      .transformation-visual {
        position: relative;
        min-height: 520px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .body-frame {
        position: relative;
        width: min(100%, 520px);
        min-height: 500px;
        border-radius: 28px;
        background:
          radial-gradient(circle at 50% 32%, rgba(61, 214, 198, 0.1), transparent 20%),
          linear-gradient(180deg, rgba(24, 33, 45, 0.42), rgba(7, 9, 13, 0.12));
        border: 1px solid rgba(255, 255, 255, 0.06);
        overflow: hidden;
      }

      .transform-image {
        position: absolute;
        inset: 0;
        background:
          linear-gradient(180deg, rgba(7, 9, 13, 0.14), rgba(7, 9, 13, 0.64)),
          url('/transformacao.jpg');
        background-size: cover;
        background-position: center top;
        filter: saturate(0.94) contrast(1.02);
      }

      .body-card {
        position: absolute;
        min-width: 150px;
        padding: 14px 16px;
        border-radius: 18px;
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.88),
            rgba(19, 26, 35, 0.84)
          );
        border: 1px solid rgba(255, 255, 255, 0.08);
        backdrop-filter: blur(10px);
        box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
        z-index: 2;
      }

      .body-card strong {
        display: block;
        line-height: 1.35;
      }

      .body-card-top {
        top: 40px;
        left: 24px;
      }

      .body-card-middle {
        top: 180px;
        right: 18px;
      }

      .body-card-bottom {
        bottom: 28px;
        left: 34px;
      }

      .section-before-after {
        padding-top: 12px;
      }

      .before-after-shell {
        margin-top: 28px;
        display: grid;
        grid-template-columns: 1fr 40px 1fr;
        gap: 16px;
        align-items: stretch;
      }

      .before-panel,
      .after-panel {
        border-radius: 26px;
        padding: 22px;
      }

      .before-panel {
        background:
          linear-gradient(
            180deg,
            rgba(19, 26, 35, 0.88),
            rgba(14, 18, 24, 0.9)
          );
      }

      .after-panel {
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.92),
            rgba(14, 18, 24, 0.9)
          );
      }

      .panel-label-green {
        color: var(--accent);
      }

      .state-figure {
        position: relative;
        width: 100%;
        height: 260px;
        border-radius: 22px;
        margin: 18px 0;
        overflow: hidden;
      }

      .state-figure-before {
        background: linear-gradient(180deg, rgba(24, 33, 45, 0.18), rgba(7, 9, 13, 0.34));
      }

      .state-figure-after {
        background: linear-gradient(180deg, rgba(24, 33, 45, 0.16), rgba(7, 9, 13, 0.24));
      }

      .state-image {
        position: absolute;
        inset: 0;
        background-size: cover;
        background-position: center;
        filter: saturate(0.92) contrast(1.02);
      }

      .state-image-before {
        background:
          linear-gradient(180deg, rgba(7, 9, 13, 0.1), rgba(7, 9, 13, 0.52)),
          url('/antes.png');
        background-size: cover;
        background-position: center;
      }

      .state-image-after {
        background:
          linear-gradient(180deg, rgba(7, 9, 13, 0.08), rgba(7, 9, 13, 0.4)),
          url('/depois.png');
        background-size: cover;
        background-position: center;
      }

      .center-divider {
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .center-divider span {
        width: 2px;
        height: 80%;
        border-radius: 999px;
        background: linear-gradient(
          180deg,
          transparent,
          rgba(61, 214, 198, 0.48),
          transparent
        );
      }

      .before-panel p,
      .after-panel p {
        margin: 0;
        color: var(--text-secondary);
        line-height: 1.8;
      }

      .split {
        display: grid;
        grid-template-columns: 0.95fr 1.05fr;
        gap: 24px;
        align-items: start;
      }

      .deliverables {
        display: grid;
        gap: 12px;
      }

      .deliverable-item {
        display: flex;
        align-items: center;
        gap: 14px;
        border-radius: 18px;
        padding: 18px;
        line-height: 1.6;
        transition:
          transform 0.2s ease,
          border-color 0.2s ease;
      }

      .highlight-band {
        border-radius: 28px;
        padding: 26px;
      }

      .audience-list {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 14px;
        margin-top: 24px;
      }

      .audience-card {
        border-radius: 18px;
        padding: 18px;
        line-height: 1.7;
      }

      .guarantee-box {
        display: grid;
        grid-template-columns: 160px 1fr;
        gap: 24px;
        align-items: center;
        border-radius: 28px;
        padding: 26px;
        background:
          linear-gradient(
            180deg,
            rgba(24, 33, 45, 0.92),
            rgba(14, 18, 24, 0.82)
          );
      }

      .guarantee-mark {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 132px;
        height: 132px;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 52px;
        font-weight: 800;
        color: var(--accent);
        letter-spacing: -0.04em;
      }

      .faq-list {
        display: grid;
        gap: 14px;
        margin-top: 26px;
      }

      .faq-item {
        border-radius: 18px;
        padding: 18px 20px;
      }

      .faq-item summary {
        cursor: pointer;
        list-style: none;
        font-weight: 700;
        line-height: 1.5;
      }

      .faq-item summary::-webkit-details-marker {
        display: none;
      }

      .faq-item p {
        margin: 12px 0 0;
        color: var(--text-secondary);
        line-height: 1.8;
      }

      .section-final-cta {
        padding-bottom: 56px;
      }

      .final-cta-box {
        border-radius: 28px;
        padding: 28px;
        background:
          linear-gradient(
            180deg,
            rgba(14, 18, 24, 0.96),
            rgba(19, 26, 35, 0.92)
          );
      }

      .cta-note {
        color: var(--text-secondary);
        font-size: 14px;
      }

      .section-crossroads {
        padding-bottom: 64px;
      }

      .crossroads-box {
        border-radius: 32px;
        padding: 32px;
        border: 1px solid rgba(124, 255, 107, 0.12);
        background:
          radial-gradient(
            circle at 60% 0%,
            rgba(124, 255, 107, 0.06),
            transparent 38%
          ),
          linear-gradient(
            180deg,
            rgba(17, 23, 31, 0.98),
            rgba(10, 13, 18, 0.96)
          );
        box-shadow:
          inset 0 1px 0 rgba(124, 255, 107, 0.06),
          0 32px 72px rgba(0, 0, 0, 0.28);
      }

      .crossroads-header {
        max-width: 680px;
      }

      .crossroads-header h2 {
        margin: 14px 0 0;
        font-family:
          'Segoe UI Variable Display',
          'Segoe UI',
          'Helvetica Neue',
          sans-serif;
        font-size: clamp(28px, 3.6vw, 44px);
        font-weight: 760;
        line-height: 1.06;
        letter-spacing: -0.046em;
        text-wrap: balance;
      }

      .crossroads-header p {
        margin: 14px 0 0;
        color: var(--text-secondary);
        font-size: 17px;
        line-height: 1.76;
      }

      .crossroads-paths {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 16px;
        margin-top: 28px;
      }

      .crossroads-path {
        border-radius: 26px;
        padding: 24px;
        border: 1px solid var(--line);
        background:
          linear-gradient(
            180deg,
            rgba(19, 26, 35, 0.86),
            rgba(14, 18, 24, 0.84)
          );
      }

      .crossroads-path-a {
        opacity: 0.72;
      }

      .crossroads-path-b {
        border-color: rgba(124, 255, 107, 0.18);
        background:
          linear-gradient(
            180deg,
            rgba(22, 34, 28, 0.92),
            rgba(15, 22, 20, 0.88)
          );
        box-shadow:
          inset 0 1px 0 rgba(124, 255, 107, 0.06),
          0 18px 42px rgba(0, 0, 0, 0.22);
      }

      .crossroads-path-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: 20px;
      }

      .crossroads-path-label {
        display: inline-flex;
        align-items: center;
        min-height: 28px;
        padding: 0 12px;
        border-radius: 999px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }

      .crossroads-label-muted {
        background: rgba(255, 255, 255, 0.04);
        border: 1px solid rgba(255, 255, 255, 0.08);
        color: var(--text-secondary);
      }

      .crossroads-label-accent {
        background: rgba(124, 255, 107, 0.1);
        border: 1px solid rgba(124, 255, 107, 0.22);
        color: var(--accent);
      }

      .crossroads-path-state {
        color: var(--text-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
      }

      .crossroads-path-list {
        list-style: none;
        margin: 0;
        padding: 0;
        display: grid;
        gap: 14px;
      }

      .crossroads-path-list li {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        color: var(--text-secondary);
        line-height: 1.65;
        font-size: 15px;
      }

      .crossroads-path-list li::before {
        content: '';
        width: 7px;
        height: 7px;
        flex: 0 0 7px;
        border-radius: 999px;
        margin-top: 7px;
      }

      .crossroads-path-a .crossroads-path-list li::before {
        background: rgba(249, 115, 22, 0.5);
      }

      .crossroads-path-b .crossroads-path-list li {
        color: var(--text-primary);
      }

      .crossroads-path-b .crossroads-path-list li::before {
        background: var(--accent);
        box-shadow: 0 0 8px rgba(124, 255, 107, 0.44);
      }

      .crossroads-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;
        margin-top: 32px;
        text-align: center;
      }

      .crossroads-cta {
        min-height: 60px;
        padding: 0 32px;
        font-size: 17px;
      }

      @media (prefers-reduced-motion: reduce) {
        .hero-atmosphere,
        .narrative-shell::before,
        .mechanism-shell-premium::before,
        .mechanism-core-shell::after {
          animation: none;
        }
      }

      @media (max-width: 980px) {
        .hero-grid-premium,
        .benefit-grid,
        .split,
        .guarantee-box,
        .audience-list,
        .transformation-shell,
        .before-after-shell,
        .crossroads-paths {
          grid-template-columns: 1fr;
        }

        .crossroads-path-a {
          opacity: 1;
        }

        .narrative-phase-map,
        .narrative-grid,
        .mechanism-layout,
        .mechanism-rail {
          grid-template-columns: 1fr;
        }

        .narrative-command {
          grid-template-columns: 1fr;
        }

        .mechanism-command {
          align-items: flex-start;
        }

        .mechanism-command-status {
          max-width: none;
        }

        .center-divider {
          display: none;
        }

        .hero-visual {
          min-height: 580px;
          margin-top: 20px;
        }

        .hero.hero-premium-immersive .container {
          gap: 26px;
        }

        .hero.hero-premium-immersive .hero-proposition-shell::before {
          inset: -18px -18px -18px;
        }

        .hero.hero-premium-immersive .hero-support-grid {
          gap: 18px;
        }

        .hero.hero-premium-immersive .hero-visual-stage-support {
          min-height: 420px;
        }

        .axis-scene {
          min-height: 560px;
        }

        .axis-node {
          width: min(44%, 230px);
        }

        .narrative-grid::before {
          left: 24px;
          right: 24px;
        }

        .narrative-highlight-premium {
          grid-template-columns: 1fr;
        }

        .narrative-highlight-meta {
          padding-left: 0;
          border-left: 0;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          padding-top: 16px;
        }

        .mechanism-convergence-stage::after {
          width: 74%;
        }

        .transformation-visual {
          min-height: 460px;
        }

        .guarantee-mark {
          width: 112px;
          height: 112px;
          font-size: 42px;
        }
      }

      @media (max-width: 640px) {
        .container {
          width: min(1200px, calc(100% - 24px));
        }

        .hero {
          padding-top: 30px;
        }

        .hero.hero-premium-immersive {
          padding-top: 24px;
        }

        .hero.hero-premium-immersive .container {
          gap: 22px;
        }

        .hero.hero-premium-immersive .hero-proposition-shell::before {
          inset: -14px -14px -16px;
          border-radius: 26px;
        }

        .hero.hero-premium-immersive .hero-proposition-copy h1 {
          max-width: none;
          font-size: clamp(36px, 10.5vw, 52px);
        }

        .hero.hero-premium-immersive .hero-subtitle,
        .hero.hero-premium-immersive .hero-cta-note {
          margin-inline: 0;
        }

        .hero.hero-premium-immersive .hero-mechanism {
          padding: 18px;
        }

        .hero.hero-premium-immersive .hero-visual-stage-support {
          min-height: auto;
          padding: 18px 14px;
        }

        .hero.hero-premium-immersive .hero-visual-support .axis-scene {
          width: 100%;
          min-height: auto;
        }

        .hero-copy h1 {
          max-width: none;
        }

        .hero-subtitle,
        .hero-context-card p,
        .hero-mechanism p,
        .axis-center p,
        .axis-node p,
        .section-head p,
        .section-text,
        .guarantee-copy p,
        .final-cta-box p,
        .transformation-copy p,
        .narrative-card p,
        .narrative-highlight p,
        .mechanism-card p,
        .mechanism-core p,
        .crossroads-header p,
        .crossroads-path-list li {
          font-size: 16px;
        }

        .hero-cta-note,
        .cta-note {
          font-size: 14px;
        }

        .btn-primary,
        .btn-secondary {
          width: 100%;
        }

        .hero-actions,
        .final-cta-actions {
          flex-direction: column;
          align-items: stretch;
        }

        .crossroads-footer {
          align-items: stretch;
          text-align: left;
        }

        .crossroads-cta {
          width: 100%;
        }

        .hero-visual {
          min-height: auto;
        }

        .axis-scene {
          min-height: auto;
          display: grid;
          gap: 12px;
          padding: 16px;
        }

        .axis-grid {
          inset: 0;
        }

        .axis-center,
        .axis-node,
        .axis-result {
          position: static;
          width: auto;
          transform: none;
        }

        .axis-center,
        .axis-result {
          text-align: left;
        }

        .narrative-shell,
        .mechanism-shell-premium {
          padding: 18px;
        }

        .section {
          padding: 42px 0;
        }

        .narrative-command-copy strong,
        .mechanism-command-copy strong {
          font-size: 24px;
        }

        .narrative-grid::before {
          display: none;
        }

        .mechanism-convergence-stage {
          min-height: auto;
          display: grid;
          gap: 12px;
          padding-top: 0;
        }

        .mechanism-convergence-stage::before,
        .mechanism-convergence-stage::after {
          display: none;
        }

        .mechanism-convergence-node,
        .mechanism-convergence-hub,
        .mechanism-convergence-output {
          position: static;
          width: auto;
          transform: none;
          min-height: auto;
        }

        .feature-card,
        .narrative-card,
        .mechanism-card,
        .mechanism-core,
        .mechanism-output,
        .deliverable-item,
        .audience-card,
        .faq-item,
        .highlight-band,
        .guarantee-box,
        .final-cta-box,
        .transformation-shell,
        .before-panel,
        .after-panel,
        .axis-scene,
        .hero-context-card,
        .hero-mechanism,
        .narrative-highlight,
        .body-frame,
        .narrative-shell,
        .mechanism-shell-premium,
        .crossroads-box,
        .crossroads-path {
          border-radius: 22px;
        }

        .body-card {
          min-width: 120px;
          padding: 12px;
        }
      }
    `}</style>
  );
}
