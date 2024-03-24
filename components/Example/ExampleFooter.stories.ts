import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleFooter from './ExampleFooter.vue'

const meta: Meta<typeof ExampleFooter> = {
  title: 'Components/ExampleFooter',
  component: ExampleFooter,
} satisfies Meta<typeof ExampleFooter>

export default meta

type Story = StoryObj<typeof ExampleFooter>

export const Primary: Story = {
  render: () => ({
    components: { ExampleFooter },
    template: '<ExampleFooter />',
  }),
}
