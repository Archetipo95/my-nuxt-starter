//@ts-nocheck
import type { Meta, StoryObj } from '@storybook/vue3'

import ExampleHelloWorld from './ExampleHelloWorld.vue'

const meta: Meta<typeof ExampleHelloWorld> = {
  title: 'Components/ExampleHelloWorld',
  component: ExampleHelloWorld,
}

export default meta
type Story = StoryObj<typeof ExampleHelloWorld>

export const Primary: Story = {
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { ExampleHelloWorld },
    template: '<ExampleHelloWorld v-bind="args" />',
  }),
  args: {
    name: 'Storybook',
  },
}
