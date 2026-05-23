# Spanish Learning Website — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use `superpowers:subagent-driven-development` (recommended) or `superpowers:executing-plans` to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a fully static, gamified Spanish learning website hosted on GitHub Pages, covering a complete 6-month curriculum for English-speaking beginners, with GSAP animations and a toggleable Game/Story mode.

**Architecture:** Vite multi-page app with 5 core HTML pages using hash-based routing for lessons. All game state stored in `localStorage` via a single `gameState.js` module. Curriculum content lives entirely in `src/data/` JS files — adding new content never touches HTML or component code.

**Tech Stack:** Vite 5, Bootstrap 5.3, GSAP 3 (ScrollTrigger), Vitest, Google Fonts (Sora/Inter/Playfair Display)

---

## File Map

| File | Purpose |
|------|---------|
| `index.html` | Landing page (Vite entry) |
| `dashboard.html` | Progress dashboard |
| `module.html` | Month overview (hash routing: `#1` … `#6`) |
| `lesson.html` | Lesson player (hash routing: `#m1-w1-l1`) |
| `reference.html` | Full vocab & grammar reference |
| `vite.config.js` | Multi-page Vite config |
| `src/css/main.css` | CSS variables, reset, typography |
| `src/css/components/header.css` | Header styles |
| `src/css/components/cards.css` | Lesson & exercise card styles |
| `src/css/components/exercises.css` | Exercise UI styles |
| `src/css/components/celebration.css` | Confetti overlay styles |
| `src/css/pages/landing.css` | Landing page styles |
| `src/css/pages/dashboard.css` | Dashboard styles |
| `src/css/pages/lesson.css` | Lesson page styles |
| `src/js/core/gameState.js` | Single source of truth for localStorage |
| `src/js/core/router.js` | Hash routing helpers |
| `src/js/core/audio.js` | Audio playback manager |
| `src/js/animations/reducedMotion.js` | `prefers-reduced-motion` guard |
| `src/js/animations/explode.js` | Letter explosion animation |
| `src/js/animations/snapScroll.js` | GSAP snap scroll |
| `src/js/animations/slider3d.js` | 3D carousel |
| `src/js/animations/reveal.js` | Clip-path immersive reveal |
| `src/js/components/header.js` | Shared header renderer |
| `src/js/components/lessonCard.js` | Lesson card renderer |
| `src/js/components/exerciseEngine.js` | Exercise renderer + scorer |
| `src/js/components/progressBar.js` | XP/completion bars |
| `src/js/components/celebration.js` | Confetti + XP burst overlay |
| `src/js/pages/landing.js` | Landing page init |
| `src/js/pages/dashboard.js` | Dashboard page init |
| `src/js/pages/module.js` | Module overview page init |
| `src/js/pages/lesson.js` | Lesson page init |
| `src/js/pages/reference.js` | Reference page init |
| `src/data/curriculum.js` | Master lesson index, lookup helpers |
| `src/data/_template.js` | Copy to add new content |
| `src/data/month-1/week-1.js` … `month-6/week-4.js` | All lesson data |
| `tests/gameState.test.js` | Unit tests for game state |
| `tests/exerciseEngine.test.js` | Unit tests for exercise scoring |
| `.github/workflows/deploy.yml` | Auto-deploy to GitHub Pages |

---

## Phase 0 — Project Setup

### Task 1: Initialize Vite Project

**Files:** `package.json`, `.gitignore`, `vite.config.js`

- [x] **Step 1: Scaffold project**

```bash
cd /path/to/Learning-Spanish
npm create vite@latest . -- --template vanilla
```

- [x] **Step 2: Install dependencies**

```bash
npm install gsap bootstrap
npm install -D vitest @vitest/ui jsdom
```

- [x] **Step 3: Update `package.json` scripts**

Replace the scripts section:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest run",
    "test:ui": "vitest --ui"
  }
}
```

- [x] **Step 4: Create `.gitignore`**

```
node_modules/
dist/
.DS_Store
```

- [ ] **Step 5: Commit**

```bash
git init
git add package.json package-lock.json .gitignore
git commit -m "feat: initialize Vite project with GSAP and Bootstrap"
```

---

### Task 2: Vite Multi-Page Config

**Files:** `vite.config.js`, `vitest.config.js`

- [x] **Step 1: Write `vite.config.js`**

```js
import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  base: '/learning-spanish/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        module: resolve(__dirname, 'module.html'),
        lesson: resolve(__dirname, 'lesson.html'),
        reference: resolve(__dirname, 'reference.html'),
      }
    }
  }
})
```

- [x] **Step 2: Write `vitest.config.js`**

```js
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  }
})
```

- [x] **Step 3: Verify dev server starts**

```bash
npm run dev
```

Expected: `Local: http://localhost:5173/`

- [ ] **Step 4: Commit**

```bash
git add vite.config.js vitest.config.js
git commit -m "feat: configure Vite multi-page build and Vitest"
```

---

### Task 3: GitHub Actions Deploy

**Files:** `.github/workflows/deploy.yml`

- [x] **Step 1: Create workflow file**

```bash
mkdir -p .github/workflows
```

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
permissions:
  contents: write
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

- [ ] **Step 2: In GitHub repo settings → Pages, set source to `gh-pages` branch**

- [ ] **Step 3: Commit**

```bash
git add .github/workflows/deploy.yml
git commit -m "feat: add GitHub Actions deploy to GitHub Pages"
```

---

### Task 4: Shared CSS Foundation

**Files:** `src/css/main.css`

- [x] **Step 1: Create directory structure**

```bash
mkdir -p src/css/components src/css/pages
```

- [x] **Step 2: Write `src/css/main.css`**

```css
:root {
  --color-primary: #4F46E5;
  --color-secondary: #F59E0B;
  --color-success: #10B981;
  --color-danger: #EF4444;
  --color-bg: #0F0F1A;
  --color-surface: #1A1A2E;
  --color-surface-2: #252540;
  --color-text: #F1F5F9;
  --color-text-muted: #94A3B8;
  --font-heading: 'Sora', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-spanish: 'Playfair Display', serif;
  --radius: 12px;
  --transition: 0.3s ease;
}

[data-theme='light'] {
  --color-bg: #F8FAFC;
  --color-surface: #FFFFFF;
  --color-surface-2: #F1F5F9;
  --color-text: #0F172A;
  --color-text-muted: #64748B;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

body {
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-body);
  transition: background var(--transition), color var(--transition);
}

h1, h2, h3, h4, h5, h6 { font-family: var(--font-heading); }
.spanish-text { font-family: var(--font-spanish); color: var(--color-secondary); }

.snap-container { height: 100vh; overflow-y: scroll; scroll-snap-type: y mandatory; }
.snap-section { height: 100vh; scroll-snap-align: start; display: flex; align-items: center; justify-content: center; }

.btn-primary-custom {
  background: var(--color-primary);
  color: white;
  border: none;
  border-radius: var(--radius);
  padding: 0.75rem 2rem;
  font-family: var(--font-heading);
  font-weight: 600;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition);
}
.btn-primary-custom:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(79,70,229,0.4); }
```

- [ ] **Step 3: Commit**

```bash
git add src/css/main.css
git commit -m "feat: add shared CSS foundation with design tokens"
```


---

## Phase 1 — Core JS Modules

### Task 5: gameState.js + Tests

**Files:** `src/js/core/gameState.js`, `tests/gameState.test.js`

- [x] **Step 1: Create directory structure**

```bash
mkdir -p src/js/core src/js/components src/js/animations src/js/pages tests
```

- [x] **Step 2: Write failing tests first — `tests/gameState.test.js`**

```js
import { describe, it, expect, beforeEach } from 'vitest'
import { getState, completeLesson, loseHeart, checkAndUpdateStreak, unlockMonth, setMode, resetProgress } from '../src/js/core/gameState'

describe('gameState', () => {
  beforeEach(() => localStorage.clear())

  it('returns default state when localStorage is empty', () => {
    const s = getState()
    expect(s.mode).toBe('game')
    expect(s.hearts.current).toBe(5)
    expect(s.xp.total).toBe(0)
    expect(s.unlockedMonths).toEqual([1])
  })

  it('completeLesson updates record, XP, and awards 3 stars for 5 hearts', () => {
    completeLesson('m1-w1-l1', 10, 5)
    const s = getState()
    expect(s.lessons['m1-w1-l1']).toEqual({ completed: true, xpEarned: 10, stars: 3 })
    expect(s.xp.total).toBe(10)
  })

  it('completeLesson awards 2 stars for 3–4 hearts', () => {
    completeLesson('m1-w1-l1', 8, 4)
    expect(getState().lessons['m1-w1-l1'].stars).toBe(2)
  })

  it('loseHeart decrements and clamps at 0', () => {
    expect(loseHeart()).toBe(4)
    for (let i = 0; i < 10; i++) loseHeart()
    expect(getState().hearts.current).toBe(0)
  })

  it('checkAndUpdateStreak starts at 1, does not double-count same day', () => {
    expect(checkAndUpdateStreak()).toBe(1)
    expect(checkAndUpdateStreak()).toBe(1)
  })

  it('unlockMonth adds month without duplicates', () => {
    unlockMonth(2)
    unlockMonth(2)
    expect(getState().unlockedMonths.filter(m => m === 2).length).toBe(1)
  })

  it('setMode and resetProgress work', () => {
    setMode('story')
    expect(getState().mode).toBe('story')
    resetProgress()
    expect(getState().xp.total).toBe(0)
  })
})
```

- [ ] **Step 3: Run tests — verify they FAIL**

```bash
npm test
```

Expected: `Cannot find module '../src/js/core/gameState'`

- [x] **Step 4: Write `src/js/core/gameState.js`**

```js
const KEY = 'spanish_app_state'

const defaults = {
  mode: 'game',
  theme: 'dark',
  streak: { current: 0, longest: 0, lastStudiedDate: null },
  xp: { total: 0, weeklyHistory: [0,0,0,0,0,0,0] },
  hearts: { current: 5, lastRefillTime: null },
  lessons: {},
  unlockedMonths: [1],
  currentLesson: 'm1-w1-l1'
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? { ...defaults, ...JSON.parse(raw) } : { ...defaults }
  } catch { return { ...defaults } }
}

function save(state) { localStorage.setItem(KEY, JSON.stringify(state)) }

export function completeLesson(id, xpEarned, heartsLeft) {
  const s = getState()
  const stars = heartsLeft >= 5 ? 3 : heartsLeft >= 3 ? 2 : 1
  s.lessons[id] = { completed: true, xpEarned, stars }
  s.xp.total += xpEarned
  s.xp.weeklyHistory[6] += xpEarned
  s.currentLesson = id
  save(s)
}

export function loseHeart() {
  const s = getState()
  if (s.hearts.current > 0) s.hearts.current -= 1
  save(s)
  return s.hearts.current
}

export function checkAndUpdateStreak() {
  const s = getState()
  const today = new Date().toISOString().split('T')[0]
  if (s.streak.lastStudiedDate === today) return s.streak.current
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0]
  s.streak.current = s.streak.lastStudiedDate === yesterday ? s.streak.current + 1 : 1
  if (s.streak.current > s.streak.longest) s.streak.longest = s.streak.current
  s.streak.lastStudiedDate = today
  save(s)
  return s.streak.current
}

export function unlockMonth(n) {
  const s = getState()
  if (!s.unlockedMonths.includes(n)) s.unlockedMonths.push(n)
  save(s)
}

export function setMode(mode) { const s = getState(); s.mode = mode; save(s) }

export function refillHeartsIfDue() {
  const s = getState()
  if (!s.hearts.lastRefillTime || Date.now() - s.hearts.lastRefillTime >= 86400000) {
    s.hearts.current = 5; s.hearts.lastRefillTime = Date.now(); save(s)
  }
  return s.hearts.current
}

export function setTheme(theme) { const s = getState(); s.theme = theme; save(s) }

export function resetProgress() { localStorage.removeItem(KEY) }
```

- [x] **Step 5: Run tests — verify they PASS**

```bash
npm test
```

Expected: `7 tests passed`

- [ ] **Step 6: Commit**

```bash
git add src/js/core/gameState.js tests/gameState.test.js
git commit -m "feat: add gameState module with localStorage API and tests"
```

---

### Task 6: router.js

**Files:** `src/js/core/router.js`

- [x] **Step 1: Write `src/js/core/router.js`**

```js
/** Returns the hash value without the `#`, e.g. 'm1-w1-l1' */
export function getHash() {
  return location.hash.slice(1) || ''
}

/** Parses a lesson ID like 'm1-w1-l1' into { month:1, week:1, lesson:1 } */
export function parseLessonId(id) {
  const [m, w, l] = id.replace(/[mwl]/g, '').split('-').map(Number)
  return { month: m, week: w, lesson: l }
}

/** Builds a lesson URL hash */
export function lessonUrl(id) { return `lesson.html#${id}` }

/** Builds a module URL hash */
export function moduleUrl(monthNum) { return `module.html#${monthNum}` }

/** Navigates to a URL */
export function navigate(url) { location.href = url }

