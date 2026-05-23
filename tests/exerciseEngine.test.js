import { describe, expect, it } from 'vitest'
import { calculateXP, checkAnswer, getStars } from '../src/js/components/exerciseEngine.js'

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

  it('getStars: 5 hearts -> 3', () => {
    expect(getStars(5)).toBe(3)
  })

  it('getStars: 3 hearts -> 2', () => {
    expect(getStars(3)).toBe(2)
  })

  it('getStars: 1 heart -> 1', () => {
    expect(getStars(1)).toBe(1)
  })

  it('calculateXP: base with no mistakes, no speed bonus', () => {
    expect(calculateXP(10, 0, 150)).toBe(10)
  })

  it('calculateXP: speed bonus under 60s', () => {
    expect(calculateXP(10, 0, 45)).toBe(15)
  })

  it('calculateXP: never below half base', () => {
    expect(calculateXP(10, 20, 150)).toBe(5)
  })
})
