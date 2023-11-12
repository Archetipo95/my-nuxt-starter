import type { Meta, StoryObj } from '@storybook/vue3'
import Disclosure from './Disclosure.vue'

const meta: Meta<typeof Disclosure> = {
  title: 'Components/Disclosure',
  component: Disclosure,
  parameters: {
    // design: [
    //   {
    //     name: 'Desktop',
    //     type: 'figma',
    //     url: 'https://www.figma.com/file/SOMEFILE',
    //   },
    // ],
  },
}

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
