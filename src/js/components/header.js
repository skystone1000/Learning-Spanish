import '../../css/components/header.css'
import { getState, setMode, setTheme } from '../core/gameState.js'

function renderHearts(count) {
  return Array.from({ length: 5 }, (_, index) => {
    const filled = index < count
    return `<span class="heart ${filled ? '' : 'empty'}" aria-hidden="true">${filled ? '♥' : '♡'}</span>`
  }).join('')
}

function modeControl(state, label = 'Mode') {
  return `
    <label class="mode-toggle" title="Switch between game and story modes">
      <span>${label === 'Mode' ? 'Game' : label}</span>
      <input class="mode-toggle-cb" type="checkbox" ${state.mode === 'story' ? 'checked' : ''} aria-label="Switch to story mode" />
      <span>Story</span>
    </label>
  `
}

function setMenuOpen(root, open) {
  const header = root.querySelector('.site-header')
  const menu = root.querySelector('#header-overflow-menu')
  const button = root.querySelector('#header-menu-toggle')
  const icon = button?.querySelector('.material-symbols-outlined')
  if (!header || !menu || !button) return

  header.classList.toggle('is-menu-open', open)
  menu.hidden = !open
  button.setAttribute('aria-expanded', String(open))
  if (icon) icon.textContent = open ? 'close' : 'menu'
}

function bindHeaderEvents(root) {
  if (root.dataset.headerListeners === 'true') return
  root.dataset.headerListeners = 'true'

  root.addEventListener('click', (event) => {
    const menuButton = event.target.closest('#header-menu-toggle')
    if (menuButton) {
      setMenuOpen(root, menuButton.getAttribute('aria-expanded') !== 'true')
      return
    }

    if (event.target.closest('#theme-toggle')) {
      const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
      document.body.dataset.theme = next
      setTheme(next)
      renderHeader(root, getState())
    }
  })

  root.addEventListener('change', (event) => {
    if (!event.target.matches('.mode-toggle-cb')) return
    setMode(event.target.checked ? 'story' : 'game')
    window.location.reload()
  })

  document.addEventListener('click', (event) => {
    if (!root.contains(event.target)) setMenuOpen(root, false)
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') setMenuOpen(root, false)
  })
}

export function renderHeader(root, state = getState()) {
  if (!root) return

  const hearts = renderHearts(state.hearts.current)
  const themeIcon = state.theme === 'dark' ? 'light_mode' : 'dark_mode'

  root.innerHTML = `
    <header class="site-header">
      <div class="header-left">
        <a class="header-logo" href="index.html" aria-label="Aprende home">
          <span class="header-mark">A</span>
          <span>Aprende</span>
        </a>
        <nav class="header-primary" aria-label="Main navigation">
          <a class="header-link" href="dashboard.html">Dashboard</a>
          <a class="header-link" href="reference.html">Reference</a>
          ${modeControl(state)}
        </nav>
      </div>

      <div class="header-actions" aria-label="Progress and settings">
        <span class="header-pill optional" aria-label="${state.streak.current} day streak">
          <span class="material-symbols-outlined filled" aria-hidden="true">local_fire_department</span>
          <span class="header-pill-text">${state.streak.current} day</span>
        </span>
        <span class="header-pill" aria-label="${state.xp.total} experience points">
          <span class="material-symbols-outlined filled" aria-hidden="true">stars</span>
          <span class="header-pill-text">${state.xp.total} XP</span>
        </span>
        <span class="header-hearts" aria-label="${state.hearts.current} hearts">${hearts}</span>
        <button class="icon-btn" id="theme-toggle" type="button" title="Toggle theme" aria-label="Toggle theme">
          <span class="material-symbols-outlined" aria-hidden="true">${themeIcon}</span>
        </button>
        <button class="icon-btn header-menu-toggle" id="header-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="header-overflow-menu">
          <span class="material-symbols-outlined" aria-hidden="true">menu</span>
        </button>
      </div>

      <div class="header-menu" id="header-overflow-menu" hidden>
        <a class="header-menu-link" href="dashboard.html">
          <span class="material-symbols-outlined" aria-hidden="true">space_dashboard</span>
          Dashboard
        </a>
        <a class="header-menu-link" href="reference.html">
          <span class="material-symbols-outlined" aria-hidden="true">menu_book</span>
          Reference
        </a>
        <div class="header-menu-row">
          <span>Mode</span>
          ${modeControl(state, 'Game')}
        </div>
        <div class="header-menu-stats" aria-label="Progress summary">
          <span>${state.streak.current} day streak</span>
          <span>${state.xp.total} XP</span>
          <span>${state.hearts.current} hearts</span>
        </div>
      </div>
    </header>
  `

  bindHeaderEvents(root)
}
