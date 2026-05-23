const KEY = 'spanish_app_state'
const DAY_MS = 86_400_000

const defaults = {
  mode: 'game',
  theme: 'dark',
  streak: { current: 0, longest: 0, lastStudiedDate: null },
  xp: { total: 0, weeklyHistory: [0, 0, 0, 0, 0, 0, 0] },
  hearts: { current: 5, lastRefillTime: null },
  lessons: {},
  unlockedMonths: [1],
  currentLesson: 'm1-w1-l1',
}

function clone(value) {
  return JSON.parse(JSON.stringify(value))
}

function mergeState(raw = {}) {
  const next = clone(defaults)
  return {
    ...next,
    ...raw,
    streak: { ...next.streak, ...raw.streak },
    xp: {
      ...next.xp,
      ...raw.xp,
      weeklyHistory: Array.isArray(raw.xp?.weeklyHistory)
        ? [...raw.xp.weeklyHistory].slice(-7).concat(Array(Math.max(0, 7 - raw.xp.weeklyHistory.length)).fill(0)).slice(0, 7)
        : [...next.xp.weeklyHistory],
    },
    hearts: { ...next.hearts, ...raw.hearts },
    lessons: { ...next.lessons, ...raw.lessons },
    unlockedMonths: Array.isArray(raw.unlockedMonths) && raw.unlockedMonths.length ? [...new Set(raw.unlockedMonths)] : [1],
  }
}

export function getState() {
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? mergeState(JSON.parse(raw)) : clone(defaults)
  } catch {
    return clone(defaults)
  }
}

export function saveState(state) {
  localStorage.setItem(KEY, JSON.stringify(mergeState(state)))
}

export function completeLesson(id, xpEarned, heartsLeft, now = new Date()) {
  const state = getState()
  const stars = heartsLeft >= 5 ? 3 : heartsLeft >= 3 ? 2 : 1
  const previousXp = state.lessons[id]?.xpEarned || 0
  const award = Math.max(0, xpEarned - previousXp)

  state.lessons[id] = { completed: true, xpEarned, stars }
  state.xp.total += award
  state.xp.weeklyHistory[6] += award
  state.currentLesson = id
  updateStreakForStudy(state, now)
  unlockEligibleMonths(state)
  saveState(state)
  return state.lessons[id]
}

export function loseHeart() {
  const state = getState()
  state.hearts.current = Math.max(0, state.hearts.current - 1)
  saveState(state)
  return state.hearts.current
}

export function checkAndUpdateStreak(now = new Date()) {
  const state = getState()
  updateStreakForStudy(state, now)
  saveState(state)
  return state.streak.current
}

export function unlockMonth(monthNumber) {
  const state = getState()
  if (!state.unlockedMonths.includes(monthNumber)) {
    state.unlockedMonths.push(monthNumber)
    state.unlockedMonths.sort((a, b) => a - b)
    saveState(state)
  }
  return state.unlockedMonths
}

function updateStreakForStudy(state, now = new Date()) {
  const today = dateKey(now)

  if (state.streak.lastStudiedDate === today) {
    return state.streak.current
  }

  const yesterday = dateKey(new Date(now.getTime() - DAY_MS))
  state.streak.current = state.streak.lastStudiedDate === yesterday ? state.streak.current + 1 : 1
  state.streak.longest = Math.max(state.streak.longest, state.streak.current)
  state.streak.lastStudiedDate = today
  return state.streak.current
}

export function setMode(mode) {
  const state = getState()
  state.mode = mode === 'story' ? 'story' : 'game'
  saveState(state)
  return state.mode
}

export function setTheme(theme) {
  const state = getState()
  state.theme = theme === 'light' ? 'light' : 'dark'
  saveState(state)
  return state.theme
}

export function refillHeartsIfDue(now = Date.now()) {
  const state = getState()
  const lastRefill = state.hearts.lastRefillTime || 0

  if (state.hearts.current >= 5) {
    state.hearts.lastRefillTime = now
    saveState(state)
    return state.hearts.current
  }

  if (!lastRefill || now - lastRefill >= DAY_MS) {
    state.hearts.current = 5
    state.hearts.lastRefillTime = now
    saveState(state)
  }

  return state.hearts.current
}

export function setCurrentLesson(id) {
  const state = getState()
  state.currentLesson = id
  saveState(state)
  return id
}

export function resetProgress() {
  localStorage.removeItem(KEY)
}

function dateKey(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

function unlockEligibleMonths(state) {
  const match = state.currentLesson.match(/^m(\d+)-w4-l5$/)
  if (!match) return
  const nextMonth = Number(match[1]) + 1
  if (nextMonth <= 6 && !state.unlockedMonths.includes(nextMonth)) {
    state.unlockedMonths.push(nextMonth)
    state.unlockedMonths.sort((a, b) => a - b)
  }
}
