<template>
  <div class="flash-card">
    <div class="flash-card-front">
      <slot name="front" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.flash-card {
  width: 180px;
  height: 180px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
}
</style>
