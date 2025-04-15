'use client';

import { useEffect } from 'react';

import "../../styles/hero.css";
import { gsap } from 'gsap';
import { preloadImages } from '@/utils/preloadImages';
import { initGridImages } from '@/utils/imagesZoomEffect';
import { initParallaxEffect } from '@/utils/parallaxEffect';

export function SectionHero() {
  useEffect(() => {
    // Inicializar las imágenes de la cuadrícula
    initGridImages();

    // Inicializar el efecto de parallax
    const cleanup = initParallaxEffect();

    // Limpiar el evento al desmontar el componente
    return () => {
      cleanup();
    };
  }, []);
  
  return (
    <>
      <div className="content">
        <div className="grid-hero">
          
          <div className="grid__item" style={{ '--r': 1, '--c': 4 }}>
            <div className="grid__item-img ps-1">
                <img src="content/hero/01.webp" alt="Salesforce" className='parallax-object'/>
            </div>
          </div>

          <div className="grid__item" style={{ '--r': 1, '--c': 1 }}>
            <div className="grid__item-img ps-2">
              <video
                className="parallax-object"
                width="100%"
                autoPlay
                playsInline
                muted
                loop
                preload="metadata"
              >
                <source src="content/hero/03.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid__item" style={{ '--r': 1, '--c': 2 }}>
            <div className="grid__item-img">
              <video
                className="parallax-object"
                width="70%"
                autoPlay
                playsInline
                muted
                loop
                preload="metadata"
              >
                <source src="content/hero/02.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          <div className="grid__item" style={{ '--r': 2, '--c': 6 }}>
              <div className="grid__item-img ps-7">
                <video
                  className="parallax-object"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/04b.mp4" type="video/mp4" />
                </video>
              </div>
          </div>
          <div className="grid__item" style={{ '--r': 2, '--c': 5 }}>
              <div className="grid__item-img ps-4">
                <video
                  className="parallax-object"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/04.mp4" type="video/mp4" />
                </video>
              </div>
          </div>
          <div
            className="grid__item"
            style={{ '--r': 3, '--c': 3 }}
          >
              <div className="grid__item-img ps-8">
                <video
                  className="parallax-object"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/07.mp4" type="video/mp4" />
                </video>
              </div>
          </div>

          <div className="grid__item" style={{ '--r': 2, '--c': 2 }}>
              <div className="grid__item-img ps-5">
                    <img className='parallax-object'
                      data-src="content/"
                      src="content/hero/05.webp"
                      alt="Salesforce"
                    />
              </div>
          </div>

          <div className="grid__item" style={{ '--r': 3, '--c': 6 }}>
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/08.mp4" type="video/mp4" />
                </video>
              </div>
          </div>

          <div className="grid__item" style={{ '--r': 3, '--c': 1 }}>
            <div className="grid__item-img">
            <video
                  className="parallax-object"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/06.mp4" type="video/mp4" />
                </video>
            </div>
          </div>
        </div>
        <div className="cover">
          <div className="logo-hero"><img src="/content/hero/logo-salesforce.svg" width="100%" className="img-zoom"/></div>
          <h2 className="cover__title split-lines animate-scroll-each single-line not-split">Connection <br/>propels us beyond</h2>
          <h3 className="cover__subtitle">Enhancing Salesforce success<br/>through digital and physical synergy.</h3>
        </div>
      </div>
    </>
  );
}