'use client';

import { motion } from 'motion/react';

export function OfferNavbar() {
  return (
    <nav className="offer-navbar" aria-label="Navegação Forja Fit">
      <div className="offer-navbar-inner">
        <span className="offer-navbar-logo" aria-label="Forja Fit">
          FORJA<span className="offer-logo-accent">FIT</span>
        </span>

        <div className="offer-navbar-badge">
          <motion.span
            className="navbar-pulse-dot"
            animate={{ opacity: [1, 0.3, 1], scale: [1, 0.85, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            aria-hidden="true"
          />
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
          <span>Acesso imediato disponível</span>
        </div>
      </div>
    </nav>
  );
}
