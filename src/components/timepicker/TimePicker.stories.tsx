import { TimePicker } from '@/components/timepicker/TimePicker'
import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import TimePickerParent from './TimePickerParent'

const meta: Meta<typeof TimePicker> = {
  title: 'Interface/TimePicker',
  component: TimePicker,
} satisfies Meta<typeof TimePicker>

export default meta

type Story = StoryObj<typeof TimePicker>

export const timepicker: Story = {
  render: () => <TimePickerParent />,
}
