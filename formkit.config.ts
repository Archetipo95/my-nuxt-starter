import { createFloatingLabelsPlugin, createAutoAnimatePlugin } from '@formkit/addons'
import { defineFormKitConfig } from '@formkit/vue'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import tailwindTheme from './tailwind-theme'
//import { rootClasses } from './formkit.theme'

export default defineFormKitConfig(() => {
  return {
    plugins: [
      createAutoAnimatePlugin(),
      createFloatingLabelsPlugin({
        useAsDefault: false,
      }),
    ],
    icons: {
      ...genesisIcons,
    },
    config: {
      classes: generateClasses(tailwindTheme),
    },
  }
})
