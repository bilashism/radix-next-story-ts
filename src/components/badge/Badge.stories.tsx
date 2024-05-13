import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Interface/Badge',
  component: Badge,
}

type Story = StoryObj<typeof Badge>

export default meta

export const Base: Story = {
  args: {
    variant: 'base',
    children: 'Badge',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Badge',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    children: 'Badge',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Badge',
  },
}
