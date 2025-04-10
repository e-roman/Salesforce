// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock2() {
  return (
       <>
            <div className="gallery-wrap">
                <div className="gallery gallery--row" id="gallery-1">
                    <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(img/6.jpg' }}></div>
                    <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(img/3.jpg' }}></div>
                    <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(img/4.jpg' }}></div>
                    <div className="gallery__item gallery__item--xl gallery__item--center">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/reel/salesforce-reel.mp4" type="video/mp4" />
                    </video>
                    </div>
                    <div className="gallery__item gallery__item--l" style={{ backgroundImage: 'url(img/5.jpg' }}></div>
                    <div className="gallery__item gallery__item--m" style={{ backgroundImage: 'url(img/2.jpg' }}></div>
                    <div className="gallery__item gallery__item--s" style={{ backgroundImage: 'url(img/6.jpg' }}></div>
                    <div className="caption">
                    Our profound connection to everything we engage with shapes the very essence of who we are.
                    Over the years, our partnership with Salesforce has ignited and amplified our creative journey, driven by a shared commitment to meaningful results..
                    Our projects stand as a testament to the profound influence of this connection, where we breathe life into Salesforce's brand values and ethos.
                    Immerse in the profound experience.
                    </div>
                </div>
            </div>
            <section className="project project--details project--left">
                <span className="project__label project__label--default">Ethical Considerations</span>
                <p>The emergence of AI-generated art raises ethical questions and concerns. One of the key challenges is navigating the boundaries of authorship and ownership. Determining the role of AI algorithms and their creators in the artistic process, as well as addressing issues of attribution and intellectual property, requires careful deliberation. Additionally, ensuring that AI-generated art does not perpetuate bias, discrimination, or harmful content is crucial for fostering a responsible and inclusive artistic landscape.</p>
            </section>
       </>
  );
}




