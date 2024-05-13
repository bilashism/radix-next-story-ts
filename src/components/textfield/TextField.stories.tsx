import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import React from 'react'
import TextField from './TextField'

const meta: Meta<typeof TextField> = {
  title: 'Interface/TextField',
  component: TextField,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof TextField>

export default meta

type Story = StoryObj<typeof TextField>

export const Base: Story = {
  args: {
    startIcon: <X className="mr-3.5" />,
    placeholder: 'Placeholder',
  },
}

export const Error: Story = {
  args: {
    disabled: false,
    error: true,
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
