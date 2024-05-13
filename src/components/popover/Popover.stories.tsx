import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Popover from './Popover'

const meta = {
  title: 'Interface/Popover',
  component: Popover,
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof Popover>

export const Primary: Story = {
  render: () => (
    <Popover>
      <Popover.Trigger>Open</Popover.Trigger>
      <Popover.Content arrow>Place content for the popover here.</Popover.Content>
    </Popover>
  ),
}
