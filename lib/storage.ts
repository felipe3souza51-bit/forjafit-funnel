'use client';

import { QuizAnswers } from './types';

const ANSWERS_KEY = 'ff_quiz_answers';
const UTM_KEY = 'ff_utm';

export function getStoredAnswers(): QuizAnswers {
  if (typeof window === 'undefined') return {};
  const raw = window.localStorage.getItem(ANSWERS_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as QuizAnswers;
  } catch {
    return {};
  }
}

export function saveAnswer(questionId: string, value: string) {
  const current = getStoredAnswers();
  const next = { ...current, [questionId]: value };
  window.localStorage.setItem(ANSWERS_KEY, JSON.stringify(next));
  return next;
}

export function storeUtmParams(params: URLSearchParams) {
  if (typeof window === 'undefined') return;
  const utm = {
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || ''
  };
  window.localStorage.setItem(UTM_KEY, JSON.stringify(utm));
}

export function getStoredUtm(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  const raw = window.localStorage.getItem(UTM_KEY);
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Record<string, string>;
  } catch {
    return {};
  }
}

export function appendStoredUtm(url: string) {
  const utm = getStoredUtm();
  const nextUrl = new URL(url);
  Object.entries(utm).forEach(([key, value]) => {
    if (value) nextUrl.searchParams.set(key, value);
  });
  return nextUrl.toString();
}
