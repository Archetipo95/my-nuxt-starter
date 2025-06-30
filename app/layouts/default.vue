<template>
  <div class="h-screen bg-gradient-to-r from-emerald-400 to-cyan-400 dark:from-slate-700 dark:to-slate-900">
    <UContainer class="flex items-center justify-between py-4">
      <UBreadcrumb
        :items="[{ label: 'Home', icon: 'i-lucide-house', class: 'text-default' }]"
      />

      <ColorModeButton />
    </UContainer>
    <slot />
  </div>
</template>
