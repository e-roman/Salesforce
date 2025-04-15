import $ from "jquery";
import { gsap } from "@/utils/config/gsapConfig";
import { Expo, Power2 } from "gsap";


export function initPreloader() {
  'use strict';

  if ($("body").hasClass("cs-transition")) {
    revealLoad();
    setTimeout(() => {
      hideLoad();
    }, 100);
  }

  function revealLoad() {
    const tl_transitIn = gsap.timeline({ defaults: { duration: 1, ease: "expo.inOut" } });

    tl_transitIn
      .set("#page-transition", { autoAlpha: 1 })
      .to(".ptr-overlay", { scaleY: 1, transformOrigin: "center bottom" }, 0)
      // .to(".ptr-preloader", { autoAlpha: 1 }, 0.4);
  }

  function hideLoad() {
    const tl_transitOut = gsap.timeline();

    tl_transitOut
      .to(".ptr-preloader", { duration: 1, autoAlpha: 0, ease: "expo.inOut" })
      .to(".ptr-overlay", { duration: 1, scaleY: 0, transformOrigin: "center top", ease: "expo.inOut" }, 0.1)
      .to(".loader__wrap", { duration: 1, autoAlpha: 0, })
      .from(".logo-appear", { duration: 1.5, y: 50, autoAlpha: 0, stagger: 0.4, ease: "expo.out", clearProps: "all" }, 1.3)
      .set("#page-transition", { duration: 1, autoAlpha: 0, ease: "expo.out" });

    if ($(".img-zoom").length) {
      tl_transitOut.from(".img-zoom", {
        duration: 0.4,
        autoAlpha: 0,
        scale: 0.4,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      }, 1);
    }

    if ($(".text-up").length) {
      tl_transitOut.from(".text-up", {
        duration: 1.2,
        y: 80,
        autoAlpha: 0,
        stagger: 0.3,
        ease: Expo.easeOut,
        clearProps: "all"
      }, 1.2);
    }
  }
}
