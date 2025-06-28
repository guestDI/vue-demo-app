import { defineStore } from 'pinia'

export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
  actions: {
    addScore(score: number) {
      this.score += score
    },
    resetScore() {
      this.score = 0
    },
  },
})
