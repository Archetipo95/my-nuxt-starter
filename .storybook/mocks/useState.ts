import { computed, reactive } from 'vue'

const globalState = reactive({})

export const useState = (key: string, initial?: () => any) => {
  // we assume we have window in storybook
  if (!globalState[key] && typeof initial === 'function') {
    globalState[key] = initial()
  }

  const computedState = computed({
    get: () => {
      // force reactivity
      return globalState[key]
    },
    set: (value) => {
      globalState[key] = value
    },
  })

  return computedState
}
