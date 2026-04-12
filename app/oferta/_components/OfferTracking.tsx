'use client';

import { useEffect } from 'react';

import { pushEvent } from '@/lib/gtm';

export function OfferTracking() {
  useEffect(() => {
    pushEvent('view_oferta');
  }, []);

  return null;
}
