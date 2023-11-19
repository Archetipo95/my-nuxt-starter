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

    await expect(canvas.queryByText(args.title)).toBeInTheDocument()

    await expect(canvas.queryByText(args.text)).not.toBeInTheDocument()

    await userEvent.click(canvas.getByRole('button'))

    await expect(canvas.queryByText(args.text)).toBeInTheDocument()
  },
}
