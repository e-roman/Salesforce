// app/page.js
'use client';

import { useEffect } from 'react';

export function SectionBlockSlack() {
  return (
    <>
      <section className="project--details" id="section-Slack_top">
          <h2 className="title-section font-h2 text-grey text-900 split-lines animate-scroll-each single-line not-split">Slack Keynote UI<br/>and product features<br/>animations</h2>
      </section>
      <div className="gallery-wrap">
          <div className="gallery gallery--grid10" id="section-Slack">
              <div className="gallery__item pos-1">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/slack/01.mp4" type="video/mp4" />
                    </video>
              </div>
              <div className="gallery__item pos-2">
              <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/slack/02.mp4" type="video/mp4" />
                    </video>
              </div>
              <div className="gallery__item pos-3">
                  <video
                      className='v-p-right'
                      width="100%"
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="metadata"
                      >
                      <source src="content/slack/06.mp4" type="video/mp4" />
                  </video>
              </div>
              <div className="gallery__item pos-4">
                  <video
                      width="100%"
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="metadata"
                      >
                      <source src="content/slack/04.mp4" type="video/mp4" />
                  </video>
              </div>
              <div className="gallery__item pos-5"></div>
              <div className="gallery__item pos-6">
              <video
                        className='v-p-right'
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/slack/03.mp4" type="video/mp4" />
                    </video>
              </div>
              <div className="caption-fixed">Simplifying, enhancing,<br/>and boosting productivity<br/>through workplace<br/>connections.</div>
          </div>
      </div>
    </>
  );
}




