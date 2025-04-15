'use client';

import "../../styles/df2u-h-scroll.css";

import dynamic from 'next/dynamic';
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);
import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

export function HorizontalScrollDf2u() {

  useEffect(() => {
      initHorizontalScroll();
  }, []);

  return (
    <>
      <section className="horizontalScroll" id="section-Df2u-hScroll">
      <div className="line-Scroll-1 item-active"><svg width="1" height="500" viewBox="0 0 1 500" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_2)"><path d="M0.499972 0L0.499939 500" stroke="white"/></g><defs><clipPath id="clip0_2_2"><rect width="1" height="500" fill="white"/></clipPath></defs></svg></div>
        <div className="horizontal-section-1">
          <div className="pin-wrap">
            <div className="animation-wrap to-right">
              <div className="item">
                <div className="line-2"></div>
                <div className="content-1">
                  <div className="item-float-s1">
                    <div className="d-elements-anim">
                      <img
                        className="anim-skew"
                        src="content/df2u/item-1.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100 anim-movZoom" data-delay="0.1"
                        src="content/df2u/item-2.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100 anim-movZoom" data-delay="0.2"
                        src="content/df2u/item-3.svg"
                        alt="Salesforce"
                      />
                      <img
                        className="h-100 anim-movZoom" data-delay="0.3"
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
                  <div className="line-s3 anim-iz"></div>
                  <div className="box-s3 box-s3-1">
                    <h6 className="anim-iz">Basic Geometric Shapes</h6>
                      <div className="content-box">
                        <svg className="svg-an1 anim-iz" width="100%" height="100%" viewBox="0 0 365 237" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_552_27)">
                        <path d="M212.306 115.553H153.689V173.853H212.306V115.553Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-1"></path>
                        <path d="M182.999 115.489C196.248 115.489 206.988 104.807 206.988 91.6299C206.988 78.4526 196.248 67.7703 182.999 67.7703C169.75 67.7703 159.01 78.4526 159.01 91.6299C159.01 104.807 169.75 115.489 182.999 115.489Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-2"></path>
                        <path d="M183 173.922L148.291 233.71H217.709L183 173.922Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-3"></path>
                        <path d="M183.001 67.7066L148.42 42.7177L161.632 2.28955H204.37L217.576 42.7177L183.001 67.7066Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-4"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_552_27">
                        <rect width="70" height="232" fill="white" transform="translate(148 2)" className="svg-elem-5"></rect>
                        </clipPath>
                        </defs>
                        </svg>
                      </div>
                  </div>
                  <div className="box-s3 box-s3-2">
                    <h6 className="anim-iz">Constructive Grid</h6>
                    <div className="content-box">
                        <svg className="svg-an2 anim-iz" width="100%" height="100%" viewBox="0 0 365 237" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clipPath="url(#clip0_552_28)">
                          <path d="M157.289 83.8245C173.249 83.8245 186.187 70.8836 186.187 54.9202C186.187 38.9568 173.249 26.0159 157.289 26.0159C141.329 26.0159 128.391 38.9568 128.391 54.9202C128.391 70.8836 141.329 83.8245 157.289 83.8245Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-1"></path>
                          <path d="M184.069 44.0625L225.3 178.569C225.3 178.569 147.148 148.187 128.82 59.9375L184.069 44.0625Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-2"></path>
                          <path d="M190.879 71.9945L364.675 18.5095C364.675 18.5095 322.796 81.0891 270.82 99.2329C243.613 108.729 200.769 106.435 190.879 71.9945Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-3"></path>
                          <path d="M225.299 178.465L243.205 236.682C243.205 236.682 222.253 222.655 216.18 205.243C212.998 196.129 213.769 181.778 225.299 178.465Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-4"></path>
                          <path d="M191.786 72.8438L302.44 94.2287C302.44 94.2287 282.096 120.359 237.813 121.85C209.31 122.809 185.882 100.75 191.793 72.8438H191.786Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-5"></path>
                          <path d="M35.7286 40.75C35.113 40.6268 35.2685 39.7128 35.8906 39.7906L135.339 52.7616C137.4 52.9949 138.962 54.7386 138.962 56.813C138.962 59.3864 136.603 61.3181 134.075 60.806L35.7286 40.75Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-6"></path>
                          <path d="M355.169 105.793L0.324219 33.5354" stroke="#0D9DDA" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-7"></path>
                          <path d="M150.492 148.2L180.401 0.903809" stroke="#0D9DDA" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-8"></path>
                          <path d="M161.994 49.501L203.225 184.008" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-9"></path>
                          <path d="M145.566 48.3861C147.635 48.3861 149.312 46.7086 149.312 44.6393C149.312 42.5701 147.635 40.8926 145.566 40.8926C143.497 40.8926 141.82 42.5701 141.82 44.6393C141.82 46.7086 143.497 48.3861 145.566 48.3861Z" stroke="white" strokeLinecap="round" strokeLinejoin="round" className="svg-elem-10"></path>
                          </g><defs><clipPath id="clip0_552_28"><rect width="365" height="236.42" fill="white" transform="translate(0 0.57959)" className="svg-elem-11"></rect></clipPath></defs>
                        </svg>
                    </div>
                  </div>
                  <div className="box-s3 box-s3-3">
                    <h6 className="anim-iz">Hummingbird</h6>
                    <div id="bird-container" className="anim-iz an-fadeInUp">
                      <Player
                        src="content/bird.json"
                        background="transparent"
                        speed="1"
                        loop
                        autoplay
                      ></Player>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="item">
                <figure className="content-4">
                  <img 
                    className="m-auto-w90"
                    
                    src="content/df2u/08.webp"
                    alt="Salesforce"
                  />
                </figure>
              </div>
              <div className="item">
                <figure className="content-5">
                  <div className="item-s5-float">
                    <img src="content/df2u/mountains.svg" alt="Salesforce" className="anim-iz an-zoomIn"/>
                  </div>
                  <div className="item-s5-1">
                    <img
                      className="anim-iz"
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
                    src="content/df2u/11.webp"
                    alt="Salesforce"
                  />
                </figure>
              </div>
              <div className="item">
                <figure className="content-8">
                  <img
                    className="m-auto-w90"
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