'use client';

import { useEffect } from 'react';
import { initPreloader } from '@/utils/initPreloader';
import { initSmoothScrolling } from '@/utils/smoothScroll';
import { scroll } from '@/utils/scroll.js';
import { preloadImages } from '@/utils/preloadImages';
import { activateElements, activateElementsDelay, activateAnimations } from '@/utils/activeElemente';
import { initSplitText, initSplitLinesAnimations } from '@/utils/animateSplit';
import { LoaderInit, SectionHero, SectionBlock1, SectionBlockReel, SectionBlockDf2u, HorizontalScrollDf2u, SectionBlockSlack, SectionBlockNightcap, SectionBlockMecedes, SectionBlockTableau, SectionBlockDotOrg } from './components';

export default function Home() {
  useEffect(() => {
    document.body.classList.add('cs-transition');
    initPreloader(); 

    preloadImages('.gallery__item').then(() => {
      requestAnimationFrame(() => {
        initSplitText();
        initSplitLinesAnimations();
      });
      initSmoothScrolling();
      scroll();
      activateElements();
      activateElementsDelay();
      activateAnimations();
      document.body.classList.remove('loading');
    });
  }, []);

  return (
    <main className="main">
      <LoaderInit />
      <SectionHero />
      <SectionBlock1 />
      <SectionBlockReel />
      <SectionBlockDf2u /> 
      <HorizontalScrollDf2u />
      <SectionBlockSlack />
      <SectionBlockNightcap /> 
      <SectionBlockMecedes/>
      <SectionBlockTableau/>
      <SectionBlockDotOrg/>
    </main>
  );
}