import { gsap } from "@/utils/config/gsapConfig";
import { durationDefault, staggerDefault } from "@/utils/config/gsapConfig";
import SplitType from "split-type";

export function initSplitText() {
  const splitTextLines = new SplitType(".split-lines.not-split", { types: "lines" });

  const elements = document.querySelectorAll(".split-lines.not-split");
  elements.forEach(el => {
    const lines = el.querySelectorAll(".line");
    lines.forEach(line => {
      const wrapper = document.createElement("div");
      wrapper.className = "single-line-inner";
      wrapper.innerHTML = line.innerHTML;
      line.innerHTML = "";
      line.appendChild(wrapper);
    });

    el.classList.remove("not-split");
  });
}

export function initSplitLinesAnimations() {
  // Para cada línea individual con animación
  const lines = document.querySelectorAll('.split-lines.animate-scroll-each .line');

  lines.forEach((line, index) => {
    const target = line.querySelector('.single-line-inner');
    if (!target) return;
  
    gsap.fromTo(target, {
      yPercent: 110,
      rotate: 0.001
    }, {
      yPercent: 0,
      rotate: 0.001,
      ease: "primary-ease",
      duration: durationDefault,
      delay: index * 0.1, // 👈 Aquí defines el delay progresivo (ajusta 0.1 a tu gusto)
      scrollTrigger: {
        trigger: line,
        start: "top 90%",
        end: "bottom 0%",
        toggleActions: "play none none none"
      }
    });
  });
  

  // Para animaciones de bloque completo
  document.querySelectorAll('.split-lines.animate-scroll').forEach(block => {
    const targets = block.querySelectorAll('.single-line-inner');
    if (!targets.length) return;

    gsap.fromTo(targets, {
      yPercent: 110,
      rotate: 0.001
    }, {
      yPercent: 0,
      rotate: 0.001,
      ease: "primary-ease",
      duration: durationDefault,
      stagger: staggerDefault,
      scrollTrigger: {
        trigger: block,
        start: "top 90%",
        end: "bottom 0%",
        toggleActions: "play none none none"
      }
    });
  });
}
