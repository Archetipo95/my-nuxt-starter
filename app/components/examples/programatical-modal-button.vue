<script lang="ts" setup>
// Note Lazy import is used to load the component only when needed
import { LazyExamplesProgramaticalModal } from "#components"

const count = ref(0)

const toast = useToast()
const overlay = useOverlay()

const modal = overlay.create(LazyExamplesProgramaticalModal, {
  props: {
    count: count.value,
  },
})

async function open() {
  const instance = modal.open()

  const shouldIncrement = await instance.result ?? false

  if (shouldIncrement) {
    count.value++

    toast.add({
      title: `Success, should increment: ${shouldIncrement}`,
      color: "success",
      id: "modal-success",
    })

    // Update the count
    modal.patch({
      count: count.value,
    })
    return
  }

  toast.add({
    title: `Dismissed, should increment: ${shouldIncrement}`,
    color: "error",
    id: "modal-dismiss",
  })
}
</script>

<template>
  <UButton
    label="Open programatical modal"
    color="neutral"
    variant="subtle"
    @click="open"
  />
</template>
