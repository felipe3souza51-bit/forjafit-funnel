'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { OfferPageStyles } from './OfferPageStyles';
import { pushEvent } from '@/lib/gtm';

/* ─── Ticto ────────────────────────────────── */
const TICTO = 'https://checkout.ticto.app/O151D598F?pid=AFCA5C514F';
const CTA_ATTRS = { href: TICTO, target: '_blank', rel: 'noopener noreferrer' } as const;

function CtaBtn({ label = 'COMEÇAR AGORA POR R$67 →', size = 'default', event = 'cta_click' }: {
  label?: string; size?: 'default' | 'large'; event?: string;
}) {
  return (
    <a {...CTA_ATTRS} className={`cta-btn ${size === 'large' ? 'cta-btn--lg' : ''}`} onClick={() => pushEvent(event)}>
      {label}
    </a>
  );
}

/* ─── icons ─────────────────────────────────── */
const IcoBook = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
  </svg>
);
const IcoCal = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const IcoTarget = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

/* ─── comments data ──────────────────────────── */
const COMMENTS = [
  { user: 'joao_p',    initial: 'J', ago: 'há 12 min', text: 'caraca, nunca tinha pensado dessa forma. faz total sentido' },
  { user: 'rafa.costa', initial: 'R', ago: 'há 23 min', text: '11 anos tentando e travando igual descrito. agora entendi' },
  { user: 'diego_m',   initial: 'D', ago: 'há 34 min', text: 'finalmente alguém falando a real, sem mimimi de guru' },
  { user: 'lucasf',    initial: 'L', ago: 'há 1h',     text: 'assistindo de novo pra ter certeza. tô dentro' },
];

