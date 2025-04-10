import { gsap } from 'gsap';

export function initParallaxEffect() {
  if (typeof window === 'undefined') return;

  const objects = document.querySelectorAll('.parallax-object');

  function moveObjects(event) {
    const centerX = window.innerWidth / 3;
    const centerY = window.innerHeight / 1;

    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetX = (mouseX - centerX) * 0.02;
    const offsetY = (mouseY - centerY) * 0.02;

    objects.forEach((object, index) => {
      const directionX = index % 3 === 0 ? 2 : -2;
      const directionY = index % 3 === 0 ? -2 : 2;
      const objectOffsetX = offsetX * directionX * (index + 2) * 0.2;
      const objectOffsetY = offsetY * directionY * (index + 2) * 0.2;

      gsap.to(object, { x: objectOffsetX, y: objectOffsetY, duration: 0.9 });
    });
  }

  document.addEventListener('mousemove', moveObjects);

  return () => {
    document.removeEventListener('mousemove', moveObjects);
  };
}