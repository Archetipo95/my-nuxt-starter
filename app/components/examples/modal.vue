<script setup lang="ts">
const open = ref(false)

// Press "o" to toggle the modal
defineShortcuts({
  o: () => open.value = !open.value,
})
</script>

<template>
  <UModal v-model:open="open">
    <UButton
      label="Open modal"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <Placeholder class="h-48 m-4" />
    </template>
  </UModal>
</template>
