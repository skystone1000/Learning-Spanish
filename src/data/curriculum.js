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
import { CONTENT_ENRICHMENTS } from './enrichment.js'

function enrichLessons(lessons) {
  return lessons.map((lesson) => ({
    ...lesson,
    content: [...lesson.content, ...(CONTENT_ENRICHMENTS[lesson.id] || [])],
  }))
}

export const CURRICULUM = {
  months: [
    {
      id: 1,
      title: 'Hello, Spanish!',
      subtitle: 'Foundations',
      color: '#2563eb',
      lessons: enrichLessons([...m1w1, ...m1w2, ...m1w3, ...m1w4]),
    },
    {
      id: 2,
      title: 'Who Are You?',
      subtitle: 'People & Identity',
      color: '#7c3aed',
      lessons: enrichLessons([...m2w1, ...m2w2, ...m2w3, ...m2w4]),
    },
    {
      id: 3,
      title: 'Daily Life',
      subtitle: 'Routine & Actions',
      color: '#0891b2',
      lessons: enrichLessons([...m3w1, ...m3w2, ...m3w3, ...m3w4]),
    },
    {
      id: 4,
      title: 'Getting Around',
      subtitle: 'Places & Movement',
      color: '#059669',
      lessons: enrichLessons([...m4w1, ...m4w2, ...m4w3, ...m4w4]),
    },
    {
      id: 5,
      title: 'Past & Future',
      subtitle: 'Tenses',
      color: '#d97706',
      lessons: enrichLessons([...m5w1, ...m5w2, ...m5w3, ...m5w4]),
    },
    {
      id: 6,
      title: 'Real Conversations',
      subtitle: 'Fluency Building',
      color: '#dc2626',
      lessons: enrichLessons([...m6w1, ...m6w2, ...m6w3, ...m6w4]),
    },
  ],
}

export const ALL_LESSONS = CURRICULUM.months.flatMap((month) => month.lessons)

export function getLessonById(id) {
  return ALL_LESSONS.find((lesson) => lesson.id === id) || null
}

export function getMonthById(monthNumber) {
  return CURRICULUM.months.find((month) => month.id === Number(monthNumber)) || null
}

export function getNextLesson(currentId) {
  const index = ALL_LESSONS.findIndex((lesson) => lesson.id === currentId)
  return index >= 0 ? ALL_LESSONS[index + 1] || null : null
}

export function getPreviousLesson(currentId) {
  const index = ALL_LESSONS.findIndex((lesson) => lesson.id === currentId)
  return index > 0 ? ALL_LESSONS[index - 1] : null
}
