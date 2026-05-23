import '../../css/main.css'
import '../../css/components/cards.css'
import '../../css/components/exercises.css'
import '../../css/components/celebration.css'
import '../../css/pages/lesson.css'
import { getState, completeLesson, loseHeart, checkAndUpdateStreak, refillHeartsIfDue, setCurrentLesson } from '../core/gameState.js'
import { initExplode } from '../animations/explode.js'
import { initReveal, revealCorrect, revealWrong } from '../animations/reveal.js'
import { initAudioButtons } from '../core/audio.js'
import { getHash } from '../core/router.js'
import { renderHeader } from '../components/header.js'
import { showCelebration } from '../components/celebration.js'
import { calculateXP, checkAnswer, getStars, renderExercise } from '../components/exerciseEngine.js'
import { getLessonById, getNextLesson, getPreviousLesson } from '../../data/curriculum.js'

refillHeartsIfDue()
checkAndUpdateStreak()

let state = getState()
document.body.dataset.theme = state.theme

const lessonId = getHash() || state.currentLesson
const lesson = getLessonById(lessonId)
const root = document.getElementById('lesson-root')
const headerRoot = document.getElementById('header-root')

if (!lesson) {
  renderHeader(headerRoot, state)
  root.innerHTML = '<p class="text-center mt-5">Lesson not found.</p>'
} else {
  setCurrentLesson(lesson.id)
  state = getState()
  renderHeader(headerRoot, state)
  renderLesson()
}

