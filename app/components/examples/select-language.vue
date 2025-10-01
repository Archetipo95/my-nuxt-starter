<script setup ts>
const {
  locales,
  locale,
  setLocale,
} = useI18n()

const items = computed(() =>
  locales.value.map(locale => ({
    label: locale.name,
    value: locale.code,
  })),
)

const selectedLocale = ref(locale.value)

watch(selectedLocale, (newLocale) => {
  setLocale(newLocale)
})
</script>

<template>
  <div class="flex items-center gap-2">
    <USelect
      v-model="selectedLocale"
      :items="items"
      size="sm"
      class="w-32"
    />
  </div>
</template>
