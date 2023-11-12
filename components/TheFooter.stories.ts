import type { Meta, StoryObj } from '@storybook/vue3'
import TheFooter from './TheFooter.vue'

const meta: Meta<typeof TheFooter> = {
  title: 'Components/TheFooter',
  component: TheFooter,
} satisfies Meta<typeof TheFooter>

export default meta

type Story = StoryObj<typeof TheFooter>

export const Primary: Story = {
  render: () => ({
    components: { TheFooter },
    template: '<TheFooter />',
  }),
}
