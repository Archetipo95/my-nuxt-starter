<script setup lang="ts">
import type { CardProps } from './Card.props'

defineProps<CardProps>()

const dogAge = ref(0)

const humanAge = computed(() => {
  if (dogAge.value) {
    return dogAge.value * 7
  }
})
</script>

<template>
  <div class="card">
    <p class="font-bold mb-2">{{ title }}</p>
    <div class="space-x-2">
      <label for="age">Your dog's age</label>
      <input class="text-black rounded-sm p-1" type="number" name="age" id="age" :max="99" :min="0" v-model="dogAge" />
    </div>
    <p>
      In human age: <span>{{ humanAge }}</span>
    </p>
  </div>
</template>

<style scoped lang="scss">
/* Glassmorphism card effect */
.card {
  backdrop-filter: blur(15px) saturate(100%);
  -webkit-backdrop-filter: blur(15px) saturate(100%);
  background-color: rgba(74, 222, 128, 0.5);
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 20px;
}
</style>
