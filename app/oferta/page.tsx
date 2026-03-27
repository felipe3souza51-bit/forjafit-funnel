'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

type ProfileContent = {
  heroBadge: string;
  title: string;
  subtitle: string;
  angle: string;
  promise: string;
  highlight: string;
  audience: string[];
  transformationTitle: string;
  transformationText: string;
  beforeLabel: string;
  beforeText: string;
  afterLabel: string;
  afterText: string;
  faqs: { q: string; a: string }[];
};

const benefits = [
  {
    title: 'Treinos para casa e academia',
    text: 'Tenha uma estrutura flexível para treinar do jeito que sua rotina permitir, sem depender de um cenário perfeito.',
  },
  {
    title: 'Fichas prontas para seguir',
    text: 'Pare de improvisar e comece com um plano mais claro, objetivo e fácil de executar no dia a dia.',
  },
  {
    title: 'Vídeo-aulas e apoio visual',
    text: 'Entenda melhor a execução e reduza a insegurança na hora de colocar o treino em prática.',
  },
  {
    title: 'Mais direção e constância',
    text: 'Saia do esforço solto e entre em uma rotina mais inteligente, organizada e mais próxima de resultado.',
  },
];

const deliverables = [
  'Acesso aos treinos organizados por objetivo',
  'Fichas prontas para facilitar sua rotina',
  'Opções para casa e academia',
  'Vídeo-aulas para acompanhar a execução',
  'Materiais extras e bônus complementares',
  'Garantia de 15 dias',
];

