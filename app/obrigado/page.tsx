'use client';

import { useEffect } from 'react';
import { pushEvent } from '@/lib/gtm';

export default function ObrigadoPage() {
  useEffect(() => {
    pushEvent('purchase');
  }, []);

  return (
    <main style={{ padding: '40px', fontFamily: 'Arial', color: 'white' }}>
      <h1>Obrigado pela sua compra</h1>
      <p>
        Seu acesso será enviado conforme a plataforma de pagamento confirmar a compra.
      </p>
    </main>
  );
}
