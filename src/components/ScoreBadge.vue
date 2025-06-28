<template>
  <div class="score-badge">
    <span>{{ scoreStore.score }}</span>
  </div>
</template>

<script setup lang="ts">
import { useScoreStore } from '@/stores/scoreStore'

const scoreStore = useScoreStore()
</script>
