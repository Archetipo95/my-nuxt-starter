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
    <h1>{{ $t('welcome') }}</h1>

    <ExamplesModal />

    <ExamplesProgramaticalModalButton />

    <ExamplesSlideover />

    <div>{{ $t('mousePosition') }}: {{ x }}, {{ y }}</div>
  </UContainer>
</template>
