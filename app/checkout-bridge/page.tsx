'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { appendStoredUtm } from '@/lib/storage';

export default function CheckoutBridgePage() {
  const searchParams = useSearchParams();
  const checkoutBaseUrl = 'https://checkout.ticto.app/O151D598F?pid=AFCA5C514F';
  const [checkoutUrl, setCheckoutUrl] = useState(checkoutBaseUrl);
  const perfilParam = searchParams.get('perfil');
  const perfil =
    perfilParam === 'recomeco' ||
    perfilParam === 'emagrecimento' ||
    perfilParam === 'evolucao'
      ? perfilParam
      : 'emagrecimento';

  useEffect(() => {
    const nextUrl = new URL(appendStoredUtm(checkoutBaseUrl));

    nextUrl.searchParams.set('perfil', perfil);

    searchParams.forEach((value, key) => {
      if (key.startsWith('utm_') && value) {
        nextUrl.searchParams.set(key, value);
      }
    });

    setCheckoutUrl(nextUrl.toString());
  }, [checkoutBaseUrl, perfil, searchParams]);

  let titulo = 'Você está a um passo de começar';
  let subtitulo =
    'Agora falta só concluir seu acesso para começar com mais direção e praticidade.';
  let destaque =
    'Seu plano foi pensado para reduzir confusão, facilitar a execução e te colocar em movimento.';
  let reforco =
    'Clique no botão abaixo para ir ao pagamento e liberar seu acesso.';

  if (perfil === 'recomeco') {
    titulo = 'Seu próximo passo é começar do jeito certo, sem pressão e sem se perder no meio do caminho';
    subtitulo =
      'Você não precisa de mais culpa nem de promessas impossíveis. Precisa só de um caminho claro para voltar a treinar com constância.';
    destaque =
      'Uma estrutura simples e prática pode ser o que faltava para você sair da estagnação e voltar a sentir evolução.';
    reforco =
      'Conclua seu acesso e comece com mais leveza, clareza e direção.';
  }

  if (perfil === 'emagrecimento') {
    titulo = 'Seu próximo passo é transformar intenção em direção';
    subtitulo =
      'Você já viu qual tipo de plano faz mais sentido para o seu momento. Agora falta só dar o passo que transforma tentativa em ação.';
    destaque =
      'Com mais organização, clareza e constância, seu resultado deixa de parecer distante e começa a ficar possível.';
    reforco =
      'Conclua seu acesso para começar com um plano mais alinhado à sua rotina.';
  }

  if (perfil === 'evolucao') {
    titulo = 'Seu próximo passo é parar de improvisar e acelerar sua evolução com mais estrutura';
    subtitulo =
      'Você tende a evoluir melhor quando segue um plano mais claro, progressivo e pensado para dar direção ao treino.';
    destaque =
      'Com a estrutura certa, seu esforço fica mais inteligente, sua evolução mais visível e sua rotina muito mais consistente.';
    reforco =
      'Conclua seu acesso e comece com mais direção, progressão e clareza.';
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#050816',
        color: '#F8FAFC',
        fontFamily: 'Arial, sans-serif',
        padding: '24px',
      }}
    >
      <div
        style={{
          maxWidth: '860px',
          margin: '0 auto',
          paddingTop: '32px',
          paddingBottom: '48px',
        }}
      >
        <p
          style={{
            color: '#94A3B8',
            fontSize: '14px',
            marginBottom: '12px',
            letterSpacing: '0.3px',
          }}
        >
          ETAPA FINAL
        </p>

        <h1
          style={{
            fontSize: '36px',
            lineHeight: '1.15',
            marginBottom: '18px',
            maxWidth: '800px',
          }}
        >
          {titulo}
        </h1>

        <p
          style={{
            color: '#CBD5E1',
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '800px',
          }}
        >
          {subtitulo}
        </p>

        <div
          style={{
            marginTop: '28px',
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '22px',
            maxWidth: '800px',
          }}
        >
          <p
            style={{
              color: '#A3E635',
              fontSize: '13px',
              marginBottom: '8px',
              letterSpacing: '0.3px',
            }}
          >
            POR QUE ISSO IMPORTA AGORA
          </p>

          <p
            style={{
              fontSize: '18px',
              lineHeight: '1.7',
              margin: 0,
            }}
          >
            {destaque}
          </p>
        </div>

        <div
          style={{
            marginTop: '24px',
            display: 'grid',
            gap: '14px',
            maxWidth: '800px',
          }}
        >
          {[
            'Acesso imediato',
            'Treinos e fichas prontas',
            'Estrutura prática para casa e academia',
            'Garantia de 15 dias',
          ].map((item) => (
            <div
              key={item}
              style={{
                background: '#111827',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                padding: '18px',
                fontSize: '16px',
                lineHeight: '1.6',
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <p
          style={{
            marginTop: '28px',
            color: '#CBD5E1',
            fontSize: '17px',
            lineHeight: '1.8',
            maxWidth: '800px',
          }}
        >
          {reforco}
        </p>

        <div
          style={{
            marginTop: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            maxWidth: '800px',
          }}
        >
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-block',
              width: 'fit-content',
              padding: '14px 22px',
              background: '#22C55E',
              color: '#000',
              fontWeight: 'bold',
              textDecoration: 'none',
              borderRadius: '10px',
            }}
          >
            Ir para o pagamento
          </a>

          <p
            style={{
              color: '#94A3B8',
              fontSize: '14px',
              margin: 0,
            }}
          >
            Pagamento seguro pela Ticto.
          </p>
        </div>

      </div>
    </main>
  );
}
