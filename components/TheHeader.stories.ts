import type { Meta, StoryObj } from '@storybook/vue3'
import TheHeader from './TheHeader.vue'

const meta: Meta<typeof TheHeader> = {
  title: 'Components/TheHeader',
  component: TheHeader,
} satisfies Meta<typeof TheHeader>

export default meta

type Story = StoryObj<typeof TheHeader>

export const Primary: Story = {
  render: () => ({
    components: { TheHeader },
    template: '<TheHeader />',
  }),
}
