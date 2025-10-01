<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value,
})
</script>

<template>
  <USlideover
    v-model:open="open"
    title="Slideover title"
    description="This is a slideover description"
  >
    <UButton
      :label="$t('slideover.open')"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="h-full m-4" />
    </template>
  </USlideover>
</template>
