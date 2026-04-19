import { Suspense } from 'react';
import { Metadata } from 'next';
import { OfferPageClient } from './_components/OfferPageClient';

export const metadata: Metadata = {
  title: 'Forja Fit · Entra no trilho certo',
  description: 'O único sistema que começa pelo seu ponto real. Plano alinhado ao seu objetivo, nível e rotina. R$67 com garantia de 15 dias.',
  openGraph: {
    title: 'Forja Fit · Entra no trilho certo',
    description: 'Para de recomeçar do zero. O Método ECR cruza objetivo, nível e rotina para entregar um plano que cabe na sua vida.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Forja Fit',
    images: [
      {
        url: '/images/DEPOIS.png',
        width: 1200,
        height: 630,
        alt: 'Forja Fit — Sistema responsivo de treino',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Forja Fit · Entra no trilho certo',
    description: 'Para de recomeçar do zero. Plano alinhado ao seu objetivo, nível e rotina. R$67.',
    images: ['/images/DEPOIS.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OfertaPage() {
  return (
    <Suspense fallback={null}>
      <OfferPageClient />
    </Suspense>
  );
}
