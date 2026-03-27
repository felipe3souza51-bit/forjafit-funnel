'use client';

import { useEffect } from 'react';
import { storeUtmParams } from '@/lib/storage';

export function UtmCapture() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    storeUtmParams(params);
  }, []);

  return null;
}
