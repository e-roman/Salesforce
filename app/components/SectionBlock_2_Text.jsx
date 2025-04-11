// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock1() {
  return (
    <>
        <section className="project project--intro">
            <span className="project__label project__label--name">Project</span>
            <span className="project__name">AI Art</span>
            <span className="project__label project__label--date">Date</span>
            <span className="project__date">July, 2023</span>
            <h2 className="project__title">
                <span className="project__title-line">Connecting is the art</span>
                <span className="project__title-line">of delving deeper within.</span>
            </h2>
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




