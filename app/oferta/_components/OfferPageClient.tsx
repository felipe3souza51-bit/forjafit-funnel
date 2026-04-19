'use client';

import { useState, useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';

import { OfferNavbar } from './OfferNavbar';
import { OfferPageStyles } from './OfferPageStyles';
import { TickerBar } from './TickerBar';
import {
  normalizeProfileKey,
  offerProfiles,
  TESTIMONIALS,
  TESTIMONIAL_AVATARS,
  MECHANISM,
} from '../_data/ofertaProfiles';
import type { ProfileContent, ProfileKey } from '../_data/ofertaProfiles';
import { pushEvent } from '@/lib/gtm';

/* ── SHARED ───────────────────────────────── */
const EASE = [0.22, 1, 0.36, 1] as const;

function useAnimatedCount(target: number, inView: boolean, dur = 1600) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, dur]);
  return n;
}

/* ── ICONS ────────────────────────────────── */
const ArrowRight = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>;
const IconCheck = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>;
const IconShield = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>;
const IconLock = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>;
const IconTarget = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="6" /></svg>;
const IconHome = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>;
const IconWave = () => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0" /></svg>;
const IconStar = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" /></svg>;

/* ══════════════════════════════════════════════
   HERO
   ══════════════════════════════════════════════ */
