import '../../css/main.css'
import '../../css/pages/reference.css'
import { getState } from '../core/gameState.js'
import { initReveal } from '../animations/reveal.js'
import { renderHeader } from '../components/header.js'
import { CURRICULUM } from '../../data/curriculum.js'

const state = getState()
document.body.dataset.theme = state.theme
renderHeader(document.getElementById('header-root'), state)

const categories = CURRICULUM.months.map((month) => ({
  label: `Month ${month.id}: ${month.title}`,
  color: month.color,
  weeks: [1, 2, 3, 4].map((week) => ({
    week,
    lessons: month.lessons
      .filter((lesson) => lesson.week === week)
      .map((lesson) => ({
        ...lesson,
        vocabulary: lesson.content.filter((item) => item.type === 'vocabulary' || item.type === 'phrase'),
        grammar: lesson.content.filter((item) => item.type === 'grammar'),
        dialogues: lesson.content.filter((item) => item.type === 'dialogue'),
      })),
  })),
}))

const root = document.getElementById('reference-root')
root.innerHTML = `
  <section class="mb-4">
    <p class="topic-chip mb-3">Reference</p>
    <h1 class="mb-2">Vocabulary & Grammar</h1>
    <p class="text-muted mb-0">Everything in the six-month curriculum, organized by module, week, and lesson.</p>
  </section>
  <section class="reference-layout">
    <div class="reference-tabs" role="tablist" aria-label="Reference months">
      ${categories.map((category, index) => `
        <button class="reference-tab ${index === 0 ? 'active' : ''}" type="button" data-index="${index}" style="--tab-color:${category.color}">
          ${category.label}
        </button>
      `).join('')}
    </div>
    <div id="reference-panel" class="reference-panel"></div>
  </section>
`

const panel = document.getElementById('reference-panel')
const tabs = [...document.querySelectorAll('.reference-tab')]

function renderCategory(index) {
  const category = categories[index]
  const itemCount = category.weeks.reduce(
    (total, week) => total + week.lessons.reduce((sum, lesson) => sum + lesson.vocabulary.length + lesson.grammar.length + lesson.dialogues.length, 0),
    0,
  )
  tabs.forEach((tab, tabIndex) => tab.classList.toggle('active', tabIndex === index))
  panel.innerHTML = `
    <header class="reference-panel-header">
      <div>
        <h2 class="h4 mb-1" style="color:${category.color}">${category.label}</h2>
        <p class="text-muted mb-0">${itemCount} reference entries grouped by learning module.</p>
      </div>
      <div class="reference-panel-actions" aria-label="Reference lesson controls">
        <button class="btn-secondary-custom" type="button" data-expand-reference>Expand all</button>
        <button class="btn-secondary-custom" type="button" data-collapse-reference>Collapse all</button>
      </div>
    </header>
    ${category.weeks.map((week) => `
      <section class="reference-week reveal-item">
        <h3 class="reference-week-title">Week ${week.week}</h3>
        <div class="reference-lessons">
          ${week.lessons.map((lesson) => renderLessonReference(lesson)).join('')}
        </div>
      </section>
    `).join('')}
  `
  wireReferenceControls()
  initReveal([...panel.querySelectorAll('.reveal-item')])
}

function renderLessonReference(lesson) {
  return `
    <details class="reference-lesson" ${lesson.week === 1 && lesson.lesson === 1 ? 'open' : ''}>
      <summary class="reference-lesson-summary">
        <span class="topic-chip">Lesson ${lesson.lesson}</span>
        <div>
          <h4 class="h5 mb-1">${lesson.title}</h4>
          <p class="text-muted small mb-0">${lesson.topic}</p>
        </div>
        <span class="reference-lesson-count">${lesson.vocabulary.length + lesson.grammar.length + lesson.dialogues.length}</span>
      </summary>
      <div class="reference-lesson-body">
        ${lesson.vocabulary.length ? `
          <section>
            <h5 class="reference-section-title">Vocabulary & Phrases</h5>
            <div class="reference-list">
              ${lesson.vocabulary.map((item) => `
                <div class="reference-item">
                  <div class="spanish-text h5 mb-0">${item.spanish}</div>
                  <div class="text-muted small">${item.english}</div>
                  ${item.phonetic ? `<span class="phonetic-chip">${item.phonetic}</span>` : ''}
                  ${item.notes ? `<span class="text-muted small">${item.notes}</span>` : ''}
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}
        ${lesson.grammar.length ? `
          <section>
            <h5 class="reference-section-title">Grammar</h5>
            <div class="reference-grammar-list">
              ${lesson.grammar.map((item) => `
                <div class="reference-item reference-item-wide">
                  <strong>${item.title}</strong>
                  <span class="text-muted small">${item.explanation}</span>
                  ${(item.examples || []).length ? `
                    <div class="reference-examples">
                      ${item.examples.map((example) => `
                        <span><span class="spanish-text">${example.spanish}</span> - ${example.english}</span>
                      `).join('')}
                    </div>
                  ` : ''}
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}
        ${lesson.dialogues.length ? `
          <section>
            <h5 class="reference-section-title">Dialogues</h5>
            <div class="reference-dialogue-list">
              ${lesson.dialogues.map((dialogue) => `
                <div class="reference-item reference-item-wide">
                  ${(dialogue.lines || []).map((line) => `
                    <span><strong>${line.speaker}:</strong> <span class="spanish-text">${line.text}</span></span>
                  `).join('')}
                </div>
              `).join('')}
            </div>
          </section>
        ` : ''}
      </div>
    </details>
  `
}

function wireReferenceControls() {
  panel.querySelector('[data-expand-reference]')?.addEventListener('click', () => {
    panel.querySelectorAll('.reference-lesson').forEach((lesson) => {
      lesson.open = true
    })
  })

  panel.querySelector('[data-collapse-reference]')?.addEventListener('click', () => {
    panel.querySelectorAll('.reference-lesson').forEach((lesson) => {
      lesson.open = false
    })
  })
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => renderCategory(Number(tab.dataset.index)))
})
renderCategory(0)