/** Calls cb whenever hash changes */
export function onHashChange(cb) { window.addEventListener('hashchange', cb) }
```

- [ ] **Step 2: Commit**

```bash
git add src/js/core/router.js
git commit -m "feat: add router helpers for hash-based navigation"
```

---

### Task 7: audio.js

**Files:** `src/js/core/audio.js`

- [x] **Step 1: Write `src/js/core/audio.js`**

```js
let currentAudio = null

/**
 * Play an audio file from /audio/ directory.
 * @param {string} path - e.g. '/audio/m1/w1/hola.mp3'
 */
export function playAudio(path) {
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
  const audio = new Audio(path)
  currentAudio = audio
  audio.play().catch(() => { /* autoplay blocked — user must click */ })
}

export function stopAudio() {
  if (currentAudio) { currentAudio.pause(); currentAudio = null }
}

/** Attach click handler to all elements with [data-audio] attribute */
export function initAudioButtons(root = document) {
  root.querySelectorAll('[data-audio]').forEach(btn => {
    btn.addEventListener('click', () => playAudio(btn.dataset.audio))
  })
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/core/audio.js
git commit -m "feat: add audio playback manager"
```


---

## Phase 2 — Animation System

### Task 8: reducedMotion.js

**Files:** `src/js/animations/reducedMotion.js`

- [x] **Step 1: Write `src/js/animations/reducedMotion.js`**

```js
export const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
```

- [ ] **Step 2: Commit**

```bash
git add src/js/animations/reducedMotion.js
git commit -m "feat: add reduced-motion guard for accessibility"
```

---

### Task 9: explode.js — Letter Explosion

**Files:** `src/js/animations/explode.js`

- [x] **Step 1: Write `src/js/animations/explode.js`**

```js
import gsap from 'gsap'
import { prefersReducedMotion } from './reducedMotion.js'

/**
 * Explode letters of `word` outward into `containerEl`, then coalesce.
 * Appends orbit elements for phonetic and translation after coalescing.
 */
export function initExplode(containerEl, word, { phonetic = '', translation = '' } = {}) {
  containerEl.innerHTML = ''

  if (prefersReducedMotion()) {
    containerEl.innerHTML = `<span class="spanish-text">${word}</span>
      <span class="phonetic-chip">${phonetic}</span>
      <span class="translation-chip">${translation}</span>`
    return
  }

  const letters = word.split('').map(ch => {
    const span = document.createElement('span')
    span.textContent = ch
    span.style.display = 'inline-block'
    span.className = 'explode-letter spanish-text'
    containerEl.appendChild(span)
    return span
  })

  const tl = gsap.timeline()
  tl.set(letters, {
    opacity: 0, scale: 0,
    x: () => gsap.utils.random(-120, 120),
    y: () => gsap.utils.random(-80, 80)
  })
  tl.to(letters, { opacity: 1, scale: 1, x: 0, y: 0, duration: 0.7, stagger: 0.05, ease: 'back.out(1.7)' })

  if (phonetic || translation) {
    const meta = document.createElement('div')
    meta.className = 'explode-meta'
    meta.innerHTML = `
      <span class="phonetic-chip">${phonetic}</span>
      <span class="translation-chip">${translation}</span>`
    meta.style.opacity = '0'
    containerEl.appendChild(meta)
    tl.to(meta, { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }, '-=0.2')
  }

  return tl
}

export function explodeOut(containerEl) {
  const letters = [...containerEl.querySelectorAll('.explode-letter')]
  return gsap.to(letters, {
    opacity: 0, scale: 0,
    x: () => gsap.utils.random(-120, 120),
    y: () => gsap.utils.random(-80, 80),
    duration: 0.4, stagger: 0.03, ease: 'power2.in'
  })
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/animations/explode.js
git commit -m "feat: add letter explosion GSAP animation"
```

---

### Task 10: snapScroll.js

**Files:** `src/js/animations/snapScroll.js`

- [x] **Step 1: Write `src/js/animations/snapScroll.js`**

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initialise snap-scroll with entrance animations on each section.
 * @param {HTMLElement[]} sections - array of .snap-section elements
 */
export function initSnapScroll(sections) {
  if (prefersReducedMotion()) return

  sections.forEach((section) => {
    const children = [...section.children]
    gsap.set(children, { opacity: 0, y: 50 })
    ScrollTrigger.create({
      trigger: section,
      start: 'top 75%',
      onEnter: () => gsap.to(children, { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(children, { opacity: 0, y: 50, duration: 0.3 }),
    })
  })
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/animations/snapScroll.js
git commit -m "feat: add GSAP snap scroll with entrance animations"
```

---

### Task 11: slider3d.js

**Files:** `src/js/animations/slider3d.js`

- [x] **Step 1: Write `src/js/animations/slider3d.js`**

```js
import gsap from 'gsap'
import { prefersReducedMotion } from './reducedMotion.js'

/**
 * 3D carousel for `items` inside `track`.
 * The track element must have `perspective: 1200px` set in CSS.
 * @returns {{ next, prev, goTo }}
 */
export function initSlider3D(track, items) {
  const total = items.length
  let current = 0
  const angleStep = 360 / total

  function render(animated = true) {
    if (prefersReducedMotion()) {
      items.forEach((item, i) => { item.style.display = i === current ? 'block' : 'none' })
      return
    }
    items.forEach((item, i) => {
      const deg = (i - current) * angleStep
      const props = {
        rotateY: deg,
        z: i === current ? 0 : -200,
        opacity: i === current ? 1 : 0.35,
        scale: i === current ? 1 : 0.75,
        duration: animated ? 0.65 : 0,
        ease: 'power3.out',
      }
      gsap.to(item, props)
    })
    track.style.transformStyle = 'preserve-3d'
  }

  render(false)
  return {
    next() { current = (current + 1) % total; render() },
    prev() { current = (current - 1 + total) % total; render() },
    goTo(i) { current = i; render() },
    getCurrent() { return current }
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/animations/slider3d.js
git commit -m "feat: add 3D carousel GSAP animation"
```

---

### Task 12: reveal.js

**Files:** `src/js/animations/reveal.js`

- [x] **Step 1: Write `src/js/animations/reveal.js`**

```js
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { prefersReducedMotion } from './reducedMotion.js'

gsap.registerPlugin(ScrollTrigger)

/**
 * Clip-path wipe reveal triggered on scroll-enter for each element.
 * @param {HTMLElement[]} elements
 */
export function initReveal(elements) {
  if (prefersReducedMotion()) {
    elements.forEach(el => { el.style.opacity = '1'; el.style.clipPath = 'none' })
    return
  }
  elements.forEach(el => {
    gsap.set(el, { clipPath: 'inset(0 100% 0 0)', opacity: 1 })
    ScrollTrigger.create({
      trigger: el,
      start: 'top 88%',
      onEnter: () => gsap.to(el, { clipPath: 'inset(0 0% 0 0)', duration: 0.85, ease: 'power3.out' }),
      onLeaveBack: () => gsap.to(el, { clipPath: 'inset(0 100% 0 0)', duration: 0.4 }),
    })
  })
}

/** Flash element green — correct answer */
export function revealCorrect(el) {
  gsap.timeline()
    .to(el, { backgroundColor: 'rgba(16,185,129,0.25)', duration: 0.25, ease: 'power2.out' })
    .to(el, { backgroundColor: 'transparent', duration: 0.6, delay: 0.4 })
}

/** Shake element red — wrong answer */
export function revealWrong(el) {
  gsap.to(el, {
    keyframes: [
      { x: -8, duration: 0.07 }, { x: 8, duration: 0.07 },
      { x: -6, duration: 0.06 }, { x: 6, duration: 0.06 },
      { x: 0, duration: 0.05 }
    ],
    backgroundColor: 'rgba(239,68,68,0.25)',
    onComplete: () => gsap.to(el, { backgroundColor: 'transparent', duration: 0.5 })
  })
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/animations/reveal.js
git commit -m "feat: add clip-path reveal and answer feedback animations"
```


---

## Phase 3 — UI Components

### Task 13: header.js

**Files:** `src/js/components/header.js`, `src/css/components/header.css`

- [x] **Step 1: Write `src/css/components/header.css`**

```css
.site-header {
  position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
  height: 64px; display: flex; align-items: center; justify-content: space-between;
  padding: 0 1.5rem;
  background: rgba(15,15,26,0.85); backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.header-logo { font-family: var(--font-heading); font-weight: 700; font-size: 1.1rem; color: var(--color-primary); text-decoration: none; }
.header-hearts { display: flex; gap: 4px; font-size: 1.1rem; }
.header-hearts .heart { transition: transform 0.2s; }
.header-hearts .heart.empty { opacity: 0.25; }
.header-xp { font-size: 0.85rem; color: var(--color-secondary); font-weight: 600; }
.header-streak { font-size: 0.85rem; color: var(--color-secondary); }
.mode-toggle { display: flex; align-items: center; gap: 8px; font-size: 0.8rem; }
.mode-toggle input[type=checkbox] { width: 36px; height: 20px; cursor: pointer; }
```

- [x] **Step 2: Write `src/js/components/header.js`**

```js
import { getState, setMode, setTheme } from '../core/gameState.js'

export function renderHeader(root, state = getState()) {
  const s = state
  const hearts = Array.from({ length: 5 }, (_, i) =>
    `<span class="heart ${i < s.hearts.current ? '' : 'empty'}">❤️</span>`
  ).join('')

  root.innerHTML = `
    <header class="site-header">
      <a class="header-logo" href="index.html">🇪🇸 Aprende</a>
      <nav class="d-flex align-items-center gap-3">
        <span class="header-streak">🔥 ${s.streak.current}</span>
        <span class="header-xp">⭐ ${s.xp.total} XP</span>
        <div class="header-hearts">${hearts}</div>
        <label class="mode-toggle" title="Switch mode">
          <span>🎮</span>
          <input type="checkbox" id="mode-toggle-cb" ${s.mode === 'story' ? 'checked' : ''}>
          <span>📖</span>
        </label>
        <button class="btn btn-sm" id="theme-toggle" title="Toggle theme">
          ${s.theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>`

  document.getElementById('mode-toggle-cb').addEventListener('change', (e) => {
    const mode = e.target.checked ? 'story' : 'game'
    setMode(mode)
    location.reload()
  })

  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.body.dataset.theme === 'dark' ? 'light' : 'dark'
    document.body.dataset.theme = next
    setTheme(next)
    renderHeader(root)
  })
}
```

- [ ] **Step 3: Commit**

```bash
git add src/js/components/header.js src/css/components/header.css
git commit -m "feat: add shared header with mode toggle and hearts display"
```

---

### Task 14: lessonCard.js

**Files:** `src/js/components/lessonCard.js`, `src/css/components/cards.css`

- [x] **Step 1: Write `src/css/components/cards.css`**

```css
.lesson-card {
  background: var(--color-surface); border-radius: var(--radius);
  padding: 1.25rem; cursor: pointer;
  border: 2px solid transparent;
  transition: border-color var(--transition), transform var(--transition);
  position: relative;
}
.lesson-card:hover { transform: translateY(-3px); border-color: var(--color-primary); }
.lesson-card.completed { border-color: var(--color-success); }
.lesson-card.locked { opacity: 0.45; cursor: not-allowed; }
.lesson-card .stars { position: absolute; top: 10px; right: 12px; font-size: 0.85rem; }
.lesson-card .lesson-title { font-family: var(--font-heading); font-size: 0.95rem; margin-bottom: 4px; }
.lesson-card .lesson-xp { font-size: 0.78rem; color: var(--color-secondary); }

.content-card {
  background: var(--color-surface); border-radius: var(--radius);
  padding: 2rem; margin-bottom: 1.5rem;
  opacity: 0; /* revealed by initReveal */
}
.content-card .spanish-word { font-size: 2.5rem; margin-bottom: 0.5rem; }
.phonetic-chip {
  display: inline-block; background: rgba(79,70,229,0.15);
  color: var(--color-primary); border-radius: 20px;
  padding: 2px 12px; font-size: 0.8rem; margin-right: 8px;
}
.translation-chip {
  display: inline-block; background: rgba(245,158,11,0.15);
  color: var(--color-secondary); border-radius: 20px;
  padding: 2px 12px; font-size: 0.8rem;
}
```

- [x] **Step 2: Write `src/js/components/lessonCard.js`**

```js
import { lessonUrl } from '../core/router.js'

/**
 * Render a grid of lesson cards into `container`.
 * @param {HTMLElement} container
 * @param {object[]} lessons - array of lesson data objects
 * @param {object} lessonState - gameState.lessons record
 * @param {string} mode - 'game' | 'story'
 */
export function renderLessonGrid(container, lessons, lessonState, mode) {
  container.innerHTML = lessons.map((lesson, i) => {
    const record = lessonState[lesson.id]
    const completed = !!record?.completed
    const locked = mode === 'game' && i > 0 && !lessonState[lessons[i - 1]?.id]?.completed
    const stars = completed ? '⭐'.repeat(record.stars) : ''
    const cls = completed ? 'completed' : locked ? 'locked' : ''

    return `
      <div class="lesson-card ${cls}" data-lesson-id="${lesson.id}"
           ${locked ? '' : `onclick="location.href='${lessonUrl(lesson.id)}'"`}>
        <div class="stars">${stars}</div>
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-xp">+${lesson.xp} XP</div>
      </div>`
  }).join('')
}
```

- [ ] **Step 3: Commit**

```bash
git add src/js/components/lessonCard.js src/css/components/cards.css
git commit -m "feat: add lesson card renderer with locked/completed states"
```

---

### Task 15: exerciseEngine.js + Tests

**Files:** `src/js/components/exerciseEngine.js`, `tests/exerciseEngine.test.js`

- [x] **Step 1: Write failing tests — `tests/exerciseEngine.test.js`**

```js
import { describe, it, expect } from 'vitest'
import { checkAnswer, getStars, calculateXP } from '../src/js/components/exerciseEngine'

describe('exerciseEngine', () => {
  it('checkAnswer: multiple-choice correct', () => {
    expect(checkAnswer({ type: 'multiple-choice', answer: 'Hola' }, 'Hola')).toBe(true)
  })
  it('checkAnswer: multiple-choice wrong', () => {
    expect(checkAnswer({ type: 'multiple-choice', answer: 'Hola' }, 'Adiós')).toBe(false)
  })
  it('checkAnswer: fill-blank case-insensitive and trims', () => {
    expect(checkAnswer({ type: 'fill-blank', answer: 'Hola' }, '  hola  ')).toBe(true)
  })
  it('checkAnswer: arrange-words matches joined answer', () => {
    expect(checkAnswer({ type: 'arrange-words', answer: 'Buenos días' }, 'Buenos días')).toBe(true)
  })
  it('getStars: 5 hearts → 3', () => expect(getStars(5)).toBe(3))
  it('getStars: 3 hearts → 2', () => expect(getStars(3)).toBe(2))
  it('getStars: 1 heart → 1', () => expect(getStars(1)).toBe(1))
  it('calculateXP: base with no mistakes, no speed bonus', () => expect(calculateXP(10, 0, 150)).toBe(10))
  it('calculateXP: speed bonus under 60s', () => expect(calculateXP(10, 0, 45)).toBe(15))
  it('calculateXP: never below half base', () => expect(calculateXP(10, 20, 150)).toBe(5))
})
```

- [ ] **Step 2: Run tests — verify FAIL**

```bash
npm test
```

Expected: `Cannot find module '../src/js/components/exerciseEngine'`

- [x] **Step 3: Write `src/js/components/exerciseEngine.js`**

```js
export function checkAnswer(exercise, userAnswer) {
  const correct = exercise.answer
  if (exercise.type === 'fill-blank') {
    return userAnswer.trim().toLowerCase() === correct.trim().toLowerCase()
  }
  return userAnswer === correct
}

export function getStars(heartsRemaining) {
  if (heartsRemaining >= 5) return 3
  if (heartsRemaining >= 3) return 2
  return 1
}

export function calculateXP(base, mistakes, timeSeconds) {
  const penalty = mistakes * 2
  const bonus = timeSeconds < 60 ? 5 : timeSeconds < 120 ? 2 : 0
  return Math.max(base - penalty + bonus, Math.floor(base / 2))
}

export function renderExercise(exercise, container) {
  container.innerHTML = ''
  const map = { 'multiple-choice': mc, 'fill-blank': fb, 'matching': match, 'listen-select': ls, 'arrange-words': aw }
  ;(map[exercise.type] || (() => {}))(exercise, container)
}

function mc(ex, c) {
  c.innerHTML = `<p class="exercise-question">${ex.question}</p>
    <div class="options-grid">
      ${ex.options.map(o => `<button class="exercise-option" data-value="${o}">${o}</button>`).join('')}
    </div>`
}

function fb(ex, c) {
  c.innerHTML = `<p class="exercise-question">${ex.question}</p>
    <input class="exercise-input form-control" type="text" placeholder="Type in Spanish…" autocomplete="off">
    <button class="btn btn-primary-custom mt-2">Check</button>`
}

function match(ex, c) {
  const shuffled = [...ex.pairs].sort(() => Math.random() - 0.5)
  c.innerHTML = `<p class="exercise-question">${ex.question}</p>
    <div class="matching-grid">
      <div class="match-col">
        ${ex.pairs.map(p => `<div class="match-item" data-id="${ex.pairs.indexOf(p)}" data-lang="es">${p.spanish}</div>`).join('')}
      </div>
      <div class="match-col">
        ${shuffled.map(p => `<div class="match-item" data-id="${ex.pairs.indexOf(p)}" data-lang="en">${p.english}</div>`).join('')}
      </div>
    </div>`
}

function ls(ex, c) {
  c.innerHTML = `<p class="exercise-question">${ex.question}</p>
    <button class="audio-play-btn mb-3" data-audio="${ex.audioFile}">▶ Play</button>
    <div class="options-grid">
      ${ex.options.map(o => `<button class="exercise-option" data-value="${o}">${o}</button>`).join('')}
    </div>`
}

function aw(ex, c) {
  const words = [...ex.words].sort(() => Math.random() - 0.5)
  c.innerHTML = `<p class="exercise-question">${ex.question}</p>
    <div class="arrange-target" id="arrange-target"></div>
    <div class="arrange-bank">
      ${words.map(w => `<span class="arrange-word" draggable="true">${w}</span>`).join('')}
    </div>`
}
```

- [x] **Step 4: Run tests — verify PASS**

```bash
npm test
```

Expected: `10 tests passed`

- [ ] **Step 5: Commit**

```bash
git add src/js/components/exerciseEngine.js tests/exerciseEngine.test.js
git commit -m "feat: add exercise engine with rendering and scoring, all tests pass"
```

---

### Task 16: progressBar.js

**Files:** `src/js/components/progressBar.js`

- [x] **Step 1: Write `src/js/components/progressBar.js`**

```js
/**
 * Render an animated progress bar into `root`.
 * @param {HTMLElement} root
 * @param {number} value - 0 to 100
 * @param {string} label
 * @param {string} color - CSS color value
 */
export function renderProgressBar(root, value, label, color = 'var(--color-primary)') {
  root.innerHTML = `
    <div class="progress-wrap">
      <div class="progress-label">${label}</div>
      <div class="progress" style="height:10px; border-radius:8px; background:var(--color-surface-2)">
        <div class="progress-bar"
             role="progressbar"
             style="width:0%; background:${color}; border-radius:8px; transition:width 0.8s ease"
             aria-valuenow="${value}" aria-valuemin="0" aria-valuemax="100">
        </div>
      </div>
    </div>`
  requestAnimationFrame(() => {
    root.querySelector('.progress-bar').style.width = `${Math.min(value, 100)}%`
  })
}

/** Calculate lesson completion % for a month */
export function monthCompletion(monthLessons, lessonState) {
  const total = monthLessons.length
  const done = monthLessons.filter(l => lessonState[l.id]?.completed).length
  return total === 0 ? 0 : Math.round((done / total) * 100)
}
```

- [ ] **Step 2: Commit**

```bash
git add src/js/components/progressBar.js
git commit -m "feat: add animated progress bar component"
```

---

### Task 17: celebration.js

**Files:** `src/js/components/celebration.js`, `src/css/components/celebration.css`

- [x] **Step 1: Write `src/css/components/celebration.css`**

```css
#celebration-overlay {
  position: fixed; inset: 0; z-index: 9999;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  background: rgba(15,15,26,0.92); pointer-events: none; opacity: 0;
  transition: opacity 0.3s;
}
#celebration-overlay.active { opacity: 1; pointer-events: all; }
.celebration-xp { font-family: var(--font-heading); font-size: 4rem; color: var(--color-secondary); }
.celebration-stars { font-size: 2.5rem; letter-spacing: 8px; }
.celebration-msg { font-size: 1.2rem; color: var(--color-text-muted); margin-top: 1rem; }
.confetti-piece {
  position: absolute; width: 10px; height: 10px; border-radius: 2px;
}
```

- [x] **Step 2: Write `src/js/components/celebration.js`**

```js
import gsap from 'gsap'

const COLORS = ['#4F46E5','#F59E0B','#10B981','#EF4444','#EC4899','#06B6D4']

export function showCelebration(overlay, { xp, stars, message = '¡Excelente!' }) {
  overlay.innerHTML = `
    <div class="celebration-stars">${'⭐'.repeat(stars)}</div>
    <div class="celebration-xp">+${xp} XP</div>
    <div class="celebration-msg">${message}</div>
    <button class="btn-primary-custom mt-4" id="cel-continue">Continuar →</button>`

  spawnConfetti(overlay, 60)
  overlay.classList.add('active')

  const tl = gsap.timeline()
  tl.from('.celebration-xp', { scale: 0, duration: 0.5, ease: 'back.out(2)' })
  tl.from('.celebration-stars', { opacity: 0, y: 20, duration: 0.4 }, '-=0.2')

  return new Promise(resolve => {
    overlay.querySelector('#cel-continue').addEventListener('click', () => {
      overlay.classList.remove('active')
      overlay.innerHTML = ''
      resolve()
    })
  })
}

function spawnConfetti(parent, count) {
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div')
    el.className = 'confetti-piece'
    el.style.cssText = `left:${Math.random()*100}%;top:-20px;background:${COLORS[i%COLORS.length]};`
    parent.appendChild(el)
    gsap.to(el, {
      y: window.innerHeight + 40,
      x: gsap.utils.random(-80, 80),
      rotation: gsap.utils.random(0, 720),
      duration: gsap.utils.random(1.2, 2.5),
      delay: gsap.utils.random(0, 0.6),
      ease: 'none',
      onComplete: () => el.remove()
    })
  }
}
```

- [ ] **Step 3: Commit**

```bash
git add src/js/components/celebration.js src/css/components/celebration.css
git commit -m "feat: add confetti celebration overlay with XP display"
```


---

## Phase 4 — Curriculum Data

### Task 18: curriculum.js Master Index + Template

**Files:** `src/data/curriculum.js`, `src/data/_template.js`

- [x] **Step 1: Create data directories**

```bash
mkdir -p src/data/month-1 src/data/month-2 src/data/month-3
mkdir -p src/data/month-4 src/data/month-5 src/data/month-6
```

- [x] **Step 2: Write `src/data/_template.js`**

```js
// Copy this file to src/data/month-X/week-Y.js and fill in real content.
// Lesson ID format: mX-wY-lN  (e.g. m7-w1-l1 for Month 7, Week 1, Lesson 1)

export const lessons = [
  {
    id: 'mX-wY-l1',
    month: 0,   // integer
    week: 0,    // 1–4
    lesson: 1,  // 1–5
    title: 'Lesson Title',
    xp: 10,
    audio: '/audio/mX/wY/',
    content: [
      { type: 'vocabulary', spanish: '', english: '', phonetic: '', audioFile: '', notes: '' },
      { type: 'grammar', title: '', explanation: '', examples: [{ spanish: '', english: '' }] },
      { type: 'phrase', spanish: '', english: '', phonetic: '', audioFile: '' },
      { type: 'dialogue', lines: [{ speaker: 'A', text: '' }, { speaker: 'B', text: '' }] },
    ],
    exercises: [
      { type: 'multiple-choice', question: '', options: ['', '', '', ''], answer: '' },
      { type: 'fill-blank', question: '', answer: '' },
      { type: 'matching', question: 'Match Spanish to English', pairs: [{ spanish: '', english: '' }] },
      { type: 'listen-select', question: '', audioFile: '', options: ['', '', '', ''], answer: '' },
      { type: 'arrange-words', question: '', words: [], answer: '' },
    ]
  },
  // Lessons l2–l5: copy block above, change id/lesson/title/content/exercises
]
```

- [x] **Step 3: Write `src/data/curriculum.js`** (add month imports as data files are created)

```js
// Import week data as it is created — add lines here for each new month/week
import { lessons as m1w1 } from './month-1/week-1.js'
import { lessons as m1w2 } from './month-1/week-2.js'
import { lessons as m1w3 } from './month-1/week-3.js'
import { lessons as m1w4 } from './month-1/week-4.js'
import { lessons as m2w1 } from './month-2/week-1.js'
import { lessons as m2w2 } from './month-2/week-2.js'
import { lessons as m2w3 } from './month-2/week-3.js'
import { lessons as m2w4 } from './month-2/week-4.js'
import { lessons as m3w1 } from './month-3/week-1.js'
import { lessons as m3w2 } from './month-3/week-2.js'
import { lessons as m3w3 } from './month-3/week-3.js'
import { lessons as m3w4 } from './month-3/week-4.js'
import { lessons as m4w1 } from './month-4/week-1.js'
import { lessons as m4w2 } from './month-4/week-2.js'
import { lessons as m4w3 } from './month-4/week-3.js'
import { lessons as m4w4 } from './month-4/week-4.js'
import { lessons as m5w1 } from './month-5/week-1.js'
import { lessons as m5w2 } from './month-5/week-2.js'
import { lessons as m5w3 } from './month-5/week-3.js'
import { lessons as m5w4 } from './month-5/week-4.js'
import { lessons as m6w1 } from './month-6/week-1.js'
import { lessons as m6w2 } from './month-6/week-2.js'
import { lessons as m6w3 } from './month-6/week-3.js'
import { lessons as m6w4 } from './month-6/week-4.js'

export const CURRICULUM = {
  months: [
    { id: 1, title: 'Hello, Spanish!', subtitle: 'Foundations', color: '#4F46E5',
      lessons: [...m1w1, ...m1w2, ...m1w3, ...m1w4] },
    { id: 2, title: 'Who Are You?', subtitle: 'People & Identity', color: '#7C3AED',
      lessons: [...m2w1, ...m2w2, ...m2w3, ...m2w4] },
    { id: 3, title: 'Daily Life', subtitle: 'Routine & Actions', color: '#0891B2',
      lessons: [...m3w1, ...m3w2, ...m3w3, ...m3w4] },
    { id: 4, title: 'Getting Around', subtitle: 'Places & Movement', color: '#059669',
      lessons: [...m4w1, ...m4w2, ...m4w3, ...m4w4] },
    { id: 5, title: 'Past & Future', subtitle: 'Tenses', color: '#D97706',
      lessons: [...m5w1, ...m5w2, ...m5w3, ...m5w4] },
    { id: 6, title: 'Real Conversations', subtitle: 'Fluency Building', color: '#DC2626',
      lessons: [...m6w1, ...m6w2, ...m6w3, ...m6w4] },
  ]
}

export const getLessonById = id =>
  CURRICULUM.months.flatMap(m => m.lessons).find(l => l.id === id) || null

export const getMonthById = n =>
  CURRICULUM.months.find(m => m.id === n) || null

export const getNextLesson = currentId => {
  const all = CURRICULUM.months.flatMap(m => m.lessons)
  const i = all.findIndex(l => l.id === currentId)
  return i >= 0 ? all[i + 1] || null : null
}
```

- [ ] **Step 4: Commit**

```bash
git add src/data/curriculum.js src/data/_template.js
git commit -m "feat: add curriculum master index and lesson template"
```

---

### Task 19: Month 1 Data — Hello, Spanish! (Foundations)

**Files:** `src/data/month-1/week-1.js` through `week-4.js`

Month 1 theme: alphabet, numbers, greetings, articles, gender of nouns.

- [x] **Step 1: Write `src/data/month-1/week-1.js` — Greetings & Numbers 1–20**

Each lesson follows the schema from `_template.js`. Full content below:

```js
export const lessons = [
  {
    id: 'm1-w1-l1', month: 1, week: 1, lesson: 1,
    title: 'Basic Greetings', xp: 10, audio: '/audio/m1/w1/',
    content: [
      { type: 'vocabulary', spanish: 'Hola', english: 'Hello', phonetic: 'OH-lah', audioFile: 'hola.mp3', notes: 'Any time of day' },
      { type: 'vocabulary', spanish: 'Buenos días', english: 'Good morning', phonetic: 'BWEH-nos DEE-as', audioFile: 'buenos-dias.mp3', notes: 'Until noon' },
      { type: 'vocabulary', spanish: 'Buenas tardes', english: 'Good afternoon', phonetic: 'BWEH-nas TAR-des', audioFile: 'buenas-tardes.mp3', notes: 'Noon to evening' },
      { type: 'vocabulary', spanish: 'Buenas noches', english: 'Good evening / Good night', phonetic: 'BWEH-nas NO-ches', audioFile: 'buenas-noches.mp3' },
      { type: 'vocabulary', spanish: '¿Cómo estás?', english: 'How are you?', phonetic: 'KOH-mo es-TAS', audioFile: 'como-estas.mp3', notes: 'Informal' },
      { type: 'vocabulary', spanish: 'Bien, gracias', english: 'Well, thank you', phonetic: 'BYEN, GRA-syas', audioFile: 'bien-gracias.mp3' },
    ],
    exercises: [
      { type: 'multiple-choice', question: "How do you say 'Hello'?", options: ['Hola','Adiós','Gracias','Por favor'], answer: 'Hola' },
      { type: 'multiple-choice', question: "Which is a morning greeting?", options: ['Buenos días','Buenas tardes','Buenas noches','Hola'], answer: 'Buenos días' },
      { type: 'fill-blank', question: "¿___ estás? (How are you?)", answer: 'Cómo' },
      { type: 'listen-select', question: 'What did you hear?', audioFile: '/audio/m1/w1/buenas-tardes.mp3', options: ['Buenos días','Buenas tardes','Buenas noches','Hola'], answer: 'Buenas tardes' },
      { type: 'arrange-words', question: "Arrange: 'Good morning' in Spanish", words: ['días','Buenos'], answer: 'Buenos días' },
    ]
  },
  {
    id: 'm1-w1-l2', month: 1, week: 1, lesson: 2,
    title: 'Farewells & Courtesy', xp: 10, audio: '/audio/m1/w1/',
    content: [
      { type: 'vocabulary', spanish: 'Adiós', english: 'Goodbye', phonetic: 'ah-DYOS', audioFile: 'adios.mp3' },
      { type: 'vocabulary', spanish: 'Hasta luego', english: 'See you later', phonetic: 'AS-ta LWEH-go', audioFile: 'hasta-luego.mp3' },
      { type: 'vocabulary', spanish: 'Hasta mañana', english: 'See you tomorrow', phonetic: 'AS-ta ma-NYA-na', audioFile: 'hasta-manana.mp3' },
      { type: 'vocabulary', spanish: 'Por favor', english: 'Please', phonetic: 'por fa-VOR', audioFile: 'por-favor.mp3' },
      { type: 'vocabulary', spanish: 'Gracias', english: 'Thank you', phonetic: 'GRA-syas', audioFile: 'gracias.mp3' },
      { type: 'vocabulary', spanish: 'De nada', english: "You're welcome", phonetic: 'de NA-da', audioFile: 'de-nada.mp3' },
      { type: 'vocabulary', spanish: 'Lo siento', english: "I'm sorry", phonetic: 'lo SYEN-to', audioFile: 'lo-siento.mp3' },
      { type: 'vocabulary', spanish: 'Perdón', english: 'Excuse me', phonetic: 'per-DON', audioFile: 'perdon.mp3' },
    ],
    exercises: [
      { type: 'multiple-choice', question: "How do you say 'Thank you'?", options: ['Gracias','Adiós','Por favor','De nada'], answer: 'Gracias' },
      { type: 'multiple-choice', question: "What does 'De nada' mean?", options: ["You're welcome",'Goodbye','Please','Sorry'], answer: "You're welcome" },
      { type: 'fill-blank', question: "___ luego (See you later)", answer: 'Hasta' },
      { type: 'matching', question: 'Match Spanish to English', pairs: [
        { spanish: 'Adiós', english: 'Goodbye' }, { spanish: 'Gracias', english: 'Thank you' },
        { spanish: 'Lo siento', english: "I'm sorry" }, { spanish: 'Por favor', english: 'Please' }
      ]},
      { type: 'listen-select', question: 'What did you hear?', audioFile: '/audio/m1/w1/gracias.mp3', options: ['Adiós','Por favor','Gracias','De nada'], answer: 'Gracias' },
    ]
  },
  {
    id: 'm1-w1-l3', month: 1, week: 1, lesson: 3,
    title: 'Introductions', xp: 10, audio: '/audio/m1/w1/',
    content: [
      { type: 'phrase', spanish: 'Me llamo…', english: 'My name is…', phonetic: 'me YA-mo', audioFile: 'me-llamo.mp3' },
      { type: 'phrase', spanish: '¿Cómo te llamas?', english: 'What is your name?', phonetic: 'KOH-mo te YA-mas', audioFile: 'como-te-llamas.mp3' },
      { type: 'vocabulary', spanish: 'Mucho gusto', english: 'Nice to meet you', phonetic: 'MOO-cho GOOS-to', audioFile: 'mucho-gusto.mp3' },
      { type: 'vocabulary', spanish: 'Encantado/a', english: 'Delighted to meet you', phonetic: 'en-kan-TA-do', audioFile: 'encantado.mp3', notes: '-o for men, -a for women' },
      { type: 'phrase', spanish: 'Soy de…', english: 'I am from…', phonetic: 'soy de', audioFile: 'soy-de.mp3' },
      { type: 'dialogue', lines: [
        { speaker: 'A', text: '¡Hola! Me llamo María. ¿Cómo te llamas?' },
        { speaker: 'B', text: 'Hola. Me llamo Carlos. Mucho gusto.' },
        { speaker: 'A', text: 'Encantada. ¿De dónde eres?' },
        { speaker: 'B', text: 'Soy de México. ¿Y tú?' },
        { speaker: 'A', text: 'Soy de España.' },
      ]},
    ],
    exercises: [
      { type: 'fill-blank', question: "___ llamo Carlos", answer: 'Me' },
      { type: 'multiple-choice', question: "How do you ask someone's name?", options: ['¿Cómo te llamas?','¿Cómo estás?','¿De dónde eres?','¿Cuántos años tienes?'], answer: '¿Cómo te llamas?' },
      { type: 'arrange-words', question: "Arrange: 'My name is'", words: ['llamo','Me'], answer: 'Me llamo' },
      { type: 'multiple-choice', question: "What does 'Mucho gusto' mean?", options: ['Nice to meet you','Thank you','Goodbye','Please'], answer: 'Nice to meet you' },
      { type: 'fill-blank', question: "___ de España (I am from Spain)", answer: 'Soy' },
    ]
  },
  {
    id: 'm1-w1-l4', month: 1, week: 1, lesson: 4,
    title: 'Numbers 1–10', xp: 10, audio: '/audio/m1/w1/',
    content: [
      { type: 'vocabulary', spanish: 'uno', english: 'one', phonetic: 'OO-no', audioFile: 'uno.mp3' },
      { type: 'vocabulary', spanish: 'dos', english: 'two', phonetic: 'dos', audioFile: 'dos.mp3' },
      { type: 'vocabulary', spanish: 'tres', english: 'three', phonetic: 'tres', audioFile: 'tres.mp3' },
      { type: 'vocabulary', spanish: 'cuatro', english: 'four', phonetic: 'KWA-tro', audioFile: 'cuatro.mp3' },
      { type: 'vocabulary', spanish: 'cinco', english: 'five', phonetic: 'SEEN-ko', audioFile: 'cinco.mp3' },
      { type: 'vocabulary', spanish: 'seis', english: 'six', phonetic: 'says', audioFile: 'seis.mp3' },
      { type: 'vocabulary', spanish: 'siete', english: 'seven', phonetic: 'SYEH-te', audioFile: 'siete.mp3' },
      { type: 'vocabulary', spanish: 'ocho', english: 'eight', phonetic: 'OH-cho', audioFile: 'ocho.mp3' },
      { type: 'vocabulary', spanish: 'nueve', english: 'nine', phonetic: 'NWEH-ve', audioFile: 'nueve.mp3' },
      { type: 'vocabulary', spanish: 'diez', english: 'ten', phonetic: 'dyez', audioFile: 'diez.mp3' },
    ],
    exercises: [
      { type: 'listen-select', question: 'Which number did you hear?', audioFile: '/audio/m1/w1/cinco.mp3', options: ['cuatro','cinco','seis','siete'], answer: 'cinco' },
      { type: 'multiple-choice', question: "What is 'eight' in Spanish?", options: ['seis','siete','ocho','nueve'], answer: 'ocho' },
      { type: 'fill-blank', question: "How do you say 'three'?", answer: 'tres' },
      { type: 'arrange-words', question: "Put in order: one, two, three", words: ['dos','uno','tres'], answer: 'uno dos tres' },
      { type: 'multiple-choice', question: "2 + 3 = ?", options: ['cuatro','cinco','seis','siete'], answer: 'cinco' },
    ]
  },
  {
    id: 'm1-w1-l5', month: 1, week: 1, lesson: 5,
    title: 'Numbers 11–20', xp: 10, audio: '/audio/m1/w1/',
    content: [
      { type: 'vocabulary', spanish: 'once', english: 'eleven', phonetic: 'ON-se', audioFile: 'once.mp3' },
      { type: 'vocabulary', spanish: 'doce', english: 'twelve', phonetic: 'DOH-se', audioFile: 'doce.mp3' },
      { type: 'vocabulary', spanish: 'trece', english: 'thirteen', phonetic: 'TRE-se', audioFile: 'trece.mp3' },
      { type: 'vocabulary', spanish: 'catorce', english: 'fourteen', phonetic: 'ka-TOR-se', audioFile: 'catorce.mp3' },
      { type: 'vocabulary', spanish: 'quince', english: 'fifteen', phonetic: 'KEEN-se', audioFile: 'quince.mp3' },
      { type: 'vocabulary', spanish: 'dieciséis', english: 'sixteen', phonetic: 'dye-si-SAYS', audioFile: 'dieciseis.mp3' },
      { type: 'vocabulary', spanish: 'diecisiete', english: 'seventeen', phonetic: 'dye-si-SYEH-te', audioFile: 'diecisiete.mp3' },
      { type: 'vocabulary', spanish: 'dieciocho', english: 'eighteen', phonetic: 'dye-si-OH-cho', audioFile: 'dieciocho.mp3' },
      { type: 'vocabulary', spanish: 'diecinueve', english: 'nineteen', phonetic: 'dye-si-NWEH-ve', audioFile: 'diecinueve.mp3' },
      { type: 'vocabulary', spanish: 'veinte', english: 'twenty', phonetic: 'VEYN-te', audioFile: 'veinte.mp3' },
    ],
    exercises: [
      { type: 'multiple-choice', question: "What is 'fifteen'?", options: ['catorce','quince','dieciséis','trece'], answer: 'quince' },
      { type: 'fill-blank', question: "How do you say 'twenty'?", answer: 'veinte' },
      { type: 'listen-select', question: 'Which number?', audioFile: '/audio/m1/w1/doce.mp3', options: ['once','doce','trece','catorce'], answer: 'doce' },
      { type: 'multiple-choice', question: "What is 'eleven'?", options: ['once','doce','diez','trece'], answer: 'once' },
      { type: 'fill-blank', question: "10 + 5 = ___ (fifteen)", answer: 'quince' },
    ]
  },
]
```

- [x] **Step 2: Write `src/data/month-1/week-2.js` — Alphabet & Pronunciation**

5 lessons using same schema. Content:
- L1 (`m1-w2-l1`): Spanish vowels — a (AH), e (EH), i (EE), o (OH), u (OO); always pure, never silent
- L2 (`m1-w2-l2`): Consonants b/v (same sound, soft), c (before e/i = S; elsewhere = K), d (soft between vowels), g (before e/i = H; elsewhere = hard G)
- L3 (`m1-w2-l3`): h (always silent), j (like English H), ll (like Y), ñ (like NY in canyon), r (single tap), rr (rolled)
- L4 (`m1-w2-l4`): Accent marks (á é í ó ú = stress), ü (sounds like W in güero), ¿ ¡ at sentence start
- L5 (`m1-w2-l5`): Stress rules — stress falls on second-to-last syllable by default; accent marks override this

- [x] **Step 3: Write `src/data/month-1/week-3.js` — Colors, Days & Months**

- L1 (`m1-w3-l1`): Colors — rojo (red), azul (blue), verde (green), amarillo (yellow), negro (black), blanco (white), naranja (orange), morado (purple), rosa (pink), gris (grey), marrón (brown)
- L2 (`m1-w3-l2`): Days of week — lunes (Mon), martes (Tue), miércoles (Wed), jueves (Thu), viernes (Fri), sábado (Sat), domingo (Sun); not capitalised in Spanish
- L3 (`m1-w3-l3`): Months — enero, febrero, marzo, abril, mayo, junio, julio, agosto, septiembre, octubre, noviembre, diciembre; not capitalised
- L4 (`m1-w3-l4`): Seasons — primavera (spring), verano (summer), otoño (autumn), invierno (winter); weather intro: hace calor (it's hot), hace frío (it's cold), hace sol (it's sunny)
- L5 (`m1-w3-l5`): Numbers 21–100 — veinte y uno→veintiuno, treinta (30), cuarenta (40), cincuenta (50), sesenta (60), setenta (70), ochenta (80), noventa (90), cien (100)

- [x] **Step 4: Write `src/data/month-1/week-4.js` — Nouns, Articles & Gender**

- L1 (`m1-w4-l1`): Masculine nouns + el — el libro (book), el hombre (man), el perro (dog), el coche (car), el día (day); rule: most -o nouns are masculine
- L2 (`m1-w4-l2`): Feminine nouns + la — la mesa (table), la mujer (woman), la casa (house), la noche (night), la mano (hand, exception!); rule: most -a nouns are feminine
- L3 (`m1-w4-l3`): Plural — los libros, las mesas; add -s for vowel endings, -es for consonant endings
- L4 (`m1-w4-l4`): Indefinite articles — un libro (a book), una mesa (a table), unos libros (some books), unas mesas (some tables)
- L5 (`m1-w4-l5`): Classroom/home objects — el bolígrafo (pen), el cuaderno (notebook), la silla (chair), la ventana (window), la puerta (door), el teléfono (phone), la computadora (computer)

- [ ] **Step 5: Commit**

```bash
git add src/data/month-1/
git commit -m "feat: add complete Month 1 curriculum data (4 weeks, 20 lessons)"
```


---

### Task 20: Month 2 Data — Who Are You? (People & Identity)

**Files:** `src/data/month-2/week-1.js` through `week-4.js`

Follow the same lesson schema as Month 1. 5 lessons per week, same exercise types.

- [x] **Step 1: Write `src/data/month-2/week-1.js` — Pronouns & Ser**
  - L1 `m2-w1-l1`: Subject pronouns — yo, tú, él, ella, usted, nosotros, vosotros, ellos, ellas, ustedes; usted/ustedes = formal you
  - L2 `m2-w1-l2`: Ser conjugation — soy, eres, es, somos, sois, son; meaning: permanent identity
  - L3 `m2-w1-l3`: Describing with ser — soy alto/a, eres inteligente, es simpático/a, somos amigos
  - L4 `m2-w1-l4`: Nationalities — americano/a, español/a, mexicano/a, argentino/a, chino/a, francés/francesa, inglés/inglesa
  - L5 `m2-w1-l5`: Professions — soy médico/a, maestro/a, estudiante, ingeniero/a, abogado/a, cocinero/a

- [x] **Step 2: Write `src/data/month-2/week-2.js` — Estar & Adjectives**
  - L1 `m2-w2-l1`: Estar conjugation — estoy, estás, está, estamos, estáis, están; meaning: temporary state/location
  - L2 `m2-w2-l2`: Ser vs estar — ser for identity (soy alto), estar for temporary state (estoy cansado); classic contrast
  - L3 `m2-w2-l3`: Emotions with estar — feliz (happy), triste (sad), cansado/a (tired), enfermo/a (sick), ocupado/a (busy), nervioso/a (nervous), emocionado/a (excited)
  - L4 `m2-w2-l4`: Adjective agreement — masculine -o, feminine -a; bueno/buena, nuevo/nueva, pequeño/pequeña, grande (no change), joven (no change)
  - L5 `m2-w2-l5`: More adjectives — fácil/difícil, rápido/lento, caro/barato, limpio/sucio, abierto/cerrado

- [x] **Step 3: Write `src/data/month-2/week-3.js` — Family & Possessives**
  - L1 `m2-w3-l1`: Family — madre, padre, hermano/a, hijo/a, abuelo/a, nieto/a, tío/a, primo/a, esposo/a
  - L2 `m2-w3-l2`: Possessive adjectives — mi, tu, su, nuestro/a, vuestro/a, sus; mi madre, tu padre, su hermano
  - L3 `m2-w3-l3`: Describing family — Mi madre es profesora. Tengo dos hermanos. Mi abuelo es muy mayor.
  - L4 `m2-w3-l4`: Tener (to have) — tengo, tienes, tiene, tenemos, tenéis, tienen; ¿Tienes hermanos? Sí, tengo uno.
  - L5 `m2-w3-l5`: Physical descriptions — es alto/bajo, tiene ojos azules/marrones/verdes, tiene pelo negro/rubio/castaño, tiene barba

- [x] **Step 4: Write `src/data/month-2/week-4.js` — Time & Numbers 100–1000**
  - L1 `m2-w4-l1`: Telling time — ¿Qué hora es? Es la una. Son las dos/tres/… Son las dos y media. Es la una y cuarto.
  - L2 `m2-w4-l2`: Minutes — Son las tres y diez. Son las cuatro menos cinco. Es mediodía. Es medianoche.
  - L3 `m2-w4-l3`: AM/PM — de la mañana, de la tarde, de la noche; a las ocho de la mañana
  - L4 `m2-w4-l4`: Numbers 100–1000 — cien, ciento uno, doscientos, trescientos, cuatrocientos, quinientos, seiscientos, setecientos, ochocientos, novecientos, mil
  - L5 `m2-w4-l5`: Dates — ¿Cuál es la fecha? Es el cinco de mayo. Mi cumpleaños es el… Los meses del año review.

- [ ] **Step 5: Commit**

```bash
git add src/data/month-2/
git commit -m "feat: add Month 2 curriculum data — people and identity"
```

---

### Task 21: Month 3 Data — Daily Life (Routine & Actions)

**Files:** `src/data/month-3/week-1.js` through `week-4.js`

- [x] **Step 1: `week-1.js` — -AR Regular Verbs**
  - L1 `m3-w1-l1`: Hablar (to speak) — hablo, hablas, habla, hablamos, habláis, hablan
  - L2 `m3-w1-l2`: Trabajar (work), estudiar (study), escuchar (listen), caminar (walk), mirar (watch/look)
  - L3 `m3-w1-l3`: Comprar (buy), viajar (travel), bailar (dance), cantar (sing), tocar (play instrument)
  - L4 `m3-w1-l4`: Sentence building — Yo hablo español. Ella estudia mucho. Nosotros viajamos en verano.
  - L5 `m3-w1-l5`: Negation — no + verb: No hablo francés. No trabajo los domingos. ¿Hablas inglés?

- [x] **Step 2: `week-2.js` — -ER and -IR Verbs**
  - L1 `m3-w2-l1`: Comer (eat), beber (drink), leer (read), comprender (understand), vender (sell)
  - L2 `m3-w2-l2`: Vivir (live), escribir (write), abrir (open), recibir (receive), subir (go up)
  - L3 `m3-w2-l3`: Mixed -AR/-ER/-IR in sentences; question formation: ¿Dónde vives? ¿Qué comes?
  - L4 `m3-w2-l4`: Querer (to want, irregular) — quiero, quieres, quiere, queremos, queréis, quieren
  - L5 `m3-w2-l5`: Poder (to be able to, irregular) — puedo, puedes, puede, podemos, podéis, pueden; ¿Puedes ayudarme?

- [x] **Step 3: `week-3.js` — Food & Restaurant**
  - L1 `m3-w3-l1`: Food — el pan, la leche, el huevo, la carne, el pollo, el pescado, el arroz, la pasta, la fruta, la verdura
  - L2 `m3-w3-l2`: Drinks — el agua, el café, el té, el jugo/zumo, la cerveza, el vino, el refresco
  - L3 `m3-w3-l3`: Restaurant phrases — ¿Me puede traer…? Quiero pedir… Para mí…, La cuenta por favor, ¿Está incluido el servicio?
  - L4 `m3-w3-l4`: Describing food — delicioso/a, rico/a, picante, dulce, salado/a, amargo/a, frío/caliente
  - L5 `m3-w3-l5`: Full restaurant dialogue — making a reservation, ordering, asking for the bill

- [x] **Step 4: `week-4.js` — Body, Feelings & Question Words**
  - L1 `m3-w4-l1`: Body parts — la cabeza, el brazo, la mano, la pierna, el pie, el ojo, la nariz, la boca, el cuello, el estómago
  - L2 `m3-w4-l2`: Feelings — feliz, triste, enojado/a, asustado/a, sorprendido/a, aburrido/a, avergonzado/a, orgulloso/a
  - L3 `m3-w4-l3`: Tener expressions — tener hambre (hungry), sed (thirsty), frío (cold), calor (hot), miedo (scared), sueño (sleepy), prisa (in a hurry), razón (to be right)
  - L4 `m3-w4-l4`: Question words — qué (what), quién (who), dónde (where), cuándo (when), cómo (how), por qué (why), cuánto (how much), cuántos (how many)
  - L5 `m3-w4-l5`: Making and answering full questions — ¿Por qué estudias español? Porque quiero viajar. ¿Cuándo comes? Como a las dos.

- [ ] **Step 5: Commit**

```bash
git add src/data/month-3/
git commit -m "feat: add Month 3 curriculum data — daily life and actions"
```

---

### Task 22: Month 4 Data — Getting Around (Places & Movement)

**Files:** `src/data/month-4/week-1.js` through `week-4.js`

- [x] **Step 1: `week-1.js` — Places & Ir (to go)**
  - L1 `m4-w1-l1`: Places — el banco, la tienda, el restaurante, el hospital, la escuela, el parque, la iglesia, el aeropuerto, la estación, el museo
  - L2 `m4-w1-l2`: Ir conjugation — voy, vas, va, vamos, vais, van; irregular in present
  - L3 `m4-w1-l3`: Ir a + place — Voy al banco. Vamos al parque. ¿Adónde vas? (al = a + el)
  - L4 `m4-w1-l4`: Ir a + infinitive (near future) — Voy a comer. ¿Vas a estudiar? Van a viajar mañana.
  - L5 `m4-w1-l5`: Transport — el autobús, el metro, el coche/carro, el avión, el tren, el taxi, la bicicleta, a pie (on foot)

- [x] **Step 2: `week-2.js` — Directions**
  - L1 `m4-w2-l1`: Direction vocabulary — a la derecha (right), a la izquierda (left), recto/derecho (straight), dobla/gira (turn), sigue (continue), cruza (cross)
  - L2 `m4-w2-l2`: Prepositions of place — al lado de, enfrente de, detrás de, delante de, entre, cerca de, lejos de, encima de, debajo de
  - L3 `m4-w2-l3`: Giving directions — Sigue recto. Dobla a la derecha en la esquina. Está al lado del banco.
  - L4 `m4-w2-l4`: Estar for location — ¿Dónde está la farmacia? Está enfrente del hospital. El hotel está cerca de aquí.
  - L5 `m4-w2-l5`: ¿Cómo llego a…? Full directions dialogue — stranger asking for directions to the train station

- [x] **Step 3: `week-3.js` — Shopping**
  - L1 `m4-w3-l1`: Clothing — la camisa, los pantalones, los zapatos, el vestido, el abrigo, la chaqueta, los calcetines, la falda, el sombrero
  - L2 `m4-w3-l2`: Shopping phrases — ¿Cuánto cuesta? ¿Tiene…? ¿Qué talla usa? ¿Lo tiene en azul? Me lo llevo.
  - L3 `m4-w3-l3`: Colors in shopping — Quiero la camisa roja. ¿Tiene los zapatos en negro?
  - L4 `m4-w3-l4`: Prices and numbers — cuesta dos euros, cincuenta centavos; Es muy caro. ¿Me hace un descuento? Está en oferta.
  - L5 `m4-w3-l5`: Full shopping dialogue — entering a store, asking for sizes, paying

- [x] **Step 4: `week-4.js` — Present Progressive & Weather**
  - L1 `m4-w4-l1`: Present progressive — estar + gerund: -AR → -ando (hablando), -ER/-IR → -iendo (comiendo, viviendo)
  - L2 `m4-w4-l2`: Common progressive — estoy comiendo, estás hablando, está durmiendo (irregular), estamos trabajando
  - L3 `m4-w4-l3`: Weather — hace sol, hace calor, hace frío, hace viento, llueve (it rains), nieva (it snows), está nublado (cloudy), hay niebla (foggy)
  - L4 `m4-w4-l4`: Seasons + weather — En verano hace calor. En invierno nieva mucho. En primavera llueve.
  - L5 `m4-w4-l5`: ¿Qué estás haciendo? dialogue — calling a friend, asking what they're doing, describing the weather

- [ ] **Step 5: Commit**

```bash
git add src/data/month-4/
git commit -m "feat: add Month 4 curriculum data — places and movement"
```

---

### Task 23: Month 5 Data — Past & Future (Tenses)

**Files:** `src/data/month-5/week-1.js` through `week-4.js`

- [x] **Step 1: `week-1.js` — Preterite Regular**
  - L1 `m5-w1-l1`: Preterite -AR — hablé, hablaste, habló, hablamos, hablasteis, hablaron
  - L2 `m5-w1-l2`: Preterite -ER/-IR — comí, comiste, comió; viví, viviste, vivió
  - L3 `m5-w1-l3`: Time markers — ayer (yesterday), anoche (last night), la semana pasada, el mes pasado, el año pasado, hace dos días
  - L4 `m5-w1-l4`: Preterite in context — Ayer hablé con mi madre. El lunes comí pizza. ¿Qué hiciste ayer?
  - L5 `m5-w1-l5`: Negative preterite — No hablé con nadie. No comí nada. ¿No fuiste al trabajo?

- [x] **Step 2: `week-2.js` — Preterite Irregular**
  - L1 `m5-w2-l1`: Ir/Ser in preterite — fui, fuiste, fue, fuimos, fuisteis, fueron (same forms for both; context clarifies)
  - L2 `m5-w2-l2`: Estar/Tener — estuve/estuvo; tuve/tuvo; Estuve enfermo. Tuve un problema.
  - L3 `m5-w2-l3`: Hacer/Poder/Querer — hice/hizo; pude/pudo; quise/quiso
  - L4 `m5-w2-l4`: Decir/Venir/Saber — dije/dijo; vine/vino; supe/supo
  - L5 `m5-w2-l5`: Mixed irregular narrative — El fin de semana fui al cine. Vi una película y comí palomitas. Fue muy divertido.

- [x] **Step 3: `week-3.js` — Future & Reflexive Verbs**
  - L1 `m5-w3-l1`: Near future review + simple future -é endings — hablaré, comerás, vivirá, viajaremos, vendréis, harán
  - L2 `m5-w3-l2`: Irregular future stems — tener→tendré, hacer→haré, poder→podré, ir→iré, ser→seré, decir→diré
  - L3 `m5-w3-l3`: Reflexive pronouns — me, te, se, nos, os, se; always before conjugated verb
  - L4 `m5-w3-l4`: Reflexive verbs — levantarse (get up), ducharse (shower), vestirse (get dressed), acostarse (go to bed), despertarse (wake up), peinarse (comb hair)
  - L5 `m5-w3-l5`: Daily routine with reflexives — Me levanto a las siete. Me ducho y me visto. A las diez me acuesto.

- [x] **Step 4: `week-4.js` — Gustar & Hobbies**
  - L1 `m5-w4-l1`: Gustar structure — (A mí) me gusta + singular/infinitive; me gustan + plural; te/le/nos/os/les gusta(n)
  - L2 `m5-w4-l2`: Verbs like gustar — encantar (love), molestar (bother), interesar (interest), doler (hurt: me duele la cabeza), faltar (lack)
  - L3 `m5-w4-l3`: Hobbies — leer, nadar, cocinar, bailar, dibujar, pintar, tocar la guitarra, hacer yoga, ver películas, escuchar música
  - L4 `m5-w4-l4`: Sports — el fútbol, el tenis, el baloncesto, el béisbol, nadar, correr, hacer senderismo, jugar al ajedrez
  - L5 `m5-w4-l5`: Expressing preferences — Me encanta el fútbol pero no me gusta el tenis. ¿Qué deporte te gusta más?

- [ ] **Step 5: Commit**

```bash
git add src/data/month-5/
git commit -m "feat: add Month 5 curriculum data — past and future tenses"
```

---

### Task 24: Month 6 Data — Real Conversations (Fluency Building)

**Files:** `src/data/month-6/week-1.js` through `week-4.js`

- [x] **Step 1: `week-1.js` — Imperfect Tense**
  - L1 `m6-w1-l1`: Imperfect -AR — hablaba, hablabas, hablaba, hablábamos, hablabais, hablaban
  - L2 `m6-w1-l2`: Imperfect -ER/-IR — comía, comías; vivía, vivías; use: habitual past, ongoing states
  - L3 `m6-w1-l3`: Irregular imperfects — ser: era/eras/era; ir: iba/ibas/iba; ver: veía/veías/veía
  - L4 `m6-w1-l4`: Using imperfect — Cuando era niño, siempre jugaba al fútbol. Vivía en Madrid. Todos los días comía con mi familia.
  - L5 `m6-w1-l5`: Preterite vs imperfect intro — completed action (preterite) vs background/habit (imperfect)

- [x] **Step 2: `week-2.js` — Preterite vs Imperfect in Context**
  - L1 `m6-w2-l1`: Preterite = specific completed event: Ayer comí pizza. / Imperfect = background: Mientras comía, llegó Juan.
  - L2 `m6-w2-l2`: Signal words — preterite: ayer, una vez, de repente, finalmente; imperfect: siempre, todos los días, cuando era joven, a veces
  - L3 `m6-w2-l3`: Both in same sentence — Estaba durmiendo cuando sonó el teléfono. Mientras llovía, yo leía.
  - L4 `m6-w2-l4`: Narrating a past story — Eran las tres de la tarde. Hacía sol. De repente llegó una carta…
  - L5 `m6-w2-l5`: Story time — read and answer questions about a short paragraph in past tense

- [x] **Step 3: `week-3.js` — Advanced Structures**
  - L1 `m6-w3-l1`: Conditional tense — hablaría, comerías, viviría; use: would, polite requests, hypotheticals. Me gustaría… ¿Podría ayudarme?
  - L2 `m6-w3-l2`: Subjunctive intro — quiero que + subjunctive (hables, comas, vivas); espero que, es importante que
  - L3 `m6-w3-l3`: Conjunctions — pero (but), porque (because), aunque (although), sin embargo (however), además (furthermore), por eso (therefore), así que (so)
  - L4 `m6-w3-l4`: Formal vs informal — usted (formal you, 3rd person verb), don/doña titles; when to use each
  - L5 `m6-w3-l5`: Complex sentence building — combining two clauses with different tenses and conjunctions

- [x] **Step 4: `week-4.js` — Full Conversations**
  - L1 `m6-w4-l1`: Travel dialogue — at the airport: facturar el equipaje, la puerta de embarque, el vuelo está retrasado, ¿dónde está el hotel?
  - L2 `m6-w4-l2`: Social conversation — meeting someone new at a party, asking about their life, making plans to meet again
  - L3 `m6-w4-l3`: Work conversation — Una entrevista de trabajo: ¿Cuál es tu experiencia? ¿Por qué quieres este trabajo? Mis habilidades son…
  - L4 `m6-w4-l4`: 500-word reading passage with comprehension questions — a short story set in Spain/Latin America using all tenses
  - L5 `m6-w4-l5`: Grand review — all 6 months summarised, key grammar tables, 20-question diagnostic exercise spanning all topics

- [ ] **Step 5: Commit**

```bash
git add src/data/month-6/
git commit -m "feat: add Month 6 curriculum data — real conversations and fluency"
```


---

## Phase 5 — Pages

### Task 25: Landing Page

**Files:** `index.html`, `src/js/pages/landing.js`, `src/css/pages/landing.css`

- [x] **Step 1: Write `index.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Aprende Español — Learn Spanish in 6 Months</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/css/main.css">
  <link rel="stylesheet" href="/src/css/pages/landing.css">
</head>
<body data-theme="dark">
  <div id="header-root"></div>
  <div class="snap-container" id="snap-container">
    <section class="snap-section" id="snap-hero"></section>
    <section class="snap-section" id="snap-how"></section>
    <section class="snap-section" id="snap-curriculum"></section>
    <section class="snap-section" id="snap-modes"></section>
    <section class="snap-section" id="snap-cta"></section>
  </div>
  <script type="module" src="/src/js/pages/landing.js"></script>
</body>
</html>
```

- [x] **Step 2: Write `src/css/pages/landing.css`**

```css
.hero-word { font-size: clamp(3rem, 10vw, 7rem); font-family: var(--font-heading); font-weight: 800; }
.hero-sub { font-size: clamp(1rem, 2.5vw, 1.4rem); color: var(--color-text-muted); max-width: 540px; }
.how-step { text-align: center; padding: 2rem; }
.how-step .step-num { font-size: 3rem; font-family: var(--font-heading); color: var(--color-primary); }
.month-preview-card { background: var(--color-surface); border-radius: var(--radius); padding: 1.5rem; border-left: 4px solid var(--color-primary); }
.mode-card { background: var(--color-surface); border-radius: var(--radius); padding: 2rem; max-width: 360px; }
```

- [x] **Step 3: Write `src/js/pages/landing.js`**

```js
import { getState } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { initSnapScroll } from '../animations/snapScroll.js'
import { initExplode } from '../animations/explode.js'
import { initReveal } from '../animations/reveal.js'
import { CURRICULUM } from '../../data/curriculum.js'

const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

// Hero section
document.getElementById('snap-hero').innerHTML = `
  <div class="text-center px-4">
    <div id="hero-word" class="hero-word mb-3"></div>
    <p class="hero-sub mx-auto mb-4">Learn Spanish from zero to conversational in 6 months.<br>Interactive. Gamified. Beautiful.</p>
    <a href="dashboard.html" class="btn-primary-custom">Start Learning Free →</a>
  </div>`
initExplode(document.getElementById('hero-word'), '¡Hola!', { phonetic: 'OH-lah', translation: 'Hello!' })

// How it works
document.getElementById('snap-how').innerHTML = `
  <div class="container">
    <h2 class="text-center mb-5">How it works</h2>
    <div class="row g-4">
      ${[['🎯','Daily Lessons','5 focused lessons per week, each under 10 minutes'],
         ['🎮','Game Mode','Earn XP, protect your hearts, keep your streak alive'],
         ['📖','Story Mode','Pure content with cinematic animations — no pressure']
        ].map(([icon,t,d],i) => `
        <div class="col-md-4 how-step reveal-item">
          <div class="step-num">${icon}</div>
          <h4>${t}</h4><p class="text-muted">${d}</p>
        </div>`).join('')}
    </div>
  </div>`

// Curriculum preview
document.getElementById('snap-curriculum').innerHTML = `
  <div class="container">
    <h2 class="text-center mb-5">6-Month Roadmap</h2>
    <div class="row g-3">
      ${CURRICULUM.months.map(m => `
        <div class="col-md-4 reveal-item">
          <div class="month-preview-card" style="border-left-color:${m.color}">
            <div style="color:${m.color};font-weight:700">Month ${m.id}</div>
            <div style="font-family:var(--font-heading)">${m.title}</div>
            <div style="font-size:0.82rem;color:var(--color-text-muted)">${m.subtitle}</div>
          </div>
        </div>`).join('')}
    </div>
  </div>`

// Modes comparison
document.getElementById('snap-modes').innerHTML = `
  <div class="container">
    <h2 class="text-center mb-5">Two Ways to Learn</h2>
    <div class="d-flex gap-4 justify-content-center flex-wrap">
      <div class="mode-card reveal-item">
        <div style="font-size:2rem">🎮</div>
        <h4>Game Mode</h4>
        <ul class="text-muted small"><li>Hearts & lives system</li><li>XP & streaks</li><li>Locked progression</li><li>Exercises & quizzes</li></ul>
      </div>
      <div class="mode-card reveal-item">
        <div style="font-size:2rem">📖</div>
        <h4>Story Mode</h4>
        <ul class="text-muted small"><li>All content unlocked</li><li>Cinematic animations</li><li>No pressure, no quizzes</li><li>Pure knowledge</li></ul>
      </div>
    </div>
  </div>`

// CTA
document.getElementById('snap-cta').innerHTML = `
  <div class="text-center px-4">
    <h2 class="mb-3">Ready to start?</h2>
    <p class="hero-sub mx-auto mb-4">Your first lesson takes less than 5 minutes.</p>
    <a href="dashboard.html" class="btn-primary-custom">Begin Month 1 →</a>
  </div>`

// Init animations
initSnapScroll([...document.querySelectorAll('.snap-section')])
initReveal([...document.querySelectorAll('.reveal-item')])
```

- [x] **Step 4: Run dev server, open `http://localhost:5173/`, verify snap scroll and explosion work**

```bash
npm run dev
```

- [ ] **Step 5: Commit**

```bash
git add index.html src/js/pages/landing.js src/css/pages/landing.css
git commit -m "feat: build landing page with snap scroll, explode, and reveal animations"
```

---

### Task 26: Dashboard Page

**Files:** `dashboard.html`, `src/js/pages/dashboard.js`, `src/css/pages/dashboard.css`

- [x] **Step 1: Write `dashboard.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Dashboard — Aprende Español</title>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/css/main.css">
  <link rel="stylesheet" href="/src/css/pages/dashboard.css">
</head>
<body data-theme="dark">
  <div id="header-root"></div>
  <main id="dashboard-root" style="padding-top:80px"></main>
  <script type="module" src="/src/js/pages/dashboard.js"></script>
</body>
</html>
```

- [x] **Step 2: Write `src/css/pages/dashboard.css`**

```css
.stat-card { background: var(--color-surface); border-radius: var(--radius); padding: 1.5rem; text-align:center; }
.stat-card .stat-value { font-size: 2.5rem; font-family: var(--font-heading); font-weight: 800; }
.slider-3d-track { perspective: 1200px; position: relative; height: 260px; }
.slider-3d-item { position: absolute; width: 220px; left: 50%; top: 0;
  transform-origin: 50% 50% -250px; transform-style: preserve-3d;
  background: var(--color-surface); border-radius: var(--radius); padding: 1.5rem; }
.slider-nav { display: flex; gap: 1rem; justify-content: center; margin-top: 1.5rem; }
```

- [x] **Step 3: Write `src/js/pages/dashboard.js`**

```js
import { getState, checkAndUpdateStreak, refillHeartsIfDue } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { renderProgressBar, monthCompletion } from '../components/progressBar.js'
import { initSlider3D } from '../animations/slider3d.js'
import { initExplode } from '../animations/explode.js'
import { CURRICULUM, moduleUrl } from '../../data/curriculum.js'
import { moduleUrl as mu } from '../core/router.js'

const state = getState()
document.body.dataset.theme = state.theme
refillHeartsIfDue()
checkAndUpdateStreak()
renderHeader(document.getElementById('header-root'), state)

const root = document.getElementById('dashboard-root')
root.innerHTML = `
  <div class="container py-4">
    <h1 class="mb-4">Mi Progreso</h1>

    <!-- Stats row -->
    <div class="row g-3 mb-5">
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-value" id="streak-val">${state.streak.current}</div>
          <div class="text-muted small">Day Streak 🔥</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-value">⭐ ${state.xp.total}</div>
          <div class="text-muted small">Total XP</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-value">${Object.values(state.lessons).filter(l => l.completed).length}</div>
          <div class="text-muted small">Lessons Done</div>
        </div>
      </div>
      <div class="col-6 col-md-3">
        <div class="stat-card">
          <div class="stat-value">${state.hearts.current}</div>
          <div class="text-muted small">Hearts ❤️</div>
        </div>
      </div>
    </div>

    <!-- Continue button -->
    <div class="mb-5 text-center">
      <a href="lesson.html#${state.currentLesson}" class="btn-primary-custom">
        Continue Learning →
      </a>
    </div>

    <!-- 3D Month Slider -->
    <h3 class="mb-3">Your 6-Month Journey</h3>
    <div class="slider-3d-track" id="month-slider">
      ${CURRICULUM.months.map(m => `
        <div class="slider-3d-item" style="border-top: 3px solid ${m.color}">
          <div style="color:${m.color};font-weight:700;font-size:0.8rem">MONTH ${m.id}</div>
          <div style="font-family:var(--font-heading);font-size:1.1rem">${m.title}</div>
          <div style="font-size:0.8rem;color:var(--color-text-muted)">${m.subtitle}</div>
          <div id="progress-m${m.id}" class="mt-2"></div>
          <a href="${mu(m.id)}" class="btn-primary-custom mt-3" style="font-size:0.8rem;padding:0.4rem 1rem">
            ${state.unlockedMonths.includes(m.id) ? 'Open →' : '🔒 Locked'}
          </a>
        </div>`).join('')}
    </div>
    <div class="slider-nav">
      <button class="btn-primary-custom" id="prev-btn">‹</button>
      <button class="btn-primary-custom" id="next-btn">›</button>
    </div>
  </div>`

// Render progress bars
CURRICULUM.months.forEach(m => {
  const el = document.getElementById(`progress-m${m.id}`)
  if (el) renderProgressBar(el, monthCompletion(m.lessons, state.lessons), '', m.color)
})

// Init 3D slider
const track = document.getElementById('month-slider')
const items = [...track.querySelectorAll('.slider-3d-item')]
const slider = initSlider3D(track, items)
document.getElementById('prev-btn').addEventListener('click', () => slider.prev())
document.getElementById('next-btn').addEventListener('click', () => slider.next())

// Explode streak number
initExplode(document.getElementById('streak-val'), String(state.streak.current))
```

- [ ] **Step 4: Commit**

```bash
git add dashboard.html src/js/pages/dashboard.js src/css/pages/dashboard.css
git commit -m "feat: build dashboard with 3D month slider, stats, and progress bars"
```

---

### Task 27: Module Overview Page

**Files:** `module.html`, `src/js/pages/module.js`

- [x] **Step 1: Write `module.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Module — Aprende Español</title>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/css/main.css">
  <link rel="stylesheet" href="/src/css/components/cards.css">
</head>
<body data-theme="dark">
  <div id="header-root"></div>
  <main id="module-root" style="padding-top:80px"></main>
  <script type="module" src="/src/js/pages/module.js"></script>
</body>
</html>
```

- [x] **Step 2: Write `src/js/pages/module.js`**

```js
import { getState } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { renderLessonGrid } from '../components/lessonCard.js'
import { renderProgressBar, monthCompletion } from '../components/progressBar.js'
import { initReveal } from '../animations/reveal.js'
import { getMonthById } from '../../data/curriculum.js'
import { getHash } from '../core/router.js'

const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const monthNum = parseInt(getHash()) || 1
const month = getMonthById(monthNum)
const root = document.getElementById('module-root')

if (!month) { root.innerHTML = '<p class="text-center mt-5">Month not found.</p>'; }
else {
  const locked = state.mode === 'game' && !state.unlockedMonths.includes(monthNum)
  root.innerHTML = `
    <div class="container py-4">
      <a href="dashboard.html" class="text-muted small">← Back to Dashboard</a>
      <h1 class="mt-2" style="color:${month.color}">Month ${month.id}: ${month.title}</h1>
      <p class="text-muted">${month.subtitle}</p>
      <div id="month-progress" class="mb-4"></div>
      ${locked ? '<div class="alert" style="background:var(--color-surface)">🔒 Complete the previous month to unlock this one.</div>' : ''}
      <div class="row g-3" id="lesson-grid"></div>
    </div>`

  renderProgressBar(
    document.getElementById('month-progress'),
    monthCompletion(month.lessons, state.lessons), 'Month Progress', month.color
  )

  if (!locked) {
    renderLessonGrid(
      document.getElementById('lesson-grid'),
      month.lessons, state.lessons, state.mode
    )
  }

  initReveal([...document.querySelectorAll('.lesson-card')])
}
```

- [ ] **Step 3: Commit**

```bash
git add module.html src/js/pages/module.js
git commit -m "feat: build module overview page with lesson grid and progress bar"
```

---

### Task 28: Lesson Page

**Files:** `lesson.html`, `src/js/pages/lesson.js`, `src/css/pages/lesson.css`

- [x] **Step 1: Write `lesson.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lesson — Aprende Español</title>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/css/main.css">
  <link rel="stylesheet" href="/src/css/components/cards.css">
  <link rel="stylesheet" href="/src/css/components/exercises.css">
  <link rel="stylesheet" href="/src/css/components/celebration.css">
  <link rel="stylesheet" href="/src/css/pages/lesson.css">
</head>
<body data-theme="dark">
  <div id="header-root"></div>
  <main id="lesson-root" style="padding-top:80px"></main>
  <div id="celebration-overlay"></div>
  <script type="module" src="/src/js/pages/lesson.js"></script>
</body>
</html>
```

- [x] **Step 2: Write `src/css/pages/lesson.css`**

```css
.lesson-progress-bar { height: 6px; background: var(--color-surface-2); border-radius: 3px; margin-bottom: 2rem; }
.lesson-progress-fill { height: 100%; background: var(--color-primary); border-radius: 3px; transition: width 0.4s ease; }
.exercise-question { font-size: 1.2rem; font-weight: 600; margin-bottom: 1.5rem; }
.options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
.exercise-option { background: var(--color-surface); border: 2px solid transparent; border-radius: var(--radius);
  padding: 0.75rem 1rem; cursor: pointer; text-align: left; color: var(--color-text);
  transition: border-color var(--transition); font-size: 0.95rem; }
.exercise-option:hover { border-color: var(--color-primary); }
.exercise-input { background: var(--color-surface); border: 2px solid var(--color-surface-2); color: var(--color-text);
  border-radius: var(--radius); padding: 0.75rem 1rem; font-size: 1rem; width: 100%; }
.exercise-input:focus { outline: none; border-color: var(--color-primary); }
.matching-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.match-item { background: var(--color-surface); border: 2px solid transparent; border-radius: var(--radius);
  padding: 0.6rem 1rem; cursor: pointer; transition: border-color var(--transition); }
.match-item.selected { border-color: var(--color-primary); }
.match-item.matched { border-color: var(--color-success); opacity: 0.6; }
.arrange-target { min-height: 50px; border: 2px dashed var(--color-surface-2); border-radius: var(--radius);
  padding: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem; }
.arrange-bank { display: flex; flex-wrap: wrap; gap: 0.5rem; }
.arrange-word { background: var(--color-surface); border: 2px solid var(--color-primary); border-radius: 8px;
  padding: 0.4rem 0.8rem; cursor: grab; font-size: 0.95rem; }
```

- [x] **Step 3: Write `src/js/pages/lesson.js`**

```js
import { getState, completeLesson, loseHeart, checkAndUpdateStreak, refillHeartsIfDue } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { renderExercise, checkAnswer, calculateXP, getStars } from '../components/exerciseEngine.js'
import { showCelebration } from '../components/celebration.js'
import { initAudioButtons, playAudio } from '../core/audio.js'
import { getLessonById, getNextLesson } from '../../data/curriculum.js'
import { getHash, navigate } from '../core/router.js'
import { initExplode } from '../animations/explode.js'
import { initReveal } from '../animations/reveal.js'

const state = getState()
document.body.dataset.theme = state.theme
refillHeartsIfDue()
checkAndUpdateStreak()

const lessonId = getHash() || state.currentLesson
const lesson = getLessonById(lessonId)
const root = document.getElementById('lesson-root')

if (!lesson) { root.innerHTML = '<p class="text-center mt-5">Lesson not found.</p>'; }
else { renderHeader(document.getElementById('header-root'), getState()); renderLesson() }

function renderLesson() {
  const isGame = state.mode === 'game'
  const steps = isGame
    ? ['hook', ...lesson.content.map((_,i)=>`content-${i}`), ...lesson.exercises.map((_,i)=>`ex-${i}`), 'summary']
    : ['hook', ...lesson.content.map((_,i)=>`content-${i}`), 'summary']

  let stepIndex = 0
  let mistakes = 0
  let startTime = Date.now()
  let heartsLeft = getState().hearts.current

  const bar = document.createElement('div')
  bar.className = 'container pt-3'
  bar.innerHTML = `<div class="lesson-progress-bar"><div class="lesson-progress-fill" id="lpb" style="width:0%"></div></div>`
  root.appendChild(bar)

  const stage = document.createElement('div')
  stage.className = 'container'
  stage.id = 'stage'
  root.appendChild(stage)

  function setProgress() {
    document.getElementById('lpb').style.width = `${Math.round((stepIndex/steps.length)*100)}%`
  }

  function showStep(idx) {
    setProgress()
    const key = steps[idx]
    stage.innerHTML = ''

    if (key === 'hook') {
      stage.innerHTML = `<div class="text-center py-5"><div id="hook-word" style="min-height:80px"></div></div>`
      const first = lesson.content[0]
      initExplode(document.getElementById('hook-word'), first?.spanish || lesson.title,
        { phonetic: first?.phonetic, translation: first?.english })
      setTimeout(() => { stepIndex++; showStep(stepIndex) }, 2800)
      return
    }

    if (key.startsWith('content-')) {
      const item = lesson.content[parseInt(key.split('-')[1])]
      stage.innerHTML = renderContentCard(item)
      initReveal([...stage.querySelectorAll('.content-card')])
      initAudioButtons(stage)
      stage.querySelector('#next-content')?.addEventListener('click', () => { stepIndex++; showStep(stepIndex) })
      return
    }

    if (key.startsWith('ex-')) {
      const ex = lesson.exercises[parseInt(key.split('-')[1])]
      const wrap = document.createElement('div')
      wrap.className = 'exercise-wrap py-4'
      stage.appendChild(wrap)
      renderExercise(ex, wrap)
      initAudioButtons(wrap)
      attachExerciseHandlers(wrap, ex)
      return
    }

    if (key === 'summary') {
      const xp = calculateXP(lesson.xp, mistakes, Math.round((Date.now()-startTime)/1000))
      const stars = getStars(heartsLeft)
      if (isGame) completeLesson(lessonId, xp, heartsLeft)
      stage.innerHTML = `
        <div class="text-center py-5">
          <h2>¡Lección completada!</h2>
          <p class="text-muted">You've finished: ${lesson.title}</p>
          <div style="font-size:2rem">${'⭐'.repeat(stars)}</div>
          <div style="font-size:1.5rem;color:var(--color-secondary)">+${xp} XP</div>
          <div class="mt-4 d-flex gap-3 justify-content-center flex-wrap">
            <a href="module.html#${lesson.month}" class="btn-primary-custom">Back to Month ${lesson.month}</a>
            ${getNextLesson(lessonId) ? `<a href="lesson.html#${getNextLesson(lessonId).id}" class="btn-primary-custom">Next Lesson →</a>` : ''}
          </div>
        </div>`
      if (isGame) showCelebration(document.getElementById('celebration-overlay'), { xp, stars })
      return
    }
  }

  function attachExerciseHandlers(wrap, ex) {
    const submitAnswer = (userAnswer) => {
      const correct = checkAnswer(ex, userAnswer)
      if (!correct && isGame) {
        const remaining = loseHeart()
        heartsLeft = remaining
        mistakes++
        renderHeader(document.getElementById('header-root'), getState())
        if (remaining === 0) {
          wrap.innerHTML += `<div class="alert mt-3" style="background:var(--color-surface)">💔 No hearts left! <a href="module.html#${lesson.month}">Return to module</a> or <button onclick="location.reload()" class="btn btn-sm btn-outline-secondary ms-2">Try Again</button></div>`
          return
        }
      }
      setTimeout(() => { stepIndex++; showStep(stepIndex) }, correct ? 600 : 1200)
    }

    wrap.querySelectorAll('.exercise-option').forEach(btn => {
      btn.addEventListener('click', () => submitAnswer(btn.dataset.value))
    })
    const input = wrap.querySelector('.exercise-input')
    wrap.querySelector('button.btn-primary-custom')?.addEventListener('click', () => {
      if (input) submitAnswer(input.value)
    })
    if (input) input.addEventListener('keydown', e => { if (e.key === 'Enter') submitAnswer(input.value) })
  }

  function renderContentCard(item) {
    if (item.type === 'vocabulary' || item.type === 'phrase') {
      return `<div class="content-card">
        <div class="spanish-word spanish-text">${item.spanish}</div>
        <div class="mt-2">
          <span class="phonetic-chip">${item.phonetic || ''}</span>
          <span class="translation-chip">${item.english}</span>
          ${item.audioFile ? `<button class="audio-play-btn ms-2" data-audio="${lesson.audio}${item.audioFile}">▶</button>` : ''}
        </div>
        ${item.notes ? `<p class="text-muted small mt-2">${item.notes}</p>` : ''}
        <button class="btn-primary-custom mt-3" id="next-content">Next →</button>
      </div>`
    }
    if (item.type === 'dialogue') {
      return `<div class="content-card">
        ${item.lines.map(l => `<div class="mb-2"><strong>${l.speaker}:</strong> <span class="spanish-text">${l.text}</span></div>`).join('')}
        <button class="btn-primary-custom mt-3" id="next-content">Next →</button>
      </div>`
    }
    if (item.type === 'grammar') {
      return `<div class="content-card">
        <h4>${item.title}</h4>
        <p>${item.explanation}</p>
        ${item.examples.map(e => `<div class="mt-2"><span class="spanish-text">${e.spanish}</span> — ${e.english}</div>`).join('')}
        <button class="btn-primary-custom mt-3" id="next-content">Next →</button>
      </div>`
    }
    return `<div class="content-card"><button class="btn-primary-custom" id="next-content">Next →</button></div>`
  }

  showStep(0)
}
```

- [x] **Step 4: Open `http://localhost:5173/lesson.html#m1-w1-l1`, verify hook explosion, content cards, and exercises work end-to-end**

- [ ] **Step 5: Commit**

```bash
git add lesson.html src/js/pages/lesson.js src/css/pages/lesson.css
git commit -m "feat: build full lesson page with hook, content, exercises, and celebration"
```

---

### Task 29: Reference Page

**Files:** `reference.html`, `src/js/pages/reference.js`

- [x] **Step 1: Write `reference.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" /><meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Reference — Aprende Español</title>
  <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link rel="stylesheet" href="/src/css/main.css">
</head>
<body data-theme="dark">
  <div id="header-root"></div>
  <main id="reference-root" style="padding-top:80px"></main>
  <script type="module" src="/src/js/pages/reference.js"></script>
</body>
</html>
```

- [x] **Step 2: Write `src/js/pages/reference.js`**

```js
import { getState } from '../core/gameState.js'
import { renderHeader } from '../components/header.js'
import { initSlider3D } from '../animations/slider3d.js'
import { initReveal } from '../animations/reveal.js'
import { CURRICULUM } from '../../data/curriculum.js'

const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const categories = CURRICULUM.months.map(m => ({
  label: `Month ${m.id}: ${m.title}`,
  color: m.color,
  vocab: m.lessons.flatMap(l => l.content.filter(c => c.type === 'vocabulary' || c.type === 'phrase'))
}))

const root = document.getElementById('reference-root')
root.innerHTML = `
  <div class="container py-4">
    <h1 class="mb-2">Reference Guide</h1>
    <p class="text-muted mb-4">All vocabulary organized by month. Always available in both modes.</p>
    <div id="ref-slider" style="perspective:1200px;position:relative;min-height:500px">
      ${categories.map((cat, i) => `
        <div class="ref-slide" style="position:absolute;width:100%;background:var(--color-surface);border-radius:var(--radius);padding:2rem;border-top:3px solid ${cat.color}">
          <h3 style="color:${cat.color}">${cat.label}</h3>
          <div class="row g-2 mt-3">
            ${cat.vocab.slice(0,40).map(v => `
              <div class="col-6 col-md-3 reveal-item">
                <div style="background:var(--color-surface-2);border-radius:8px;padding:0.6rem">
                  <div class="spanish-text" style="font-size:1.1rem">${v.spanish}</div>
                  <div style="font-size:0.8rem;color:var(--color-text-muted)">${v.english}</div>
                  <div class="phonetic-chip" style="font-size:0.7rem">${v.phonetic || ''}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>`).join('')}
    </div>
    <div class="d-flex gap-3 justify-content-center mt-3">
      <button class="btn-primary-custom" id="ref-prev">‹ Prev Month</button>
      <button class="btn-primary-custom" id="ref-next">Next Month ›</button>
    </div>
  </div>`

const track = document.getElementById('ref-slider')
const slides = [...track.querySelectorAll('.ref-slide')]
const slider = initSlider3D(track, slides)
document.getElementById('ref-prev').addEventListener('click', () => slider.prev())
document.getElementById('ref-next').addEventListener('click', () => slider.next())
initReveal([...document.querySelectorAll('.reveal-item')])
```

- [ ] **Step 3: Commit**

```bash
git add reference.html src/js/pages/reference.js
git commit -m "feat: build reference page with 3D vocabulary slider"
```


---

## Phase 6 — Integration & Deploy

### Task 30: Audio Directory Setup

**Files:** `public/audio/` directory structure

- [x] **Step 1: Create audio directories**

```bash
for m in 1 2 3 4 5 6; do
  for w in 1 2 3 4; do
    mkdir -p public/audio/m${m}/w${w}
  done
done
```

- [ ] **Step 2: Add placeholder silent audio files for development**

```bash
# Install ffmpeg if not present: brew install ffmpeg
# Generate a 1-second silent mp3 for each vocabulary word as placeholder
# Replace with real recordings before final deploy.
# Convention: filename matches lesson content audioFile field, e.g. hola.mp3

# Example — generate one silent file as placeholder:
ffmpeg -f lavfi -i anullsrc=r=44100:cl=mono -t 0.5 -q:a 9 -acodec libmp3lame public/audio/m1/w1/hola.mp3
```

> **Note:** For production, record or source real Spanish audio files. Services like Forvo, Google TTS, or a native speaker recording session can provide all files. File naming must match the `audioFile` field in lesson data exactly.

- [ ] **Step 3: Commit**

```bash
git add public/
git commit -m "feat: add audio directory structure for all 6 months"
```

---

### Task 31: End-to-End Verification & First Deploy

- [x] **Step 1: Run full test suite — all tests must pass**

```bash
npm test
```

Expected: `17 tests passed` (gameState: 7, exerciseEngine: 10)

- [ ] **Step 2: Build and preview locally**

```bash
npm run build && npm run preview
```

Expected: Server starts, open `http://localhost:4173/learning-spanish/`

- [x] **Step 3: Verify each page loads**

Check each URL manually:
- `http://localhost:4173/learning-spanish/` — landing page loads, snap scroll works
- `http://localhost:4173/learning-spanish/dashboard.html` — dashboard shows stats and 3D slider
- `http://localhost:4173/learning-spanish/module.html#1` — Month 1 lesson grid
- `http://localhost:4173/learning-spanish/lesson.html#m1-w1-l1` — full lesson with explosion + exercises
- `http://localhost:4173/learning-spanish/reference.html` — reference slider

- [ ] **Step 4: Check mode toggle**

In the header, toggle Game ↔ Story mode. In Story mode, verify no exercises appear in lesson page.

- [ ] **Step 5: Push to GitHub and verify GitHub Actions deploys**

```bash
git push origin main
```

Then open GitHub repo → Actions tab. Confirm "Deploy to GitHub Pages" workflow completes with a green tick. Open `https://<your-username>.github.io/learning-spanish/` and verify the live site.

- [ ] **Step 6: Final commit tag**

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Self-Review Notes

**Spec coverage check:**
- ✅ 6-month complete curriculum (Tasks 19–24)
- ✅ Game Mode: XP, hearts, streaks, locked progression (Tasks 5, 15, 28)
- ✅ Story Mode: all unlocked, no exercises, full animations (Task 28)
- ✅ GSAP snap scroll (Task 10, landing)
- ✅ GSAP exploding objects (Task 9, lesson hook + dashboard)
- ✅ GSAP 3D slider (Task 11, dashboard + reference)
- ✅ GSAP immersive reveal (Task 12, lesson cards + landing)
- ✅ Bootstrap + 21st.dev compatible components (Tasks 13–17)
- ✅ `prefers-reduced-motion` fallback (Task 8)
- ✅ Dark/light theme toggle (Task 13)
- ✅ GitHub Actions deploy (Task 3)
- ✅ Extensible: new module = new data folder + curriculum.js entry (Task 18)
- ✅ Audio with phonetic fallback (Tasks 7, 30)
- ✅ Fully responsive (all pages use Bootstrap grid)

**Type consistency confirmed:**
- `getLessonById(id)` used in `lesson.js` ✅ defined in `curriculum.js`
- `getNextLesson(id)` used in `lesson.js` ✅ defined in `curriculum.js`
- `checkAnswer(exercise, userAnswer)` ✅ consistent across engine + tests
- `getState()` ✅ same shape throughout; `refillHeartsIfDue()` ✅ exported from gameState

---

**Plan complete and saved to `plan_intro.md`.**

Two execution options:

**1. Subagent-Driven (recommended)** — Dispatch a fresh subagent per task via `superpowers:subagent-driven-development`. Review between tasks. Fast iteration, isolated context per task.

**2. Inline Execution** — Execute tasks in this session using `superpowers:executing-plans`. Batch execution with checkpoints.

Which approach would you like?






