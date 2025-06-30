<script setup lang="ts">
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  })
}

// Show/hide based on scroll position
const isOnTop = ref(false)
const isOnBottom = ref(false)

function checkScrollPosition() {
  isOnTop.value = window.scrollY === 0
  isOnBottom.value = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
}

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition)
  checkScrollPosition()
})

onUnmounted(() => {
  window.removeEventListener("scroll", checkScrollPosition)
})
</script>

<template>
  <div data-test-id="scroll-navigator" class="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
    <!-- Scroll to Top -->
    <AppButton
      data-test-id="scroll-to-top-button"
      variant="secondary"
      size="lg"
      icon="lucide-lab:escalator-arrow-up-right"
      class="p-3"
      aria-label="Scroll to top"
      :disabled="isOnTop"
      @click="scrollToTop"
    />

    <!-- Scroll to Bottom -->
    <AppButton
      data-test-id="scroll-to-bottom-button"
      variant="secondary"
      size="lg"
      icon="lucide-lab:escalator-arrow-down-left"
      class="p-3"
      aria-label="Scroll to bottom"
      :disabled="isOnBottom"
      @click="scrollToBottom"
    />
  </div>
</template>
