<template>
  <div class="text">
    <h1>Flashcards</h1>
    <div class="flash-cards-container">
      <FlashCard v-for="(card, index) in cards" :key="index" :card="card">
        <template #front>
          <h2>Front</h2>
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

onMounted(() => {
  cards.value = getRandomCards(cardsData, 4)
})
</script>

<style scoped>
@media (min-width: 1024px) {
  .text {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  .flash-cards-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
    justify-content: center;
    align-items: center;
  }
}
</style>