function Hero({ profile, checkoutHref }: { profile: ProfileContent; checkoutHref: string }) {
  return (
    <section className="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container">
        <div className="eyebrow">
          <span className="eyebrow-dot" />
          <span>Método ECR · {profile.shortLabel}</span>
        </div>

        <h1 className="hero-h1">
          Para de recomeçar do{' '}
          <span className="hl-green">zero.</span>
          <br />
          Entra no trilho{' '}
          <span className="hl-cyan">certo.</span>
        </h1>

        <p className="hero-sub">{profile.angle}</p>

        <div className="hero-img-wrap">
          <img src={profile.images.hero} alt="" className="hero-img" loading="eager" />
          <div className="hero-img-gradient" aria-hidden="true" />
          <div className="hero-img-badge">
            <span className="hero-img-badge-dot" />
            <span>perfil calibrado · {profile.shortLabel}</span>
          </div>
        </div>

        <Link href={checkoutHref} className="btn-primary">
          QUERO O PLANO CERTO PRA MIM
          <ArrowRight />
        </Link>

        <p className="hero-microcopy">R$67 · acesso imediato · 15 dias de garantia</p>

        <div className="hero-pills">
          <span className="hero-pill"><IconTarget /> Objetivo alinhado</span>
          <span className="hero-pill"><IconHome /> Casa ou academia</span>
          <span className="hero-pill"><IconWave /> Início sustentável</span>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   SOCIAL PROOF
   ══════════════════════════════════════════════ */
function SocialProof({ profile }: { profile: ProfileContent }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' });
  const count = useAnimatedCount(profile.audienceCount, inView);

  return (
    <section className="proof" ref={ref}>
      <div className="container">
        <div className="proof-counter">
          <span className="proof-pulse" />
          <p><b>{count.toLocaleString('pt-BR')}</b> pessoas começaram o trilho certo <span className="muted">nos últimos 7 dias</span></p>
        </div>

        <div className="proof-wa-stack">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              className="proof-wa-card"
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
            >
              <img className="proof-wa-avatar" src={TESTIMONIAL_AVATARS[(['lucas','camila','rafael','marina'] as const)[i]]} alt={t.name} />
              <div className="proof-wa-body">
                <div className="proof-wa-meta">
                  <b>{t.name}</b>
                  <span className="muted">{t.day} · {t.time}</span>
                </div>
                <p>{t.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="proof-authority">
          <span className="proof-auth-badge"><IconShield /> Checkout Ticto</span>
          <span className="proof-auth-badge"><IconStar /> Avaliação 4.8</span>
          <span className="proof-auth-badge"><IconCheck /> Garantia 15 dias</span>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   PAIN
   ══════════════════════════════════════════════ */
function Pain({ profile }: { profile: ProfileContent }) {
  return (
    <section className="pain">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>DIAGNÓSTICO</span></div>
        <h2 className="section-h">{profile.painTitle}</h2>
        <div className="pain-grid">
          {profile.pains.map((p, i) => (
            <motion.div
              key={i}
              className="pain-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: EASE }}
            >
              <span className="pain-index">0{i + 1}</span>
              <h3>{p.title}</h3>
              <p>{p.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   MECHANISM (ECR)
   ══════════════════════════════════════════════ */
function MechanismSection({ profile }: { profile: ProfileContent }) {
  return (
    <section className="mech">
      <div className="mech-bg" aria-hidden="true" />
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>O MECANISMO</span></div>
        <h2 className="section-h">
          Método <span className="hl-green">ECR</span>. Entrada certa, não entrada ideal.
        </h2>
        <p className="section-sub">{MECHANISM.line}</p>

        <div className="mech-steps">
          {MECHANISM.steps.map((s, i) => (
            <motion.div
              key={i}
              className="mech-step"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: EASE }}
            >
              <div className="mech-step-code">{s.code}</div>
              <div>
                <h4>{s.label}</h4>
                <p>{s.desc}</p>
              </div>
              {i < MECHANISM.steps.length - 1 && <span className="mech-connector" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   BEFORE / AFTER
   ══════════════════════════════════════════════ */
function BeforeAfter({ profile }: { profile: ProfileContent }) {
  const t = profile.transformation;
  return (
    <section className="ba">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>TRANSFORMAÇÃO REAL</span></div>
        <h2 className="section-h">Mesma pessoa. Ponto de partida diferente.</h2>

        <div className="ba-person">
          <img className="ba-person-avatar" src={TESTIMONIAL_AVATARS[Object.keys(TESTIMONIAL_AVATARS).find(k => t.name.toLowerCase().startsWith(k)) ?? 'lucas']} alt={t.name} />
          <div className="ba-person-meta">
            <b>{t.name}, {t.age}</b>
            <span>{t.city}</span>
          </div>
          <div className="ba-person-badge">
            <span className="ba-person-badge-dot" />
            {t.weeks}
          </div>
        </div>

        <div className="ba-split">
          <div className="ba-panel ba-before">
            <div className="ba-panel-img">
              <img src={profile.images.before} alt="" loading="lazy" />
              <div className="ba-panel-img-tint ba-tint--before" />
            </div>
            <span className="ba-label">ANTES</span>
            <p className="ba-mood">&ldquo;{profile.beforeMood}&rdquo;</p>
            <p className="ba-copy">{profile.before}</p>
            <div className="ba-quote">
              <p>&ldquo;{t.beforeQuote}&rdquo;</p>
              <span className="ba-quote-name">— {t.name}</span>
            </div>
          </div>

          <div className="ba-divider"><span>→</span></div>

          <div className="ba-panel ba-after">
            <div className="ba-panel-img">
              <img src={profile.images.after} alt="" loading="lazy" />
              <div className="ba-panel-img-tint ba-tint--after" />
            </div>
            <span className="ba-label ba-label--accent">DEPOIS</span>
            <p className="ba-mood">&ldquo;{profile.afterMood}&rdquo;</p>
            <p className="ba-copy">{profile.after}</p>
            <div className="ba-quote ba-quote--accent">
              <p>&ldquo;{t.afterQuote}&rdquo;</p>
              <span className="ba-quote-name">— {t.name}</span>
            </div>
          </div>
        </div>

        <div className="ba-stats">
          {t.stats.map((s, i) => (
            <div key={i} className="ba-stat">
              <span className="ba-stat-label">{s.label}</span>
              <div className="ba-stat-row">
                <span className="ba-stat-before">{s.before}</span>
                <span className="ba-stat-arrow">→</span>
                <span className="ba-stat-after">{s.after}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="ba-disclaimer">* Depoimento real, resultados variam conforme perfil e rotina.</p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   AUDIENCE
   ══════════════════════════════════════════════ */
function Audience({ profile }: { profile: ProfileContent }) {
  return (
    <section className="audience-section">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>INDICADO PRA QUEM</span></div>
        <h2 className="section-h-sm">
          Esse plano foi calibrado pro perfil <span className="hl-green">{profile.shortLabel}</span>.
        </h2>
        <ul className="audience-list">
          {profile.audience.map((a, i) => (
            <li key={i}>
              <span className="audience-check"><IconCheck /></span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   OFFER / PRICE BLOCK
   ══════════════════════════════════════════════ */
function Offer({ profile, checkoutHref }: { profile: ProfileContent; checkoutHref: string }) {
  return (
    <section className="offer" id="oferta">
      <div className="offer-bg" aria-hidden="true" />
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>DECISÃO</span></div>

        <div className="offer-card">
          <div className="offer-anchor">
            <span className="offer-anchor-label">condição de lançamento</span>
            <span className="offer-anchor-line">
              <span className="offer-anchor-strike">R$127</span>
              <span className="offer-anchor-arrow">→</span>
              <span className="offer-anchor-new">hoje R$67</span>
            </span>
          </div>

          <div className="offer-price">
            <span className="offer-price-currency">R$</span>
            <span className="offer-price-value">67</span>
            <span className="offer-price-sub">à vista · ou 12× no cartão</span>
          </div>

          <ul className="offer-includes">
            <li><IconCheck /> Plano calibrado pro perfil {profile.shortLabel}</li>
            <li><IconCheck /> Método ECR — recalibragem semanal</li>
            <li><IconCheck /> Acesso imediato · app + navegador</li>
            <li><IconCheck /> Funciona em casa, academia ou híbrido</li>
            <li><IconCheck /> Garantia incondicional de 15 dias</li>
          </ul>

          <Link href={checkoutHref} className="btn-primary btn-primary--xl">
            ENTRAR NO TRILHO CERTO
            <ArrowRight />
          </Link>

          <div className="offer-meta">
            <span><IconShield /> Checkout seguro · Ticto</span>
            <span><IconLock /> Dados criptografados</span>
          </div>

          <div className="offer-scarcity">
            <span className="offer-scarcity-dot" />
            Vagas abertas essa semana pro perfil <b>{profile.shortLabel}</b>:&nbsp;
            <b>{profile.slotsLeft}</b>
          </div>
        </div>

        <div className="offer-guarantee">
          <div className="offer-guarantee-seal">
            <span className="offer-guarantee-n">15</span>
            <span className="offer-guarantee-u">dias</span>
          </div>
          <div className="offer-guarantee-copy">
            <h4>Garantia total de 15 dias</h4>
            <p>Entra, testa, aplica. Se não sentir que é diferente de tudo que já tentou, devolvemos 100%. Sem perguntas.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FAQ (3 items, indexed)
   ══════════════════════════════════════════════ */
function FAQ({ profile }: { profile: ProfileContent }) {
  const [open, setOpen] = useState(0);
  return (
    <section className="faq">
      <div className="container">
        <div className="eyebrow"><span className="eyebrow-line" /><span>DÚVIDAS DIRETAS</span></div>
        <h2 className="section-h-sm">3 perguntas. Respostas sem rodeio.</h2>
        <div className="faq-list">
          {profile.faqs.map((f, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? 'is-open' : ''}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span className="faq-idx">0{i + 1}</span>
                <span>{f.q}</span>
                <span className="faq-toggle">{open === i ? '−' : '+'}</span>
              </div>
              <div className="faq-a"><p>{f.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FINAL CTA
   ══════════════════════════════════════════════ */
function FinalCTA({ checkoutHref }: { checkoutHref: string }) {
  return (
    <section className="final">
      <div className="container">
        <h2 className="final-h">
          Você já tentou por conta própria.<br />
          <span className="hl-green">Desta vez, entra no ponto certo.</span>
        </h2>
        <Link href={checkoutHref} className="btn-primary btn-primary--xl">
          COMEÇAR AGORA · R$67
          <ArrowRight />
        </Link>
        <p className="final-micro">acesso imediato · 15 dias de garantia · checkout Ticto</p>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════
   FOOTER
   ══════════════════════════════════════════════ */
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer-brand">FORJAFIT</span>
        <span className="footer-dot">·</span>
        <span>© 2026 · sistema responsivo de treino</span>
      </div>
    </footer>
  );
}

/* ══════════════════════════════════════════════
   PAGE — ORCHESTRATOR
   ══════════════════════════════════════════════ */
export function OfferPageClient() {
  const searchParams = useSearchParams();
  const profileKey = normalizeProfileKey(searchParams.get('perfil'));
  const profile = offerProfiles[profileKey];
  const checkoutHref = `/checkout-bridge?perfil=${profileKey}`;

  useEffect(() => { pushEvent('view_oferta'); }, []);

  return (
    <main className="sales-page">
      <TickerBar profileKey={profileKey} />
      <OfferNavbar />
      <Hero profile={profile} checkoutHref={checkoutHref} />
      <SocialProof profile={profile} />
      <Pain profile={profile} />
      <MechanismSection profile={profile} />
      <BeforeAfter profile={profile} />
      <Audience profile={profile} />
      <Offer profile={profile} checkoutHref={checkoutHref} />
      <FAQ profile={profile} />
      <FinalCTA checkoutHref={checkoutHref} />
      <Footer />
      <OfferPageStyles />
    </main>
  );
}
