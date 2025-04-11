'use client';

import { useEffect } from 'react';
import { initSmoothScrolling } from '@/utils/smoothScroll';
import { scroll } from '@/utils/scroll.js';
import { preloadImages } from '@/utils/preloadImages';


import { SectionHero, SectionBlock1, SectionBlockReel, SectionBlockDf2u, HorizontalScrollDf2u, SectionBlockSlack, SectionBlockNightcap, SectionBlockMecedes, SectionBlockTableau, SectionBlockDotOrg, SectionBlock7, SectionBlock8, SectionBlock9, SectionBlock10 } from './components';

export default function Home() {
  useEffect(() => {
    preloadImages('.gallery__item').then(() => {
      initSmoothScrolling();
      scroll();
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <main className="main">
      <SectionHero />
      <SectionBlock1 />
      <SectionBlockReel />
      <SectionBlockDf2u />
      <HorizontalScrollDf2u />
      <SectionBlockSlack />
      <SectionBlockNightcap />
      <SectionBlockMecedes />
      <SectionBlockTableau/>
      <SectionBlockDotOrg/>
      <SectionBlock7 />
      <SectionBlock8 />
      <SectionBlock9 />
      <SectionBlock10 />
    </main>
  );
}