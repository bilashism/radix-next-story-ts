import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Dropdown from './Dropdown'

const meta = {
  title: 'Interface/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof Dropdown>

export const Main: Story = {
  render: () => (
    <Dropdown>
      <Dropdown.Trigger className="w-56">Dropdown</Dropdown.Trigger>
      <Dropdown.Content className="w-56">
        <Dropdown.Group>
          <Dropdown.Label>Test</Dropdown.Label>
          <Dropdown.Item>Select</Dropdown.Item>
          <Dropdown.Item>Copy</Dropdown.Item>
          <Dropdown.Item>Cut</Dropdown.Item>
          <Dropdown.Item>Paste</Dropdown.Item>
        </Dropdown.Group>
      </Dropdown.Content>
    </Dropdown>
  ),
}
