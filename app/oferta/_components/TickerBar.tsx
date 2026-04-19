'use client';

import type { ProfileKey } from '../_data/ofertaProfiles';

const PROFILE_SCARCITY: Record<ProfileKey, { label: string; slots: number }> = {
  recomeco: { label: 'Recomeçador', slots: 34 },
  emagrecimento: { label: 'Emagrecimento', slots: 28 },
  evolucao: { label: 'Evolução', slots: 19 },
};

type TickerBarProps = {
  profileKey: ProfileKey;
};

export function TickerBar({ profileKey }: TickerBarProps) {
  const scarcity = PROFILE_SCARCITY[profileKey];

  // Duplicate items for seamless infinite scroll
  const items = [
    { type: 'orange' as const, text: <>Condição de lançamento · <b>R$67</b> · valor previsto R$127</> },
    { type: 'green' as const, text: <>Vagas abertas pro perfil <b>{scarcity.label}</b>: <b>{scarcity.slots}</b> essa semana</> },
    { type: 'orange' as const, text: <>R$67 à vista ou 12× no cartão</> },
    { type: 'green' as const, text: <>Plano responsivo · recalibrado semana a semana</> },
  ];

  return (
    <div className="ticker" aria-label="Informações da oferta">
      <div className="ticker-track">
        {/* Render items twice for seamless loop */}
        {[...items, ...items].map((item, i) => (
          <span className="ticker-item" key={i}>
            <span className={`ticker-dot ${item.type === 'orange' ? 'ticker-dot--orange' : ''}`} />
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}
