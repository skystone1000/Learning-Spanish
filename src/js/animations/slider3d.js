import gsap from 'gsap'
import { prefersReducedMotion } from './reducedMotion.js'

export function initSlider3D(track, items) {
  const total = items.length
  let current = 0

  function render(animated = true) {
    if (!total) return

    if (prefersReducedMotion()) {
      items.forEach((item, index) => {
        item.style.display = index === current ? 'grid' : 'none'
      })
      return
    }

    const angleStep = Math.min(42, 360 / total)
    items.forEach((item, index) => {
      const offset = index - current
      const wrapped = Math.abs(offset) > total / 2 ? offset - Math.sign(offset) * total : offset
      const isCurrent = index === current
      gsap.to(item, {
        xPercent: -50,
        x: wrapped * 56,
        rotateY: wrapped * angleStep,
        z: isCurrent ? 80 : -Math.abs(wrapped) * 90,
        opacity: Math.abs(wrapped) > 2 ? 0 : isCurrent ? 1 : 0.34,
        scale: isCurrent ? 1 : 0.82,
        pointerEvents: isCurrent ? 'auto' : 'none',
        duration: animated ? 0.55 : 0,
        ease: 'power3.out',
      })
    })
    track.style.transformStyle = 'preserve-3d'
  }

  render(false)
  return {
    next() {
      current = (current + 1) % total
      render()
    },
    prev() {
      current = (current - 1 + total) % total
      render()
    },
    goTo(index) {
      current = Math.max(0, Math.min(index, total - 1))
      render()
    },
    getCurrent() {
      return current
    },
  }
}
