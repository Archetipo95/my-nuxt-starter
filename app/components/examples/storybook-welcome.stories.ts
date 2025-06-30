import type { Meta, StoryObj } from "@storybook/vue3"

import StorybookWelcome from "./storybook-welcome.vue"

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: "Examples/NuxtWelcome",
  component: StorybookWelcome,
} as Meta<typeof StorybookWelcome>

export default meta
type Story = StoryObj<typeof meta>

export const NuxtWelcomeStory: Story = {
  args: {},
}
