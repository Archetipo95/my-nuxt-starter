import type { StorybookConfig } from '@storybook/vue3-vite'
import Components from 'unplugin-vue-components/vite'
import { resolveIcons, mapIcons } from '../utils/iconSetting'
import AutoImport from 'unplugin-auto-import/vite'
import { join } from 'path'
import { mergeConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'
import vue from '@vitejs/plugin-vue'

const config: StorybookConfig = {
  stories: ['../components/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-themes',
    '@storybook/addon-designs',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {
      docgen: 'vue-component-meta',
    },
  },
  viteFinal: async (config) => {
    return mergeConfig(config, {
      optimizeDeps: { exclude: ['fsevents'] },
      resolve: {
        dedupe: ['@storybook/client-api'],
        alias: {
          '~': join(__dirname, '../'),
        },
      },
      plugins: [
        vue(),
        Components({
          dirs: [join(__dirname, '../components')],
          deep: true,
          directoryAsNamespace: false,
          resolvers: [
            resolveIcons(),
            HeadlessUiResolver({
              prefix: 'Headless',
            }),
            // @ts-ignore
            (componentName: string) => {
              if (componentName === 'NuxtLink') {
                return {
                  name: componentName,
                  path: join(__dirname, './mocks/NuxtLink'),
                }
              }
            },
            // @ts-ignore
            (componentName: string) => {
              if (
                componentName === 'NuxtImg' ||
                componentName === 'NuxtPicture'
              ) {
                return {
                  name: componentName,
                  path: join(__dirname, './mocks/NuxtImage'),
                }
              }
            },
          ],
          dts: true,
        }),
        mapIcons(),
        AutoImport({
          dirs: [join(__dirname, '../composables'), join(__dirname, './mocks')],
          imports: ['vue', '@vueuse/core', 'vue-i18n'],
        }),
        tsconfigPaths({
          root: join(__dirname, '../'),
        }),
      ],
    } satisfies typeof config)
  },
  staticDirs: [
    {
      from: join(__dirname, '../public'),
      to: '/',
    },
  ],
  docs: {
    autodocs: 'tag',
  },
}
export default config
