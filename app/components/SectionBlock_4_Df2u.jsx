'use client';

import { useEffect } from 'react';
import { initSplitText, initSplitLinesAnimations } from '@/utils/animateCaption';
import "../../styles/df2u.css";

export function SectionBlockDf2u() {
  useEffect(() => {
    initSplitText();
    initSplitLinesAnimations();
  }, []);

  return (
    <div id="df2uSection">
      <section className="project project--details project--right">
        <span className="project__label project__label--default">
          Slack Keynote UI<br />
          and product features<br />
          animations
        </span>
      </section>
      <div className="gallery-wrap">
        <div className="gallery gallery--gridCircles" id="section-Df2u">
          <div className="gallery__item circle-left">
            <svg className="circle-center item-circle" width="100%" height="100%" viewBox="0 0 904 904" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M451.808 902.617C700.783 902.617 902.616 700.783 902.616 451.808C902.616 202.834 700.783 1 451.808 1C202.834 1 1 202.834 1 451.808C1 700.783 202.834 902.617 451.808 902.617Z" stroke="white" strokeWidth="0.869967" strokeMiterlimit="10" />
            </svg>
          </div>
          <div className="gallery__item circle-center">
            <svg className="circle-center item-circle" width="100%" height="100%" viewBox="0 0 904 904" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M451.808 902.617C700.783 902.617 902.616 700.783 902.616 451.808C902.616 202.834 700.783 1 451.808 1C202.834 1 1 202.834 1 451.808C1 700.783 202.834 902.617 451.808 902.617Z" stroke="white" strokeWidth="0.869967" strokeMiterlimit="10" />
            </svg>
          </div>
          <div className="gallery__item circle-right">
            <svg className="circle-center item-circle" width="100%" height="100%" viewBox="0 0 904 904" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.8" d="M451.808 902.617C700.783 902.617 902.616 700.783 902.616 451.808C902.616 202.834 700.783 1 451.808 1C202.834 1 1 202.834 1 451.808C1 700.783 202.834 902.617 451.808 902.617Z" stroke="white" strokeWidth="0.869967" strokeMiterlimit="10" />
            </svg>
          </div>
          <div className="captionBlockText">
            <h3 className="split-lines animate-scroll-each single-line not-split">
               We<br/>
               reconnected<br/>
               with the people<br/>
               bringing<br/>
               Dreamfoces<br/>
               back home.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
