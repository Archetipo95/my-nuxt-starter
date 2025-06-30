<script setup lang="ts">
export type ComponentTestProps = {
  state: "valid" | "invalid"
}

defineProps<ComponentTestProps>()
</script>

<template>
  <div
    :class="{
      'text-green-500': state === 'valid',
      'text-red-500': state === 'invalid',
    }"
  >
    <div class="heading">
      <slot name="title" />
    </div>
  </div>
</template>
