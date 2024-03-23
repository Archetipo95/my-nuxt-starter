<script setup lang="ts">
import type { HelloWorldProps } from './HelloWorld.props'
defineProps<HelloWorldProps>()
</script>

<template>
  <div>
    <h1 class="text-red-500">{{ name }}!</h1>
    <IconsLogoYoutube class="text-red-500" />

    <button>just a button</button>
    <NuxtLink external to="https://google.com" class="block">
      Go to google
    </NuxtLink>
    <NuxtImg src="https://placehold.co/600x400/png" />
  </div>
</template>
