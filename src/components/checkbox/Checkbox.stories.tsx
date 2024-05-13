import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Checkbox from './Checkbox'

const meta = {
  title: 'Interface/Checkbox',
  component: Checkbox,
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof Checkbox>

export const Main: Story = {}

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col gap-y-2">
      <Checkbox checked disabled />
      <Checkbox disabled />
    </div>
  ),
}
