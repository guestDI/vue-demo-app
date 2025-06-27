import type { Card } from './types'

export function getRandomCards(cards: Card[], count = 4) {
  // Create a copy of the array to avoid mutating the original
  const shuffled = [...cards]

  // Fisher-Yates shuffle algorithm
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }

  // Return the first 4 cards
  return shuffled.slice(0, count)
}
