export function OfferPageStyles() {
  return (
    <style jsx global>{`
      @keyframes softPulse {
        0%,
        100% {
          opacity: 1;
          transform: scale(1);
        }

        50% {
          opacity: 0.45;
          transform: scale(0.82);
        }
      }

      @keyframes revealIn {
        from {
          opacity: 0;
          transform: translateY(20px);
        }

        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      .sales-page {
        --bg-primary: #07090d;
        --bg-secondary: #0e1218;
        --surface: #111722;
        --surface-high: #18212d;
        --text-primary: #f3f6f8;
        --text-secondary: #98a6b8;
        --text-muted: #6e7b8c;
        --line: rgba(255, 255, 255, 0.08);
        --line-strong: rgba(255, 255, 255, 0.12);
        --accent: #7cff6b;
        --accent-support: #3dd6c6;
        --accent-cta: #f97316;
        --font-display: var(
          --font-montserrat,
          'Montserrat',
          'Segoe UI',
          sans-serif
        );
        --font-body: var(
          --font-open-sans,
          'Open Sans',
          'Segoe UI',
          sans-serif
        );
        --font-mono: var(
          --font-jetbrains-mono,
          'JetBrains Mono',
          'Cascadia Mono',
          monospace
        );
        min-height: 100vh;
        overflow-x: hidden;
        background:
          linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.014) 1px, transparent 1px),
          linear-gradient(180deg, #080b10 0%, var(--bg-primary) 42%, #05070a 100%);
        background-size: 54px 54px, 54px 54px, auto;
        color: var(--text-primary);
        font-family: var(--font-body);
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
      }

      .sales-page *,
      .sales-page *::before,
      .sales-page *::after {
        box-sizing: border-box;
      }

      .sales-page a {
        color: inherit;
        text-decoration: none;
      }

      .container {
        width: min(100% - 32px, 640px);
        margin: 0 auto;
      }

      .reveal-section {
        max-height: 0;
        overflow: hidden;
        opacity: 0;
        transform: translateY(20px);
        visibility: hidden;
        pointer-events: none;
        transition:
          opacity 0.8s ease,
          transform 0.8s ease,
          max-height 0.8s ease;
      }

      .reveal-section.is-revealed {
        max-height: 6000px;
        opacity: 1;
        transform: translateY(0);
        visibility: visible;
        pointer-events: auto;
        animation: revealIn 0.8s ease both;
      }

      .reveal-section:not(.is-revealed) {
        padding-top: 0;
        padding-bottom: 0;
        border-color: transparent;
      }

      .offer-nav {
        position: sticky;
        top: 0;
        z-index: 70;
        border-bottom: 1px solid var(--line);
        background: rgba(7, 9, 13, 0.85);
        backdrop-filter: blur(18px);
      }

      .offer-nav-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: min(100% - 32px, 960px);
        min-height: 56px;
        margin: 0 auto;
        gap: 16px;
      }

      .offer-logo {
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 800;
        letter-spacing: 0;
      }

      .access-badge {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        min-height: 30px;
        padding: 0 12px;
        border: 1px solid rgba(61, 214, 198, 0.32);
        border-radius: 999px;
        background: rgba(61, 214, 198, 0.07);
        color: var(--accent-support);
        font-family: var(--font-mono);
        font-size: 11px;
        white-space: nowrap;
      }

      .access-badge span {
        font-size: 10px;
      }

      .hero-section {
        padding: 38px 0 42px;
        border-bottom: 1px solid var(--line);
        text-align: center;
      }

      .hero-eyebrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        margin: 0 0 16px;
        color: var(--text-secondary);
        font-family: var(--font-mono);
        font-size: 10.5px;
        line-height: 1.45;
        letter-spacing: 0;
        text-transform: uppercase;
      }

      .hero-eyebrow span {
        width: 28px;
        height: 1px;
        border-radius: 999px;
        background: var(--accent);
      }

      .hero-section h1,
      .hero-headline {
        max-width: 720px;
        margin: 0 auto 14px;
        font-family: var(--font-display);
        font-size: 42px;
        font-weight: 900;
        line-height: 0.98;
        letter-spacing: 0;
      }

      .hero-headline span {
        display: block;
      }

      .hero-headline .headline-gap {
        height: 12px;
      }

      .hero-headline .headline-accent {
        color: var(--accent-cta);
        font-weight: 900;
      }

      .hero-subtitle {
        max-width: 500px;
        margin: 0 auto;
        color: var(--text-secondary);
        font-size: 16px;
        line-height: 1.55;
      }

      .hero-proof-line {
        width: fit-content;
        max-width: min(100%, 520px);
        margin: 18px auto 12px;
        padding: 7px 12px;
        border: 1px solid rgba(124, 255, 107, 0.12);
        border-radius: 999px;
        background: rgba(124, 255, 107, 0.035);
        color: #c6d0dc;
        font-size: 13px;
        font-weight: 700;
        line-height: 1.45;
        text-align: center;
      }

      .vsl-frame {
        width: min(100%, 640px);
        margin: 24px auto 0;
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 16px;
        background: #000;
        box-shadow:
          0 24px 80px rgba(0, 0, 0, 0.4),
          0 0 54px rgba(249, 115, 22, 0.08);
      }

      .vsl-alert {
        padding: 10px;
        border-radius: 12px 12px 0 0;
        background: var(--accent-cta);
        color: #0b0d10;
        font-family: var(--font-display);
        font-size: 13px;
        font-weight: 600;
        line-height: 1.35;
        text-align: center;
      }

      .vsl-video {
        display: block;
        width: 100%;
        aspect-ratio: 16 / 9;
        background: #000;
        object-fit: contain;
      }

      .vsl-custom-controls {
        display: grid;
        grid-template-columns: auto auto 1fr;
        align-items: center;
        gap: 10px;
        padding: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        background:
          linear-gradient(180deg, rgba(19, 26, 35, 0.92), rgba(7, 9, 13, 0.96));
      }

      .vsl-control-button {
        min-height: 38px;
        padding: 0 14px;
        border: 1px solid rgba(249, 115, 22, 0.26);
        border-radius: 999px;
        background: rgba(249, 115, 22, 0.12);
        color: var(--text-primary);
        cursor: pointer;
        font-family: var(--font-display);
        font-size: 12px;
        font-weight: 800;
        line-height: 1;
      }

      .vsl-control-button-secondary {
        border-color: rgba(255, 255, 255, 0.12);
        background: rgba(255, 255, 255, 0.055);
        color: var(--text-secondary);
      }

      .vsl-control-button:focus-visible {
        outline: 2px solid rgba(249, 115, 22, 0.65);
        outline-offset: 2px;
      }

      .vsl-progress-row {
        display: grid;
        grid-template-columns: minmax(88px, 1fr) auto;
        align-items: center;
        gap: 10px;
        min-width: 0;
        user-select: none;
      }

      .vsl-progress-track {
        position: relative;
        height: 8px;
        overflow: hidden;
        border-radius: 999px;
        background: rgba(255, 255, 255, 0.1);
        cursor: default;
        pointer-events: none;
        user-select: none;
      }

      .vsl-progress-fill {
        position: absolute;
        inset: 0 auto 0 0;
        width: 0;
        border-radius: inherit;
        background: linear-gradient(90deg, var(--accent-cta), #fb923c);
        box-shadow: 0 0 18px rgba(249, 115, 22, 0.24);
        pointer-events: none;
        user-select: none;
      }

      .vsl-time {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 10.5px;
        line-height: 1;
        white-space: nowrap;
      }

      .video-watch-note {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        max-width: min(100%, 520px);
        min-height: 34px;
        margin: 12px auto 0;
        padding: 7px 12px;
        border: 1px solid rgba(249, 115, 22, 0.18);
        border-radius: 999px;
        background: rgba(14, 18, 24, 0.74);
        color: var(--text-secondary);
        font-family: var(--font-body);
        font-size: 13px;
        font-weight: 600;
        line-height: 1.5;
        text-align: center;
      }

      .video-watch-note.is-unlocked {
        border-color: rgba(124, 255, 107, 0.22);
        background: rgba(124, 255, 107, 0.045);
        color: var(--text-primary);
      }

      .hero-checkout-reveal.is-revealed {
        padding-top: 22px;
      }

      .cta-button {
        display: inline-flex;
        width: min(100%, 480px);
        min-height: 58px;
        align-items: center;
        justify-content: center;
        padding: 0 24px;
        border: 0;
        border-radius: 16px;
        background: linear-gradient(180deg, #fb923c 0%, var(--accent-cta) 100%);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.26),
          0 18px 42px rgba(249, 115, 22, 0.28);
        color: #1f0a00;
        font-family: var(--font-display);
        font-size: 15px;
        font-weight: 800;
        line-height: 1.2;
        text-align: center;
        transition:
          transform 0.18s ease,
          box-shadow 0.18s ease;
      }

      .cta-button:hover {
        transform: translateY(-2px);
        box-shadow:
          inset 0 1px 0 rgba(255, 255, 255, 0.3),
          0 22px 52px rgba(249, 115, 22, 0.34);
      }

      .cta-large {
        min-height: 70px;
        padding: 0 28px;
        font-size: 16px;
      }

      .microcopy {
        margin: 10px 0 0;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 11px;
        line-height: 1.5;
        text-align: center;
      }

      .authority-section.is-revealed,
      .pain-section.is-revealed,
      .mechanism-section.is-revealed,
      .proof-section.is-revealed,
      .offer-section.is-revealed,
      .final-section.is-revealed {
        padding: 58px 0;
      }

      .authority-section.is-revealed {
        padding: 22px 0;
        border-bottom: 1px solid var(--line);
        background: rgba(14, 18, 24, 0.72);
      }

      .authority-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
      }

      .authority-badge {
        display: inline-flex;
        min-height: 34px;
        align-items: center;
        padding: 0 14px;
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 999px;
        color: var(--text-secondary);
        font-family: var(--font-mono);
        font-size: 11px;
        line-height: 1;
      }

      .pain-section,
      .mechanism-section,
      .proof-section,
      .offer-section,
      .final-section {
        border-bottom: 1px solid var(--line);
      }

      .pain-section h2,
      .mechanism-section h2,
      .proof-section h2,
      .offer-section h2,
      .final-section > .container > h2 {
        max-width: 640px;
        margin: 0 auto 22px;
        font-family: var(--font-display);
        font-size: 30px;
        font-weight: 700;
        line-height: 1.14;
        letter-spacing: 0;
        text-align: center;
      }

      .section-subtitle {
        max-width: 560px;
        margin: -8px auto 28px;
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.7;
        text-align: center;
      }

      .pain-copy {
        display: grid;
        max-width: 500px;
        margin: 0 auto 34px;
        gap: 13px;
      }

      .pain-copy p {
        margin: 0;
        color: #c7d0dc;
        font-size: 18px;
        line-height: 1.9;
        text-align: center;
      }

      .copy-pause {
        height: 20px;
      }

      .pain-copy .pain-voice {
        color: var(--text-primary);
        font-weight: 600;
      }

      .pain-copy .pain-question {
        color: var(--text-primary);
        font-family: var(--font-display);
        font-size: 24px;
        font-weight: 600;
        line-height: 1.35;
      }

      .pain-copy .pain-close {
        color: var(--accent-cta);
        font-weight: 600;
      }

      .pain-section .cta-button,
      .mechanism-section .cta-button,
      .proof-section .cta-button {
        display: flex;
        margin: 0 auto;
      }

      .section-delayed-cta {
        margin-top: 26px;
      }

      .mechanism-section {
        background:
          linear-gradient(180deg, transparent 0%, rgba(61, 214, 198, 0.025) 100%),
          var(--bg-primary);
      }

      .ecr-stack {
        display: grid;
        gap: 14px;
        margin: 0 0 24px;
      }

      .ecr-card {
        min-height: 176px;
        padding: 22px;
        border: 1px solid var(--line);
        border-left-width: 3px;
        border-radius: 16px;
        background: var(--surface);
      }

      .ecr-card-e {
        border-left-color: var(--accent-cta);
      }

      .ecr-card-c {
        border-left-color: var(--accent-support);
      }

      .ecr-card-r {
        border-left-color: var(--accent);
      }

      .ecr-letter {
        display: block;
        margin-bottom: 10px;
        font-family: var(--font-display);
        font-size: 48px;
        font-weight: 800;
        line-height: 1;
      }

      .ecr-card-e .ecr-letter {
        color: var(--accent-cta);
      }

      .ecr-card-c .ecr-letter {
        color: var(--accent-support);
      }

      .ecr-card-r .ecr-letter {
        color: var(--accent);
      }

      .ecr-card h3 {
        margin: 0 0 8px;
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 700;
        line-height: 1.2;
      }

      .ecr-card p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.65;
      }

      .mechanism-highlight {
        max-width: 560px;
        margin: 0 auto 26px;
        padding: 24px;
        border: 1px solid rgba(124, 255, 107, 0.12);
        border-radius: 14px;
        background: rgba(124, 255, 107, 0.04);
        color: var(--text-primary);
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 600;
        line-height: 1.45;
        text-align: center;
      }

      .transformation-card,
      .offer-card,
      .guarantee-box,
      .faq-item,
      .testimonial-card {
        border: 1px solid var(--line);
        background: var(--surface);
      }

      .transformation-card {
        padding: 20px;
        border-radius: 18px;
      }

      .person-bar {
        display: flex;
        align-items: center;
        gap: 12px;
        margin-bottom: 16px;
      }

      .person-bar img,
      .testimonial-card img {
        width: 44px;
        height: 44px;
        flex: 0 0 44px;
        border-radius: 999px;
        object-fit: cover;
      }

      .person-bar div {
        display: grid;
        flex: 1;
        gap: 3px;
      }

      .person-bar strong {
        font-size: 14px;
        line-height: 1.25;
      }

      .person-bar span:not(.week-badge) {
        color: var(--text-muted);
        font-size: 12px;
      }

      .week-badge {
        min-height: 28px;
        padding: 6px 10px;
        border: 1px solid rgba(61, 214, 198, 0.24);
        border-radius: 999px;
        color: var(--accent-support);
        font-family: var(--font-mono);
        font-size: 10px;
        white-space: nowrap;
      }

      .before-after-grid {
        display: grid;
        gap: 12px;
      }

      .before-after-grid figure {
        position: relative;
        min-height: 260px;
        margin: 0;
        overflow: hidden;
        border: 1px solid var(--line);
        border-radius: 14px;
        background: #07090d;
      }

      .before-after-grid img {
        width: 100%;
        height: 100%;
        min-height: 260px;
        object-fit: cover;
        object-position: center top;
        filter: saturate(0.92) contrast(1.03) brightness(0.84);
      }

      .before-after-grid figcaption {
        position: absolute;
        right: 14px;
        bottom: 14px;
        left: 14px;
        display: grid;
        gap: 6px;
        color: var(--text-primary);
        font-size: 13px;
        line-height: 1.4;
        text-shadow: 0 2px 10px rgba(0, 0, 0, 0.74);
      }

      .before-label,
      .after-label {
        width: fit-content;
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 700;
      }

      .before-label {
        color: var(--accent-cta);
      }

      .after-label {
        color: var(--accent);
      }

      .stats-row {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 10px;
        margin-top: 14px;
      }

      .stat-box {
        padding: 14px;
        border: 1px solid var(--line);
        border-radius: 12px;
        background: var(--bg-secondary);
      }

      .stat-box span {
        display: block;
        margin-bottom: 7px;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 10px;
      }

      .stat-box strong {
        color: var(--accent);
        font-family: var(--font-display);
        font-size: 22px;
        font-weight: 800;
      }

      .stat-box small {
        margin: 0 7px;
        color: var(--text-muted);
        font-family: var(--font-body);
        font-size: 14px;
      }

      .disclaimer {
        margin: 14px 0 0;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 10px;
      }

      .testimonial-stack {
        display: grid;
        gap: 10px;
        margin: 22px 0 20px;
      }

      .testimonial-card {
        display: flex;
        gap: 12px;
        padding: 14px;
        border-radius: 14px;
      }

      .testimonial-card header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        margin-bottom: 5px;
      }

      .testimonial-card strong {
        font-size: 13px;
      }

      .testimonial-card header span {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 11px;
      }

      .testimonial-card p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.55;
      }

      .live-counter,
      .scarcity-pill {
        display: flex;
        width: fit-content;
        align-items: center;
        justify-content: center;
        gap: 8px;
        margin: 0 auto 26px;
        padding: 10px 14px;
        border: 1px solid rgba(124, 255, 107, 0.14);
        border-radius: 999px;
        background: rgba(124, 255, 107, 0.045);
        color: var(--text-secondary);
        font-size: 13px;
        line-height: 1.45;
        text-align: center;
      }

      .live-counter span,
      .scarcity-pill span {
        width: 8px;
        height: 8px;
        flex: 0 0 8px;
        border-radius: 999px;
        background: var(--accent);
        box-shadow: 0 0 10px rgba(124, 255, 107, 0.48);
        animation: softPulse 2.4s ease-in-out infinite;
      }

      .offer-section {
        background:
          linear-gradient(180deg, rgba(249, 115, 22, 0.025), transparent 38%),
          var(--bg-primary);
      }

      .offer-card {
        position: relative;
        overflow: hidden;
        padding: 32px 24px;
        border-color: rgba(255, 255, 255, 0.1);
        border-radius: 24px;
        background: linear-gradient(180deg, var(--surface-high), var(--surface));
        box-shadow: 0 34px 86px rgba(0, 0, 0, 0.34);
      }

      .offer-line {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent-cta), transparent);
      }

      .launch-badge {
        display: inline-flex;
        min-height: 28px;
        align-items: center;
        margin-bottom: 20px;
        padding: 0 12px;
        border: 1px solid rgba(249, 115, 22, 0.2);
        border-radius: 999px;
        background: rgba(249, 115, 22, 0.1);
        color: var(--accent-cta);
        font-family: var(--font-mono);
        font-size: 10px;
        font-weight: 700;
      }

      .offer-list {
        display: grid;
        gap: 12px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .offer-list li {
        display: flex;
        align-items: flex-start;
        gap: 10px;
        color: var(--text-primary);
        font-size: 15px;
        line-height: 1.55;
      }

      .offer-list span {
        color: var(--accent);
        font-weight: 800;
      }

      .dashed-divider {
        height: 1px;
        margin: 22px 0;
        background: repeating-linear-gradient(
          90deg,
          transparent,
          transparent 5px,
          rgba(255, 255, 255, 0.14) 5px,
          rgba(255, 255, 255, 0.14) 10px
        );
      }

      .price-block {
        display: grid;
        justify-items: center;
        margin-bottom: 24px;
        text-align: center;
      }

      .old-price {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 14px;
        text-decoration: line-through;
      }

      .price-block strong {
        display: flex;
        align-items: flex-start;
        color: var(--text-primary);
        font-family: var(--font-display);
        font-size: 72px;
        font-weight: 800;
        line-height: 0.96;
      }

      .price-block strong span {
        margin-top: 8px;
        font-size: 28px;
      }

      .price-block small {
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 11px;
      }

      .offer-card .cta-button {
        width: 100%;
        margin-bottom: 14px;
      }

      .secure-row {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 12px 18px;
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 11px;
        line-height: 1.5;
        text-align: center;
      }

      .scarcity-pill {
        margin-top: 16px;
        margin-bottom: 0;
      }

      .scarcity-pill strong {
        color: var(--accent);
      }

      .final-section.is-revealed {
        padding-top: 32px;
      }

      .guarantee-box {
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 52px;
        padding: 24px;
        border-radius: 18px;
      }

      .guarantee-box img {
        width: 120px;
        height: auto;
        flex: 0 0 120px;
      }

      .guarantee-box h3 {
        margin: 0 0 8px;
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 700;
        line-height: 1.25;
      }

      .guarantee-box p {
        margin: 0;
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.65;
      }

      .faq-list {
        display: grid;
        gap: 10px;
      }

      .faq-item {
        border-radius: 14px;
        padding: 18px;
      }

      .faq-item summary {
        display: flex;
        align-items: flex-start;
        gap: 12px;
        cursor: pointer;
        font-family: var(--font-display);
        font-size: 15px;
        font-weight: 600;
        line-height: 1.45;
        list-style: none;
      }

      .faq-item summary::-webkit-details-marker {
        display: none;
      }

      .faq-item summary span {
        color: var(--accent);
        font-family: var(--font-mono);
        font-size: 11px;
        line-height: 1.9;
      }

      .faq-item summary::after {
        content: '+';
        margin-left: auto;
        color: var(--text-muted);
        font-family: var(--font-mono);
      }

      .faq-item[open] summary::after {
        content: '−';
      }

      .faq-item p {
        margin: 12px 0 0;
        padding-left: 28px;
        color: var(--text-secondary);
        font-size: 14px;
        line-height: 1.65;
      }

      .final-cta {
        display: grid;
        justify-items: center;
        margin-top: 52px;
        padding: 48px 0 0;
        border-top: 1px solid var(--line);
        text-align: center;
      }

      .final-cta h2 {
        margin: 0 0 22px;
        font-family: var(--font-display);
        font-size: 32px;
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: 0;
      }

      .final-cta h2 span {
        display: block;
        color: var(--accent);
      }

      .final-counter {
        margin-top: 16px;
        margin-bottom: 0;
      }

      .offer-footer {
        padding: 20px;
        border-top: 1px solid var(--line);
        color: var(--text-muted);
        font-family: var(--font-mono);
        font-size: 11px;
        line-height: 1.5;
        text-align: center;
      }

      @media (min-width: 700px) {
        .container {
          width: min(100% - 48px, 720px);
        }

        .hero-section {
          padding-top: 58px;
        }

        .hero-section h1,
        .hero-headline {
          font-size: 64px;
        }

        .before-after-grid,
        .ecr-stack {
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .before-after-grid {
          grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        .offer-card {
          padding: 36px 32px;
        }
      }

      @media (max-width: 520px) {
        .container,
        .offer-nav-inner {
          width: min(100% - 24px, 640px);
        }

        .offer-nav-inner {
          min-height: 52px;
        }

        .access-badge {
          padding: 0 10px;
          font-size: 10px;
        }

        .hero-section {
          padding: 34px 0 38px;
        }

        .hero-eyebrow {
          align-items: flex-start;
          text-align: left;
        }

        .hero-section h1,
        .hero-headline {
          font-size: 40px;
        }

        .hero-proof-line {
          border-radius: 16px;
          font-size: 12.5px;
        }

        .vsl-custom-controls {
          grid-template-columns: 1fr 1fr;
        }

        .vsl-progress-row {
          grid-column: 1 / -1;
        }

        .authority-section.is-revealed,
        .pain-section.is-revealed,
        .mechanism-section.is-revealed,
        .proof-section.is-revealed,
        .offer-section.is-revealed,
        .final-section.is-revealed {
          padding: 46px 0;
        }

        .authority-section.is-revealed {
          padding: 18px 0;
        }

        .pain-section h2,
        .mechanism-section h2,
        .proof-section h2,
        .offer-section h2,
        .final-section > .container > h2 {
          font-size: 28px;
        }

        .pain-copy {
          max-width: 100%;
          gap: 12px;
        }

        .pain-copy p {
          font-size: 17px;
          line-height: 1.85;
        }

        .pain-copy .pain-question {
          font-size: 22px;
        }

        .stats-row {
          grid-template-columns: 1fr;
        }

        .guarantee-box {
          align-items: flex-start;
          flex-direction: column;
        }

        .guarantee-box img {
          width: 104px;
          flex-basis: auto;
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .reveal-section,
        .cta-button,
        .live-counter span,
        .scarcity-pill span {
          transition: none;
          animation: none;
        }
      }
    `}</style>
  );
}
