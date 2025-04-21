// app/page.js
'use client';

import { useEffect } from 'react';

import "../../styles/tableauSection.css";

export function SectionBlockTableau() {
  return (
    <>
        <section className="boxdate-2022">
          <div className="d-flex-center">
              <div><img src="content/wow-tableau/date-2022.svg" className="h-100 anim-movZoom" alt="Salesforce"/></div>
              <h4 className="font-h6 text-grey h-100 anim-skew">Tableau Conference Game Show<br/> Design &amp; Animation Assets</h4>
          </div>
        </section>
        <div className="gallery-wrap gallery-wrap--large">
            <div className="gallery gallery--grid gallery--breakout" id="section-Tableau">
                <div className="gallery__item gallery__item-cut">
                  <div className="gallery__item-inner">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/wow-tableau/01.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(content/wow-tableau/02.webp' }}></div></div>
                <div className="gallery__item gallery__item-cut">
                <div className="gallery__item-inner">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/wow-tableau/02.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(content/wow-tableau/04.webp' }}></div></div>
                <div className="gallery__item gallery__item-cut">
                  <div className="gallery__item-inner">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/wow-tableau/reel.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(content/wow-tableau/06.webp' }}></div></div>
                <div className="gallery__item gallery__item-cut">
                <div className="gallery__item-inner">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/wow-tableau/03.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(content/wow-tableau/08.webp' }}></div></div>
                <div className="gallery__item gallery__item-cut">
                <div className="gallery__item-inner">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/wow-tableau/08.mp4" type="video/mp4" />
                    </video>
                  </div>
                </div>
                <div className="caption">
                    <p>Devoid of inherent knowledge, the language model relies solely on probabilities to craft a peculiar vision. As a result, the earrings hang in curious defiance of physics, inviting us to ponder the implications of relinquishing human understanding in the pursuit of artificial creativity.</p>
                </div>
            </div>
        </div>
    </>
  );
}




