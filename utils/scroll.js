import { Flip } from 'gsap/Flip';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import { initHorizontalScroll } from './horizontalScroll';

gsap.registerPlugin(Flip, ScrollTrigger);

export const triggerFlipOnScroll = (galleryEl, options = {}) => {
  if (!galleryEl) return;

  const settings = {
    flip: {
      absoluteOnLeave: false,
      absolute: false,
      scale: true,
      simple: true,
    },
    scrollTrigger: {
      start: 'center center',
      end: '+=300%',
    },
    stagger: 0,
    includeCaption: false, // Nuevo flag
    ...options,
  };

  const galleryItems = galleryEl.querySelectorAll('.gallery__item');
  const galleryItemsInner = [...galleryItems].flatMap(item =>
    item.children.length > 0 ? [...item.children] : []
  );

  const elementsToFlip = [...galleryItems];

  if (settings.includeCaption) {
    const galleryCaption = galleryEl.querySelector('.caption');
    if (galleryCaption) elementsToFlip.push(galleryCaption);
  }

  galleryEl.classList.add('gallery--switch');
  const flipstate = Flip.getState(elementsToFlip, {
    props: 'filter, opacity',
  });
  galleryEl.classList.remove('gallery--switch');

  const tl = Flip.to(flipstate, {
    ease: 'none',
    absoluteOnLeave: settings.flip.absoluteOnLeave,
    absolute: settings.flip.absolute,
    scale: settings.flip.scale,
    simple: settings.flip.simple,
    duration: 1,
    scrollTrigger: {
      trigger: galleryEl,
      start: settings.scrollTrigger.start,
      end: settings.scrollTrigger.end,
      pin: galleryEl.parentNode,
      scrub: true,
    },
    stagger: settings.stagger,
  });

  if (galleryItemsInner.length) {
    tl.fromTo(
      galleryItemsInner,
      { scale: 2 },
      {
        scale: 1,
        scrollTrigger: {
          trigger: galleryEl,
          start: settings.scrollTrigger.start,
          end: settings.scrollTrigger.end,
          scrub: true,
        },
      },
      0
    );
  }
};


export const scroll = () => {
  const galleries = [
    { id: '#section-Reel', options: { 
      flip: { absoluteOnLeave: true, scale: false } ,
      includeCaption: true 
    } },
    { id: '#section-Df2u', options: { 
      flip: { absolute: true, scale: false }, 
      scrollTrigger: { start: 'center center', end: '+=200%' }, 
      stagger: 0.01, 
      includeCaption: true 
    } },    
    { id: '#section-Df2u-hScroll', type: 'horizontal' },
    { id: '#section-Slack', options: { 
      flip: { absolute: true, scale: false }, 
      scrollTrigger: { start: 'center center', end: '+=200%' }, 
      stagger: 0.01, 
      includeCaption: true 
    } },   
    { id: '#section-NightCap', type: 'horizontal' },
    { id: '#section-Mercedez' },
    { id: '#section-Tableau' },
    { id: '#section-DotOrg', type: 'horizontal' },

    { id: '#gallery-4' },
    { id: '#gallery-5' },
    { id: '#gallery-6' },
    { id: '#gallery-7' },
    { id: '#gallery-8', options: { flip: { scale: false } } },
    
  ];

  galleries.forEach(({ id, options, type }) => {
    const el = document.querySelector(id);
    if (!el) return;

    if (type === 'horizontal') {
      initHorizontalScroll(el); // Lógica para scroll horizontal
    } else {
      triggerFlipOnScroll(el, options); // Lógica FLIP por defecto
    }
  });
};