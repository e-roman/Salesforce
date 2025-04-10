import { preloadImages } from '../utils/preloadImages';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

if (typeof window !== 'undefined') {
  const gridItems = [...document.querySelectorAll('.grid-hero > .grid__item')];

  // Preload images
  preloadImages('.grid__item-img').then(() => {
    document.body.classList.remove('loading');

    gridItems.forEach((item) => {
      const image = item.querySelector('.grid__item-img');

      gsap.timeline({
        scrollTrigger: {
          trigger: item,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })
        .set(image, {
          transformOrigin: `${gsap.utils.random(0, 1) > 0.5 ? 0 : 100}% 100%`,
        })
        .to(image, {
          ease: 'none',
          scale: 0.5,
        });
    });
  });
}