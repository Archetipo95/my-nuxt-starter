<script lang="ts" setup>
const {
  x,
  y,
} = useMouse()

const { t } = useI18n()

useHead({
  title: t("page.title"),
})
</script>

<template>
  <UContainer class="flex items-center gap-4">
    <h1>{{ $t('greeting.helloWorld') }}</h1>

    <ExamplesModal />

    <ExamplesProgramaticalModalButton />

    <ExamplesSlideover />

    <div>{{ $t('vueuse.mousePos') }} {{ x }}, {{ y }}</div>
  </UContainer>
</template>
