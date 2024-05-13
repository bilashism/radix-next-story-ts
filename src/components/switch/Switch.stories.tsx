import { Meta, StoryObj } from '@storybook/react'
import { Switch } from './Switch'

const meta: Meta<typeof Switch> = {
  title: 'Interface/Switch',
  component: Switch,
} satisfies Meta<typeof Switch>

export default meta

type Story = StoryObj<typeof Switch>

export const Base: Story = {
  args: {
    checked: false,
  },
  argTypes: {
    onCheckedChange: { action: 'clicked' },
  },
}

export const Checked: Story = {
  args: {
    checked: true,
  },
  argTypes: {
    onCheckedChange: { action: 'clicked' },
  },
}

export const disabled: Story = {
  args: {
    checked: false,
    disabled: true,
  },
  argTypes: {
    onCheckedChange: { action: 'clicked' },
  },
}
