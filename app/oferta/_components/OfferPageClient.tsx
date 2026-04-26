'use client';

import { useState, useEffect, useRef, type SyntheticEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'motion/react';
import { OfferPageStyles } from './OfferPageStyles';
import { pushEvent } from '@/lib/gtm';

/* ─── constants ───────────────────────────── */
const CTA   = '/checkout-bridge';
const LABEL = 'Começar agora por R$67';
const STAGE_1_SECONDS = 260;
const STAGE_2_SECONDS = 420;
const STAGE_3_SECONDS = 600;
const REVEAL_STAGE_STORAGE_KEY = 'forjaFitRevealStage';
const LEGACY_CTA_UNLOCK_STORAGE_KEY = 'forjaFitCtaUnlocked';
const VSL_EVENT_DATA = {
  page: 'oferta',
  video: 'forja-fit-vsl',
};

type RevealStage = 1 | 2 | 3 | 4;

type OfferTrackingEvent =
  | 'vsl_play'
  | 'vsl_pause'
  | 'vsl_25'
  | 'vsl_50'
  | 'vsl_75'
  | 'vsl_complete'
  | 'cta_revealed'
  | 'cta_click';

const VSL_MILESTONES = [
  { progress: 0.25, event: 'vsl_25' },
  { progress: 0.5, event: 'vsl_50' },
  { progress: 0.75, event: 'vsl_75' },
] satisfies Array<{ progress: number; event: OfferTrackingEvent }>;

function pushOfferTrackingEvent(event: OfferTrackingEvent) {
  pushEvent(event, VSL_EVENT_DATA);
}

function parseRevealStage(value: string | null): RevealStage {
  const stage = Number(value);
  return stage === 2 || stage === 3 || stage === 4 ? stage : 1;
}

function formatVideoTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds <= 0) return '0:00';

  const totalSeconds = Math.floor(seconds);
  const minutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
}

/* ─── static data ─────────────────────────── */
const TESTIMONIALS = [
  { avatar: '/images/Lucas.jpeg',  name: 'Lucas R.',  time: '14:32', text: 'Pela primeira vez não travei na semana 2.' },
  { avatar: '/images/Rafael.jpeg', name: 'Rafael M.', time: '20:45', text: 'Em 3 semanas já tô treinando com mais método do que nos últimos 4 meses.' },
  { avatar: '/images/Marina.jpeg', name: 'Marina B.', time: '07:02', text: 'A diferença é que desta vez eu sei o próximo passo.' },
];

const INCLUDES = [
  'Mapa de Progressão Inicial calibrado pro seu momento',
  'Treinos por objetivo — secar, definir ou retomar o ritmo',
  'Fichas prontas para casa e academia',
  'Vídeo-aulas de execução com segurança',
  'Recalibragem semanal — o plano se adapta',
  'Materiais extras + bônus complementares',
];

const FAQS = [
  { q: 'Funciona pra quem está totalmente parado?',  a: 'Sim. É exatamente pra esse momento. O sistema começa do seu ponto real, sem pressupor nada.' },
  { q: 'Preciso de academia?',                        a: 'Não. Casa, academia ou híbrido. O plano se adapta à estrutura que você tem.' },
  { q: 'E se eu travar de novo?',                     a: 'O sistema prevê travas. Você não recomeça do zero — retoma de onde parou, com ajuste.' },
  { q: 'Quanto tempo até ver resultado?',             a: 'Depende do ponto de partida. A maioria sente direção e clareza desde o primeiro dia.' },
  { q: 'E se não funcionar?',                         a: 'Garantia de 15 dias. Devolvemos 100%. Sem perguntas, sem burocracia.' },
];

/* ─── animated counter ────────────────────── */
function Counter({ target, inView }: { target: number; inView: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf: number;
    const tick = (now: number) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);
  return <>{n.toLocaleString('pt-BR')}</>;
}

/* ─── reveal wrapper ──────────────────────── */
function Reveal({ stage, currentStage, className = '', children, id, style }: {
  stage: RevealStage; currentStage: RevealStage; className?: string;
  children: React.ReactNode; id?: string; style?: React.CSSProperties;
}) {
  if (currentStage < stage) return null;

  const cls = `reveal-section is-revealed ${className}`.trim();
  return <div className={cls} id={id} style={style}>{children}</div>;
}

