// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlock5() {
  return (
    <>
      <section className="project project--details project--right">
          <span className="project__label project__label--default">Preserving Artistic Identity</span>
          <p>While AI offers new avenues for artistic exploration, there is a concern that it may overshadow or replace human creativity. Balancing the integration of AI tools and techniques with preserving the unique perspectives, emotional depth, and artistic identity of human artists is a significant challenge. Striking the right balance between AI-generated art and the irreplaceable human touch requires thoughtful consideration and an ongoing dialogue between artists, technologists, and the wider art community.</p>
      </section>
      <div className="gallery-wrap">
          <div className="gallery gallery--grid10" id="gallery-3">
              <div className="gallery__item pos-1" style={{ backgroundImage: 'url(img/16.jpg' }}></div>
              <div className="gallery__item pos-2" style={{ backgroundImage: 'url(img/17.jpg' }}></div>
              <div className="gallery__item pos-3" style={{ backgroundImage: 'url(img/18.jpg' }}></div>
              <div className="gallery__item pos-4" style={{ backgroundImage: 'url(img/30.jpg' }}></div>
              <div className="gallery__item pos-5" style={{ backgroundImage: 'url(img/20.jpg' }}></div>
              <div className="gallery__item pos-6" style={{ backgroundImage: 'url(img/21.jpg' }}></div>
              <div className="gallery__item pos-7" style={{ backgroundImage: 'url(img/22.jpg' }}></div>
              <div className="gallery__item pos-8" style={{ backgroundImage: 'url(img/23.jpg' }}></div>
              <div className="gallery__item pos-9" style={{ backgroundImage: 'url(img/24.jpg' }}></div>
              <div className="gallery__item pos-10" style={{ backgroundImage: 'url(img/25.jpg' }}></div>
              <div className="gallery__item pos-11" style={{ backgroundImage: 'url(img/26.jpg' }}></div>
              <div className="gallery__item pos-12" style={{ backgroundImage: 'url(img/31.jpg' }}></div>
              <div className="gallery__item pos-13" style={{ backgroundImage: 'url(img/28.jpg' }}></div>
              <div className="gallery__item pos-14" style={{ backgroundImage: 'url(img/29.jpg' }}></div>
              <div className="gallery__item pos-15" style={{ backgroundImage: 'url(img/19.jpg' }}></div>
              <div className="gallery__item pos-16" style={{ backgroundImage: 'url(img/27.jpg' }}></div>
              <div className="caption">The Art of Perfection?</div>
          </div>
      </div>
    </>
  );
}




