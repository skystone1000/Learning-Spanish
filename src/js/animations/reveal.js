import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

export function initReveal(elements) {
  if (prefersReducedMotion()) {
    elements.forEach((element) => {
      element.style.opacity = '1'
      element.style.clipPath = 'none'
    })
    return
  }

  elements.forEach((element) => {
    gsap.set(element, { clipPath: 'inset(0 100% 0 0)', opacity: 1 })
    ScrollTrigger.create({
      trigger: element,
      start: 'top 88%',
      once: true,
      onEnter: () => {
        gsap.to(element, {
          clipPath: 'inset(0 0% 0 0)',
          duration: 0.72,
          ease: 'power3.out',
        })
      },
    })
  })
}

export function revealCorrect(element) {
  gsap.timeline()
    .to(element, { backgroundColor: 'rgba(16, 185, 129, 0.25)', duration: 0.18, ease: 'power2.out' })
    .to(element, { backgroundColor: 'transparent', duration: 0.45, delay: 0.25 })
}

export function revealWrong(element) {
  gsap.to(element, {
    keyframes: [
      { x: -8, duration: 0.06 },
      { x: 8, duration: 0.06 },
      { x: -5, duration: 0.05 },
      { x: 5, duration: 0.05 },
      { x: 0, duration: 0.04 },
    ],
    backgroundColor: 'rgba(239, 68, 68, 0.22)',
    onComplete: () => gsap.to(element, { backgroundColor: 'transparent', duration: 0.45 }),
  })
}
