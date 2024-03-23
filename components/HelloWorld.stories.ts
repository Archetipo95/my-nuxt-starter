//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/vue3'

import HelloWorld from './HelloWorld.vue'

const meta: Meta<typeof HelloWorld> = {
  title: 'Components/HelloWorld',
  component: HelloWorld,
}

export default meta
type Story = StoryObj<typeof HelloWorld>

export const Primary: Story = {
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { HelloWorld },
    template: '<HelloWorld v-bind="args" />',
  }),
  args: {
    name: 'Storybook',
  },
}
