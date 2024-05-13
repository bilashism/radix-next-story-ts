import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import MultiSelect from './MultiSelect'

const meta = {
  title: 'Interface/Select',
  component: MultiSelect,
} satisfies Meta<typeof MultiSelect>

export default meta
type Story = StoryObj<typeof MultiSelect>

export const Multi: Story = {
  name: 'Multi Select',
  args: {
    label: 'Multiselect',
    children: (
      <MultiSelect.Options>
        <MultiSelect.Option value="1" checkbox>
          Option 1
        </MultiSelect.Option>
        <MultiSelect.Option value="2" checkbox>
          Option 2
        </MultiSelect.Option>
        <MultiSelect.Option value="3" checkbox>
          Option 3
        </MultiSelect.Option>
      </MultiSelect.Options>
    ),
    className: 'w-full',
    triggerClassName: 'rounded-full',
  },
}
