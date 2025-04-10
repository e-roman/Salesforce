'use client';

import { useEffect } from 'react';
import { initSmoothScrolling } from '@/utils/smoothScroll';
import { scroll } from '@/utils/scroll';
import { preloadImages } from '@/utils/preloadImages';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

import { HeroIniit, SectionBlock1, SectionBlock2, SectionBlock3, SectionBlock4, SectionBlock5, SectionBlock6, SectionBlock7, SectionBlock8, SectionBlock9, SectionBlock10 } from './components';

export default function Home() {
  useEffect(() => {
    preloadImages('.gallery__item').then(() => {
      initSmoothScrolling();
      scroll();
      initHorizontalScroll();
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <main className="main">
      <HeroIniit />
      <SectionBlock1 />
      <SectionBlock2 />
      <SectionBlock3 />
      <SectionBlock4/>
      <SectionBlock5 />
      <SectionBlock6 />
      <SectionBlock7 />
      <SectionBlock8 />
      <SectionBlock9 />
      <SectionBlock10 />
    </main>
  );
}