import { Suspense } from 'react';

import { OfferPageClient } from './_components/OfferPageClient';

export default function OfertaPage() {
  return (
    <Suspense fallback={null}>
      <OfferPageClient />
    </Suspense>
  );
}
