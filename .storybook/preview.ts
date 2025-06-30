import type { Preview } from "@storybook-vue/nuxt"

import { h, Suspense } from "vue"

const preview: Preview = {
  parameters: {
    layout: "centered",
    darkMode: {
      stylePreview: true,
      classTarget: "html",
    },
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
