import type { Meta, StoryObj } from '@storybook/vue3'
import Disclosure from './Disclosure.vue'
import { within, userEvent, expect, fn } from '@storybook/test'

const meta = {
  title: 'Components/Disclosure',
  component: Disclosure,
} satisfies Meta<typeof Disclosure>

export default meta
type Story = StoryObj<typeof Disclosure>

export const Default: Story = {
  render: (args) => ({
    setup() {
      return { args }
    },
    components: { Disclosure },
    template: '<Disclosure v-bind="args" />',
  }),
  args: {
    title: 'Disclosure',
    text: 'This is a disclosure',
  },
}

export const Opened: Story = {
  render: Default.render,
  args: Default.args,
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    // Check if title is visible
    await expect(canvas.queryByText(args.title)).toBeInTheDocument()

    // Check if text is not visible
    await expect(canvas.queryByText(args.text)).not.toBeInTheDocument()

    // Click on button
    await userEvent.click(canvas.getByRole('button'))

    // Check if text is visible
    await expect(canvas.queryByText(args.text)).toBeInTheDocument()
  },
}