const profiles: Record<string, ProfileContent> = {
  recomeco: {
    heroBadge: 'FORJA FIT • PLANO RECOMENDADO PARA RECOMEÇAR COM CONSTÂNCIA',
    title:
      'Volte a treinar com mais direção, leveza e menos chance de parar no meio do caminho.',
    subtitle:
      'Com o Forja Fit, você tem uma estrutura simples, prática e possível de seguir, para sair do eterno recomeço e finalmente ganhar ritmo.',
    angle:
      'Seu perfil mostra que o problema não é falta de vontade. É falta de um caminho claro para continuar.',
    promise:
      'Quando o plano cabe na sua realidade, treinar deixa de parecer uma obrigação pesada e começa a se tornar algo possível de manter.',
    highlight:
      'Menos culpa. Menos confusão. Mais clareza para voltar a agir de verdade.',
    audience: [
      'Para quem está recomeçando e precisa de um plano mais simples de seguir',
      'Para quem quer sair da estagnação sem depender de motivação perfeita',
      'Para quem precisa encaixar o treino na vida real com mais leveza',
    ],
    transformationTitle:
      'O Forja Fit transforma o recomeço em uma rotina possível de seguir.',
    transformationText:
      'A proposta não é te pressionar com promessas irreais. É te dar estrutura para recuperar consistência, reduzir atrito e sentir evolução com mais clareza.',
    beforeLabel: 'ANTES',
    beforeText:
      'Começa animado, trava no meio, perde ritmo e sente que está sempre voltando à estaca zero.',
    afterLabel: 'DEPOIS',
    afterText:
      'Treina com mais clareza, encaixa melhor na rotina e começa a sentir constância como algo real.',
    faqs: [
      {
        q: 'Isso serve para quem está recomeçando do zero?',
        a: 'Sim. Esse é justamente um dos perfis que mais se beneficiam de uma estrutura pronta: menos dúvida, menos atrito e mais chance de continuar.',
      },
      {
        q: 'Preciso ter academia ou equipamentos?',
        a: 'Não obrigatoriamente. A proposta é ter praticidade e flexibilidade, inclusive com opções mais compatíveis com a sua realidade.',
      },
      {
        q: 'E se eu estiver sem constância há muito tempo?',
        a: 'Esse é exatamente o ponto da recomendação: sair do improviso e ter um plano mais simples de seguir pode facilitar muito a retomada.',
      },
    ],
  },
  emagrecimento: {
    heroBadge: 'FORJA FIT • PLANO RECOMENDADO PARA EMAGRECIMENTO COM DIREÇÃO',
    title:
      'Emagreça com mais clareza, consistência e menos esforço desperdiçado.',
    subtitle:
      'Com o Forja Fit, você tem um caminho organizado, direto e adaptável à sua rotina, para sair da tentativa solta e entrar em uma progressão mais inteligente.',
    angle:
      'Seu perfil mostra que você tende a evoluir melhor quando para de tentar no escuro e começa a seguir uma estrutura.',
    promise:
      'Quando você sabe exatamente o que fazer, o resultado deixa de parecer distante e começa a ficar muito mais possível.',
    highlight:
      'Mais organização, mais constância e mais chance real de ver resultado sem viver pulando de estratégia em estratégia.',
    audience: [
      'Para quem quer emagrecer com uma estrutura mais clara e prática',
      'Para quem quer treinar sem perder tempo montando tudo sozinho',
      'Para quem precisa de um plano mais ajustável à rotina real',
    ],
    transformationTitle:
      'O Forja Fit transforma intenção em direção — e direção em resultado possível.',
    transformationText:
      'A ideia não é te entregar mais conteúdo solto. É te colocar em movimento com um plano que organiza seu esforço, melhora sua consistência e aproxima seu corpo do resultado que você quer ver.',
    beforeLabel: 'ANTES',
    beforeText:
      'Muita tentativa, muita informação, pouco direcionamento e sensação de esforço sem progresso claro.',
    afterLabel: 'DEPOIS',
    afterText:
      'Mais estrutura, mais clareza no treino e uma rotina mais consistente para ver o corpo evoluir.',
    faqs: [
      {
        q: 'Isso é indicado para quem quer emagrecer e definir?',
        a: 'Sim. Esse perfil atende justamente quem precisa de mais clareza, constância e organização para evoluir melhor.',
      },
      {
        q: 'Preciso treinar todos os dias para fazer sentido?',
        a: 'Não. A lógica aqui é facilitar consistência e execução dentro da sua rotina, não criar uma meta impossível de manter.',
      },
      {
        q: 'Isso ajuda quem sente que se esforça, mas não sabe se está fazendo o certo?',
        a: 'Sim. Um dos principais ganhos é trocar esforço solto por um caminho mais claro e orientado.',
      },
    ],
  },
  evolucao: {
    heroBadge: 'FORJA FIT • PLANO RECOMENDADO PARA EVOLUÇÃO COM ESTRUTURA',
    title: 'Evolua com mais estrutura, clareza e menos improviso.',
    subtitle:
      'Com o Forja Fit, você tem um plano progressivo e organizado para treinar com mais direção, evoluir com mais clareza e parar de depender do improviso.',
    angle:
      'Seu perfil mostra que o seu próximo nível depende menos de motivação e mais de um sistema claro para evoluir.',
    promise:
      'O Forja Fit transforma esforço solto em uma rotina mais inteligente, organizada e muito mais consistente.',
    highlight:
      'Com o Forja Fit, seu treino ganha direção, seu esforço rende mais e sua evolução deixa de depender da sorte.',
    audience: [
      'Para quem quer evoluir com mais método e menos improviso',
      'Para quem já tenta treinar, mas sente que falta direção',
      'Para quem quer um plano mais estruturado para crescer com mais consistência',
    ],
    transformationTitle:
      'O Forja Fit transforma treino solto em evolução visível com mais método.',
    transformationText:
      'Você não precisa de mais caos, mais vídeos aleatórios ou mais tentativa desorganizada. Precisa de estrutura para fazer seu esforço render mais e sua rotina evoluir melhor.',
    beforeLabel: 'ANTES',
    beforeText:
      'Treina, mas improvisa. Se esforça, mas nem sempre consegue medir progresso com clareza.',
    afterLabel: 'DEPOIS',
    afterText:
      'Ganha direção, progressão e uma rotina muito mais consistente para evoluir de forma real.',
    faqs: [
      {
        q: 'Isso é bom para quem quer ganhar massa muscular?',
        a: 'Sim. Esse perfil foi pensado justamente para quem responde melhor a uma estrutura mais progressiva e organizada.',
      },
      {
        q: 'Já treino, mas sinto que estou estagnado. Ainda faz sentido?',
        a: 'Faz. Muitas vezes o problema não é esforço, e sim falta de direção. É isso que essa proposta tenta resolver.',
      },
      {
        q: 'Preciso ser avançado para aproveitar?',
        a: 'Não. Você só precisa querer um caminho mais claro, estruturado e fácil de seguir com mais consistência.',
      },
    ],
  },
};

