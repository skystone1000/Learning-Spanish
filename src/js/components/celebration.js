import gsap from 'gsap'

const COLORS = ['#2563eb', '#f59e0b', '#10b981', '#ef4444', '#14b8a6', '#f43f5e']

export function showCelebration(overlay, { xp, stars, message = '¡Excelente!' }) {
  if (!overlay) return Promise.resolve()

  overlay.innerHTML = `
    <div class="celebration-panel">
      <div class="celebration-stars" aria-label="${stars} stars">${'★'.repeat(stars)}</div>
      <div class="celebration-xp">+${xp} XP</div>
      <div class="celebration-msg">${message}</div>
      <button class="btn-primary-custom" id="celebration-continue" type="button">Continue</button>
    </div>
  `
  overlay.classList.add('active')
  spawnConfetti(overlay, 60)

  const tl = gsap.timeline()
  tl.from(overlay.querySelector('.celebration-panel'), { scale: 0.92, opacity: 0, duration: 0.32, ease: 'power2.out' })
  tl.from(overlay.querySelector('.celebration-xp'), { scale: 0, duration: 0.45, ease: 'back.out(2)' }, '-=0.1')

  return new Promise((resolve) => {
    overlay.querySelector('#celebration-continue').addEventListener('click', () => {
      overlay.classList.remove('active')
      overlay.innerHTML = ''
      resolve()
    })
  })
}

function spawnConfetti(parent, count) {
  for (let i = 0; i < count; i += 1) {
    const piece = document.createElement('div')
    piece.className = 'confetti-piece'
    piece.style.left = `${Math.random() * 100}%`
    piece.style.top = '-20px'
    piece.style.background = COLORS[i % COLORS.length]
    parent.appendChild(piece)
    gsap.to(piece, {
      y: window.innerHeight + 40,
      x: gsap.utils.random(-80, 80),
      rotation: gsap.utils.random(0, 720),
      duration: gsap.utils.random(1.2, 2.4),
      delay: gsap.utils.random(0, 0.55),
      ease: 'none',
      onComplete: () => piece.remove(),
    })
  }
}
