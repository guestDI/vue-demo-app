<template>
  <div class="" flashcards-container>
    <h1>Flashcards</h1>
    <div class="flash-cards-container">
      <FlashCard
        v-for="(card, index) in cards"
        :key="index"
        :card="card"
        :is-flipped="flippedCards[index]"
        @flip-card="flipCard"
      >
        <template #front>
          <h3>{{ card.title }}</h3>
        </template>
        <template #back>
          <p>{{ card.text }}</p>
        </template>
      </FlashCard>
    </div>
  </div>
</template>

<script setup lang="ts">
import FlashCard from '@/components/FlashCard.vue'
import cardsData from '@/constaints.json'
import { ref, onMounted } from 'vue'
import { getRandomCards } from '@/utils/utils'
import type { Card } from '@/utils/types'

const cards = ref<Card[]>([])
const flippedCards = ref<boolean[]>([])

onMounted(() => {
  cards.value = getRandomCards(cardsData, 4)
  // Initialize all cards as not flipped
  flippedCards.value = new Array(cards.value.length).fill(false)
})

const flipCard = (card: Card) => {
  const cardIndex = cards.value.findIndex((c) => c.title === card.title && c.text === card.text)
  if (cardIndex !== -1) {
    flippedCards.value[cardIndex] = !flippedCards.value[cardIndex]
  }
}
</script>

<style scoped>
@media (min-width: 1024px) {
  .flashcards-container {
    min-height: 100vh;
  }
  .flash-cards-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 10px;
  }
}
</style>
