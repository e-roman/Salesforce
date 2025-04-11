// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlockSlack() {
  return (
    <>
      <section className="project project--details project--right">
          <span className="project__label project__label--default">Slack Keynote UI<br/>and product features<br/>animations</span>
      </section>
      <div className="gallery-wrap">
          <div className="gallery gallery--grid10" id="section-Slack">
              <div className="gallery__item pos-1" style={{ backgroundImage: 'url(img/16.jpg' }}></div>
              <div className="gallery__item pos-2" style={{ backgroundImage: 'url(img/17.jpg' }}></div>
              <div className="gallery__item pos-3" style={{ backgroundImage: 'url(img/18.jpg' }}></div>
              <div className="gallery__item pos-4" style={{ backgroundImage: 'url(img/30.jpg' }}></div>
              <div className="gallery__item pos-5" style={{ backgroundImage: 'url(img/20.jpg' }}></div>
              <div className="gallery__item pos-6" style={{ backgroundImage: 'url(img/21.jpg' }}></div>
              <div className="caption">Simplifying, enhancing,<br/>and boosting productivity<br/>through workplace<br/>connections.</div>
          </div>
      </div>
    </>
  );
}




