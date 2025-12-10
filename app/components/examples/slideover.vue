<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value,
})
</script>

<template>
  <USlideover
    v-model:open="open"
    description="This is a slideover description"
    title="Slideover title"
  >
    <UButton
      color="neutral"
      :label="$t('slideover.open')"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="m-4 h-full" />
    </template>
  </USlideover>
</template>
