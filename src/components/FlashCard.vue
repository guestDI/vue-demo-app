<template>
  <div class="flash-card" @click="flipCard" :class="{ flip: isFlipped }">
    <div class="flash-card-front">
      <slot name="front" />
    </div>
    <div class="flash-card-back">
      <slot name="back" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/utils/types'

interface Props {
  card: Card
  isFlipped: boolean
}

const props = defineProps<Props>()
const emit = defineEmits<{
  'flip-card': [card: Card]
}>()

const flipCard = () => {
  emit('flip-card', props.card)
}
</script>

<style scoped>
.flash-card {
  width: 200px;
  height: 200px;
  background-color: #00bd7e;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  cursor: pointer;
  position: relative;
  transition: transform 0.5s;
  transform-style: preserve-3d;
  /* Define container for container queries */
  container-type: inline-size;
  container-name: flashcard;
}

.flash-card-front,
.flash-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text);
  font-weight: 800;
  text-align: center;
  padding: 1rem;
  border-radius: 10px;
  overflow: hidden;
}

.flash-card-front {
  background-color: #00bd7e;
}

.flash-card-front h3 {
  font-size: 1.2rem;
  line-height: 1.2;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
}

.flash-card-back {
  background-color: #42b883;
  transform: rotateY(180deg);
}

.flash-card-back p {
  font-size: 0.9rem;
  line-height: 1.4;
  margin: 0;
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-height: 100%;
  overflow-y: auto;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.flip {
  transform: rotateY(180deg);
}

/* Container queries for responsive text sizing */
@container flashcard (max-width: 180px) {
  .flash-card-front h3 {
    font-size: 1rem;
  }

  .flash-card-back p {
    font-size: 0.8rem;
  }
}

@container flashcard (max-width: 160px) {
  .flash-card-front h3 {
    font-size: 0.9rem;
  }

  .flash-card-back p {
    font-size: 0.7rem;
  }

  .flash-card-front,
  .flash-card-back {
    padding: 0.75rem;
  }
}

@container flashcard (max-width: 140px) {
  .flash-card-front h3 {
    font-size: 0.8rem;
  }

  .flash-card-back p {
    font-size: 0.65rem;
  }

  .flash-card-front,
  .flash-card-back {
    padding: 0.5rem;
  }
}

@container flashcard (max-width: 120px) {
  .flash-card-front h3 {
    font-size: 0.7rem;
  }

  .flash-card-back p {
    font-size: 0.6rem;
  }

  .flash-card-front,
  .flash-card-back {
    padding: 0.4rem;
  }
}

/* Fallback for browsers that don't support container queries */
@supports not (container-type: inline-size) {
  .flash-card-front h3 {
    font-size: clamp(0.7rem, 4vw, 1.2rem);
  }

  .flash-card-back p {
    font-size: clamp(0.6rem, 3vw, 0.9rem);
  }
}
</style>
