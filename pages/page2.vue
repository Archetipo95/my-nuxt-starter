<script lang="ts" setup>
const { helloWorld } = useHelloWorld()

const route = useRoute()
const isHome = computed(() => Object.keys(route.params).length === 1)
</script>

<template>
  <div class="max-w-md space-y-2">
    PAGE 2 {{ helloWorld }}

    is home: {{ isHome }}
  </div>
</template>
