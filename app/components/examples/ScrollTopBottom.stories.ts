import type { Meta, StoryObj } from "@storybook/vue3"

import ScrollTopBottom from "./ScrollTopBottom.vue"

const meta = {
  title: "App/ScrollTopBottom",
  component: ScrollTopBottom,
  parameters: {
    layout: "fullscreen",
  },
} as Meta<typeof ScrollTopBottom>

export default meta
type Story = StoryObj<typeof meta>

// Default story with scrollable content
export const Default: Story = {
  render: () => ({
    components: { ScrollTopBottom },
    template: `
      <div class="min-h-screen">
        <div class="container mx-auto p-8">
          <h1 class="text-3xl font-bold mb-8">Scroll Navigation Demo</h1>
          
          <!-- Content to make page scrollable -->
          <div class="space-y-8">
            <div v-for="i in 20" :key="i" class="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
              <h2 class="text-xl font-semibold mb-4">Section {{ i }}</h2>
              <p class="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p class="text-gray-600 dark:text-gray-300 mt-4">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt 
                in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          
          <div class="mt-16 p-8 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
            <h2 class="text-2xl font-bold mb-4">End of Content</h2>
            <p class="text-gray-600 dark:text-gray-300">
              Use the scroll buttons in the bottom-right corner to navigate quickly to the top or bottom of the page.
            </p>
          </div>
        </div>
        
        <!-- The scroll navigation component -->
        <ScrollTopBottom />
      </div>
    `,
  }),
}

// Minimal content story (both buttons should be disabled)
export const MinimalContent: Story = {
  render: () => ({
    components: { ScrollTopBottom },
    template: `
      <div class="container mx-auto p-8">
        <h1 class="text-3xl font-bold mb-8">Minimal Content Demo</h1>
        <p class="text-gray-600 dark:text-gray-300">
          This page has minimal content that doesn't require scrolling. 
          Both scroll buttons should be disabled since we're at both top and bottom.
        </p>
        
        <!-- The scroll navigation component -->
        <ScrollTopBottom />
      </div>
    `,
  }),
}
