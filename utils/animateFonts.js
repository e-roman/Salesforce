import { gsap } from "@/utils/config/gsapConfig";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import $ from "jquery"; // Asegurate que jQuery esté instalado e importado

gsap.registerPlugin(ScrollTrigger);

export function initSplitFonts() {
    // Split text into spans y agregar clase is-split
    document.querySelectorAll("[text-split]").forEach(el => {
      if (!el.classList.contains("is-split")) {
        new SplitType(el, {
          types: "words, chars",
          tagName: "span"
        });
        el.classList.add("is-split");
      }
  
      // Envolver cada .line o .word con un .single-line-inner
      const lines = el.querySelectorAll(".line, .word");
      lines.forEach(line => {
        if (!line.querySelector(".single-line-inner")) {
          const wrapper = document.createElement("div");
          wrapper.className = "single-line-inner";
          wrapper.innerHTML = line.innerHTML;
          line.innerHTML = "";
          line.appendChild(wrapper);
        }
      });
    });
  
    // Evitar FOUC (flash of unstyled content)
    gsap.set("[text-split]", {
      opacity: 1
    });
  
    // Helper para crear ScrollTrigger
    function createScrollTrigger(triggerElement, timeline) {
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top bottom",
        onLeaveBack: () => {
          timeline.progress(0);
          timeline.pause();
        }
      });
  
      ScrollTrigger.create({
        trigger: triggerElement,
        start: "top 60%",
        onEnter: () => timeline.play()
      });
    }
  
    // Configuraciones de animaciones
    const animationConfigs = [
      {
        selector: "[words-move-up]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".word"), {
            opacity: 0,
            yPercent: 200,
            duration: 0.5,
            ease: "power2.out",
            stagger: { amount: 0.1 }
          })
      },
      {
        selector: "[words-skew-up]",
        tween: ($el) => {
          const split = new SplitType($el[0], {
            types: "lines, words",
            lineClass: "word-line"
          });
  
          const words = $el.find(".word");
  
          return gsap.timeline({ paused: true })
            .set($el, { opacity: 1 })
            .from(words, {
              y: "100%",
              skewX: "-6",
              duration: 2,
              stagger: 0.03,
              ease: "expo.out"
            });
        }
      },
      {
        selector: "[words-move-up-2]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".word"), {
            opacity: 0,
            yPercent: 200,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { amount: 0.1 }
          })
      },
      {
        selector: "[words-slide-up]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".word"), {
            opacity: 0,
            yPercent: 100,
            duration: 0.5,
            ease: "back.out(2)",
            stagger: { amount: 0.5 }
          })
      },
      {
        selector: "[words-rotate-in]",
        tween: ($el) => {
          const timeline = gsap.timeline({ paused: true });
          timeline.set($el.find(".word"), {
            transformPerspective: 1000
          });
          timeline.from($el.find(".word"), {
            rotationX: -90,
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.6 }
          });
          return timeline;
        }
      },
      {
        selector: "[words-slide-from-right]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".word"), {
            opacity: 0,
            x: "1em",
            duration: 0.6,
            ease: "power2.out",
            stagger: { amount: 0.2 }
          })
      },
      {
        selector: "[letters-slide-up]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".char"), {
            yPercent: 100,
            duration: 0.2,
            ease: "power1.out",
            stagger: { amount: 0.6 }
          })
      },
      {
        selector: "[letters-slide-down]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".char"), {
            yPercent: -120,
            duration: 0.3,
            ease: "power1.out",
            stagger: { amount: 0.7 }
          })
      },
      {
        selector: "[letters-fade-in]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".char"), {
            opacity: 0,
            duration: 0.2,
            ease: "power1.out",
            stagger: { amount: 0.8 }
          })
      },
      {
        selector: "[letters-fade-in-random]",
        tween: ($el) =>
          gsap.timeline({ paused: true }).from($el.find(".char"), {
            opacity: 0,
            duration: 0.05,
            ease: "power1.out",
            stagger: { amount: 0.4, from: "random" }
          })
      },
      {
        selector: "[scrub-each-word]",
        timelineOnly: true,
        tween: ($el) =>
          gsap.timeline({
            scrollTrigger: {
              trigger: $el,
              start: "top 90%",
              end: "top center",
              scrub: true
            }
          }).from($el.find(".word"), {
            opacity: 0.2,
            duration: 0.2,
            ease: "power1.out",
            stagger: { each: 0.4 }
          })
      }
    ];
  
    // Inicializa animaciones
    animationConfigs.forEach(({ selector, tween, timelineOnly }) => {
      $(selector).each(function () {
        const $el = $(this);
        const tl = tween($el);
        if (!timelineOnly) {
          createScrollTrigger($el, tl);
        }
      });
    });
  }
  
