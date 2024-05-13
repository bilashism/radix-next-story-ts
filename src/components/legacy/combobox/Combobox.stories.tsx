import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Combobox from './Combobox'

const meta = {
  title: 'Interface/ComboboxLegacy',
  component: Combobox,
} satisfies Meta<typeof Combobox>

export default meta
type Story = StoryObj<typeof Combobox>

export const Main: Story = {
  args: {
    label: (
      <Combobox.Label htmlFor="combox" required>
        Label
      </Combobox.Label>
    ),
    input: <Combobox.Input id="combox" />,
    children: (
      <Combobox.Options>
        <Combobox.Option checkbox value="1">
          Option 1
        </Combobox.Option>
        <Combobox.Option checkbox value="2">
          Option 2
        </Combobox.Option>
        <Combobox.Option checkbox value="3">
          Option 3
        </Combobox.Option>
      </Combobox.Options>
    ),
  },
}