function renderLesson() {
  const isGame = state.mode === 'game'
  const steps = isGame
    ? ['hook', ...lesson.content.map((_, index) => `content-${index}`), ...lesson.exercises.map((_, index) => `exercise-${index}`), 'summary']
    : ['hook', ...lesson.content.map((_, index) => `content-${index}`), 'summary']

  let stepIndex = 0
  let mistakes = 0
  let heartsLeft = getState().hearts.current
  const startedAt = Date.now()

  root.innerHTML = `
    <section class="lesson-topline">
      <div class="d-flex justify-content-between gap-3 flex-wrap">
        <a href="module.html#${lesson.month}" class="text-muted small text-decoration-none">Back to Month ${lesson.month}</a>
        <span class="topic-chip">${lesson.topic}</span>
      </div>
      <div>
        <h1 class="h3 mb-1">${lesson.title}</h1>
        <p class="text-muted mb-0">Month ${lesson.month}, Week ${lesson.week}, Lesson ${lesson.lesson}</p>
      </div>
      <div class="lesson-progress-bar" aria-label="Lesson progress">
        <div class="lesson-progress-fill" id="lesson-progress-fill"></div>
      </div>
    </section>
    <section id="lesson-stage" class="lesson-stage"></section>
  `

  const stage = document.getElementById('lesson-stage')
  const progress = document.getElementById('lesson-progress-fill')

  function updateProgress() {
    progress.style.width = `${Math.round((stepIndex / Math.max(1, steps.length - 1)) * 100)}%`
  }

  function showStep() {
    updateProgress()
    const key = steps[stepIndex]
    stage.innerHTML = ''

    if (key === 'hook') {
      const first = lesson.content.find((item) => item.spanish) || { spanish: lesson.title, english: lesson.topic }
      stage.innerHTML = `
        <div class="hook-wrap">
          <div id="hook-word" class="hook-word"></div>
        </div>
      `
      initExplode(document.getElementById('hook-word'), first.spanish, {
        phonetic: first.phonetic,
        translation: first.english,
      })
      window.setTimeout(nextStep, 1900)
      return
    }

    if (key.startsWith('content-')) {
      const item = lesson.content[Number(key.split('-')[1])]
      stage.innerHTML = renderContent(item)
      initAudioButtons(stage)
      initReveal([...stage.querySelectorAll('.content-card')])
      stage.querySelector('[data-next-content]').addEventListener('click', nextStep)
      return
    }

    if (key.startsWith('exercise-')) {
      const exercise = lesson.exercises[Number(key.split('-')[1])]
      const wrap = document.createElement('div')
      wrap.className = 'exercise-wrap'
      stage.appendChild(wrap)
      renderExercise(exercise, wrap)
      initAudioButtons(wrap)
      attachExerciseHandlers(wrap, exercise)
      return
    }

    renderSummary()
  }

  function nextStep() {
    stepIndex += 1
    showStep()
  }

  function attachExerciseHandlers(wrap, exercise) {
    const feedback = wrap.querySelector('.feedback-line')

    function handleResult(correct, sourceElement) {
      if (correct) {
        feedback.textContent = 'Correct'
        if (sourceElement) {
          sourceElement.classList.add('correct')
          revealCorrect(sourceElement)
        }
        window.setTimeout(nextStep, 550)
        return
      }

      mistakes += 1
      if (sourceElement) {
        sourceElement.classList.add('wrong')
        revealWrong(sourceElement)
      }
      feedback.textContent = 'Try again'

      if (isGame) {
        heartsLeft = loseHeart()
        renderHeader(headerRoot, getState())
        if (heartsLeft === 0) {
          renderNoHearts(wrap)
        }
      }
    }

    wrap.querySelectorAll('.exercise-option').forEach((button) => {
      button.addEventListener('click', () => handleResult(checkAnswer(exercise, button.dataset.value), button))
    })

    const input = wrap.querySelector('.exercise-input')
    wrap.querySelector('[data-check-input]')?.addEventListener('click', () => {
      handleResult(checkAnswer(exercise, input.value), input)
    })
    input?.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') handleResult(checkAnswer(exercise, input.value), input)
    })

    attachMatchingHandlers(wrap, exercise, handleResult)
    attachArrangeHandlers(wrap, exercise, handleResult)
  }

  function attachMatchingHandlers(wrap, exercise, handleResult) {
    if (exercise.type !== 'matching') return
    const selected = { spanish: null, english: null }
    const total = exercise.pairs.length
    let matched = 0

    wrap.querySelectorAll('.match-item').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('matched')) return
        const side = button.dataset.side
        selected[side]?.classList.remove('selected')
        selected[side] = button
        button.classList.add('selected')

        if (!selected.spanish || !selected.english) return

        if (selected.spanish.dataset.id === selected.english.dataset.id) {
          selected.spanish.classList.add('matched')
          selected.english.classList.add('matched')
          selected.spanish.classList.remove('selected')
          selected.english.classList.remove('selected')
          matched += 1
          selected.spanish = null
          selected.english = null
          if (matched === total) handleResult(true, wrap.querySelector('.exercise-panel'))
        } else {
          handleResult(false, button)
          selected.spanish?.classList.remove('selected')
          selected.english?.classList.remove('selected')
          selected.spanish = null
          selected.english = null
        }
      })
    })
  }

  function attachArrangeHandlers(wrap, exercise, handleResult) {
    if (exercise.type !== 'arrange-words') return
    const target = wrap.querySelector('[data-arrange-target]')

    wrap.querySelectorAll('.arrange-word').forEach((button) => {
      button.addEventListener('click', () => {
        if (button.classList.contains('used')) return
        button.classList.add('used')
        const pill = document.createElement('button')
        pill.className = 'arrange-word'
        pill.type = 'button'
        pill.textContent = button.dataset.word
        pill.addEventListener('click', () => {
          button.classList.remove('used')
          pill.remove()
        })
        target.appendChild(pill)
      })
    })

    wrap.querySelector('[data-reset-arrange]').addEventListener('click', () => {
      target.innerHTML = ''
      wrap.querySelectorAll('.arrange-word.used').forEach((button) => button.classList.remove('used'))
    })

    wrap.querySelector('[data-check-arrange]').addEventListener('click', () => {
      const answer = [...target.querySelectorAll('.arrange-word')].map((button) => button.textContent).join(' ')
      handleResult(checkAnswer(exercise, answer), target)
    })
  }

  function renderSummary() {
    updateProgress()
    const elapsedSeconds = Math.round((Date.now() - startedAt) / 1000)
    const xp = isGame ? calculateXP(lesson.xp, mistakes, elapsedSeconds) : 0
    const stars = getStars(heartsLeft)
    const nextLesson = getNextLesson(lesson.id)
    const previousLesson = getPreviousLesson(lesson.id)

    if (isGame) {
      completeLesson(lesson.id, xp, heartsLeft)
      state = getState()
      renderHeader(headerRoot, state)
    }

    stage.innerHTML = `
      <div class="content-card text-center">
        <span class="topic-chip mb-3">${isGame ? 'Lesson Complete' : 'Story Complete'}</span>
        <h2 class="mb-2">${lesson.title}</h2>
        <p class="text-muted">${isGame ? `You earned ${xp} XP with ${mistakes} mistake${mistakes === 1 ? '' : 's'}.` : 'You finished the content without exercise scoring.'}</p>
        ${isGame ? `<div class="h2" style="color:var(--color-secondary)">${'★'.repeat(stars)}</div>` : ''}
        <div class="toolbar justify-content-center mt-4">
          ${previousLesson ? `<a class="btn-secondary-custom" href="lesson.html#${previousLesson.id}">Previous</a>` : ''}
          <a class="btn-secondary-custom" href="module.html#${lesson.month}">Month ${lesson.month}</a>
          ${nextLesson ? `<a class="btn-primary-custom" href="lesson.html#${nextLesson.id}">Next Lesson</a>` : '<a class="btn-primary-custom" href="dashboard.html">Dashboard</a>'}
        </div>
      </div>
    `

    if (isGame) {
      showCelebration(document.getElementById('celebration-overlay'), { xp, stars })
    }
  }

  showStep()
}

