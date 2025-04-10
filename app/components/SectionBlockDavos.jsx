'use client';


import "../../styles/davos-h-scroll.css";

// import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { initHorizontalScroll } from '@/utils/horizontalScroll';

// Carga dinámica del componente LottiePlayer
// const LottiePlayer = dynamic(() => import('@lottiefiles/lottie-player'), { ssr: false });

export function SectionBlockDavos() {
  useEffect(() => {
    initHorizontalScroll();
  }, []);

  return (
    <>
    <section className="horizontalScroll" id='horizontal-2'>
    <div className="horizontal-section-2">
    <div className="pin-wrap">
        <div className="animation-wrap to-right">
            <div className="item">
                <figure className="sh2-content-1">
                    <div className="title-whales">
                        <h4 className="title-section font-h1 text-grey text-900 anim-skew">Salesforce Nightcap</h4>
                        <h4 className="title-section font-h1 text-grey text-900 anim-skew">World Economic Forum</h4>
                        <h4 className="title-section text-grey text-300 anim-skew">Davos Switzerland</h4>
                    </div>
                    <div className="content-whales">
                        <div className="whales whale-1">
                            <div className="whale-move move-itemTop">
                                <div id="whale-1 container"></div>
                                {/* <script>
                                    var animationWhale1 = bodymovin.loadAnimation({
                                        container: document.getElementById("whale-1 container"),
                                        path: "whale.json",
                                        render: "svg",
                                        loop: !0,
                                        autoplay: !0,
                                        name: "demo whale-1"
                                    })
                                </script> */}
                            </div>
                        </div>
                        <div className="whales whale-2"><img src="content/whales/whale-02.png" className="whale-move move-itemLeft" alt="Salesforce"/></div>
                        <div className="whales whale-3"><img src="content/whales/whale-03.svg" className="whale-move move-itemLeft" alt="Salesforce"/></div>
                        <div className="whales whale-4"><img src="content/whales/whale-04.svg" className="whale-move move-itemLeft" alt="Salesforce"/></div>
                        <div className="whales whale-5">
                            <div className="whale-move move-itemTop">
                                <div id="whale-2 container"></div>
                            </div>
                        </div>
                        <div className="whales whale-6"><img src="content/whales/whale-06.svg" className="whale-move move-itemRight" alt="Salesforce"/></div>
                        <div className="whales whale-7"><img src="content/whales/whale-07.svg" className="whale-move move-itemTop" alt="Salesforce"/></div>
                        <div className="whales whale-8"><img src="content/whales/whale-08.svg" className="whale-move move-itemRight" alt="Salesforce"/></div>
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
                        <div id="whale-3 container"></div>
                    </div><img data-src="content/" src="content/whales/07_2.webp" alt="Salesforce"/>
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