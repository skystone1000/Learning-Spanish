import gsap from 'gsap'
import { prefersReducedMotion } from './reducedMotion.js'

export function initExplode(containerEl, word, { phonetic = '', translation = '' } = {}) {
  if (!containerEl) return null
  containerEl.innerHTML = ''

  if (prefersReducedMotion()) {
    containerEl.innerHTML = `
      <span class="spanish-text">${word}</span>
      ${phonetic ? `<span class="phonetic-chip">${phonetic}</span>` : ''}
      ${translation ? `<span class="translation-chip">${translation}</span>` : ''}
    `
    return null
  }

  const letters = [...word].map((letter) => {
    const span = document.createElement('span')
    span.textContent = letter
    span.className = 'explode-letter'
    span.style.display = 'inline-block'
    containerEl.appendChild(span)
    return span
  })

  const tl = gsap.timeline()
  tl.set(letters, {
    opacity: 0,
    scale: 0,
    x: () => gsap.utils.random(-130, 130),
    y: () => gsap.utils.random(-90, 90),
    rotation: () => gsap.utils.random(-40, 40),
  })
  tl.to(letters, {
    opacity: 1,
    scale: 1,
    x: 0,
    y: 0,
    rotation: 0,
    duration: 0.7,
    stagger: 0.04,
    ease: 'back.out(1.8)',
  })

  if (phonetic || translation) {
    const meta = document.createElement('div')
    meta.className = 'explode-meta d-flex gap-2 justify-content-center flex-wrap mt-3'
    meta.innerHTML = `
      ${phonetic ? `<span class="phonetic-chip">${phonetic}</span>` : ''}
      ${translation ? `<span class="translation-chip">${translation}</span>` : ''}
    `
    containerEl.appendChild(meta)
    tl.from(meta, { opacity: 0, y: 12, duration: 0.35, ease: 'power2.out' }, '-=0.15')
  }

  return tl
}

export function explodeOut(containerEl) {
  const letters = [...containerEl.querySelectorAll('.explode-letter')]
  return gsap.to(letters, {
    opacity: 0,
    scale: 0,
    x: () => gsap.utils.random(-120, 120),
    y: () => gsap.utils.random(-80, 80),
    duration: 0.4,
    stagger: 0.03,
    ease: 'power2.in',
  })
}
