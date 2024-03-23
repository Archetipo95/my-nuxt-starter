import {
  createFloatingLabelsPlugin,
  createAutoAnimatePlugin,
} from '@formkit/addons'
import { defineFormKitConfig } from '@formkit/vue'
import { genesisIcons } from '@formkit/icons'
import { rootClasses } from './formkit.theme'

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
      rootClasses,
    },
  }
})
