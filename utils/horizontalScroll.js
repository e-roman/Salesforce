import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initHorizontalScroll = (section) => {
    if (!section) return;
  
    const pinWrap = section.querySelector('.pin-wrap');
    const animWrap = pinWrap?.querySelector('.animation-wrap');
  
    if (!pinWrap || !animWrap) return;
  
    const toValue = () => -(animWrap.scrollWidth - window.innerWidth);
    const isToRight = animWrap.classList.contains('to-right');
  
    gsap.fromTo(
      animWrap,
      { x: () => (isToRight ? 0 : toValue()) },
      {
        x: () => (isToRight ? toValue() : 0),
        ease: 'none',
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: () => `+=${animWrap.scrollWidth - window.innerWidth}`,
          pin: pinWrap,
          scrub: true,
          invalidateOnRefresh: true,
          // markers: true,
        },
      }
    );
  };
  
