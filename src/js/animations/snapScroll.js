import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

export function initSnapScroll(sections, { scroller = null } = {}) {
  if (prefersReducedMotion()) return

  sections.forEach((section) => {
    const children = [...section.children]
    gsap.set(children, { opacity: 0, y: 36 })
    const triggerConfig = {
      trigger: section,
      start: 'top 72%',
      once: true,
      onEnter: () => {
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
        })
      },
    }
    if (scroller) triggerConfig.scroller = scroller
    ScrollTrigger.create(triggerConfig)
  })

  ScrollTrigger.refresh()
}
