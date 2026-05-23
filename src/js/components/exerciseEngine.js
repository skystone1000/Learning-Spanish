function normalize(value) {
  return String(value ?? '')
    .trim()
    .replace(/\s+/g, ' ')
    .toLocaleLowerCase()
}

export function checkAnswer(exercise, userAnswer) {
  const correct = exercise.answer
  if (Array.isArray(correct)) {
    return correct.some((answer) => normalize(answer) === normalize(userAnswer))
  }

  if (exercise.type === 'fill-blank' || exercise.type === 'arrange-words') {
    return normalize(userAnswer) === normalize(correct)
  }

  return String(userAnswer) === String(correct)
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
  container.innerHTML = '<div class="exercise-panel"></div>'
  const panel = container.querySelector('.exercise-panel')
  const renderers = {
    'multiple-choice': renderMultipleChoice,
    'fill-blank': renderFillBlank,
    matching: renderMatching,
    'listen-select': renderListenSelect,
    'arrange-words': renderArrangeWords,
  }
  ;(renderers[exercise.type] || renderMultipleChoice)(exercise, panel)
}

function renderMultipleChoice(exercise, container) {
  container.innerHTML = `
    <p class="exercise-question">${exercise.question}</p>
    <div class="options-grid">
      ${exercise.options.map((option) => `
        <button class="exercise-option" type="button" data-value="${escapeAttr(option)}">${option}</button>
      `).join('')}
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `
}

function renderFillBlank(exercise, container) {
  container.innerHTML = `
    <label class="exercise-question" for="fill-answer">${exercise.question}</label>
    <input class="exercise-input" id="fill-answer" type="text" autocomplete="off" placeholder="Type your answer" />
    <button class="btn-primary-custom mt-3" type="button" data-check-input>Check</button>
    <div class="feedback-line" aria-live="polite"></div>
  `
}

function renderMatching(exercise, container) {
  const pairs = exercise.pairs.map((pair, index) => ({ ...pair, index }))
  const shuffled = [...pairs].sort(() => Math.random() - 0.5)

  container.innerHTML = `
    <p class="exercise-question">${exercise.question}</p>
    <div class="matching-grid" data-total-pairs="${pairs.length}">
      <div class="match-col">
        ${pairs.map((pair) => `
          <button class="match-item" type="button" data-id="${pair.index}" data-side="spanish">${pair.spanish}</button>
        `).join('')}
      </div>
      <div class="match-col">
        ${shuffled.map((pair) => `
          <button class="match-item" type="button" data-id="${pair.index}" data-side="english">${pair.english}</button>
        `).join('')}
      </div>
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `
}

function renderListenSelect(exercise, container) {
  container.innerHTML = `
    <p class="exercise-question">${exercise.question}</p>
    <button class="audio-play-btn mb-3" type="button" data-audio="${exercise.audioFile}" aria-label="Play audio">▶</button>
    <div class="options-grid">
      ${exercise.options.map((option) => `
        <button class="exercise-option" type="button" data-value="${escapeAttr(option)}">${option}</button>
      `).join('')}
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `
}

function renderArrangeWords(exercise, container) {
  const words = [...exercise.words].sort(() => Math.random() - 0.5)
  container.innerHTML = `
    <p class="exercise-question">${exercise.question}</p>
    <div class="arrange-target" data-arrange-target aria-label="Arranged sentence"></div>
    <div class="arrange-bank">
      ${words.map((word) => `<button class="arrange-word" type="button" data-word="${escapeAttr(word)}">${word}</button>`).join('')}
    </div>
    <div class="d-flex gap-2 flex-wrap mt-3">
      <button class="btn-primary-custom" type="button" data-check-arrange>Check</button>
      <button class="btn-secondary-custom" type="button" data-reset-arrange>Reset</button>
    </div>
    <div class="feedback-line" aria-live="polite"></div>
  `
}

function escapeAttr(value) {
  return String(value).replaceAll('"', '&quot;')
}
