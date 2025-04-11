'use client';

import "../../styles/dotorg-h-scroll.css";
import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

export function SectionBlockDotOrg() {
  useEffect(() => {
    initHorizontalScroll();
  }, []);

  return (
    <>
      <section className="horizontalScroll" id="section-DotOrg">
        <div className="horizontal-section-3">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <div className="item">
                <figure className="sh3-content-1">
                  <div className="dot-tablet-1">
                    <div className="span-date">
                      <img src="content/dot-org/date_2022.svg" alt="Salesforce" />
                    </div>
                    <div className="content-video">
                      <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                      >
                        <source src="content/dot-org/01.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="sh3-content-2">
                  <div className="dot-tablet-2">
                    <div className="content-video">
                      <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                      >
                        <source src="content/dot-org/02.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bg-dot_org">
                <div id="content-anim-bg">
                  <div className="dot-bg-cloud_1" id="cloud1"></div>
                  <div className="dot-bg-cloud_2" id="cloud2"></div>
                  <div className="dot-bg-cloud_3" id="cloud3"></div>
                  <div className="dot-bg-bird_1">
                    <object
                      data="content/dot-org/bird.svg"
                      className="anim-movZoomUp"
                      type="image/svg+xml"
                    ></object>
                    <div className="dot-bg-bird_2" id="bg-bird"></div>
                  </div>
                  <div>
                    <object
                      className="bg-stick"
                      data="content/dot-org/bg-stick.svg"
                      type="image/svg+xml"
                    ></object>
                  </div>
                </div>
              </div>
              <div className="item space-vw"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}