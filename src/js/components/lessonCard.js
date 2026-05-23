import { lessonUrl } from '../core/router.js'

export function renderLessonGrid(container, lessons, lessonState = {}, mode = 'game') {
  if (!container) return

  container.innerHTML = lessons.map((lesson, index) => {
    const record = lessonState[lesson.id]
    const completed = Boolean(record?.completed)
    const previousLesson = lessons[index - 1]
    const locked = mode === 'game' && index > 0 && !lessonState[previousLesson?.id]?.completed
    const stars = completed ? '★'.repeat(record.stars) : ''
    const classes = ['lesson-card', completed ? 'completed' : '', locked ? 'locked' : ''].filter(Boolean).join(' ')
    const href = lessonUrl(lesson.id)

    return `
      <article class="${classes}" data-lesson-id="${lesson.id}">
        <div class="stars" aria-label="${record?.stars || 0} stars">${stars}</div>
        <div class="lesson-title">${lesson.title}</div>
        <div class="lesson-topic">${lesson.topic || `Week ${lesson.week}`}</div>
        <div class="lesson-xp">+${lesson.xp} XP</div>
        ${locked
          ? '<span class="topic-chip">Locked</span>'
          : `<a class="stretched-link" href="${href}" aria-label="Open ${lesson.title}"></a>`}
      </article>
    `
  }).join('')
}
