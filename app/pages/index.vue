<script lang="ts" setup>
const {
  x,
  y,
} = useMouse()

useHead({
  title: "Starter template",
})
</script>

<template>
  <UContainer class="flex items-center gap-4">
    <h1>Hello world</h1>

    <ExamplesModal />

    <ExamplesProgramaticalModalButton />

    <ExamplesSlideover />

    <div>VueUse mouse pos: {{ x }}, {{ y }}</div>
  </UContainer>
</template>
