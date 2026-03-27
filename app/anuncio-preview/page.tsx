'use client';

import Link from 'next/link';

export default function AnuncioPreviewPage() {
  return (
    <main style={{ padding: '40px', fontFamily: 'Arial', color: 'white' }}>
      <h1>Descubra qual treino combina com seu objetivo</h1>
      <p>
        Responda um teste rápido e veja qual plano faz mais sentido para seu momento.
      </p>

      <Link
        href="/quiz"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 20px',
          background: '#22c55e',
          color: '#000',
          fontWeight: 'bold',
          textDecoration: 'none',
          borderRadius: '8px',
        }}
      >
        Começar agora
      </Link>
    </main>
  );
}