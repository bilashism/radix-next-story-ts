import type { Meta, StoryObj } from '@storybook/react'
import NumberField from './NumberField'

const meta = {
  title: 'Interface/NumberField',
  component: NumberField,
} satisfies Meta<typeof NumberField>

export default meta
type Story = StoryObj<typeof NumberField>

export const Primary: Story = {}
