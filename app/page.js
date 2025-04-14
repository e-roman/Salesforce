'use client';

import { useEffect } from 'react';
import { initSmoothScrolling } from '@/utils/smoothScroll';
import { scroll } from '@/utils/scroll.js';
import { preloadImages } from '@/utils/preloadImages';
import { activateElements, activateElementsDelay, activateAnimations } from '@/utils/activeElemente';
import { initSplitText, initSplitLinesAnimations } from '@/utils/animateSplit';

import { SectionHero, SectionBlock1, SectionBlockReel, SectionBlockDf2u, HorizontalScrollDf2u, SectionBlockSlack, SectionBlockNightcap, SectionBlockMecedes, SectionBlockTableau, SectionBlockDotOrg, SectionBlock7, SectionBlock8, SectionBlock9, SectionBlock10 } from './components';

export default function Home() {
  useEffect(() => {
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
     {/* <SectionHero />
      <SectionBlock1 />
      <SectionBlockReel />
      <SectionBlockDf2u /> 
      <HorizontalScrollDf2u />
      <SectionBlockSlack />
      <SectionBlockNightcap /> */}
      <SectionBlockMecedes/>
      <SectionBlockTableau/>
      <SectionBlockDotOrg/>
     {/* <SectionBlock7 />
      <SectionBlock8 />
      <SectionBlock9 />
      <SectionBlock10 />  */}
    </main>
  );
}