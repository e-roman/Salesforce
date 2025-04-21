'use client';

import "../../styles/dotorg-h-scroll.css";

import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';
import { useSvgAnimations } from '@/hooks/useSvgAnimations';

export function SectionBlockDotOrg() {
  useSvgAnimations(); 
  
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
                  <section className="project--intro--DotOrg">
                    <h2 className="font-h3 text-grey split-lines animate-scroll-each single-line not-split">Salesforce.org Education Summit<br/>& Nonprofit Summit<br/>Design Assets</h2>
                  </section>
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
                  <div className="dot-bg-cloud_4" id="cloud4"></div>
                  <div className="dot-bg-cloud_5" id="cloud5"></div>
                  <div className="dot-bg-cloud_6" id="cloud6"></div>

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
                      data="content/dot-org/bg-DotOrg.svg"
                      type="image/svg+xml"
                    ></object>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}