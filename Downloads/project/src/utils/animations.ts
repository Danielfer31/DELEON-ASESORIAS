import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInElements = () => {
  const fadeElements = document.querySelectorAll('.fade-in');
  
  fadeElements.forEach(element => {
    ScrollTrigger.create({
      trigger: element,
      start: 'top 80%',
      onEnter: () => element.classList.add('visible'),
      once: true
    });
  });
};

export const initScrollAnimations = () => {
  // Check if ScrollTrigger is active already and kill all instances
  if (ScrollTrigger.getAll().length) {
    ScrollTrigger.getAll().forEach(trigger => trigger.kill(true));
  }

  // Re-initialize animations
  fadeInElements();
};