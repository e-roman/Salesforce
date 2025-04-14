// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlockReel() {
  return (
       <>
            <div className="gallery-wrap">
                <div className="gallery gallery--row" id="section-Reel">
                    <div className="gallery__item gallery__item--s"></div>
                    <div className="gallery__item gallery__item--m"></div>
                    <div className="gallery__item gallery__item--l"></div>
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
                    <div className="gallery__item gallery__item--l"></div>
                    <div className="gallery__item gallery__item--m"></div>
                    <div className="gallery__item gallery__item--s"></div>
                    <div className="caption">
                        <p>Our projects stand as a testament to the profound influence of this connection, where we breathe life into Salesforce's brand values and ethos.</p>
                        <p>Immerse in the profound experience.</p>
                    </div>
                </div>
            </div>
       </>
  );
}




