import '../../css/main.css'
import '../../css/pages/dashboard.css'
import { checkAndUpdateStreak, getState, refillHeartsIfDue } from '../core/gameState.js'
import { lessonUrl, moduleUrl } from '../core/router.js'
import { renderHeader } from '../components/header.js'
import { monthCompletion } from '../components/progressBar.js'
import { CURRICULUM, getLessonById } from '../../data/curriculum.js'

const formatter = new Intl.NumberFormat('en-US')
const heroImage = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-_Z_KR69UHdo5XFYpyMqfMb3JXyVM3sE5H3jj1uiHAEkx-gTishOCm8K5qlgXGq6jmg-5ccI97T1d3qaQ21P1gXe0NFIv2FgNGL_D3gvFxeBbYd3uKdhyM4hEL5wONv8puKFdRIDI-LKIu4lzhXXdi0ucLqmJMyd-y8Nx9v0GdpK3inbhTkvr2G8oSTPPYQmmN8JVav4mLE4Kz7eefgZO3HfgLf8vuhkueP1D4QEYD_e2wfz9EGEEfjDu8nUGc-y9vm2r47SdjcDAPeT9jKU'
const monthIcons = ['waving_hand', 'groups', 'calendar_month', 'travel_explore', 'history_edu', 'forum']

refillHeartsIfDue()
checkAndUpdateStreak()
const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const completedCount = Object.values(state.lessons).filter((lesson) => lesson.completed).length
const currentLesson = getLessonById(state.currentLesson) || CURRICULUM.months[0].lessons[0]
const currentMonth = CURRICULUM.months.find((month) => month.id === currentLesson.month) || CURRICULUM.months[0]
const currentMonthProgress = monthCompletion(currentMonth.lessons, state.lessons)
const learnerName = state.profile?.name || 'Alex'
const root = document.getElementById('dashboard-root')

const stats = [
  ['local_fire_department', state.streak.current, 'Day streak', '#f97316'],
  ['stars', state.xp.total, 'Total XP', '#facc15'],
  ['check_circle', completedCount, 'Lessons done', '#22d3ee'],
  ['favorite', state.hearts.current, 'Hearts', '#fb7185'],
]

root.innerHTML = `
  <div class="dashboard-kinetic">
    <section class="dashboard-hero">
      <div>
        <p class="dashboard-eyebrow">Spanish command center</p>
        <h1>Welcome back, ${learnerName}!</h1>
        <p>Pick up at ${currentLesson.title}, or scan the six-month journey from one quiet, high-signal dashboard.</p>
      </div>
      <a class="btn-primary-custom dashboard-hero-action" href="${lessonUrl(currentLesson.id)}">
        Continue
        <span class="material-symbols-outlined">arrow_forward</span>
      </a>
    </section>

    <section class="stats-grid" aria-label="Progress stats">
      ${stats.map(([icon, value, label, color]) => `
        <article class="stat-tile" style="--tile-color:${color}">
          <span class="material-symbols-outlined filled" aria-hidden="true">${icon}</span>
          <strong>${formatter.format(value)}</strong>
          <span>${label}</span>
        </article>
      `).join('')}
    </section>

    <section class="dashboard-layout">
      <div class="journey-panel">
        <div class="journey-heading">
          <div>
            <p class="dashboard-eyebrow">Module journey</p>
            <h2>Six-month path</h2>
          </div>
          <a href="reference.html" class="reference-link">
            Reference
            <span class="material-symbols-outlined">menu_book</span>
          </a>
        </div>

        <div class="journey-strip" aria-label="Spanish modules">
          ${CURRICULUM.months.map((month, index) => {
            const progress = monthCompletion(month.lessons, state.lessons)
            const completedLessons = month.lessons.filter((lesson) => state.lessons[lesson.id]?.completed).length
            const unlocked = state.mode === 'story' || state.unlockedMonths.includes(month.id)
            const active = month.id === currentMonth.id
            return `
              <article class="month-card ${active ? 'is-active' : ''} ${unlocked ? '' : 'is-locked'}" style="--month-color:${month.color}">
                <div class="month-card-media ${index === 0 ? 'has-photo' : ''}" ${index === 0 ? `style="--month-image:url(${heroImage})"` : ''}>
                  <span class="material-symbols-outlined" aria-hidden="true">${monthIcons[index] || 'school'}</span>
                </div>
                <div class="month-card-body">
                  <div class="month-kicker">Month ${month.id}</div>
                  <h3>${month.title}</h3>
                  <p>${month.subtitle}</p>
                  <div class="month-progress" aria-label="${progress}% complete">
                    <span style="width:${progress}%"></span>
                  </div>
                  <div class="month-meta">
                    <span>${completedLessons}/${month.lessons.length} lessons</span>
                    <span>${progress}%</span>
                  </div>
                  ${unlocked
                    ? `<a class="month-action" href="${moduleUrl(month.id)}">${active ? 'Resume month' : 'Open month'}</a>`
                    : '<span class="month-action is-disabled" aria-disabled="true">Locked</span>'}
                </div>
              </article>
            `
          }).join('')}
        </div>
      </div>

      <aside class="next-panel" aria-label="Up next">
        <div class="next-ring" style="--next-progress:${currentMonthProgress}%">
          <span>${currentMonthProgress}%</span>
        </div>
        <p class="dashboard-eyebrow">Up next</p>
        <h2>${currentLesson.title}</h2>
        <p>${currentLesson.topic}</p>
        <div class="next-meta">
          <span><span class="material-symbols-outlined" aria-hidden="true">schedule</span>5 min</span>
          <span><span class="material-symbols-outlined" aria-hidden="true">bolt</span>${currentLesson.xp} XP</span>
        </div>
        <a class="btn-primary-custom" href="${lessonUrl(currentLesson.id)}">
          Continue lesson
          <span class="material-symbols-outlined">play_arrow</span>
        </a>
        <a class="btn-secondary-custom" href="reference.html">
          Open reference
          <span class="material-symbols-outlined">library_books</span>
        </a>
      </aside>
    </section>

    <footer class="dashboard-footer">
      <strong>Aprende</strong>
      <span>Game mode unlocks modules in order. Story mode opens the full reference path.</span>
    </footer>
  </div>
`
