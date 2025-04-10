'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { initHorizontalScroll } from '@/utils/gridImages';

export function HeroIniit() {

  useEffect(() => {
    // Seleccionar los objetos de parallax
    const objects = document.querySelectorAll('.parallax-object');

    // Función para manejar el movimiento con el mouse
    function moveObjects(event) {
      const centerX = window.innerWidth / 3;
      const centerY = window.innerHeight / 1;

      const mouseX = event.clientX;
      const mouseY = event.clientY;

      const offsetX = (mouseX - centerX) * 0.02;
      const offsetY = (mouseY - centerY) * 0.02;

      objects.forEach((object, index) => {
        const directionX = index % 3 === 0 ? 2 : -2;
        const directionY = index % 3 === 0 ? -2 : 2;
        const objectOffsetX = offsetX * directionX * (index + 2) * 0.2;
        const objectOffsetY = offsetY * directionY * (index + 2) * 0.2;

        gsap.to(object, { x: objectOffsetX, y: objectOffsetY, duration: 0.9 });
      });
    }

    // Escuchar eventos de movimiento del mouse en el documento
    document.addEventListener('mousemove', moveObjects);

    // Limpiar el evento al desmontar el componente
    return () => {
      document.removeEventListener('mousemove', moveObjects);
    };
  }, []);

  
  return (
    <>
      <div className="content">
        <div className="grid-hero">
          <div
            className="grid__item"
            style={{ '--r': 1, '--c': 4 }}
          >
            <div className="grid__item-img">
              <video
                className="parallax-object"
                width="100%"
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
          <div
            className="grid__item"
            style={{ '--r': 1, '--c': 1 }}
          >
            <div className="grid__item-img">
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
          <div
            className="grid__item"
            style={{ '--r': 2, '--c': 6 }}
          >
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  width="100%"
                  autoPlay
                  playsInline
                  muted
                  loop
                  preload="metadata"
                >
                  <source src="content/hero/01.mp4" type="video/mp4" />
                </video>
              </div>
          </div>
          <div
            className="grid__item"
            style={{ '--r': 2, '--c': 5 }}
          >
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  width="100%"
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
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  width="100%"
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
          <div
            className="grid__item"
            style={{ '--r': 2, '--c': 1 }}
          >
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  width="100%"
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
          <div
            className="grid__item"
            style={{ '--r': 4, '--c': 5 }}
          >
              <div className="grid__item-img">
                <video
                  className="parallax-object"
                  width="100%"
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
          <div
            className="grid__item"
            style={{ '--r': 4, '--c': 2 }}
          >
            <div
              className="grid__item-img parallax-object"
              style={{ backgroundImage: 'url(/content/hero/05.webp)' }}
            ></div>
          </div>
        </div>
        <div className="cover">
          <div className="logo-hero"><img src="/content/hero/logo-salesforce.svg" width="100%" className="img-zoom"/></div>
          <h2 className="cover__title">Connection <br/>propels us beyond</h2>
          <h3 className="cover__subtitle">Enhancing Salesforce success<br/>through digital and physical synergy.</h3>
        </div>
      </div>
    </>
  );
}

