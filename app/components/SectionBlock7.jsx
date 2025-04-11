// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock7() {
  return (
    <>
    <section className="project project--details">
        <span className="project__label project__label--default">Societal Impact</span>
        <p>As AI-generated art becomes more prevalent, its long-term impact on the art market, art institutions, and the broader societal perception of art needs to be carefully examined. Understanding the implications of AI-generated art for art sales, copyright laws, and the dynamics of the art market is crucial for shaping future policies and practices. Additionally, exploring the ways in which AI-generated art can democratize artistic expression and challenge traditional hierarchies is an ongoing challenge that requires proactive engagement and collaboration.</p>
    </section>
    <div className="gallery-wrap gallery-wrap--dense">
        <div className="gallery gallery--stack gallery--stack-inverse gallery--stack-dark" id="gallery-4">
            <div className="gallery__item" style={{ backgroundImage: 'url(img/33.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/34.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/35.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/36.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/37.jpg)' }}></div>
            <div className="gallery__item" style={{ backgroundImage: 'url(img/38.jpg)' }}></div>
            <div className="caption">
                <p>AI-generated art captivates with varied creations, sometimes senseless, yet impressively enigmatic.</p>
            </div>
        </div>
    </div>
    </>
  );
}




