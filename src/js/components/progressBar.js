export function renderProgressBar(root, value, label, color = 'var(--color-primary)') {
  if (!root) return
  const safeValue = Math.max(0, Math.min(100, value))
  root.innerHTML = `
    <div class="progress-wrap">
      ${label ? `<div class="progress-label">${label}</div>` : ''}
      <div class="progress" style="height:10px;border-radius:8px;background:var(--color-surface-2)">
        <div class="progress-bar"
          role="progressbar"
          style="width:0%;background:${color};border-radius:8px;transition:width 0.8s ease"
          aria-valuenow="${safeValue}"
          aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>
    </div>
  `
  requestAnimationFrame(() => {
    root.querySelector('.progress-bar').style.width = `${safeValue}%`
  })
}

export function monthCompletion(monthLessons, lessonState = {}) {
  const total = monthLessons.length
  const done = monthLessons.filter((lesson) => lessonState[lesson.id]?.completed).length
  return total === 0 ? 0 : Math.round((done / total) * 100)
}
