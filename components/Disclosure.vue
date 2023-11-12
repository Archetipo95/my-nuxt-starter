<script setup lang="ts">
import type { DisclosureProps } from './Disclosure.props.ts'

defineProps<DisclosureProps>()
</script>

<template>
  <div>
    <HeadlessDisclosure>
      <HeadlessDisclosureButton class="p-2 border border-white"> {{ title }} </HeadlessDisclosureButton>
      <HeadlessDisclosurePanel class="text-gray-500 border border-green-600 p-2"> {{ text }} </HeadlessDisclosurePanel>
    </HeadlessDisclosure>
  </div>
</template>
