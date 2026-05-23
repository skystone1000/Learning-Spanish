import '../../css/components/header.css'
import { getState, setMode, setTheme } from '../core/gameState.js'

export function renderHeader(root, state = getState()) {
  if (!root) return

  const hearts = Array.from({ length: 5 }, (_, index) => {
    const filled = index < state.hearts.current
    return `<span class="heart ${filled ? '' : 'empty'}" aria-hidden="true">${filled ? '♥' : '♡'}</span>`
  }).join('')

  root.innerHTML = `
    <header class="site-header">
      <a class="header-logo" href="index.html" aria-label="Aprende home">
        <span class="header-mark">A</span>
        <span>Aprende</span>
      </a>
      <nav class="header-nav" aria-label="Main navigation">
        <a class="header-link" href="dashboard.html">Dashboard</a>
        <a class="header-link" href="reference.html">Reference</a>
        <span class="header-pill optional" aria-label="${state.streak.current} day streak">${state.streak.current} day</span>
        <span class="header-pill" aria-label="${state.xp.total} experience points">${state.xp.total} XP</span>
        <span class="header-hearts" aria-label="${state.hearts.current} hearts">${hearts}</span>
        <label class="mode-toggle" title="Switch between game and story modes">
          <span>Game</span>
          <input type="checkbox" id="mode-toggle-cb" ${state.mode === 'story' ? 'checked' : ''} />
          <span>Story</span>
        </label>
        <button class="icon-btn" id="theme-toggle" type="button" title="Toggle theme" aria-label="Toggle theme">
          ${state.theme === 'dark' ? '☼' : '◐'}
        </button>
      </nav>
    </header>
  `

  root.querySelector('#mode-toggle-cb').addEventListener('change', (event) => {
    setMode(event.target.checked ? 'story' : 'game')
    window.location.reload()
  })

  root.querySelector('#theme-toggle').addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
    document.body.dataset.theme = next
    setTheme(next)
    renderHeader(root, getState())
  })
}
