import '../../css/main.css'
import '../../css/pages/dashboard.css'
import { checkAndUpdateStreak, getState, refillHeartsIfDue } from '../core/gameState.js'
import { moduleUrl } from '../core/router.js'
import { initExplode } from '../animations/explode.js'
import { initSlider3D } from '../animations/slider3d.js'
import { renderHeader } from '../components/header.js'
import { monthCompletion, renderProgressBar } from '../components/progressBar.js'
import { CURRICULUM, getLessonById } from '../../data/curriculum.js'

refillHeartsIfDue()
checkAndUpdateStreak()
const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const completedCount = Object.values(state.lessons).filter((lesson) => lesson.completed).length
const currentLesson = getLessonById(state.currentLesson) || CURRICULUM.months[0].lessons[0]
const root = document.getElementById('dashboard-root')

root.innerHTML = `
  <section class="mb-4">
    <p class="topic-chip mb-3">Mi Progreso</p>
    <h1 class="mb-2">Welcome back.</h1>
    <p class="text-muted mb-0">Continue from ${currentLesson.title}, or jump into any unlocked month.</p>
  </section>

  <section class="dashboard-grid mb-4">
    <div class="stat-card">
      <div class="stat-value" id="streak-val">${state.streak.current}</div>
      <div class="text-muted small">Day streak</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${state.xp.total}</div>
      <div class="text-muted small">Total XP</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${completedCount}</div>
      <div class="text-muted small">Lessons done</div>
    </div>
    <div class="stat-card">
      <div class="stat-value">${state.hearts.current}</div>
      <div class="text-muted small">Hearts</div>
    </div>
  </section>

  <section class="journey-layout">
    <div>
      <div class="d-flex justify-content-between align-items-center gap-3 mb-3">
        <h2 class="h3 mb-0">Six-Month Journey</h2>
        <div class="slider-nav m-0">
          <button class="icon-btn" type="button" id="prev-btn" aria-label="Previous month">‹</button>
          <button class="icon-btn" type="button" id="next-btn" aria-label="Next month">›</button>
        </div>
      </div>
      <div class="slider-3d-track" id="month-slider">
        ${CURRICULUM.months.map((month) => {
          const unlocked = state.mode === 'story' || state.unlockedMonths.includes(month.id)
          return `
            <article class="slider-3d-item" style="border-top:4px solid ${month.color}">
              <div class="small fw-bold" style="color:${month.color}">MONTH ${month.id}</div>
              <h3 class="h5 mb-0">${month.title}</h3>
              <p class="text-muted small mb-0">${month.subtitle}</p>
              <div id="progress-m${month.id}"></div>
              ${unlocked
                ? `<a href="${moduleUrl(month.id)}" class="btn-primary-custom mt-auto">Open Month</a>`
                : '<span class="btn-secondary-custom mt-auto" aria-disabled="true">Locked</span>'}
            </article>
          `
        }).join('')}
      </div>
    </div>

    <aside class="continue-panel">
      <span class="topic-chip">Next Lesson</span>
      <h3 class="h5 mb-0">${currentLesson.title}</h3>
      <p class="text-muted small mb-0">${currentLesson.topic}</p>
      <a class="btn-primary-custom" href="lesson.html#${currentLesson.id}">Continue</a>
      <a class="btn-secondary-custom" href="reference.html">Reference</a>
    </aside>
  </section>
`

CURRICULUM.months.forEach((month) => {
  renderProgressBar(
    document.getElementById(`progress-m${month.id}`),
    monthCompletion(month.lessons, state.lessons),
    'Month Progress',
    month.color,
  )
})

const track = document.getElementById('month-slider')
const slider = initSlider3D(track, [...track.querySelectorAll('.slider-3d-item')])
document.getElementById('prev-btn').addEventListener('click', slider.prev)
document.getElementById('next-btn').addEventListener('click', slider.next)
initExplode(document.getElementById('streak-val'), String(state.streak.current))
