export function getHash() {
  return window.location.hash.slice(1) || ''
}

export function parseLessonId(id) {
  const match = id.match(/^m(\d+)-w(\d+)-l(\d+)$/)
  if (!match) return null
  return {
    month: Number(match[1]),
    week: Number(match[2]),
    lesson: Number(match[3]),
  }
}

export function lessonUrl(id) {
  return `lesson.html#${id}`
}

export function moduleUrl(monthNumber) {
  return `module.html#${monthNumber}`
}

export function navigate(url) {
  window.location.href = url
}

export function onHashChange(callback) {
  window.addEventListener('hashchange', callback)
  return () => window.removeEventListener('hashchange', callback)
}
