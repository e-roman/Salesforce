'use client';


import "../../styles/df2u-h-scroll.css";

// import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

// Carga dinámica del componente LottiePlayer
// const LottiePlayer = dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });

export function HorizontalScrollDf2u() {
  useEffect(() => {
    initHorizontalScroll();
  }, []);

  return (
    <>
      <section className="horizontalScroll" id="section-Df2u-hScroll">
        <div className="horizontal-section-1">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <div className="item">
                <div className="line-2"></div>
                <div className="content-1">
                  <div className="item-float-s1">
                    <div className="d-elements-anim">
                      <img
                        data-src="content/"
                        src="content/df2u/item-1.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100"
                        data-src="content/"
                        src="content/df2u/item-2.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100"
                        data-src="content/"
                        src="content/df2u/item-3.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100"
                        data-src="content/"
                        src="content/df2u/item-4.svg"
                        alt="Salesforce"
                      />
                    </div>
                  </div>
                  <div className="box-content">
                    <div className="item-s1-1">
                      <video autoPlay playsInline muted loop preload="metadata">
                        <source src="content/df2u/01.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="item-s1-2">
                      <video autoPlay playsInline muted loop preload="metadata">
                        <source src="content/df2u/02.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="item-s1-3">
                      <video autoPlay playsInline muted loop preload="metadata">
                        <source src="content/df2u/03.mp4" type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item d_center">
                <figure className="content-2">
                  <div className="item-s2-1">
                    <video
                      className="box-radius"
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="metadata"
                    >
                      <source src="content/df2u/04.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <div className="item-s2-2">
                    <video
                      className="box-radius"
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="metadata"
                    >
                      <source src="content/df2u/04_2.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="content-3">
                  <div className="line-s3"></div>
                  <div className="box-s3 box-s3-1">
                    <h6>Basic Geometric Shapes</h6>
                    <img
                      className="item-move"
                      data-src="content/df2u/05.svg"
                      src="content/df2u/05.svg"
                      alt="Salesforce"
                    />
                  </div>
                  <div className="box-s3 box-s3-2">
                    <h6>Constructive Grid</h6>
                    <img
                      className="item-move"
                      data-src="content/df2u/06.svg"
                      src="content/df2u/06.svg"
                      alt="Salesforce"
                    />
                  </div>
                  <div className="box-s3 box-s3-3">
                    <h6>Hummingbird</h6>
                    <div id="bird-container"></div>
                    {/* <lottie-player
                      id="bird-container"
                      src="/content/bird.json"
                      background="transparent"
                      speed="1"
                      loop
                      autoplay
                    ></lottie-player> */}
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="content-4">
                  <img 
                    className="m-auto-w90"
                    data-src="content/"
                    src="content/df2u/08.webp"
                    alt="Salesforce"
                  />
                </figure>
              </div>
              <div className="item">
                <figure className="content-5">
                  <div className="item-s5-float">
                    <img src="content/df2u/mountains.svg" alt="Salesforce" />
                  </div>
                  <div className="item-s5-1">
                    <img
                      data-src="content/"
                      src="content/df2u/09.webp"
                      alt="Salesforce"
                    />
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="content-6">
                  <div className="item-s6-1">
                    <img
                      className="m-auto-w90 box-radius"
                      data-src="content/"
                      src="content/df2u/10.webp"
                      alt="Salesforce"
                    />
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="content-7">
                  <img
                    className="m-auto-w90"
                    data-src="content/"
                    src="content/df2u/11.webp"
                    alt="Salesforce"
                  />
                </figure>
              </div>
              <div className="item">
                <figure className="content-8">
                  <img
                    className="m-auto-w90"
                    data-src="content/"
                    src="content/df2u/12.webp"
                    alt="Salesforce"
                  />
                </figure>
              </div>
              <div className="item">
                <figure className="content-9">
                  <div className="item-s9-1">
                    <video
                      autoPlay
                      playsInline
                      muted
                      loop
                      preload="metadata"
                    >
                      <source
                        src="https://d2s90tzqqa0vkb.cloudfront.net/projects/dreamforce/06.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};