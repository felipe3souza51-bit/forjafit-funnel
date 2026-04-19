export function OfferPageStyles() {
  return (
    <style jsx global>{`
      /* ═══════════════════════════════════════════
         FORJA FIT — OFFER PAGE STYLES (REBUILD)
         Based on Claude Design prototype
      ═══════════════════════════════════════════ */

      @keyframes pulse {
        0%, 100% { opacity: 1; transform: scale(1); }
        50% { opacity: 0.35; transform: scale(0.8); }
      }

      @keyframes tickerScroll {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }

      @keyframes axisDraw {
        to { stroke-dashoffset: 0; }
      }

      .sales-page {
        --bg-primary: #07090D;
        --bg-secondary: #0E1218;
        --bg-tertiary: #111722;
        --bg-elevated: #18212D;
        --surface-1: rgba(19,26,35,0.82);
        --surface-2: rgba(24,33,45,0.92);
        --surface-3: rgba(12,17,24,0.92);
        --text-primary: #F3F6F8;
        --text-secondary: #98A6B8;
        --text-muted: #6E7B8C;
        --accent: #7CFF6B;
        --accent-soft: #C9F7D0;
        --accent-glow: rgba(124,255,107,0.18);
        --accent-cyan: #3DD6C6;
        --accent-cta: #F97316;
        --accent-warning: #FFB86A;
        --border-soft: rgba(255,255,255,0.08);
        --border-medium: rgba(255,255,255,0.12);
        --shadow-soft: 0 10px 30px rgba(0,0,0,0.22);
        --shadow-deep: 0 24px 80px rgba(0,0,0,0.34);
        --r-sm: 14px;
        --r-md: 20px;
        --r-lg: 28px;
        --font-display: var(--font-syne, 'Syne', 'Inter', sans-serif);
        --font-body: var(--font-dm, 'DM Sans', sans-serif);
        --font-mono: ui-monospace, 'SF Mono', 'Cascadia Mono', monospace;

        position: relative;
        min-height: 100vh;
        overflow-x: hidden;
        background: var(--bg-primary);
        color: var(--text-primary);
        font-family: var(--font-body);
        -webkit-font-smoothing: antialiased;
      }

      .sales-page a { color: inherit; text-decoration: none; }

      .container {
        width: 100%;
        max-width: 520px;
        margin: 0 auto;
        padding: 0 22px;
      }

      .hl-green { color: var(--accent); }
      .hl-cyan { color: var(--accent-cyan); }
      .muted { color: var(--text-muted); }

      /* ─────────── Ticker ─────────── */
      .ticker {
        overflow: hidden;
        border-bottom: 1px solid var(--border-soft);
        background: linear-gradient(90deg, rgba(249,115,22,0.1), rgba(124,255,107,0.06));
        background-color: rgba(7,9,13,0.88);
        backdrop-filter: blur(12px);
        -webkit-backdrop-filter: blur(12px);
      }

      .ticker-track {
        display: flex;
        gap: 48px;
        white-space: nowrap;
        padding: 9px 0;
        animation: tickerScroll 34s linear infinite;
        font-family: var(--font-mono);
        font-size: 11px;
        letter-spacing: 0.02em;
        color: var(--text-secondary);
        width: max-content;
      }

      .ticker-item { display: inline-flex; align-items: center; gap: 8px; }
      .ticker-item b { color: var(--text-primary); font-weight: 600; }
      .ticker-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent-glow); flex-shrink: 0; }
      .ticker-dot--orange { background: var(--accent-cta); box-shadow: 0 0 8px rgba(249,115,22,0.4); }

      /* ─────────── Nav ─────────── */
      .offer-navbar {
        position: sticky;
        top: 0;
        z-index: 50;
        border-bottom: 1px solid var(--border-soft);
        background: rgba(7,9,13,0.85);
        backdrop-filter: blur(16px);
        -webkit-backdrop-filter: blur(16px);
      }

      .offer-navbar-inner {
        position: relative;
        z-index: 1;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 520px;
        margin: 0 auto;
        height: 56px;
        padding: 0 22px;
      }

      .offer-navbar-logo {
        font-family: var(--font-display);
        font-size: 18px;
        font-weight: 800;
        letter-spacing: -0.03em;
      }

      .offer-logo-accent { color: var(--accent); opacity: 0.55; }

      .offer-navbar-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 0 12px;
        height: 30px;
        border-radius: 999px;
        border: 1px solid rgba(61,214,198,0.2);
        background: rgba(61,214,198,0.08);
        color: var(--accent-cyan);
        font-size: 11px;
        font-weight: 600;
        letter-spacing: 0.04em;
      }

      .navbar-pulse-dot {
        display: block;
        width: 7px;
        height: 7px;
        border-radius: 999px;
        background: var(--accent-cyan);
        flex-shrink: 0;
      }

      /* ─────────── Eyebrow ─────────── */
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 10px;
        font-family: var(--font-mono);
        font-size: 10.5px;
        color: var(--text-secondary);
        letter-spacing: 0.12em;
        text-transform: uppercase;
        margin-bottom: 20px;
      }

      .eyebrow-dot {
        width: 8px; height: 8px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 10px var(--accent-glow);
        animation: pulse 2.4s ease-in-out infinite;
      }

      .eyebrow-line {
        width: 24px; height: 1px;
        background: var(--accent); opacity: 0.6;
      }

      /* ─────────── Hero ─────────── */
      .hero {
        position: relative;
        padding: 44px 0 60px;
        overflow: hidden;
        border-bottom: 1px solid var(--border-soft);
        text-align: center;
      }

      .hero-glow {
        position: absolute; top: -100px; left: 50%;
        transform: translateX(-50%);
        width: 460px; height: 460px; border-radius: 50%;
        pointer-events: none;
        background: radial-gradient(circle, var(--accent-glow) 0%, transparent 60%);
        filter: blur(40px);
      }

      .hero-h1 {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 42px;
        line-height: 1.02;
        letter-spacing: -0.025em;
        margin: 0 0 20px;
        text-wrap: balance;
      }

      .hero-sub {
        font-size: 16px;
        line-height: 1.5;
        color: var(--text-secondary);
        max-width: 34ch;
        margin: 0 auto 28px;
      }

      .hero-img-wrap {
        position: relative;
        margin: 28px auto 32px;
        max-width: 520px;
        border-radius: var(--r-lg);
        overflow: hidden;
        border: 1px solid var(--border-medium);
        box-shadow: var(--shadow-deep), 0 0 60px -20px var(--accent-glow);
        aspect-ratio: 16 / 11;
        background: var(--bg-secondary);
      }

      .hero-img {
        width: 100%; height: 100%; object-fit: cover; display: block;
        filter: contrast(1.08) brightness(0.85);
      }

      .hero-img-gradient {
        position: absolute; inset: 0; pointer-events: none;
        background:
          linear-gradient(180deg, rgba(7,9,13,0.15) 0%, rgba(7,9,13,0.05) 40%, rgba(7,9,13,0.85) 100%),
          linear-gradient(90deg, rgba(7,9,13,0.3) 0%, transparent 50%);
      }

      .hero-img-badge {
        position: absolute; bottom: 14px; left: 14px;
        display: inline-flex; align-items: center; gap: 7px;
        padding: 7px 11px;
        background: rgba(7,9,13,0.72);
        backdrop-filter: blur(10px);
        border: 1px solid var(--border-medium);
        border-radius: 999px;
        font-family: var(--font-mono);
        font-size: 10.5px;
        color: var(--text-secondary);
        letter-spacing: 0.04em;
      }

      .hero-img-badge-dot {
        width: 6px; height: 6px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 8px var(--accent);
        animation: pulse 2s infinite;
      }

      .hero-pills {
        display: flex; flex-wrap: wrap; gap: 8px;
        margin-top: 20px;
        justify-content: center;
      }

      .hero-pill {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 7px 11px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: 999px;
        font-size: 11px;
        color: var(--text-secondary);
      }

      .hero-pill svg { color: var(--accent); }

      .hero-microcopy {
        font-family: var(--font-mono);
        font-size: 11px;
        color: var(--text-muted);
        margin: 14px 0 0;
        text-align: center;
        letter-spacing: 0.02em;
      }

      /* ─────────── Buttons ─────────── */
      .btn-primary {
        display: inline-flex; align-items: center; justify-content: center; gap: 10px;
        padding: 18px 26px;
        background: var(--accent-cta);
        color: #0B0D10;
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 0.04em;
        border-radius: var(--r-md);
        border: none;
        cursor: pointer;
        width: 100%;
        box-shadow: 0 10px 30px rgba(249,115,22,0.25), inset 0 1px 0 rgba(255,255,255,0.25);
        transition: transform 0.18s ease, box-shadow 0.18s ease;
        text-transform: uppercase;
        text-decoration: none;
      }

      .btn-primary:hover {
        transform: translateY(-1px);
        box-shadow: 0 14px 38px rgba(249,115,22,0.35), inset 0 1px 0 rgba(255,255,255,0.3);
      }

      .btn-primary--xl { padding: 22px 26px; font-size: 15px; }

      .hero .btn-primary {
        width: 100%;
        max-width: 420px;
        margin-left: auto;
        margin-right: auto;
      }

      /* ─────────── Section headers ─────────── */
      .section-h {
        font-family: var(--font-display);
        font-weight: 700;
        font-size: 30px;
        line-height: 1.1;
        letter-spacing: -0.02em;
        margin: 0 0 28px;
        text-wrap: balance;
      }

      .section-h-sm {
        font-family: var(--font-display);
        font-weight: 600;
        font-size: 22px;
        line-height: 1.2;
        letter-spacing: -0.015em;
        margin: 0 0 24px;
        text-wrap: balance;
      }

      .section-sub {
        color: var(--text-secondary);
        font-size: 15px;
        line-height: 1.55;
        margin: -8px 0 28px;
      }

      /* ─────────── Social Proof ─────────── */
      .proof {
        padding: 44px 0 52px;
        border-bottom: 1px solid var(--border-soft);
        background: var(--bg-secondary);
      }

      .proof-counter {
        display: flex; align-items: center; gap: 10px;
        padding: 14px 16px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
        margin-bottom: 20px;
      }

      .proof-counter p { margin: 0; font-size: 13.5px; line-height: 1.4; color: var(--text-secondary); }
      .proof-counter b { color: var(--text-primary); font-family: var(--font-display); font-weight: 700; font-size: 18px; }

      .proof-pulse {
        width: 10px; height: 10px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 0 4px rgba(124,255,107,0.18), 0 0 16px var(--accent);
        animation: pulse 1.8s infinite;
        flex-shrink: 0;
      }

      .proof-wa-stack { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }

      .proof-wa-card {
        display: flex; gap: 10px;
        padding: 10px 12px;
        background: var(--surface-2);
        border: 1px solid var(--border-soft);
        border-radius: 14px;
      }

      .proof-wa-avatar {
        width: 30px; height: 30px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent));
        color: var(--bg-primary);
        font-family: var(--font-display); font-weight: 700; font-size: 13px;
        flex-shrink: 0;
        object-fit: cover;
      }

      .proof-wa-body { flex: 1; min-width: 0; }
      .proof-wa-meta { display: flex; justify-content: space-between; align-items: baseline; font-size: 11px; margin-bottom: 4px; }
      .proof-wa-meta b { font-family: var(--font-display); font-weight: 600; font-size: 12.5px; }
      .proof-wa-body p { margin: 0; font-size: 13.5px; line-height: 1.4; color: var(--text-primary); }

      .proof-authority { display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; }

      .proof-auth-badge {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 8px 12px;
        border: 1px solid var(--border-soft);
        border-radius: 999px;
        font-family: var(--font-mono);
        font-size: 10.5px;
        color: var(--text-secondary);
        letter-spacing: 0.03em;
      }

      .proof-auth-badge svg { color: var(--accent); }

      /* ─────────── Pain ─────────── */
      .pain { padding: 56px 0; }

      .pain-grid { display: flex; flex-direction: column; gap: 12px; }

      .pain-card {
        position: relative;
        padding: 20px 18px 18px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
        overflow: hidden;
      }

      .pain-card::before {
        content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
        background: linear-gradient(180deg, transparent, var(--accent-cta) 50%, transparent);
        opacity: 0.5;
      }

      .pain-index {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.1em;
        color: var(--text-muted); display: block; margin-bottom: 6px;
      }

      .pain-card h3 {
        font-family: var(--font-display); font-weight: 700; font-size: 18px;
        line-height: 1.2; margin: 0 0 4px; letter-spacing: -0.015em;
      }

      .pain-card p { margin: 0; font-size: 14px; color: var(--text-secondary); line-height: 1.45; }

      /* ─────────── Mechanism ─────────── */
      .mech {
        padding: 56px 0;
        background: var(--bg-secondary);
        position: relative;
        overflow: hidden;
        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
      }

      .mech-bg {
        position: absolute; inset: 0; pointer-events: none;
        background:
          radial-gradient(circle at 20% 30%, var(--accent-glow) 0%, transparent 40%),
          radial-gradient(circle at 80% 70%, rgba(61,214,198,0.12) 0%, transparent 40%);
        filter: blur(20px);
        opacity: 0.6;
      }

      .mech-steps { display: flex; flex-direction: column; gap: 0; position: relative; }

      .mech-step {
        display: flex; gap: 14px; align-items: flex-start;
        padding: 18px 16px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
        position: relative;
        margin-bottom: 12px;
      }

      .mech-step-code {
        flex-shrink: 0;
        width: 40px; height: 40px;
        display: flex; align-items: center; justify-content: center;
        background: var(--bg-primary);
        border: 1px solid var(--accent);
        border-radius: 12px;
        font-family: var(--font-display); font-weight: 800; font-size: 16px;
        color: var(--accent);
        box-shadow: 0 0 16px -4px var(--accent-glow);
      }

      .mech-step h4 { margin: 2px 0 4px; font-family: var(--font-display); font-weight: 700; font-size: 16px; letter-spacing: -0.01em; }
      .mech-step p { margin: 0; font-size: 13.5px; color: var(--text-secondary); line-height: 1.45; }

      .mech-connector {
        position: absolute; left: 36px; bottom: -12px; width: 1px; height: 12px;
        background: linear-gradient(180deg, var(--accent), transparent);
        opacity: 0.5;
      }

      /* ─────────── Before / After ─────────── */
      .ba { padding: 56px 0; }
      .ba-split { display: flex; flex-direction: column; gap: 12px; }

      .ba-panel {
        position: relative;
        padding: 20px 18px 18px;
        border-radius: var(--r-md);
        border: 1px solid var(--border-soft);
        overflow: hidden;
        min-height: 220px;
      }

      .ba-before { background: linear-gradient(160deg, #1a0f12 0%, #0E0B0D 100%); }
      .ba-after { background: linear-gradient(160deg, #0A1612 0%, #07120E 100%); border-color: rgba(124,255,107,0.18); }

      .ba-panel-img { position: absolute; inset: 0; overflow: hidden; pointer-events: none; }
      .ba-panel-img img { width: 100%; height: 100%; object-fit: cover; filter: contrast(1.05) brightness(0.9); }
      .ba-panel-img-tint { position: absolute; inset: 0; }

      .ba-tint--before {
        background:
          linear-gradient(160deg, rgba(26,15,18,0.78) 0%, rgba(14,11,13,0.92) 100%),
          linear-gradient(180deg, transparent 0%, rgba(7,9,13,0.9) 100%);
      }

      .ba-tint--after {
        background:
          linear-gradient(160deg, rgba(10,22,18,0.55) 0%, rgba(7,18,14,0.8) 100%),
          linear-gradient(180deg, transparent 0%, rgba(7,9,13,0.75) 100%);
      }

      .ba-label {
        font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em;
        color: var(--text-muted); position: relative;
      }

      .ba-label--accent { color: var(--accent); }

      .ba-mood {
        font-family: var(--font-display); font-weight: 600; font-size: 20px;
        line-height: 1.2; margin: 10px 0 8px; letter-spacing: -0.015em;
        position: relative; text-wrap: balance;
      }

      .ba-copy { font-size: 13.5px; line-height: 1.45; color: var(--text-secondary); margin: 0 0 14px; position: relative; }

      .ba-divider {
        display: flex; justify-content: center; align-items: center; padding: 2px 0;
      }

      .ba-divider span {
        font-family: var(--font-mono); font-size: 14px; color: var(--accent);
        width: 32px; height: 32px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        border: 1px solid var(--accent);
        background: var(--bg-primary);
        box-shadow: 0 0 16px var(--accent-glow);
      }

      .ba-person {
        display: flex; align-items: center; gap: 12px;
        padding: 12px 14px; margin-bottom: 16px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
      }

      .ba-person-avatar {
        width: 44px; height: 44px; border-radius: 50%;
        display: flex; align-items: center; justify-content: center;
        background: linear-gradient(135deg, var(--accent-cyan), var(--accent));
        color: var(--bg-primary);
        font-family: var(--font-display); font-weight: 700; font-size: 18px;
        flex-shrink: 0;
        object-fit: cover;
      }

      .ba-person-meta { flex: 1; display: flex; flex-direction: column; gap: 2px; }
      .ba-person-meta b { font-family: var(--font-display); font-weight: 700; font-size: 14px; }
      .ba-person-meta span { font-family: var(--font-mono); font-size: 10.5px; color: var(--text-muted); letter-spacing: 0.03em; }

      .ba-person-badge {
        display: inline-flex; align-items: center; gap: 6px;
        padding: 6px 10px;
        background: rgba(124,255,107,0.08);
        border: 1px solid rgba(124,255,107,0.22);
        border-radius: 999px;
        font-family: var(--font-mono); font-size: 10.5px;
        color: var(--accent); letter-spacing: 0.04em;
      }

      .ba-person-badge-dot { width: 5px; height: 5px; border-radius: 50%; background: var(--accent); box-shadow: 0 0 8px var(--accent); }

      .ba-quote {
        position: relative;
        margin-top: 14px;
        padding: 14px 12px;
        background: rgba(0,0,0,0.35);
        border: 1px solid var(--border-soft);
        border-radius: 12px;
      }

      .ba-quote--accent {
        background: rgba(124,255,107,0.06);
        border-color: rgba(124,255,107,0.18);
      }

      .ba-quote p {
        margin: 0 0 6px;
        font-size: 13px; line-height: 1.45;
        color: var(--text-primary);
        font-style: italic;
      }

      .ba-quote-name {
        font-family: var(--font-mono); font-size: 10px;
        color: var(--text-muted); letter-spacing: 0.05em;
      }

      .ba-stats {
        display: grid; grid-template-columns: 1fr 1fr; gap: 10px;
        margin-top: 14px;
      }

      .ba-stat {
        padding: 12px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-sm);
      }

      .ba-stat-label {
        display: block;
        font-family: var(--font-mono); font-size: 9.5px;
        color: var(--text-muted); letter-spacing: 0.08em;
        text-transform: uppercase; margin-bottom: 6px;
      }

      .ba-stat-row {
        display: flex; align-items: baseline; gap: 6px;
        font-family: var(--font-display); font-weight: 700; font-size: 15px;
        letter-spacing: -0.01em;
      }

      .ba-stat-before { color: var(--text-muted); text-decoration: line-through; text-decoration-color: rgba(255,255,255,0.2); }
      .ba-stat-arrow { color: var(--accent); font-size: 12px; }
      .ba-stat-after { color: var(--accent); }

      .ba-disclaimer {
        margin: 14px 0 0;
        font-family: var(--font-mono); font-size: 10px;
        color: var(--text-muted); letter-spacing: 0.03em;
        text-align: center;
      }

      /* ─────────── Audience ─────────── */
      .audience-section {
        padding: 56px 0;
        background: var(--bg-secondary);
        border-top: 1px solid var(--border-soft);
        border-bottom: 1px solid var(--border-soft);
      }

      .audience-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 12px; }

      .audience-list li {
        display: flex; gap: 12px; align-items: flex-start;
        padding: 14px 16px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
        font-size: 14px;
        line-height: 1.45;
      }

      .audience-check {
        width: 24px; height: 24px; border-radius: 7px;
        background: rgba(124,255,107,0.1);
        color: var(--accent);
        display: flex; align-items: center; justify-content: center;
        flex-shrink: 0;
        border: 1px solid rgba(124,255,107,0.2);
      }

      /* ─────────── Offer / Price ─────────── */
      .offer {
        padding: 56px 0;
        position: relative;
        overflow: hidden;
      }

      .offer-bg {
        position: absolute; inset: 0; pointer-events: none;
        background: radial-gradient(ellipse at center top, rgba(249,115,22,0.1) 0%, transparent 50%);
      }

      .offer-card {
        position: relative;
        padding: 28px 22px 24px;
        background: linear-gradient(180deg, var(--surface-2), var(--surface-3));
        border: 1px solid var(--border-medium);
        border-radius: var(--r-lg);
        box-shadow: var(--shadow-deep);
        margin-bottom: 20px;
      }

      .offer-card::before {
        content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
        background: linear-gradient(90deg, transparent, var(--accent-cta), transparent);
        border-radius: var(--r-lg) var(--r-lg) 0 0;
      }

      .offer-anchor {
        display: flex; flex-direction: column; gap: 4px;
        padding: 10px 14px; margin-bottom: 18px;
        background: rgba(249,115,22,0.08);
        border: 1px solid rgba(249,115,22,0.2);
        border-radius: 12px;
      }

      .offer-anchor-label {
        font-family: var(--font-mono); font-size: 9.5px;
        color: var(--accent-cta); letter-spacing: 0.14em; text-transform: uppercase;
      }

      .offer-anchor-line {
        display: flex; align-items: center; gap: 10px;
        font-family: var(--font-mono); font-size: 13px;
      }

      .offer-anchor-strike { color: var(--text-muted); text-decoration: line-through; }
      .offer-anchor-arrow { color: var(--accent-cta); }
      .offer-anchor-new { color: var(--text-primary); font-weight: 600; }

      .offer-price {
        display: flex; align-items: baseline; gap: 4px;
        padding: 20px 0 18px;
        border-bottom: 1px dashed var(--border-soft);
        margin-bottom: 18px;
        flex-wrap: wrap;
      }

      .offer-price-currency { font-family: var(--font-display); font-weight: 500; font-size: 24px; color: var(--text-secondary); }

      .offer-price-value {
        font-family: var(--font-display); font-weight: 700; font-size: 72px;
        line-height: 0.9; letter-spacing: -0.04em;
        background: linear-gradient(180deg, #FFFFFF 0%, #B8C4D0 100%);
        -webkit-background-clip: text; background-clip: text;
        -webkit-text-fill-color: transparent;
      }

      .offer-price-sub {
        font-family: var(--font-mono); font-size: 11px;
        color: var(--text-muted); margin-left: 12px;
        letter-spacing: 0.04em;
        width: 100%; padding-top: 8px;
      }

      .offer-includes {
        list-style: none; margin: 0 0 22px; padding: 0;
        display: flex; flex-direction: column; gap: 10px;
      }

      .offer-includes li { display: flex; gap: 10px; align-items: flex-start; font-size: 14px; line-height: 1.4; }
      .offer-includes svg { color: var(--accent); flex-shrink: 0; margin-top: 3px; }

      .offer-meta {
        display: flex; justify-content: center; gap: 16px; flex-wrap: wrap;
        margin-top: 14px;
        font-family: var(--font-mono); font-size: 10.5px;
        color: var(--text-muted); letter-spacing: 0.03em;
      }

      .offer-meta span { display: inline-flex; align-items: center; gap: 5px; }

      .offer-scarcity {
        display: flex; align-items: center; gap: 8px; flex-wrap: wrap;
        margin-top: 16px; padding: 10px 14px;
        background: rgba(124,255,107,0.06);
        border: 1px solid rgba(124,255,107,0.18);
        border-radius: 12px;
        font-size: 12.5px; color: var(--text-primary);
        line-height: 1.35;
      }

      .offer-scarcity b { color: var(--accent); font-family: var(--font-mono); }

      .offer-scarcity-dot {
        width: 7px; height: 7px; border-radius: 50%;
        background: var(--accent);
        box-shadow: 0 0 10px var(--accent);
        animation: pulse 2s infinite;
        flex-shrink: 0;
      }

      .offer-guarantee {
        display: flex; gap: 16px; align-items: center;
        padding: 20px;
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
      }

      .offer-guarantee-seal {
        width: 82px; height: 82px; border-radius: 50%;
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        background: var(--bg-primary);
        border: 2px solid var(--accent);
        color: var(--accent);
        flex-shrink: 0;
        box-shadow: 0 0 24px -4px var(--accent-glow), inset 0 0 24px -8px var(--accent-glow);
      }

      .offer-guarantee-n { font-family: var(--font-display); font-weight: 800; font-size: 32px; line-height: 1; letter-spacing: -0.02em; }
      .offer-guarantee-u { font-family: var(--font-mono); font-size: 10px; letter-spacing: 0.14em; text-transform: uppercase; margin-top: 2px; }
      .offer-guarantee-copy h4 { font-family: var(--font-display); font-weight: 700; font-size: 16px; margin: 0 0 6px; }
      .offer-guarantee-copy p { margin: 0; font-size: 13px; line-height: 1.45; color: var(--text-secondary); }

      /* ─────────── FAQ ─────────── */
      .faq { padding: 56px 0; background: var(--bg-secondary); border-top: 1px solid var(--border-soft); }
      .faq-list { display: flex; flex-direction: column; gap: 10px; }

      .faq-item {
        background: var(--surface-1);
        border: 1px solid var(--border-soft);
        border-radius: var(--r-md);
        overflow: hidden;
        cursor: pointer;
        transition: border-color 0.2s ease;
      }

      .faq-item:hover { border-color: var(--border-medium); }
      .faq-item.is-open { border-color: rgba(124,255,107,0.2); }

      .faq-q {
        display: grid; grid-template-columns: auto 1fr auto; gap: 12px;
        align-items: center;
        padding: 16px 18px;
        font-family: var(--font-display); font-weight: 600; font-size: 15px;
        line-height: 1.3;
      }

      .faq-idx { font-family: var(--font-mono); font-size: 11px; color: var(--accent); letter-spacing: 0.06em; }

      .faq-toggle {
        font-family: var(--font-mono); font-size: 20px; color: var(--text-muted);
        width: 24px; text-align: center;
        transition: color 0.2s ease;
      }

      .faq-item.is-open .faq-toggle { color: var(--accent); }

      .faq-a {
        max-height: 0; overflow: hidden;
        transition: max-height 0.35s ease, padding 0.35s ease;
      }

      .faq-item.is-open .faq-a { max-height: 200px; padding: 0 18px 16px 46px; }
      .faq-a p { margin: 0; font-size: 13.5px; line-height: 1.5; color: var(--text-secondary); }

      /* ─────────── Final CTA ─────────── */
      .final {
        padding: 68px 0 80px;
        text-align: center;
        background:
          radial-gradient(ellipse at center, rgba(124,255,107,0.08) 0%, transparent 50%),
          var(--bg-primary);
        border-top: 1px solid var(--border-soft);
      }

      .final-h {
        font-family: var(--font-display); font-weight: 700;
        font-size: 28px; line-height: 1.15;
        letter-spacing: -0.02em;
        margin: 0 0 28px;
        text-wrap: balance;
      }

      .final-micro {
        font-family: var(--font-mono); font-size: 11px;
        color: var(--text-muted); margin: 14px 0 0;
        letter-spacing: 0.02em;
      }

      /* ─────────── Footer ─────────── */
      .footer {
        padding: 20px 0;
        border-top: 1px solid var(--border-soft);
        font-family: var(--font-mono); font-size: 10.5px;
        color: var(--text-muted); letter-spacing: 0.04em;
      }

      .footer .container { display: flex; align-items: center; gap: 8px; justify-content: center; }
      .footer-brand { font-family: var(--font-display); font-weight: 800; color: var(--text-secondary); letter-spacing: 0.06em; }
      .footer-dot { color: var(--text-muted); }

      /* ═══════════════════════════════════════════
         RESPONSIVE — desktop
      ═══════════════════════════════════════════ */
      @media (min-width: 768px) {
        .container { max-width: 640px; }

        .hero-h1 { font-size: 52px; }
        .section-h { font-size: 36px; }
        .final-h { font-size: 34px; }

        .ba-split { flex-direction: row; gap: 16px; }
        .ba-panel { flex: 1; }
        .ba-divider { padding: 0 4px; align-self: center; }

        .offer-price-value { font-size: 80px; }
      }

      @media (min-width: 1024px) {
        .container { max-width: 720px; }
      }

      @media (max-width: 640px) {
        .ba-panel {
          min-height: 280px;
        }

        .ba-panel-img img {
          object-position: center top;
        }
      }
    `}</style>
  );
}
