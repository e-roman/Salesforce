import Lenis from 'lenis';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

let lenis;

export const initSmoothScrolling = () => {
  lenis = new Lenis({
    lerp: 0.1,
    smoothWheel: true,
  });

  lenis.on('scroll', () => ScrollTrigger.update());

  const scrollFn = (time) => {
    lenis.raf(time);
    requestAnimationFrame(scrollFn);
  };

  requestAnimationFrame(scrollFn);
};
