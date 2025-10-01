<script setup lang="ts">
const open = ref(false)

// Press "o" to toggle the modal
defineShortcuts({
  o: () => open.value = !open.value,
})
</script>

<template>
  <UModal
    v-model:open="open"
    title="Modal title"
    description="This is a modal description"
  >
    <UButton
      :label="$t('modal.open')"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="h-48 m-4" />
    </template>
  </UModal>
</template>
