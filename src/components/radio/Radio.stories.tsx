import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { Label } from '../label'
import { RadioGroup, RadioGroupItem } from './Radio'

const meta = {
  title: 'Interface/Radio',
  component: RadioGroupItem,
} satisfies Meta<typeof RadioGroupItem>

export default meta
type Story = StoryObj<typeof RadioGroupItem>

export const Main: Story = {
  render: () => (
    <RadioGroup>
      <div className="flex items-center gap-x-3">
        <RadioGroupItem value="value1" id="value1" />
        <Label htmlFor="value1">My value1</Label>
      </div>
      <div className="flex items-center gap-x-3">
        <RadioGroupItem value="value2" id="value2" />
        <Label htmlFor="value2">My value2</Label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup>
      <RadioGroupItem checked disabled value="value">
        My Label
      </RadioGroupItem>
      <RadioGroupItem disabled value="value" />
    </RadioGroup>
  ),
}
