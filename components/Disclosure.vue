<script setup lang="ts">
import type { DisclosureProps } from './Disclosure.props.ts'

defineProps<DisclosureProps>()
</script>

<template>
  <div>
    <HeadlessDisclosure>
      <HeadlessDisclosureButton class="p-2 border border-white rounded-md mb-2"> {{ title }} </HeadlessDisclosureButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-out"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <HeadlessDisclosurePanel class="text-gray-500 border border-green-600 p-2 rounded-md"> {{ text }} </HeadlessDisclosurePanel>
      </transition>
    </HeadlessDisclosure>
  </div>
</template>