/* ══════════════════════════════════════════
   PAGE
══════════════════════════════════════════ */
export function OfferPageClient() {
  const [currentStage, setCurrentStage] = useState<RevealStage>(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const proofRef  = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const maxAllowedTimeRef = useRef(0);
  const lastTimeUpdateAtRef = useRef(0);
  const isCorrectingSeekRef = useRef(false);
  const stageThresholdsRef = useRef({
    stage2: STAGE_1_SECONDS,
    stage3: STAGE_2_SECONDS,
    stage4: STAGE_3_SECONDS,
  });
  const trackedEventsRef = useRef<Set<OfferTrackingEvent>>(new Set());
  const trackedStagesRef = useRef<Set<RevealStage>>(new Set());
  const inView    = useInView(proofRef, { once: true, margin: '0px 0px -40px 0px' });
  const progressPercent = videoDuration > 0
    ? Math.min((videoCurrentTime / videoDuration) * 100, 100)
    : 0;

  const trackOnce = (event: OfferTrackingEvent) => {
    if (trackedEventsRef.current.has(event)) return;

    trackedEventsRef.current.add(event);
    pushOfferTrackingEvent(event);
  };

  const trackCtaClick = (legacyEvent: string) => {
    pushOfferTrackingEvent('cta_click');
    pushEvent(legacyEvent);
  };

  const trackStageReveal = (stage: RevealStage) => {
    if (trackedStagesRef.current.has(stage)) return;

    trackedStagesRef.current.add(stage);
    pushEvent('vsl_stage_revealed', {
      stage,
      page: 'oferta',
    });
  };

  const persistStage = (stage: RevealStage) => {
    try {
      const savedStage = parseRevealStage(localStorage.getItem(REVEAL_STAGE_STORAGE_KEY));
      if (stage > savedStage) {
        localStorage.setItem(REVEAL_STAGE_STORAGE_KEY, String(stage));
      }
    } catch {
      // localStorage can be unavailable in private or restricted browsers.
    }
  };

  const revealStage = (stage: RevealStage) => {
    setCurrentStage((previousStage) => (stage > previousStage ? stage : previousStage));
    persistStage(stage);
    trackStageReveal(stage);

    if (stage === 4) {
      trackOnce('cta_revealed');
    }
  };

  const revealStagesUntil = (stage: RevealStage) => {
    for (let nextStage = 2; nextStage <= stage; nextStage += 1) {
      revealStage(nextStage as RevealStage);
    }
  };

  const getStageFromWatchedTime = (watchedSeconds: number): RevealStage => {
    const { stage2, stage3, stage4 } = stageThresholdsRef.current;

    if (watchedSeconds >= stage4) return 4;
    if (watchedSeconds >= stage3) return 3;
    if (watchedSeconds >= stage2) return 2;
    return 1;
  };

  const syncStagesWithWatchedTime = (watchedSeconds: number) => {
    const watchedStage = getStageFromWatchedTime(watchedSeconds);

    if (watchedStage > currentStage) {
      revealStagesUntil(watchedStage);
    }
  };

  const correctSeek = (video: HTMLVideoElement) => {
    const allowedTime = maxAllowedTimeRef.current;

    isCorrectingSeekRef.current = true;
    video.currentTime = allowedTime;
    setVideoCurrentTime(allowedTime);

    window.requestAnimationFrame(() => {
      isCorrectingSeekRef.current = false;
    });
  };

  const handleVideoLoadedMetadata = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const duration = Number.isFinite(video.duration) ? video.duration : 0;

    setVideoDuration(duration);
    setVideoCurrentTime(video.currentTime);
    maxAllowedTimeRef.current = Math.max(maxAllowedTimeRef.current, video.currentTime);
    lastTimeUpdateAtRef.current = performance.now();
  };

  const handleVideoPlay = () => {
    lastTimeUpdateAtRef.current = performance.now();
    setIsPlaying(true);
    trackOnce('vsl_play');
  };

  const handleVideoPause = (event: SyntheticEvent<HTMLVideoElement>) => {
    setIsPlaying(false);

    if (!event.currentTarget.ended) {
      trackOnce('vsl_pause');
    }
  };

  const handleVideoTimeUpdate = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;
    const currentTime = video.currentTime;
    const now = performance.now();

    if (!Number.isFinite(video.duration) || video.duration <= 0) {
      return;
    }

    if (isCorrectingSeekRef.current) {
      setVideoCurrentTime(maxAllowedTimeRef.current);
      return;
    }

    const elapsedSinceLastTick = lastTimeUpdateAtRef.current
      ? (now - lastTimeUpdateAtRef.current) / 1000
      : 0;
    const playbackRate = Number.isFinite(video.playbackRate) && video.playbackRate > 0
      ? video.playbackRate
      : 1;
    const allowedNaturalAdvance = video.paused
      ? 0.35
      : Math.max(1.25, elapsedSinceLastTick * playbackRate + 0.75);
    const isTryingToAdvance = currentTime > maxAllowedTimeRef.current + allowedNaturalAdvance;
    const isTryingToGoBack = currentTime < maxAllowedTimeRef.current - 0.35;

    if (isTryingToAdvance || isTryingToGoBack) {
      correctSeek(video);
      lastTimeUpdateAtRef.current = now;
      return;
    }

    maxAllowedTimeRef.current = Math.max(maxAllowedTimeRef.current, currentTime);
    lastTimeUpdateAtRef.current = now;
    setVideoCurrentTime(currentTime);
    setVideoDuration(video.duration);
    syncStagesWithWatchedTime(currentTime);

    const watchedProgress = currentTime / video.duration;

    VSL_MILESTONES.forEach((milestone) => {
      if (watchedProgress >= milestone.progress) {
        trackOnce(milestone.event);
      }
    });
  };

  const handleVideoSeeking = (event: SyntheticEvent<HTMLVideoElement>) => {
    if (isCorrectingSeekRef.current) return;

    const video = event.currentTarget;

    if (Math.abs(video.currentTime - maxAllowedTimeRef.current) > 0.25) {
      correctSeek(video);
    }
  };

  const handleVideoEnded = (event: SyntheticEvent<HTMLVideoElement>) => {
    const video = event.currentTarget;

    setIsPlaying(false);
    setVideoCurrentTime(video.currentTime);
    setVideoDuration(Number.isFinite(video.duration) ? video.duration : videoCurrentTime);
    maxAllowedTimeRef.current = Math.max(maxAllowedTimeRef.current, video.currentTime);
    syncStagesWithWatchedTime(video.currentTime);
    VSL_MILESTONES.forEach((milestone) => trackOnce(milestone.event));
    trackOnce('vsl_complete');
  };

  const toggleVideoPlayback = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      void video.play();
      return;
    }

    video.pause();
  };

  const toggleVideoMute = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  useEffect(() => {
    pushEvent('view_oferta');

    const searchParams = new URLSearchParams(window.location.search);
    const showAll = searchParams.get('showAll') === '1';
    const resetReveal = searchParams.get('resetReveal') === '1';
    const delayParam = searchParams.get('delay');
    const delayOverride = delayParam === null ? NaN : Number(delayParam);
    const hasDelayOverride = Number.isFinite(delayOverride) && delayOverride >= 0;
    const firstStageDelay = hasDelayOverride ? delayOverride : STAGE_1_SECONDS;

    stageThresholdsRef.current = {
      stage2: firstStageDelay,
      stage3: hasDelayOverride ? firstStageDelay * 2 : STAGE_2_SECONDS,
      stage4: hasDelayOverride ? firstStageDelay * 3 : STAGE_3_SECONDS,
    };

    if (resetReveal) {
      try {
        localStorage.removeItem(REVEAL_STAGE_STORAGE_KEY);
        localStorage.removeItem(LEGACY_CTA_UNLOCK_STORAGE_KEY);
      } catch {
        // localStorage can be unavailable in private or restricted browsers.
      }
    }

    const storedStage = (() => {
      try {
        return resetReveal ? 1 : parseRevealStage(localStorage.getItem(REVEAL_STAGE_STORAGE_KEY));
      } catch {
        return 1;
      }
    })();

    trackStageReveal(1);

    if (showAll) {
      revealStagesUntil(4);
      return;
    }

    revealStagesUntil(storedStage);
  }, []);

  return (
    <main className="sales-page">

      {/* ══ NAVBAR ═══════════════════════════ */}
      <nav className="offer-nav" aria-label="Forja Fit">
        <div className="offer-nav-inner">
          <span className="offer-logo">FORJA<span style={{ color: 'var(--accent)', opacity: 0.55 }}>FIT</span></span>
          <div className="access-badge">
            <span style={{ display: 'block', width: 7, height: 7, borderRadius: '50%', background: 'var(--accent-support)', flexShrink: 0 }} />
            <span>Método ECR</span>
          </div>
        </div>
      </nav>

      {/* ══ HERO + VSL ═══════════════════════ */}
      <section className="hero-section">
        <div className="container">
          <p className="hero-eyebrow">
            <span aria-hidden="true" />
            MÉTODO ECR — ENTRADA CERTA RESPONSIVA
            <span aria-hidden="true" />
          </p>

          <h1 className="hero-headline">
            <span>Pare de recomeçar</span>
            <span>do zero.</span>
            <span className="headline-gap" aria-hidden="true" />
            <span>
              Descubra a{' '}
              <strong className="headline-accent">progressão certa</strong>
            </span>
            <span>para o seu corpo.</span>
          </h1>

          <p className="hero-proof-line">
            847 pessoas começaram o Forja Fit nos últimos 7 dias.
          </p>

          <p className="hero-subtitle">
            O Sistema Forja Progressiva alinha seu objetivo, seu nível atual e
            sua rotina real para mostrar o começo certo na era do treino
            genérico.
          </p>

          <div className="vsl-frame">
            <div className="vsl-alert">🔊 ATENÇÃO: Aperte o Play e Aumente o Volume</div>
            <video
              ref={videoRef}
              className="vsl-video"
              src="/vsl-forja-fit.mp4"
              poster="/images/persona-primeiro-treino.png.png"
              playsInline
              preload="metadata"
              controls={false}
              controlsList="nodownload noplaybackrate noremoteplayback"
              disablePictureInPicture
              tabIndex={-1}
              onContextMenu={(event) => event.preventDefault()}
              onLoadedMetadata={handleVideoLoadedMetadata}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onTimeUpdate={handleVideoTimeUpdate}
              onSeeking={handleVideoSeeking}
              onEnded={handleVideoEnded}
            />

            <div className="vsl-custom-controls" aria-label="Controles do vídeo">
              <button
                type="button"
                className="vsl-control-button"
                onClick={toggleVideoPlayback}
                aria-label={isPlaying ? 'Pausar vídeo' : 'Reproduzir vídeo'}
              >
                {isPlaying ? 'Pausar' : 'Play'}
              </button>

              <button
                type="button"
                className="vsl-control-button vsl-control-button-secondary"
                onClick={toggleVideoMute}
                aria-label={isMuted ? 'Ativar som' : 'Silenciar vídeo'}
              >
                {isMuted ? 'Som' : 'Mudo'}
              </button>

              <div className="vsl-progress-row">
                <div
                  className="vsl-progress-track"
                  aria-label={`Progresso do vídeo: ${Math.round(progressPercent)}%`}
                >
                  <span
                    className="vsl-progress-fill"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <span className="vsl-time">
                  {formatVideoTime(videoCurrentTime)} / {formatVideoTime(videoDuration)}
                </span>
              </div>
            </div>
          </div>

          <p
            className={`video-watch-note ${
              currentStage >= 4 ? 'is-unlocked' : ''
            }`}
          >
            {currentStage >= 4
              ? 'Condição liberada: acesso imediato por R$67.'
              : 'Assista ao vídeo para liberar a próxima parte.'}
          </p>

          <Reveal stage={4} currentStage={currentStage} className="hero-checkout-reveal" style={{ textAlign: 'center' }}>
            <Link href={CTA} className="cta-button cta-large" onClick={() => trackCtaClick('cta_hero')}>
              {LABEL}
            </Link>
            <p className="microcopy">Acesso imediato · Garantia de 15 dias · Checkout seguro</p>
          </Reveal>
        </div>
      </section>

      {/* ══ DOR (260s) ════════════════════════ */}
      <Reveal stage={2} currentStage={currentStage} className="pain-section">
        <div className="container">
          <h2>Você Já Se Perguntou Por Que Já Tentou Tantas Vezes?</h2>

          <div className="pain-copy">
            <p>Você baixou o app. Montou a planilha. Comprou o whey.</p>
            <p>Começou na segunda cheio de energia.</p>
            <p>Na quarta, o treino já pesava. Na sexta, você pulou.</p>
            <p>Na outra segunda… recomeçou do zero.</p>
            <div className="copy-pause" />
            <p>E a pior parte não é parar.</p>
            <p className="pain-voice">É a voz na cabeça dizendo que você é fraco.</p>
            <div className="copy-pause" />
            <p className="pain-question">Mas e se o problema nunca foi você?</p>
            <div className="copy-pause" />
            <p>O problema é que você tentou seguir um treino feito para outra pessoa. Outra rotina. Outro nível. Outro objetivo.</p>
            <p className="pain-close">Quando o começo está errado, não existe disciplina que salve.</p>
          </div>

          {currentStage >= 4 && (
            <div className="section-delayed-cta">
              <Link href={CTA} className="cta-button" onClick={() => trackCtaClick('cta_pain')}>
                DESCOBRIR O COMEÇO CERTO →
              </Link>
            </div>
          )}
        </div>
      </Reveal>

      {/* ══ MECANISMO ECR (260s) ══════════════ */}
      <Reveal stage={2} currentStage={currentStage} className="mechanism-section">
        <div className="container">
          <h2>O Método ECR. Entrada Certa, Não Entrada Ideal.</h2>
          <p className="section-subtitle">O único sistema que começa pelo seu ponto real — não pelo ponto ideal do manual.</p>

          <div className="ecr-stack">
            <div className="ecr-card ecr-card-e">
              <span className="ecr-letter">E</span>
              <h3>Entrada</h3>
              <p>Descobre onde você está de verdade. Sem ego, sem chute, sem comparação.</p>
            </div>
            <div className="ecr-card ecr-card-c">
              <span className="ecr-letter">C</span>
              <h3>Certa</h3>
              <p>Monta um plano que cabe na sua semana real — não na semana perfeita que não existe.</p>
            </div>
            <div className="ecr-card ecr-card-r">
              <span className="ecr-letter">R</span>
              <h3>Responsiva</h3>
              <p>O plano se ajusta quando a vida aperta. Você não para — o sistema recalibra.</p>
            </div>
          </div>

          <p className="mechanism-highlight">
            "É como alinhar os trilhos antes de acelerar o trem. A maioria tenta correr mais rápido em trilho torto — e chama a queda de falta de disciplina."
          </p>

          {currentStage >= 4 && (
            <div className="section-delayed-cta">
              <Link href={CTA} className="cta-button" onClick={() => trackCtaClick('cta_mech')}>
                {LABEL} →
              </Link>
            </div>
          )}
        </div>
      </Reveal>

      {/* ══ PROVA SOCIAL (420s) ══════════════ */}
      <Reveal stage={3} currentStage={currentStage} className="proof-section">
        <div className="container" ref={proofRef}>
          <h2>Resultados Reais. Gente Comum.</h2>

          {/* transformation card */}
          <div className="transformation-card">
            <div className="person-bar">
              <Image
                src="/images/Lucas.jpeg"
                alt="Foto de Lucas R., aluno Forja Fit"
                width={1024}
                height={1024}
              />
              <div>
                <strong>Lucas R., 34</strong>
                <span>Curitiba · PR</span>
              </div>
              <span className="week-badge">8 semanas</span>
            </div>

            <div className="before-after-grid">
              <figure>
                <Image
                  src="/images/ANTES.png"
                  alt="Antes do aluno Forja Fit"
                  width={512}
                  height={512}
                />
                <figcaption>
                  <span className="before-label">ANTES</span>
                  <span>"Semana 2. Mesma parede."</span>
                </figcaption>
              </figure>
              <figure>
                <Image
                  src="/images/DEPOIS.png"
                  alt="Depois do aluno Forja Fit"
                  width={512}
                  height={512}
                />
                <figcaption>
                  <span className="after-label">DEPOIS</span>
                  <span>"Semana 8. Outro trilho."</span>
                </figcaption>
              </figure>
            </div>

            <div className="stats-row">
              <div className="stat-box">
                <span>treinos/mês</span>
                <strong><small>3</small>→<span style={{ color: 'var(--accent)', fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 800 }}>14</span></strong>
              </div>
              <div className="stat-box">
                <span>semanas sem travar</span>
                <strong><small>1,5</small>→<span style={{ color: 'var(--accent)', fontSize: 22, fontFamily: 'var(--font-display)', fontWeight: 800 }}>7+</span></strong>
              </div>
            </div>
            <p className="disclaimer">* resultados variam conforme dedicação e rotina</p>
          </div>

          {/* testimonials */}
          <div className="testimonial-stack">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                className="testimonial-card"
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                <Image
                  src={t.avatar}
                  alt={`Foto de ${t.name}, depoimento Forja Fit`}
                  width={1024}
                  height={1024}
                />
                <div>
                  <header>
                    <strong>{t.name}</strong>
                    <span>{t.time}</span>
                  </header>
                  <p>{t.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="live-counter">
            <span aria-hidden="true" />
            <b><Counter target={847} inView={inView} /></b>&nbsp;pessoas começaram nos últimos 7 dias
          </div>

          {currentStage >= 4 && (
            <div className="section-delayed-cta">
              <Link href={CTA} className="cta-button" onClick={() => trackCtaClick('cta_proof')}>
                {LABEL} →
              </Link>
            </div>
          )}
        </div>
      </Reveal>

      {/* ══ OFERTA + PREÇO (600s) ═════════════ */}
      <Reveal stage={4} currentStage={currentStage} className="offer-section" id="oferta">
        <div className="container">
          <h2>Tudo Isso Por Um Preço Que Não Faz Sentido</h2>

          <div className="offer-card">
            <div className="offer-line" aria-hidden="true" />
            <span className="launch-badge">CONDIÇÃO DE LANÇAMENTO</span>

            <ul className="offer-list">
              {INCLUDES.map((item, i) => (
                <li key={i}><span>✓</span> {item}</li>
              ))}
            </ul>

            <div className="dashed-divider" />

            <div className="price-block">
              <span className="old-price">De R$127</span>
              <strong><span>R$</span>67</strong>
              <small>à vista ou 12× no cartão</small>
            </div>

            <Link href={CTA} className="cta-button cta-large" onClick={() => trackCtaClick('cta_offer')}>
              {LABEL} →
            </Link>

            <div className="secure-row">
              <span>🔒 Checkout seguro · Ticto</span>
              <span>🛡 Dados criptografados</span>
            </div>

            <div className="scarcity-pill">
              <span aria-hidden="true" />
              Vagas abertas essa semana: <strong>&nbsp;34</strong>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══ GARANTIA + FAQ + FINAL CTA (600s) ═ */}
      <Reveal stage={4} currentStage={currentStage} className="final-section">
        <div className="container">

          {/* guarantee */}
          <div className="guarantee-box">
            <Image
              src="/images/garantia.png.png"
              alt="Selo de garantia de 15 dias Forja Fit"
              width={300}
              height={261}
            />
            <div>
              <h3>Garantia Total de 15 Dias — Risco Zero</h3>
              <p>Entre, teste, aplique. Se nos primeiros 15 dias você não sentir que é diferente de tudo que já tentou, devolvemos 100% do seu dinheiro. Sem perguntas. Sem burocracia.</p>
            </div>
          </div>

          {/* faq */}
          <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Perguntas Frequentes</h2>
          <div className="faq-list">
            {FAQS.map((f, i) => (
              <details key={i} className="faq-item">
                <summary><span>0{i + 1}</span>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>

          {/* final CTA */}
          <div className="final-cta">
            <h2>
              Chega de recomeçar.
              <span>Entra no trilho certo.</span>
            </h2>
            <Link href={CTA} className="cta-button cta-large" onClick={() => trackCtaClick('cta_final')}>
              {LABEL} →
            </Link>
            <p className="microcopy">acesso imediato · 15 dias de garantia · checkout Ticto</p>
            <div className="live-counter final-counter">
              <span aria-hidden="true" />
              847 homens já começaram. Você é o próximo?
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══ FOOTER ═══════════════════════════ */}
      <footer className="offer-footer">
        FORJAFIT · © 2026 · sistema responsivo de treino
      </footer>

      <OfferPageStyles />
    </main>
  );
}
