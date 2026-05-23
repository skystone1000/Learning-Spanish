import '../../css/main.css'
import '../../css/pages/landing.css'
import { getState } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { initExplode } from '../animations/explode.js'
import { initReveal } from '../animations/reveal.js'
import { initSnapScroll } from '../animations/snapScroll.js'

const heroImage = `${import.meta.env.BASE_URL}images/landing-hero-sharp.png`
const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

document.getElementById('snap-hero').innerHTML = `
  <div class="landing-hero-bg" aria-hidden="true">
    <img src="${heroImage}" alt="" />
  </div>
  <div class="section-band landing-hero">
    <p class="landing-eyebrow">Immersion Protocol Activated</p>
    <h1 id="hero-word" class="hero-word"></h1>
    <p class="hero-pronunciation">OH-lah • Hello</p>
    <p class="hero-sub">Enter a focused six-month Spanish journey built for cinematic flow, rapid recall, and adult learners who want momentum without clutter.</p>
    <div class="toolbar justify-content-center">
        <a href="dashboard.html" class="btn-primary-custom">Start Learning</a>
        <a href="reference.html" class="btn-secondary-custom">Open Reference</a>
    </div>
    <span class="material-symbols-outlined landing-scroll-cue" aria-hidden="true">keyboard_arrow_down</span>
  </div>
`
initExplode(document.getElementById('hero-word'), '¡Hola!')

document.getElementById('snap-how').innerHTML = `
  <div class="section-band">
    <div class="landing-section-heading reveal-item">
      <h2>The Architecture of Fluency</h2>
      <p>Engineered routines that move Spanish from recognition to reflex.</p>
    </div>
    <div class="method-grid">
      ${[
        ['bolt', 'Quick lessons', 'High-intensity intervals designed to lock vocabulary into working memory without draining your day.'],
        ['target', 'Practice rounds', 'Recall sessions mix listening, matching, typing, and sentence assembly around your weakest points.'],
        ['menu_book', 'Story mode', 'A pressure-free path turns the same curriculum into an immersive reading flow.'],
      ].map(([icon, title, copy], index) => `
        <article class="method-card reveal-item ${index === 1 ? 'method-card-raised' : ''}">
          <div class="method-icon"><span class="material-symbols-outlined">${icon}</span></div>
          <div>
            <h3>${title}</h3>
            <p>${copy}</p>
          </div>
        </article>
      `).join('')}
    </div>
  </div>
`

document.getElementById('snap-cta').innerHTML = `
  <div class="landing-cta-rings" aria-hidden="true"></div>
  <div class="section-band landing-cta reveal-item">
    <h2>Commit to the <span>Process.</span></h2>
    <p>Your six-month journey awaits. Focused execution, cinematic pacing, and verifiable progress.</p>
    <a href="lesson.html#m1-w1-l1" class="btn-primary-custom btn-cta">
      Join Now
      <span class="material-symbols-outlined">rocket_launch</span>
    </a>
  </div>
  <footer class="landing-footer">
    <strong>Aprende</strong>
    <nav aria-label="Landing footer">
      <a href="dashboard.html">Dashboard</a>
      <a href="reference.html">Reference</a>
      <a href="module.html#1">Journey</a>
    </nav>
    <span>© 2026 Aprende Language Systems.</span>
  </footer>
`

const snapContainer = document.getElementById('snap-container')
initSnapScroll([...document.querySelectorAll('.snap-section')], { scroller: snapContainer })
initReveal([...document.querySelectorAll('.reveal-item')], { scroller: snapContainer })
