// gsapConfig.js
import { gsap } from "gsap";
import { ScrollTrigger, CustomEase, Flip } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, CustomEase, Flip);

CustomEase.create("primary-ease", "0.62, 0.05, 0.01, 0.99");
CustomEase.create("primary-ease-out", ".34, 1.56, 0.64, 1");

export const durationDefault = 1.47;
export const durationDefaultFaster = 1.2;
export const staggerDefault = 0.07;

export { gsap, ScrollTrigger };
