'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const perguntas = [
  {
    id: 'objetivo',
    titulo: 'Qual é seu principal objetivo?',
    opcoes: [
      'Emagrecer',
      'Ganhar massa muscular',
      'Definir o corpo',
      'Sair do sedentarismo',
    ],
  },
  {
    id: 'nivel',
    titulo: 'Como você se considera hoje?',
    opcoes: [
      'Iniciante',
      'Intermediário',
      'Já treino, mas sem constância',
      'Estou voltando agora',
    ],
  },
  {
    id: 'local',
    titulo: 'Onde você prefere treinar?',
    opcoes: [
      'Em casa',
      'Na academia',
      'Quero ter as duas opções',
      'Ainda não decidi',
    ],
  },
  {
    id: 'frequencia',
    titulo: 'Quantos dias por semana você consegue treinar?',
    opcoes: [
      '2 a 3 dias',
      '4 a 5 dias',
      '6 dias ou mais',
      'Ainda estou tentando criar rotina',
    ],
  },
  {
    id: 'dificuldade',
    titulo: 'Qual é sua maior dificuldade hoje?',
    opcoes: [
      'Não sei que treino fazer',
      'Falta de constância',
      'Falta de tempo',
      'Começo e paro no meio',
    ],
  },
  {
    id: 'plano',
    titulo: 'Que tipo de plano combina mais com você?',
    opcoes: [
      'Simples e direto',
      'Mais completo e estruturado',
      'Flexível para minha rotina',
      'Algo que me motive a continuar',
    ],
  },
];

export default function QuizPage() {
  const router = useRouter();
  const [etapa, setEtapa] = useState(0);
  const [respostas, setRespostas] = useState<Record<string, string>>({});

  const perguntaAtual = perguntas[etapa];
  const progresso = ((etapa + 1) / perguntas.length) * 100;

  function selecionarResposta(valor: string) {
    const novasRespostas = {
      ...respostas,
      [perguntaAtual.id]: valor,
    };

    setRespostas(novasRespostas);

    if (etapa < perguntas.length - 1) {
      setEtapa(etapa + 1);
      return;
    }

    const params = new URLSearchParams(novasRespostas).toString();
    router.push(`/resultado?${params}`);
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
          maxWidth: '760px',
          margin: '0 auto',
          paddingTop: '32px',
          paddingBottom: '32px',
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
          DIAGNÓSTICO PERSONALIZADO
        </p>

        <div
          style={{
            width: '100%',
            height: '10px',
            background: '#111827',
            borderRadius: '999px',
            marginBottom: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            style={{
              width: `${progresso}%`,
              height: '100%',
              background: '#22C55E',
            }}
          />
        </div>

        <p
          style={{
            color: '#CBD5E1',
            fontSize: '14px',
            marginBottom: '20px',
          }}
        >
          Pergunta {etapa + 1} de {perguntas.length}
        </p>

        <h1
          style={{
            fontSize: '32px',
            lineHeight: '1.2',
            marginBottom: '28px',
            maxWidth: '640px',
          }}
        >
          {perguntaAtual.titulo}
        </h1>

        <div style={{ display: 'grid', gap: '14px', maxWidth: '640px' }}>
          {perguntaAtual.opcoes.map((opcao) => (
            <button
              key={opcao}
              onClick={() => selecionarResposta(opcao)}
              style={{
                padding: '18px 18px',
                background: '#111827',
                color: '#F8FAFC',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '16px',
                fontWeight: 600,
                fontSize: '16px',
                textAlign: 'left',
                cursor: 'pointer',
              }}
            >
              {opcao}
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}