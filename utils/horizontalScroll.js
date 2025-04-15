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
        id: "horizontalScroll",
        trigger: section,
        start: 'top top',
        end: () => `+=${animWrap.scrollWidth - window.innerWidth}`,
        pin: pinWrap,
        scrub: true,
        invalidateOnRefresh: true,
      }
    }
  );

  runHorizontalAnimations(section); // activa las clases CSS
};

function runHorizontalAnimations(container) {
  const scrollTween = ScrollTrigger.getById("horizontalScroll");

  if (!scrollTween?.animation) return;

  container.querySelectorAll('.anim-iz').forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;

    ScrollTrigger.create({
      trigger: el,
      containerAnimation: scrollTween.animation,
      start: "left center",
      onEnter: () => {
        setTimeout(() => el.classList.add('iz-active'), delay * 1000);
      },
      once: true,
    });
  });
}
