'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function ResultadoPage() {
  const searchParams = useSearchParams();

  const objetivo = searchParams.get('objetivo') || '';
  const nivel = searchParams.get('nivel') || '';
  const local = searchParams.get('local') || '';
  const frequencia = searchParams.get('frequencia') || '';
  const dificuldade = searchParams.get('dificuldade') || '';
  const plano = searchParams.get('plano') || '';

  let pontosRecomeco = 0;
  let pontosEmagrecimento = 0;
  let pontosEvolucao = 0;

  if (objetivo === 'Sair do sedentarismo') pontosRecomeco += 3;
  if (objetivo === 'Emagrecer') pontosEmagrecimento += 3;
  if (objetivo === 'Definir o corpo') pontosEmagrecimento += 2;
  if (objetivo === 'Ganhar massa muscular') pontosEvolucao += 3;

  if (nivel === 'Iniciante') pontosRecomeco += 2;
  if (nivel === 'Estou voltando agora') pontosRecomeco += 3;
  if (nivel === 'Intermediário') pontosEvolucao += 2;
  if (nivel === 'Já treino, mas sem constância') pontosEvolucao += 1;

  if (local === 'Em casa') pontosEmagrecimento += 1;
  if (local === 'Quero ter as duas opções') pontosEmagrecimento += 1;
  if (local === 'Na academia') pontosEvolucao += 2;
  if (local === 'Ainda não decidi') pontosRecomeco += 1;

  if (frequencia === '2 a 3 dias') pontosEmagrecimento += 1;
  if (frequencia === '4 a 5 dias') pontosEmagrecimento += 1;
  if (frequencia === '6 dias ou mais') pontosEvolucao += 2;
  if (frequencia === 'Ainda estou tentando criar rotina') pontosRecomeco += 3;

  if (dificuldade === 'Não sei que treino fazer') pontosEmagrecimento += 2;
  if (dificuldade === 'Falta de constância') pontosRecomeco += 2;
  if (dificuldade === 'Falta de tempo') pontosEmagrecimento += 2;
  if (dificuldade === 'Começo e paro no meio') pontosRecomeco += 3;

  if (plano === 'Simples e direto') pontosRecomeco += 2;
  if (plano === 'Mais completo e estruturado') pontosEvolucao += 3;
  if (plano === 'Flexível para minha rotina') pontosEmagrecimento += 2;
  if (plano === 'Algo que me motive a continuar') pontosRecomeco += 2;

  let perfil = 'emagrecimento';
  let titulo = 'Seu perfil é de emagrecimento com direção';
  let descricao =
    'Você não precisa de mais informação solta, treinos aleatórios ou tentativas que começam bem e morrem no meio do caminho. O que mais combina com você é um plano organizado, direto e adaptável à sua rotina, para ajudar no emagrecimento com mais clareza, consistência e menos confusão. Quando você sabe exatamente o que fazer, o resultado deixa de parecer distante e começa a ficar possível.';
  let destaque =
    'Você tende a evoluir melhor com uma estrutura prática, organizada e adaptável à sua rotina.';

  if (
    pontosRecomeco >= pontosEmagrecimento &&
    pontosRecomeco >= pontosEvolucao
  ) {
    perfil = 'recomeco';
    titulo =
      'Seu perfil mostra que o que está faltando não é vontade. É um caminho possível de seguir.';
    descricao =
      'Você não precisa de mais pressão, culpa ou promessas impossíveis. O que você precisa agora é de uma estrutura simples, prática e fácil de encaixar na sua rotina, para parar de recomeçar toda hora e finalmente ganhar constância. Quando o plano faz sentido para a sua realidade, fica muito mais fácil sair da estagnação e voltar a sentir que você está evoluindo de verdade.';
    destaque =
      'Seu melhor próximo passo é começar com clareza, leveza e um plano possível de seguir.';
  } else if (
    pontosEvolucao > pontosEmagrecimento &&
    pontosEvolucao > pontosRecomeco
  ) {
    perfil = 'evolucao';
    titulo =
      'Seu perfil mostra que seu próximo nível depende menos de motivação e mais de direção.';
    descricao =
      'Você já não está no ponto de só tentar qualquer coisa. O que vai acelerar sua evolução é um plano progressivo, bem organizado e pensado para dar direção ao seu treino. Sem improviso, sem perda de tempo e sem aquela sensação de estar se esforçando muito sem sair do lugar. Com a estrutura certa, sua evolução fica mais clara, mais consistente e muito mais real.';
    destaque =
      'Seu perfil combina com um plano mais estruturado, progressivo e focado em evolução real.';
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
          maxWidth: '820px',
          margin: '0 auto',
          paddingTop: '32px',
          paddingBottom: '40px',
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
          RESULTADO DO SEU DIAGNÓSTICO
        </p>

        <h1
          style={{
            fontSize: '34px',
            lineHeight: '1.2',
            marginBottom: '18px',
            maxWidth: '760px',
          }}
        >
          {titulo}
        </h1>

        <p
          style={{
            color: '#CBD5E1',
            fontSize: '18px',
            lineHeight: '1.8',
            maxWidth: '760px',
          }}
        >
          {descricao}
        </p>

        <div
          style={{
            marginTop: '28px',
            background: '#111827',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '18px',
            padding: '20px',
            maxWidth: '760px',
          }}
        >
          <p
            style={{
              color: '#94A3B8',
              fontSize: '13px',
              marginBottom: '8px',
            }}
          >
            RECOMENDADO PARA VOCÊ
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
            marginTop: '28px',
            display: 'grid',
            gap: '12px',
            maxWidth: '760px',
          }}
        >
          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '16px',
            }}
          >
            Plano alinhado ao seu momento atual
          </div>

          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '16px',
            }}
          >
            Mais clareza para treinar sem improviso
          </div>

          <div
            style={{
              background: '#111827',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '16px',
              padding: '16px',
            }}
          >
            Estrutura prática para manter consistência
          </div>
        </div>

        <Link
          href={`/oferta?perfil=${perfil}`}
          style={{
            display: 'inline-block',
            marginTop: '28px',
            padding: '14px 22px',
            background: '#22C55E',
            color: '#000',
            fontWeight: 'bold',
            textDecoration: 'none',
            borderRadius: '10px',
          }}
        >
          Ver plano recomendado
        </Link>
      </div>
    </main>
  );
}