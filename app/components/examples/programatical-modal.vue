<script setup lang="ts">
defineProps<{
  count: number
}>()

const emit = defineEmits<{ close: [boolean] }>()
</script>

<template>
  <UModal
    :close="{ onClick: () => emit('close', false) }"
    :title="`${$t('modal.openedProgrammatically')} ${count} ${$t('modal.times')}`"
  >
    <template #footer>
      <div class="flex gap-2">
        <UButton
          color="neutral"
          :label="$t('modal.dismiss')"
          @click="emit('close', false)"
        />
        <UButton :label="$t('modal.success')" @click="emit('close', true)" />
      </div>
    </template>
  </UModal>
</template>
