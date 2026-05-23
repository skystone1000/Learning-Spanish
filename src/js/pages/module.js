import '../../css/main.css'
import '../../css/components/cards.css'
import { getState } from '../core/gameState.js'
import { getHash } from '../core/router.js'
import { initReveal } from '../animations/reveal.js'
import { renderHeader } from '../components/header.js'
import { renderLessonGrid } from '../components/lessonCard.js'
import { monthCompletion, renderProgressBar } from '../components/progressBar.js'
import { getMonthById } from '../../data/curriculum.js'

const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const monthNumber = Number.parseInt(getHash(), 10) || 1
const month = getMonthById(monthNumber)
const root = document.getElementById('module-root')

if (!month) {
  root.innerHTML = '<p class="text-center mt-5">Month not found.</p>'
} else {
  const locked = state.mode === 'game' && !state.unlockedMonths.includes(month.id)
  root.innerHTML = `
    <a href="dashboard.html" class="text-muted small text-decoration-none">Back to Dashboard</a>
    <section class="my-4">
      <p class="topic-chip mb-3" style="background:color-mix(in srgb, ${month.color} 18%, transparent);color:${month.color}">Month ${month.id}</p>
      <h1 class="mb-2">${month.title}</h1>
      <p class="text-muted mb-4">${month.subtitle}</p>
      <div id="month-progress" class="mb-4"></div>
      ${locked ? '<div class="content-card mx-0">Complete the previous month in Game Mode to unlock this one.</div>' : ''}
      <div class="module-lesson-grid" id="lesson-grid"></div>
    </section>
  `

  renderProgressBar(
    document.getElementById('month-progress'),
    monthCompletion(month.lessons, state.lessons),
    'Month Progress',
    month.color,
  )

  if (!locked) {
    renderLessonGrid(document.getElementById('lesson-grid'), month.lessons, state.lessons, state.mode)
  }

  initReveal([...document.querySelectorAll('.lesson-card')])
}
