// app/page.js
'use client';

import { useEffect } from 'react';

import "../../styles/block-text-intro.css";

export function SectionBlock1() {
  return (
    <>
        <section className="project--intro">
            <h2 className="intro__title split-lines animate-scroll-each single-line not-split">Connecting is the art<br/>of delving deeper within.</h2>
            <div className='block-textIntro split-lines animate-scroll-each single-line not-split'>
              <p>Our profound connection to everything we engage with shapes the very essence of who we are.<br/>
              Over the years, our partnership with Salesforce has ignited and amplified our creative journey, driven by a shared commitment to meaningful results.</p>
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




