// app/page.js
'use client';

import { useEffect } from 'react';
import "../../styles/slackSection.css";

export function SectionBlockSlack() {
  return (
    <>
      <section id="section-Slack_top">
        <div className="s-title-slack">
            <svg className="slk-line item-active" width="13" height="327" viewBox="0 0 13 327" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.49993 326.362C10.0898 326.362 13 323.595 13 320.181C13 316.767 10.0898 314 6.49993 314C2.91009 314 0 316.767 0 320.181C0 323.595 2.91009 326.362 6.49993 326.362Z" fill="white" className="pathLine-elem-1"></path><path d="M6.5 0V313.5" stroke="white" className="pathLine-elem-2"></path></svg>
            <h2 className="title-section font-h2 text-grey text-900 split-lines animate-scroll-each single-line not-split">Slack Keynote UI<br/>and product features<br/>animations</h2>
        </div>
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
              <div className="caption-fixed"><h2>Simplifying, enhancing,<br/>and boosting productivity<br/>through workplace<br/>connections.</h2></div>
          </div>
      </div>
    </>
  );
}




