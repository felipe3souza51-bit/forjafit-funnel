'use client';

import { useEffect } from 'react';
import { track } from '@/lib/tracking';

export function Tracker({ event, params = {} }: { event: string; params?: Record<string, unknown> }) {
  useEffect(() => {
    track(event, params);
  }, [event, params]);

  return null;
}
