'use client';

import "../../styles/nightCap-h-scroll.css";

import dynamic from 'next/dynamic';
const Player = dynamic(
  () => import('@lottiefiles/react-lottie-player').then((mod) => mod.Player),
  { ssr: false }
);
import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

export function SectionBlockNightcap() {
    useEffect(() => {
        initHorizontalScroll();
    }, []);

  return (
    <>
    <section className="horizontalScroll" id='section-NightCap'>
    <div className="horizontal-section-2">
    <div className="pin-wrap">
        <div className="animation-wrap to-right">
            <div className="item">
                <figure className="sh2-content-1">
                    <section className="project--intro--NightCap">
                        <h2 className="font-h3 text-grey split-lines animate-scroll-each single-line not-split">Salesforce Nightcap<br/>World Economic Forum<br/>Davos Switzerland</h2>
                    </section>
                    <div className="content-whales">
                        <div className="whales whale-1">
                            <div className="whale-move">
                                <div id="whale-1 container" className="anim-movZoomUp" data-delay="0.1">
                                    <Player
                                        src="content/whale.json"
                                        background="transparent"
                                        speed="1"
                                        loop
                                        autoplay
                                    ></Player>
                                </div>
                            </div>
                        </div>
                        <div className="whales whale-2"><img src="content/whales/whale-02.png" alt="Salesforce" className="anim-movZoomUp" data-delay="0.5"/></div>
                        <div className="whales whale-3"><img src="content/whales/whale-03.svg" alt="Salesforce" className="anim-movZoomUp" data-delay="0.7"/></div>
                        <div className="whales whale-4"><img src="content/whales/whale-04.svg" alt="Salesforce" className="anim-movZoomUp" data-delay="0.9"/></div>
                        <div className="whales whale-5">
                            <div className="whale-move">
                                <div id="whale-1 container" className="anim-movZoomUp" data-delay="1">
                                    <Player
                                        src="content/whale-2.json"
                                        background="transparent"
                                        speed="1"
                                        loop
                                        autoplay
                                    ></Player>
                                </div>
                            </div>
                        </div>
                        <div className="whales whale-6"><img src="content/whales/whale-06.svg" alt="Salesforce" className="anim-iz an-fadeInDown"/></div>
                        <div className="whales whale-7"><img src="content/whales/whale-07.svg" alt="Salesforce" className="anim-iz an-fadeInUp"/></div>
                        <div className="whales whale-8"><img src="content/whales/whale-08.svg" alt="Salesforce" className="anim-iz an-fadeInLeft"/></div>
                    </div>
                    <div className="poster-1"><img src="content/whales/02.svg" alt="Salesforce"/></div>
                </figure>
            </div>
            <div className="item">
                <figure className="sh2-content-2">
                    <video
                        width="100%"
                        autoPlay
                        playsInline
                        muted
                        loop
                        preload="metadata"
                        >
                        <source src="content/whales/03.mp4" type="video/mp4" />
                    </video>
                </figure>
            </div>
            <div className="item">
                <figure className="sh2-content-3">
                    <img className="item-sh2-3-1" data-src="content/" src="content/whales/04.webp" />
                    <img className="item-sh2-3-2" data-src="content/" src="content/whales/06_2.webp" />
                </figure>
            </div>
            <div className="item">
                <figure className="sh2-content-4">
                    <div className="item-sh2-4-2">
                        <div id="whale-3 container">
                            <Player
                                src="content/whale-2.json"
                                background="transparent"
                                speed="1"
                                loop
                                autoplay
                            ></Player>
                        </div>
                    </div>
                    <img data-src="content/" src="content/whales/07_2.webp" alt="Salesforce"/>
                </figure>
            </div>
            <div className="item">
                <figure className="sh2-content-5">
                    <img data-src="content/" src="content/whales/08.webp" alt="Salesforce"/>
                </figure>
            </div>
        </div>
    </div>
    </div>
    </section>
    </>
  );
}