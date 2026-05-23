import { beforeEach, describe, expect, it } from 'vitest'
import {
  checkAndUpdateStreak,
  completeLesson,
  getState,
  loseHeart,
  resetProgress,
  setMode,
  unlockMonth,
} from '../src/js/core/gameState.js'

describe('gameState', () => {
  beforeEach(() => localStorage.clear())

  it('returns default state when localStorage is empty', () => {
    const state = getState()
    expect(state.mode).toBe('game')
    expect(state.hearts.current).toBe(5)
    expect(state.xp.total).toBe(0)
    expect(state.unlockedMonths).toEqual([1])
  })

  it('completeLesson updates record, XP, stars, and streak', () => {
    completeLesson('m1-w1-l1', 10, 5, new Date('2026-05-20T12:00:00Z'))
    const state = getState()
    expect(state.lessons['m1-w1-l1']).toEqual({ completed: true, xpEarned: 10, stars: 3 })
    expect(state.xp.total).toBe(10)
    expect(state.streak.current).toBe(1)
    expect(state.streak.lastStudiedDate).toBe('2026-05-20')
  })

  it('completeLesson awards 2 stars for 3-4 hearts', () => {
    completeLesson('m1-w1-l1', 8, 4)
    expect(getState().lessons['m1-w1-l1'].stars).toBe(2)
  })

  it('loseHeart decrements and clamps at 0', () => {
    expect(loseHeart()).toBe(4)
    for (let i = 0; i < 10; i += 1) loseHeart()
    expect(getState().hearts.current).toBe(0)
  })

  it('checkAndUpdateStreak starts at 1 and does not double-count the same day', () => {
    expect(checkAndUpdateStreak(new Date('2026-05-20T12:00:00Z'))).toBe(1)
    expect(checkAndUpdateStreak(new Date('2026-05-20T18:00:00Z'))).toBe(1)
  })

  it('completeLesson increments streak only once per local day', () => {
    completeLesson('m1-w1-l1', 10, 5, new Date('2026-05-20T12:00:00Z'))
    completeLesson('m1-w1-l2', 10, 5, new Date('2026-05-20T18:00:00Z'))
    completeLesson('m1-w1-l3', 10, 5, new Date('2026-05-21T12:00:00Z'))

    expect(getState().streak.current).toBe(2)
  })

  it('unlockMonth adds month without duplicates', () => {
    unlockMonth(2)
    unlockMonth(2)
    expect(getState().unlockedMonths.filter((month) => month === 2)).toHaveLength(1)
  })

  it('setMode and resetProgress work', () => {
    setMode('story')
    expect(getState().mode).toBe('story')
    resetProgress()
    expect(getState().xp.total).toBe(0)
  })
})