export default function OfertaPage() {
  const searchParams = useSearchParams();
  const perfilParam = searchParams.get('perfil') || 'emagrecimento';

  const content = useMemo(() => {
    return profiles[perfilParam] || profiles.emagrecimento;
  }, [perfilParam]);

  return (
    <main className="sales-page">
      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-mask" />

      <section className="hero hero-premium">
        <div className="container">
          <div className="hero-badge">{content.heroBadge}</div>

          <div className="hero-grid hero-grid-premium">
            <div className="hero-copy">
              <h1>{content.title}</h1>
              <p className="hero-subtitle">{content.subtitle}</p>

              <div className="hero-actions">
                <Link
                  href={`/checkout-bridge?perfil=${perfilParam}`}
                  className="btn-primary"
                >
                  Quero acessar meu plano agora
                </Link>

                <a href="#como-funciona" className="btn-secondary">
                  Ver como funciona
                </a>
              </div>

              <div className="hero-trust">
                <span>Plano identificado</span>
                <span>Casa e academia</span>
                <span>Garantia 15 dias</span>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-atmosphere" />

              <div className="hero-photo-support">
                <div className="hero-photo-overlay" />
              </div>

              <div className="mockup-laptop">
                <div className="mockup-topbar">
                  <div className="mock-top-left">
                    <span className="mock-dot" />
                    <span className="mock-dot" />
                    <span className="mock-dot" />
                  </div>
                  <div className="mock-brand">FORJA FIT</div>
                </div>

                <div className="mockup-screen">
                  <div className="mock-sidebar">
                    <div className="mock-logo">FORJA FIT</div>
                    <div className="mock-menu-item active">Planos</div>
                    <div className="mock-menu-item">Fichas</div>
                    <div className="mock-menu-item">Vídeo-aulas</div>
                    <div className="mock-menu-item">Progressão</div>
                  </div>

                  <div className="mock-content">
                    <div className="mock-card mock-video">
                      <div className="mock-video-thumb" />
                      <div className="mock-video-bar" />
                      <p>Vídeo-aula do treino</p>
                    </div>

                    <div className="mock-content-grid">
                      <div className="mock-card">
                        <p className="mock-label">TREINO DE HOJE</p>
                        <strong>Inferior + Glúteo</strong>
                      </div>
                      <div className="mock-card">
                        <p className="mock-label">PLANO</p>
                        <strong>Casa e academia</strong>
                      </div>
                      <div className="mock-card mock-chart">
                        <p className="mock-label">PROGRESSO</p>
                        <div className="bars">
                          <span />
                          <span />
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="mock-card">
                        <p className="mock-label">ACESSO</p>
                        <strong>Rápido e prático</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mockup-phone">
                <div className="phone-notch" />
                <div className="phone-screen">
                  <p className="mock-label">SEU PLANO</p>
                  <strong className="phone-title">Força + Queima</strong>

                  <div className="phone-mini-card">
                    <p className="mock-label">CONSISTÊNCIA</p>
                    <div className="line-chart" />
                  </div>

                  <div className="phone-mini-card">
                    <p className="mock-label">DISCIPLINA</p>
                    <div className="bars small">
                      <span />
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card floating-card-1">
                <span className="floating-title">Plano identificado</span>
                <strong>
                  {perfilParam === 'recomeco'
                    ? 'Recomeço com constância'
                    : perfilParam === 'evolucao'
                    ? 'Evolução com estrutura'
                    : 'Emagrecimento com direção'}
                </strong>
              </div>

              <div className="floating-card floating-card-2">
                <span className="floating-title">Formato</span>
                <strong>Casa e academia</strong>
              </div>

              <div className="floating-card floating-card-3">
                <span className="floating-title">Segurança</span>
                <strong>Garantia de 15 dias</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="como-funciona">
        <div className="container">
          <div className="section-head">
            <p className="eyebrow">POR QUE ESSE PLANO EXISTE</p>
            <h2>
              O Forja Fit existe para transformar confusão em direção, esforço em
              constância e treino em evolução real.
            </h2>
            <p>
              A maioria das pessoas não para porque não quer resultado. Para
              porque se perde no processo. Informação demais, direção de menos e
              uma rotina que nunca parece encaixar. O Forja Fit entra justamente
              nesse ponto: para organizar o caminho e deixar o próximo passo mais
              claro.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-benefits">
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
              <div className="feature-card reveal-up" key={item.title}>
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
                Essa recomendação não é genérica. Ela acompanha o perfil que você
                mostrou no quiz.
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

              <Link
                href={`/checkout-bridge?perfil=${perfilParam}`}
                className="btn-primary"
              >
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

      <section className="section section-final-cta">
        <div className="container">
          <div className="final-cta-box">
            <p className="eyebrow">PRONTO PARA AVANÇAR</p>
            <h2>
              Entre em uma fase com mais direção, mais consistência e mais cara
              de evolução real.
            </h2>
            <p>
              Se o Forja Fit faz sentido para o momento que você está vivendo,
              esse pode ser o ponto em que intenção finalmente vira movimento.
            </p>

            <div className="final-cta-actions">
              <Link
                href={`/checkout-bridge?perfil=${perfilParam}`}
                className="btn-primary"
              >
                Quero continuar
              </Link>
              <span className="cta-note">
                A condição atual aparece na etapa final antes do checkout.
              </span>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .sales-page {
          position: relative;
          min-height: 100vh;
          overflow: hidden;
          background:
            radial-gradient(circle at top left, rgba(34, 197, 94, 0.08), transparent 24%),
            radial-gradient(circle at 80% 15%, rgba(59, 130, 246, 0.08), transparent 18%),
            #050816;
          color: #f8fafc;
          font-family: Arial, sans-serif;
        }

        .grid-mask {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), transparent 86%);
          pointer-events: none;
        }

        .bg-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(90px);
          pointer-events: none;
          opacity: 0.35;
        }

        .orb-1 {
          width: 320px;
          height: 320px;
          background: rgba(34, 197, 94, 0.2);
          top: 80px;
          left: -60px;
        }

        .orb-2 {
          width: 260px;
          height: 260px;
          background: rgba(96, 165, 250, 0.18);
          top: 260px;
          right: -30px;
        }

        .orb-3 {
          width: 320px;
          height: 320px;
          background: rgba(163, 230, 53, 0.1);
          bottom: 220px;
          right: 20%;
        }

        .container {
          position: relative;
          z-index: 1;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
        }

        .hero {
          padding: 44px 0 30px;
        }

        .hero-badge,
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          line-height: 1;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #a3e635;
        }

        .hero-grid-premium {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-top: 18px;
          align-items: center;
        }

        .hero-copy h1 {
          margin: 0;
          font-size: clamp(38px, 5.6vw, 66px);
          line-height: 0.98;
          letter-spacing: -0.04em;
          max-width: 11ch;
        }

        .hero-subtitle {
          margin: 22px 0 0;
          max-width: 720px;
          color: #cbd5e1;
          font-size: 19px;
          line-height: 1.8;
        }

        .hero-actions,
        .final-cta-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          align-items: center;
          margin-top: 26px;
        }

        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 52px;
          padding: 0 20px;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease,
            background 0.2s ease;
        }

        .btn-primary {
          background: linear-gradient(180deg, #36df76 0%, #22c55e 100%);
          color: #04110a;
          box-shadow: 0 10px 30px rgba(34, 197, 94, 0.2);
        }

        .btn-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 16px 36px rgba(34, 197, 94, 0.26);
        }

        .btn-secondary {
          color: #f8fafc;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.02);
        }

        .btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.18);
          background: rgba(255, 255, 255, 0.05);
          transform: translateY(-1px);
        }

        .hero-trust {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 18px;
        }

        .hero-trust span,
        .panel-label {
          display: inline-flex;
          align-items: center;
          min-height: 32px;
          padding: 0 12px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #cbd5e1;
          font-size: 13px;
        }

        .hero-visual {
          position: relative;
          min-height: 620px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-atmosphere {
          position: absolute;
          inset: 12% 8% 12% 8%;
          border-radius: 36px;
          background:
            radial-gradient(circle at 50% 40%, rgba(34, 197, 94, 0.22), transparent 28%),
            radial-gradient(circle at 80% 20%, rgba(163, 230, 53, 0.12), transparent 18%),
            linear-gradient(180deg, rgba(17, 24, 39, 0.55), rgba(5, 8, 22, 0.22));
          filter: blur(6px);
        }

        .hero-photo-support {
          position: absolute;
          inset: 6% 2% 10% 14%;
          border-radius: 32px;
          background:
            radial-gradient(circle at 50% 40%, rgba(34, 197, 94, 0.12), transparent 26%),
            linear-gradient(180deg, rgba(5, 8, 22, 0.08), rgba(5, 8, 22, 0.22));
          border: 1px solid rgba(255, 255, 255, 0.04);
          overflow: hidden;
        }

        .hero-photo-support::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 32px 32px;
          opacity: 0.18;
        }

        .hero-photo-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 78% 26%, rgba(34, 197, 94, 0.18), transparent 18%),
            radial-gradient(circle at 52% 40%, rgba(34, 197, 94, 0.12), transparent 24%),
            linear-gradient(180deg, rgba(5, 8, 22, 0.08), rgba(5, 8, 22, 0.58));
        }

        .mockup-laptop {
          position: relative;
          z-index: 3;
          width: min(92%, 640px);
          border-radius: 24px;
          background: linear-gradient(180deg, #20283b 0%, #0f172a 100%);
          padding: 12px 12px 18px;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: floatMain 5s ease-in-out infinite;
        }

        .mockup-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          height: 18px;
          padding: 0 6px 10px;
        }

        .mock-top-left {
          display: flex;
          gap: 6px;
          align-items: center;
        }

        .mock-brand {
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.12em;
          color: #a3e635;
        }

        .mock-dot {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.24);
        }

        .mockup-screen {
          display: grid;
          grid-template-columns: 160px 1fr;
          min-height: 360px;
          border-radius: 18px;
          overflow: hidden;
          background: #0b1120;
        }

        .mock-sidebar {
          background: rgba(255, 255, 255, 0.03);
          padding: 18px 14px;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
        }

        .mock-logo {
          font-size: 16px;
          font-weight: 800;
          margin-bottom: 18px;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }

        .mock-menu-item {
          height: 38px;
          display: flex;
          align-items: center;
          padding: 0 12px;
          border-radius: 12px;
          color: #94a3b8;
          font-size: 14px;
          margin-bottom: 8px;
          background: transparent;
        }

        .mock-menu-item.active {
          color: #f8fafc;
          background: rgba(34, 197, 94, 0.14);
        }

        .mock-content {
          padding: 16px;
          display: grid;
          gap: 14px;
        }

        .mock-card {
          border-radius: 16px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 14px;
        }

        .mock-card p {
          margin: 0;
        }

        .mock-video-thumb {
          height: 150px;
          border-radius: 12px;
          background:
            radial-gradient(circle at 50% 30%, rgba(34, 197, 94, 0.18), transparent 28%),
            linear-gradient(135deg, #1f2937 0%, #374151 100%);
        }

        .mock-video-bar {
          width: 72%;
          height: 6px;
          border-radius: 999px;
          margin: 12px 0;
          background: linear-gradient(90deg, #22c55e, #86efac);
        }

        .mock-content-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .mock-label,
        .floating-title {
          display: block;
          font-size: 11px;
          color: #94a3b8;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .mock-chart .bars,
        .phone-mini-card .bars {
          display: flex;
          align-items: end;
          gap: 6px;
          height: 60px;
        }

        .mock-chart .bars span,
        .phone-mini-card .bars span {
          display: block;
          width: 14px;
          border-radius: 999px 999px 4px 4px;
          background: linear-gradient(180deg, #86efac, #22c55e);
        }

        .mock-chart .bars span:nth-child(1) {
          height: 26px;
        }
        .mock-chart .bars span:nth-child(2) {
          height: 36px;
        }
        .mock-chart .bars span:nth-child(3) {
          height: 48px;
        }
        .mock-chart .bars span:nth-child(4) {
          height: 34px;
        }
        .mock-chart .bars span:nth-child(5) {
          height: 54px;
        }

        .phone-mini-card .bars.small span:nth-child(1) {
          height: 18px;
          width: 10px;
        }
        .phone-mini-card .bars.small span:nth-child(2) {
          height: 30px;
          width: 10px;
        }
        .phone-mini-card .bars.small span:nth-child(3) {
          height: 24px;
          width: 10px;
        }
        .phone-mini-card .bars.small span:nth-child(4) {
          height: 38px;
          width: 10px;
        }

        .mockup-phone {
          position: absolute;
          right: -10px;
          bottom: 38px;
          z-index: 4;
          width: 180px;
          border-radius: 28px;
          background: linear-gradient(180deg, #20283b 0%, #0f172a 100%);
          padding: 10px;
          box-shadow:
            0 20px 50px rgba(0, 0, 0, 0.45),
            0 0 0 1px rgba(255, 255, 255, 0.08);
          animation: floatPhone 6s ease-in-out infinite;
        }

        .phone-notch {
          width: 68px;
          height: 16px;
          border-radius: 999px;
          background: rgba(0, 0, 0, 0.5);
          margin: 0 auto 10px;
        }

        .phone-screen {
          min-height: 300px;
          border-radius: 20px;
          background: #0b1120;
          padding: 16px;
        }

        .phone-title {
          display: block;
          margin-bottom: 12px;
          font-size: 20px;
          line-height: 1.15;
        }

        .phone-mini-card {
          border-radius: 14px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          padding: 12px;
          margin-top: 12px;
        }

        .line-chart {
          height: 56px;
          border-radius: 12px;
          background:
            linear-gradient(180deg, rgba(34, 197, 94, 0.18), transparent),
            linear-gradient(
              135deg,
              transparent 0 18%,
              #86efac 18% 22%,
              transparent 22% 34%,
              #86efac 34% 38%,
              transparent 38% 55%,
              #86efac 55% 59%,
              transparent 59%
            );
        }

        .floating-card {
          position: absolute;
          z-index: 5;
          min-width: 180px;
          max-width: 220px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(10, 15, 28, 0.82);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
          backdrop-filter: blur(10px);
        }

        .floating-card strong {
          display: block;
          line-height: 1.35;
        }

        .floating-card-1 {
          top: 42px;
          left: -6px;
          animation: floatCard1 6s ease-in-out infinite;
        }

        .floating-card-2 {
          top: 240px;
          right: -20px;
          animation: floatCard2 7s ease-in-out infinite;
        }

        .floating-card-3 {
          bottom: 20px;
          left: 10px;
          animation: floatCard3 6.5s ease-in-out infinite;
        }

        .section {
          padding: 38px 0;
        }

        .section-benefits {
          padding-top: 24px;
        }

        .section-head {
          max-width: 860px;
        }

        .section-head h2,
        .transformation-copy h2,
        .highlight-band h2,
        .guarantee-copy h2,
        .final-cta-box h2 {
          margin: 12px 0 0;
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .section-head p,
        .section-text,
        .guarantee-copy p,
        .final-cta-box p,
        .transformation-copy p {
          color: #cbd5e1;
          line-height: 1.85;
          font-size: 17px;
        }

        .benefit-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          margin-top: 28px;
        }

        .feature-card,
        .deliverable-item,
        .audience-card,
        .faq-item,
        .highlight-band,
        .guarantee-box,
        .final-cta-box,
        .before-panel,
        .after-panel {
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: rgba(17, 24, 39, 0.72);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
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
          border-color: rgba(255, 255, 255, 0.14);
          background: rgba(17, 24, 39, 0.9);
        }

        .feature-icon {
          width: 12px;
          height: 12px;
          border-radius: 999px;
          margin-bottom: 16px;
          background: linear-gradient(180deg, #a3e635, #22c55e);
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.35);
        }

        .feature-card h3 {
          margin: 0 0 10px;
          font-size: 22px;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .feature-card p {
          margin: 0;
          color: #cbd5e1;
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
          border: 1px solid rgba(255, 255, 255, 0.07);
          background: linear-gradient(180deg, rgba(11, 17, 32, 0.92), rgba(17, 24, 39, 0.82));
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
          color: #f8fafc;
          line-height: 1.6;
        }

        .point-dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 16px rgba(34, 197, 94, 0.4);
          flex: 0 0 10px;
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
            radial-gradient(circle at 50% 32%, rgba(34, 197, 94, 0.1), transparent 20%),
            linear-gradient(180deg, rgba(17, 24, 39, 0.4), rgba(5, 8, 22, 0.1));
          border: 1px solid rgba(255, 255, 255, 0.06);
          overflow: hidden;
        }

        .transform-image {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(180deg, rgba(5, 8, 22, 0.12), rgba(5, 8, 22, 0.62)),
            url('/transformacao.jpg');
          background-size: cover;
          background-position: center top;
          filter: saturate(0.95) contrast(1.02);
        }

        .body-card {
          position: absolute;
          min-width: 150px;
          padding: 14px 16px;
          border-radius: 18px;
          background: rgba(10, 15, 28, 0.82);
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
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.84), rgba(8, 12, 22, 0.88));
        }

        .after-panel {
          background: linear-gradient(180deg, rgba(20, 36, 27, 0.84), rgba(8, 12, 22, 0.88));
        }

        .panel-label-green {
          color: #a3e635;
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
          background: linear-gradient(180deg, rgba(17, 24, 39, 0.18), rgba(8, 12, 22, 0.34));
        }

        .state-figure-after {
          background: linear-gradient(180deg, rgba(20, 36, 27, 0.16), rgba(8, 12, 22, 0.24));
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
            linear-gradient(180deg, rgba(5, 8, 22, 0.1), rgba(5, 8, 22, 0.5)),
            url('/antes.jpg');
          background-size: cover;
          background-position: center;
        }

        .state-image-after {
          background:
            linear-gradient(180deg, rgba(5, 8, 22, 0.08), rgba(5, 8, 22, 0.38)),
            url('/depois.jpg');
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
          background: linear-gradient(180deg, transparent, rgba(34, 197, 94, 0.55), transparent);
        }

        .before-panel p,
        .after-panel p {
          margin: 0;
          color: #cbd5e1;
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

        .check-dot {
          width: 11px;
          height: 11px;
          flex: 0 0 11px;
          border-radius: 999px;
          background: #22c55e;
          box-shadow: 0 0 18px rgba(34, 197, 94, 0.45);
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
          background: linear-gradient(180deg, rgba(34, 197, 94, 0.08), rgba(17, 24, 39, 0.78));
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
          color: #a3e635;
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
          color: #cbd5e1;
          line-height: 1.8;
        }

        .section-final-cta {
          padding-bottom: 56px;
        }

        .final-cta-box {
          border-radius: 28px;
          padding: 28px;
          background: linear-gradient(180deg, rgba(11, 17, 32, 0.92), rgba(17, 24, 39, 0.9));
        }

        .cta-note {
          color: #94a3b8;
          font-size: 14px;
        }

        .reveal-up {
          animation: revealUp 0.8s ease both;
        }

        @keyframes revealUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes floatMain {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes floatPhone {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes floatCard1 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @keyframes floatCard2 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes floatCard3 {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @media (max-width: 980px) {
          .hero-grid-premium,
          .benefit-grid,
          .split,
          .guarantee-box,
          .audience-list,
          .transformation-shell,
          .before-after-shell {
            grid-template-columns: 1fr;
          }

          .center-divider {
            display: none;
          }

          .hero-visual {
            min-height: 560px;
            margin-top: 18px;
          }

          .mockup-phone {
            right: 6px;
            bottom: 24px;
            width: 150px;
          }

          .floating-card-1 {
            left: 6px;
          }

          .floating-card-2 {
            right: 0;
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
            width: min(1120px, calc(100% - 24px));
          }

          .hero {
            padding-top: 26px;
          }

          .hero-copy h1 {
            max-width: none;
          }

          .hero-subtitle,
          .section-head p,
          .section-text,
          .guarantee-copy p,
          .final-cta-box p,
          .transformation-copy p {
            font-size: 16px;
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

          .hero-visual {
            min-height: 500px;
          }

          .mockup-laptop {
            width: 100%;
            padding: 10px 10px 14px;
          }

          .mockup-screen {
            grid-template-columns: 1fr;
          }

          .mock-sidebar {
            display: none;
          }

          .mock-video-thumb {
            height: 120px;
          }

          .mockup-phone {
            width: 128px;
            right: 0;
            bottom: 10px;
          }

          .floating-card {
            min-width: 140px;
            max-width: 160px;
            padding: 12px;
            font-size: 13px;
          }

          .floating-card-2 {
            top: auto;
            bottom: 150px;
            right: 0;
          }

          .floating-card-3 {
            left: 0;
            bottom: 0;
          }

          .feature-card,
          .deliverable-item,
          .audience-card,
          .faq-item,
          .highlight-band,
          .guarantee-box,
          .final-cta-box,
          .transformation-shell,
          .before-panel,
          .after-panel,
          .hero-photo-support,
          .body-frame {
            border-radius: 20px;
          }

          .body-card {
            min-width: 120px;
            padding: 12px;
          }
        }
      `}</style>
    </main>
  );
}
