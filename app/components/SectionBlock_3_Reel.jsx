// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlockReel() {
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
       </>
  );
}




