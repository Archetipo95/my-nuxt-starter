<script setup lang="ts">
const open = ref(false)

// Press "o" to toggle the modal
defineShortcuts({
  o: () => open.value = !open.value,
})

// TODO: add visual indication for shortcut key in the button
</script>

<template>
  <UModal
    v-model:open="open"
    description="This is a modal description"
    title="Modal title"
  >
    <UButton
      color="neutral"
      :label="$t('modal.open')"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="m-4 h-48" />
    </template>
  </UModal>
</template>
