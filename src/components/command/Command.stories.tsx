import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Command from './Command'

const meta = {
  title: 'Interface/Command',
  component: Command,
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof Command>

export const Main: Story = {
  render: () => {
    return (
      <Command>
        <Command.Input />
        <Command.Empty>Geen resultaten gevonden...</Command.Empty>
        <Command.List>
          <Command.Group heading="Resultaten">
            <Command.Item>
              <span>Resultaat 1</span>
            </Command.Item>
            <Command.Item>
              <span>Resultaat 2</span>
            </Command.Item>
            <Command.Item>
              <span>Resultaat 3</span>
            </Command.Item>
          </Command.Group>
        </Command.List>
      </Command>
    )
  },
}
