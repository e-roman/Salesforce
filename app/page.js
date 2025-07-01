'use client';


import { useEffect, useState } from 'react';

import { initPreloader } from '@/utils/initPreloader';
import { initSmoothScrolling } from '@/utils/smoothScroll';
import { scroll } from '@/utils/scroll.js';
import { preloadImages } from '@/utils/preloadImages';
import { activateElements, activateElementsDelay, activateAnimations, activateZoomText } from '@/utils/activeElemente';
import { initSplitText, initSplitLinesAnimations } from '@/utils/animateSplit';
import { LoaderInit, SectionBlockMobile, SectionHero, SectionBlock1, SectionBlockReel, SectionBlockDf2u, HorizontalScrollDf2u, SectionBlockSlack, SectionBlockNightcap, SectionBlockMecedes, SectionBlockTableau, SectionBlockDotOrg, SectionBlockQuote } from './components';

export default function Home() {
 const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 1200);
    };

    checkScreenSize(); // Inicial
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    if (!isMobileView) {
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
        activateZoomText();
        document.body.classList.remove('loading');
      });
    }
  }, [isMobileView]);

  return (
    <main className="main">
      {isMobileView ? (
        <SectionBlockMobile />
      ) : (
        <>
          <LoaderInit />
          <SectionHero />
          <SectionBlock1 />
          <SectionBlockReel />
          <SectionBlockDf2u />
          <HorizontalScrollDf2u />
          <SectionBlockSlack />
          <SectionBlockNightcap />
          <SectionBlockMecedes />
          <SectionBlockTableau />
          <SectionBlockDotOrg />
          <SectionBlockQuote />
        </>
      )}
    </main>
  );
}