// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock4() {
  return (
    <>
            <section className="project project--details project--left">
                <span className="project__label project__label--default">Ethical Considerations</span>
                <p>The emergence of AI-generated art raises ethical questions and concerns. One of the key challenges is navigating the boundaries of authorship and ownership. Determining the role of AI algorithms and their creators in the artistic process, as well as addressing issues of attribution and intellectual property, requires careful deliberation. Additionally, ensuring that AI-generated art does not perpetuate bias, discrimination, or harmful content is crucial for fostering a responsible and inclusive artistic landscape.</p>
            </section>
            <div className="gallery-wrap gallery-wrap--large">
                <div className="gallery gallery--grid gallery--breakout" id="gallery-2">
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/8.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/7.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/15.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/9.jpg' }}></div></div>
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
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/14.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/10.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/13.jpg' }}></div></div>
                    <div className="gallery__item gallery__item-cut"><div className="gallery__item-inner" style={{ backgroundImage: 'url(img/11.jpg' }}></div></div>
                    <div className="caption">
                        <p>Devoid of inherent knowledge, the language model relies solely on probabilities to craft a peculiar vision. As a result, the earrings hang in curious defiance of physics, inviting us to ponder the implications of relinquishing human understanding in the pursuit of artificial creativity.</p>
                    </div>
                </div>
            </div>
    </>
  );
}