function renderContent(item) {
  if (item.type === 'vocabulary' || item.type === 'phrase') {
    const audioPath = item.audioPath || (item.audioFile?.startsWith('/') ? item.audioFile : `${lesson.audio}${item.audioFile}`)
    return `
      <article class="content-card">
        <div class="spanish-word">${item.spanish}</div>
        <div class="d-flex gap-2 flex-wrap align-items-center">
          <span class="phonetic-chip">${item.phonetic}</span>
          <span class="translation-chip">${item.english}</span>
          ${item.audioFile ? `<button class="audio-play-btn" type="button" data-audio="${audioPath}" aria-label="Play ${item.spanish}">▶</button>` : ''}
        </div>
        ${item.notes ? `<p class="text-muted small mt-3 mb-0">${item.notes}</p>` : ''}
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `
  }

  if (item.type === 'grammar') {
    return `
      <article class="content-card">
        <span class="topic-chip mb-3">Grammar</span>
        <h2 class="h4">${item.title}</h2>
        <p class="text-muted">${item.explanation}</p>
        <div class="d-grid gap-2">
          ${item.examples.map((example) => `
            <div>
              <div class="spanish-text h5 mb-0">${example.spanish}</div>
              <div class="text-muted small">${example.english}</div>
            </div>
          `).join('')}
        </div>
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `
  }

  if (item.type === 'dialogue') {
    return `
      <article class="content-card">
        <span class="topic-chip mb-3">Dialogue</span>
        ${item.lines.map((line) => `
          <div class="dialogue-line">
            <div class="dialogue-speaker">${line.speaker}</div>
            <div class="spanish-text">${line.text}</div>
          </div>
        `).join('')}
        <button class="btn-primary-custom mt-4" type="button" data-next-content>Next</button>
      </article>
    `
  }

  return `
    <article class="content-card">
      <p class="text-muted">Content unavailable.</p>
      <button class="btn-primary-custom" type="button" data-next-content>Next</button>
    </article>
  `
}

function renderNoHearts(wrap) {
  wrap.querySelectorAll('button, input').forEach((control) => {
    control.disabled = true
  })
  wrap.insertAdjacentHTML('beforeend', `
    <div class="content-card mx-0 mt-3">
      <h2 class="h5">No hearts left</h2>
      <p class="text-muted">Return to the module or reload the lesson after your hearts refill.</p>
      <div class="toolbar">
        <a class="btn-secondary-custom" href="module.html#${lesson.month}">Back to Month ${lesson.month}</a>
        <button class="btn-primary-custom" type="button" onclick="window.location.reload()">Try Again</button>
      </div>
    </div>
  `)
}
