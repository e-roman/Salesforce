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
      scale: true, // default
      simple: true,
    },
    scrollTrigger: {
      start: 'center center',
      end: '+=300%',
    },
    stagger: 0,
    includeCaption: false,
    ...options,
  };

  const galleryItems = galleryEl.querySelectorAll('.gallery__item');
  const galleryItemsInner = [...galleryItems].flatMap(item =>
    item.children.length > 0 ? [...item.children] : []
  );

  const elementsToFlip = [...galleryItems];

  if (settings.includeCaption) {
    const caption = galleryEl.querySelector('.caption');
    if (caption) elementsToFlip.push(caption);
  }

  const isCustomScale = typeof settings.flip.scale === 'number';
  const actualScale = isCustomScale ? settings.flip.scale : 1;

  galleryEl.classList.add('gallery--switch');
  const flipstate = Flip.getState(elementsToFlip, {
    props: 'filter, opacity',
  });
  galleryEl.classList.remove('gallery--switch');

  const tl = Flip.to(flipstate, {
    ease: 'none',
    absoluteOnLeave: settings.flip.absoluteOnLeave,
    absolute: settings.flip.absolute,
    scale: !isCustomScale ? settings.flip.scale : false, // disable scale if number, handled separately
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

  // Si hay inner items y scale es un número válido
  if (galleryItemsInner.length && isCustomScale && actualScale !== 1) {
    tl.fromTo(
      galleryItemsInner,
      { scale: actualScale },
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
    {
      id: '#section-Reel',
      options: {
        flip: { absoluteOnLeave: true, scale: 1 },
        includeCaption: true,
      },
    },
    {
      id: '#section-Df2u',
      options: {
        flip: { absolute: true, scale: 1 },
        scrollTrigger: { start: 'center center', end: '+=200%' },
        stagger: 0.01,
        includeCaption: true,
      },
    },
    { id: '#section-Df2u-hScroll', type: 'horizontal' },
    {
      id: '#section-Slack',
      options: {
        flip: { absolute: true, scale: 1.5 },
        scrollTrigger: { start: 'center center', end: '+=200%' },
        stagger: 0.01,
        includeCaption: true,
      },
    },
    { id: '#section-NightCap', type: 'horizontal' },
    { id: '#section-Mercedez' },
    { id: '#section-Tableau' },
    { id: '#section-DotOrg', type: 'horizontal' },
    { id: '#section-Quote' },
  ];

  galleries.forEach(({ id, options, type }) => {
    const el = document.querySelector(id);
    if (!el) return;

    if (type === 'horizontal') {
      initHorizontalScroll(el);
    } else {
      triggerFlipOnScroll(el, options);
    }
  });
};
