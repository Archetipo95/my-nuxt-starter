<script setup lang="ts">
import type { ExampleHelloWorldProps } from './ExampleHelloWorld.props'
defineProps<ExampleHelloWorldProps>()
</script>

<template>
  <div>
    <h1 class="text-red-500">{{ $t('hello') }} {{ name }}!</h1>
    <IconsLogoYoutube class="text-red-500" />

    <button>just a button</button>
    <NuxtLink external to="https://google.com" class="block">
      Go to google
    </NuxtLink>
    <NuxtImg src="https://placehold.co/600x400/png" />

    <FormKit type="text" label="Label" />
  </div>
</template>
