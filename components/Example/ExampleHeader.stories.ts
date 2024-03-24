import type { Meta, StoryObj } from '@storybook/vue3'
import ExampleHeader from './ExampleHeader.vue'

const meta: Meta<typeof ExampleHeader> = {
  title: 'Components/ExampleHeader',
  component: ExampleHeader,
} satisfies Meta<typeof ExampleHeader>

export default meta

type Story = StoryObj<typeof ExampleHeader>

export const Primary: Story = {
  render: () => ({
    components: { ExampleHeader },
    template: '<ExampleHeader />',
  }),
}
