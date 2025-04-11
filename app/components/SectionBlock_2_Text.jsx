// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock1() {
  return (
    <>
        <section className="project--intro">
            <h2 className="project__title">
                <span className="project__title-line split-lines animate-scroll-each single-line not-split">Connecting is the art</span>
                <span className="project__title-line split-lines animate-scroll-each single-line not-split">of delving deeper within.</span>
            </h2>
            <div className='block-textIntro'>
              <p className='split-lines animate-scroll-each single-line not-split'>Our profound connection to everything we engage with shapes the very essence of who we are.</p>
              <p className='split-lines animate-scroll-each single-line not-split'>Over the years, our partnership with Salesforce has ignited and amplified our creative journey, driven by a shared commitment to meaningful results.</p>
            </div>
            {/* <span className="project__label project__label--mission">Mission</span>
            <div className="project__mission">
                <p>Our profound connection to everything we engage with shapes the very essence of who we are.</p>
                <p>Over the years, our partnership with Salesforce has ignited and amplified our creative journey, driven by a shared commitment to meaningful results..</p>
                <p>Our projects stand as a testament to the profound influence of this connection, where we breathe life into Salesforce's brand values and ethos.</p>
                <p>Immerse in the profound experience.</p>
            </div> */}
        </section>
    </>
  );
}




