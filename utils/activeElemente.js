import { gsap } from "@/utils/config/gsapConfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// Activa toggleClass "active" para .item-active
export function activateElements() {
  const itemActiveAnim = document.querySelectorAll('.item-active');
  itemActiveAnim.forEach((itemActive) => {
    gsap.to(itemActive, {
      scrollTrigger: {
        trigger: itemActive,
        start: "top center",
        end: "bottom center",
        toggleClass: "active",
        once: true,
      },
    });
  });
}

export function activateElementsDelay() {
  const itemActiveAnimDelay = document.querySelectorAll('.item-active-delay');
  itemActiveAnimDelay.forEach((itemDelay) => {
    gsap.to(itemDelay, {
      scrollTrigger: {
        trigger: itemDelay,
        start: "top 40%",
        end: "bottom center",
        toggleClass: "active",
        once: true,
      },
    });
  });
}

// Aplica múltiples animaciones por clase
export function activateAnimations() {
  // fade skew
  document.querySelectorAll(".anim-skew").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
    tl.from(el, {
      duration: 1,
      delay: 0,
      y: 70,
      skewY: 10,
      stagger: 0.4,
      ease: "Power3.easeOut",
    });
  });

  // fade in-up
  document.querySelectorAll(".anim-movUp").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      y: 300,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });

  // zoom in
  document.querySelectorAll(".anim-movZoom").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
  
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      scale: 0.7,
      delay: delay,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });

  // zoom + move up
  document.querySelectorAll(".anim-movZoomUp").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
  
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      y: 100,
      scale: 0.7,
      delay: delay,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });

  // fade in + move up
  document.querySelectorAll(".anim-fadeinUp").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      y: 100,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });

  // fade in left
  document.querySelectorAll(".anim-fadeinLeft").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
    tl.from(el, {
      duration: 2,
      autoAlpha: 0,
      x: 100,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });

  // width expansion from left
  document.querySelectorAll(".anim-movLeft").forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        markers: false,
      },
    });
    tl.from(el, {
      duration: 2,
      width: 0,
      ease: "Expo.easeOut",
      clearProps: "all",
    });
  });
}

//  NUEVA ANIMACIÓN: zoom in para texto
export function activateZoomText() {
  const zoomText = document.querySelectorAll(".anim-zoom-text");

  zoomText.forEach((el) => {
    const delay = parseFloat(el.dataset.delay) || 0;
    const container = el.closest("#text-out"); // Usamos el contenedor como trigger

    gsap.fromTo(
      el,
      {
        scale: 3,
        autoAlpha: 0.1,
      },
      {
        scale: 1,
        autoAlpha: 1,
        duration: 2,
        ease: "none",
        scrollTrigger: {
          trigger: container || el, // fallback por si no encuentra el contenedor
          start: "top center",
          end: `+=${window.innerHeight * 1.3}`,
          scrub: 1,
          pin: true,
          markers: false,
        },
        delay,
        clearProps: "all",
      }
    );
  });
}
