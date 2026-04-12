'use client';

import { useSearchParams } from 'next/navigation';

import { OfferConversionSection } from './OfferConversionSection';
import { OfferHeroImmersive } from './OfferHeroImmersive';
import { OfferNarrativeScroll } from './OfferNarrativeScroll';
import { OfferPageStyles } from './OfferPageStyles';
import { OfferTracking } from './OfferTracking';
import { ProgressionMechanismReveal } from './ProgressionMechanismReveal';
import { normalizeProfileKey, offerProfiles } from '../_data/ofertaProfiles';

export function OfferPageClient() {
  const searchParams = useSearchParams();
  const profileKey = normalizeProfileKey(searchParams.get('perfil'));
  const content = offerProfiles[profileKey];

  return (
    <main className="sales-page">
      <OfferTracking />

      <div className="bg-orb orb-1" />
      <div className="bg-orb orb-2" />
      <div className="bg-orb orb-3" />
      <div className="grid-mask" />

      <OfferHeroImmersive content={content} profileKey={profileKey} />
      <OfferNarrativeScroll content={content} />
      <ProgressionMechanismReveal profileLabel={content.shortLabel} />
      <OfferConversionSection content={content} profileKey={profileKey} />
      <OfferPageStyles />
    </main>
  );
}
