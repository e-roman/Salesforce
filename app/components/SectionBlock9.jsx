// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock9() {
  return (
    <>
    <section className="project project--details project--left">
        <span className="project__label project__label--default">Photographic Flaws in Perfect Harmony</span>
        <p>In the realm of AI-generated photography, the quest for flawlessness inadvertently unveils a striking paradox - the absence of authentic imperfections. Even in the most human-like subjects, wrinkles and blemishes appear too immaculate, leaving us yearning for the raw, unfiltered beauty that only true imperfection can evoke. </p>
    </section>
    <div className="gallery-wrap">
        <div className="gallery gallery--bento" id="gallery-8">
            <div className="gallery__item" style={{ backgroundImage: 'url(img/64.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/63.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/62.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/69.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/65.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/67.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/68.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/66.jpg)' }}></div>
            <div className="caption">Perfect Imperfections</div>
        </div>
    </div>
    </>
  );
}