/* ══════════════════════════════════════════════
   PAGE
══════════════════════════════════════════════ */
export function OfferPageClient() {
  const [stage, setStage]           = useState<'hidden' | 'comments' | 'full'>('hidden');
  const [hasStarted, setHasStarted] = useState(false);
  const proofRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const inView   = useInView(proofRef, { once: true, margin: '0px 0px -40px 0px' });

  const handleStart = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = false;
    videoRef.current.play().catch(() => null);
    setHasStarted(true);
  };

  useEffect(() => {
    pushEvent('view_oferta');
    const t1 = setTimeout(() => setStage('comments'), 60_000);   // 60s → comments
    const t2 = setTimeout(() => setStage('full'),     205_000);   // 3:25 → tudo
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  const showComments = stage === 'comments' || stage === 'full';
  const showFull     = stage === 'full';

  return (
    <main className="sp">

      {/* ══ B1 — URGENCY BAR ══════════════════ */}
      <div className="urgency-bar">
        ⚠️ ATENÇÃO: 93% dos homens travam no treino. Esse vídeo mostra por quê.
      </div>

      {/* ══ B1 — NAVBAR ══════════════════════ */}
      <nav className="sp-nav">
        <div className="sp-nav-inner">
          <span className="sp-logo">FORJA<span className="sp-logo-accent">FIT</span></span>
          {showFull && <span className="sp-badge">● Acesso imediato</span>}
        </div>
      </nav>

      {/* ══ B2 — HERO + VSL ══════════════════ */}
      <section className="hero">
        <div className="container">
          <p className="eyebrow">
            <span className="eyebrow-line" aria-hidden="true" />
            MÉTODO ECR — DESCOBERTO POR ACIDENTE
            <span className="eyebrow-line" aria-hidden="true" />
          </p>

          <h1 className="hero-h1">
            Por Que 93% Dos Homens Travam No Treino{' '}
            <span className="accent-orange">Antes Da Semana 3</span>
          </h1>

          <p className="hero-sub">
            Não é falta de disciplina. É falta de ponto de partida certo. Descubra o método que tirou 847 homens do ciclo de começa-e-para — sem academia cara, sem rotina perfeita, sem motivação heroica.
          </p>

          <div className="vsl-wrap">
            <div className="vsl-alert">🔊 ATENÇÃO: Aperte o Play e Aumente o Volume</div>
            <div className="vsl-container">
              <video
                ref={videoRef}
                className="vsl-video"
                src="/vsl.mp4.mp4"
                poster="/images/DEPOIS.png"
                playsInline
                muted
                preload="auto"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div
                className={`vsl-play-overlay${hasStarted ? ' vsl-play-overlay--hidden' : ''}`}
                onClick={handleStart}
                role="button"
                aria-label="Reproduzir vídeo"
              >
                <div className="vsl-play-btn">
                  <svg viewBox="0 0 80 80" width="80" height="80" fill="none">
                    <circle cx="40" cy="40" r="38" stroke="rgba(255,255,255,0.9)" strokeWidth="2"/>
                    <polygon points="32,24 60,40 32,56" fill="white"/>
                  </svg>
                </div>
              </div>
              {!hasStarted && (
                <button
                  className="vsl-unmute-btn"
                  onClick={handleStart}
                  aria-label="Ativar som e reproduzir"
                >
                  🔇 ATIVAR SOM
                </button>
              )}
            </div>
          </div>

          {/* hero CTA — só aparece em stage 'full' */}
          {showFull ? (
            <div className="reveal show">
              <CtaBtn size="large" event="cta_hero" />
              <p className="microcopy">acesso imediato · 15 dias de garantia · checkout seguro</p>
            </div>
          ) : (
            <p className="hero-watch-hint">Assista o vídeo até o final pra entender o método</p>
          )}
        </div>
      </section>

      {/* ══ COMENTÁRIOS (60s) ════════════════ */}
      {showComments && (
        <div className={`reveal ${showComments ? 'show' : ''}`}>
          <section className="sp-comments" aria-label="Comentários">
            <div className="sp-comments-header">
              <span className="sp-comments-dot" aria-hidden="true" />
              <span className="sp-comments-count">847 pessoas assistindo agora</span>
            </div>

            {COMMENTS.map((c, i) => (
              <motion.div
                key={c.user}
                className="sp-comment"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="sp-comment-avatar">{c.initial}</div>
                <div>
                  <p className="sp-comment-meta">
                    <span className="sp-comment-user">@{c.user}</span> · {c.ago}
                  </p>
                  <p className="sp-comment-text">{c.text}</p>
                </div>
              </motion.div>
            ))}
          </section>
        </div>
      )}

      {/* ══ B3–B8 só aparecem em stage 'full' ══ */}

      {/* ══ B3 — BENEFÍCIOS ══════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="benefits-section">
          <div className="container">
            <p className="eyebrow"><span className="eyebrow-line" />O QUE MUDA NA SUA VIDA<span className="eyebrow-line" /></p>
            <h2 className="section-h">Não É Sobre Treinar Mais. É Sobre Começar Certo.</h2>
            <div className="benefit-stack">
              <div className="benefit-card benefit-card--orange">
                <h3>Você sai do ciclo de começa-e-para</h3>
                <p>Plano alinhado ao seu momento real elimina a frustração que faz você largar.</p>
              </div>
              <div className="benefit-card benefit-card--cyan">
                <h3>Funciona na sua rotina, não na ideal</h3>
                <p>20 minutos no ponto certo rendem mais que 1 hora no ponto errado.</p>
              </div>
              <div className="benefit-card benefit-card--green">
                <h3>Constância sem depender de motivação</h3>
                <p>O sistema recalibra quando a semana aperta — você não para, ajusta.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══ B4 — PROVA SOCIAL ════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="proof-section" ref={proofRef}>
          <div className="container">
            <p className="eyebrow"><span className="eyebrow-line" />RESULTADOS REAIS<span className="eyebrow-line" /></p>
            <h2 className="section-h">847 Homens Já Saíram Do Ciclo. Veja Quem.</h2>

            <div className="transform-card">
              <div className="person-bar">
                <img className="person-avatar" src="/images/Lucas.jpeg" alt="Lucas R." />
                <div className="person-info">
                  <strong>Lucas R., 34</strong>
                  <span>Curitiba · PR</span>
                </div>
                <span className="week-badge">8 semanas</span>
              </div>

              <div className="ba-grid">
                <figure className="ba-figure">
                  <img src="/images/ANTES.png" alt="Antes" loading="lazy" />
                  <figcaption>
                    <span className="ba-label ba-label--before">ANTES</span>
                    <span className="ba-mood">"Semana 2. Mesma parede."</span>
                  </figcaption>
                </figure>
                <figure className="ba-figure">
                  <img src="/images/DEPOIS.png" alt="Depois" loading="lazy" />
                  <figcaption>
                    <span className="ba-label ba-label--after">DEPOIS</span>
                    <span className="ba-mood">"Semana 8. Outro trilho."</span>
                  </figcaption>
                </figure>
              </div>

              <div className="stats-row">
                <div className="stat-box">
                  <span>treinos/mês</span>
                  <div className="stat-val"><s>3</s><strong>14</strong></div>
                </div>
                <div className="stat-box">
                  <span>semanas sem travar</span>
                  <div className="stat-val"><s>1,5</s><strong>7+</strong></div>
                </div>
              </div>
              <p className="disclaimer">* resultados variam conforme dedicação e rotina</p>
            </div>

            <div className="testi-stack">
              {([
                { img: '/images/Lucas.jpeg',  name: 'Lucas R.',  time: '14:32', text: 'Pela primeira vez não travei na semana 2.' },
                { img: '/images/Rafael.jpeg', name: 'Rafael M.', time: '20:45', text: 'Em 3 semanas já tô treinando com mais método do que nos últimos 4 meses.' },
                { img: '/images/Marina.jpeg', name: 'Marina B.', time: '07:02', text: 'A diferença é que desta vez eu sei o próximo passo.' },
              ] as const).map((t, i) => (
                <motion.div
                  key={t.name}
                  className="testi-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.1 }}
                >
                  <img className="testi-avatar" src={t.img} alt={t.name} />
                  <div className="testi-body">
                    <div className="testi-meta">
                      <strong>{t.name}</strong>
                      <span>{t.time}</span>
                    </div>
                    <p>{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="live-pill">
              <span className="live-dot" aria-hidden="true" />
              847 pessoas começaram nos últimos 7 dias
            </div>

            <CtaBtn label="QUERO O MESMO RESULTADO →" event="cta_proof" />
          </div>
        </section>
      </div>

      {/* ══ B5 — OFERTA ══════════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="offer-section">
          <div className="container">
            <p className="eyebrow"><span className="eyebrow-line" />TUDO O QUE VOCÊ RECEBE<span className="eyebrow-line" /></p>
            <h2 className="section-h">O Sistema Completo Forja Fit</h2>

            <div className="offer-card">
              <div className="offer-top-line" aria-hidden="true" />
              <span className="launch-badge">CONDIÇÃO DE LANÇAMENTO</span>

              <ul className="offer-list">
                {[
                  'Mapa de Progressão Inicial — seu ponto real de partida',
                  'Treinos por objetivo — secar, definir, retomar',
                  'Fichas prontas — casa e academia',
                  'Vídeo-aulas de execução',
                  'Sistema de recalibragem semanal',
                  'Materiais extras + bônus complementares',
                ].map((item, i) => (
                  <li key={i}><span className="check-green">✓</span>{item}</li>
                ))}
              </ul>

              <div className="dashed-sep" />

              <div className="price-block">
                <span className="price-old">De R$127</span>
                <div className="price-main"><span className="price-cur">R$</span>67</div>
                <span className="price-sub">à vista ou 12× no cartão</span>
              </div>

              <CtaBtn size="large" event="cta_offer" />

              <p className="offer-meta">Checkout seguro · Ticto · Dados protegidos</p>

              <div className="scarcity-pill">
                <span className="live-dot" aria-hidden="true" />
                Vagas abertas essa semana: <strong>34</strong>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══ B6 — GARANTIA ════════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="guarantee-section">
          <div className="container">
            <div className="guarantee-box">
              <img className="guarantee-img" src="/images/garantia.png.png" alt="Garantia 15 dias" />
              <div className="guarantee-copy">
                <p className="eyebrow guarantee-eyebrow"><span className="eyebrow-line" />GARANTIA TOTAL</p>
                <h3>15 Dias de Garantia Incondicional</h3>
                <p>Entre. Teste. Aplique por 15 dias. Se você não sentir que é completamente diferente de tudo que já tentou, devolvemos 100% do seu dinheiro. Sem perguntas. Sem formulário. O risco é todo meu.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══ B7 — BÔNUS ════════════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="bonus-section">
          <div className="container">
            <p className="eyebrow"><span className="eyebrow-line" />BÔNUS EXCLUSIVOS DE LANÇAMENTO<span className="eyebrow-line" /></p>
            <h2 className="section-h">Mais 3 Bônus Pra Garantir Sua Constância</h2>
            <p className="section-sub">Materiais complementares enviados por e-mail logo após a compra.</p>

            <div className="bonus-grid">
              {([
                { ico: <IcoBook />, title: 'Guia da Recalibragem Semanal', text: 'Como ajustar o plano nos dias em que a vida apertar — sem perder progresso.', val: 'R$47' },
                { ico: <IcoCal />,  title: 'Calendário de 90 Dias do Recomeçador', text: 'Os primeiros 3 meses mapeados em fases, com checkpoints reais de progresso.', val: 'R$67' },
                { ico: <IcoTarget />, title: 'Manual da Constância', text: 'Os 7 erros que travam o recomeçador — e como evitar todos.', val: 'R$37' },
              ] as const).map((b, i) => (
                <div key={i} className="bonus-card">
                  <div className="bonus-ico">{b.ico}</div>
                  <h4>{b.title}</h4>
                  <p>{b.text}</p>
                  <span className="bonus-val"><s>{b.val}</s></span>
                </div>
              ))}
            </div>

            <div className="bonus-total">
              <p>Valor real total dos bônus: <span className="muted-line">R$151</span></p>
              <p className="bonus-price">Você paga apenas: <strong>R$67</strong></p>
            </div>
          </div>
        </section>
      </div>

      {/* ══ B8 — CTA FINAL ═══════════════════ */}
      <div className={`reveal ${showFull ? 'show' : ''}`}>
        <section className="final-section">
          <div className="final-glow" aria-hidden="true" />
          <div className="container">
            <h2 className="final-h">
              Chega de Recomeçar.<br />
              <span>Entra No Trilho Certo.</span>
            </h2>
            <p className="final-sub">847 homens já começaram. Daqui 3 meses, você quer estar onde?</p>
            <CtaBtn size="large" event="cta_final" />
            <p className="microcopy" style={{ marginTop: 12 }}>acesso imediato · 15 dias de garantia · checkout Ticto</p>
          </div>
        </section>
      </div>

      {/* ══ FOOTER ════════════════════════════ */}
      <footer className="sp-footer">
        FORJAFIT · © 2026 · sistema responsivo de treino
      </footer>

      <OfferPageStyles />
    </main>
  );
}
