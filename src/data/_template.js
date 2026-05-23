// Copy this file to src/data/month-X/week-Y.js and fill in real content.
// Lesson ID format: mX-wY-lN, for example m7-w1-l1 for Month 7, Week 1, Lesson 1.

import { makeWeek } from './lessonFactory.js'

export const lessons = makeWeek({
  month: 0,
  week: 0,
  topics: [
    {
      title: 'Lesson Title',
      focus: 'Short topic label',
      items: [
        ['Spanish', 'English', 'phonetic hint', 'optional note'],
      ],
      grammar: {
        title: 'Grammar Point',
        explanation: 'One beginner-friendly explanation.',
      },
      sentence: 'Spanish example sentence',
      translation: 'English example sentence',
      dialogue: ['Line one in Spanish.', 'Line two in Spanish.'],
    },
  ],
})
