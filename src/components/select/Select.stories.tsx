import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Select from './Select'

const meta = {
  title: 'Interface/Select',
  component: Select,
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof Select>

export const Main: Story = {
  render: () => (
    <div className="flex w-full max-w-xs">
      <Select>
        <Select.Trigger>Select your theme...</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Themes</Select.Label>
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
}

export const Error: Story = {
  render: () => (
    <div className="flex w-full max-w-xs">
      <Select>
        <Select.Trigger error>Select your theme...</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Themes</Select.Label>
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="flex w-full max-w-xs">
      <Select>
        <Select.Trigger disabled>Select your theme...</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Themes</Select.Label>
            <Select.Item value="light">Light</Select.Item>
            <Select.Item value="dark">Dark</Select.Item>
            <Select.Item value="system">System</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>
    </div>
  ),
}
