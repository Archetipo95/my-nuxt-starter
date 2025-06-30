import type { Preview } from "@storybook-vue/nuxt"

import { h, Suspense } from "vue"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      return {
        setup() {
          // Support top level await
          return () => h(Suspense, {}, [h(story())])
        },
      }
    },
  ],
}

export default preview
