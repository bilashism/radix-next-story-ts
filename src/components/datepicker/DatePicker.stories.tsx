import type { Meta, StoryObj } from '@storybook/react'
import React, { useState } from 'react'
import DatePicker from './DatePicker'

const meta = {
  title: 'Interface/DatePicker',
  component: DatePicker,
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof DatePicker>

export const Main: Story = {
  render: () => {
    const [date, setDate] = useState<Date>(new Date())
    return <DatePicker date={date} onDateSelect={(date) => setDate(date)} fromMonth={0} />
  },
}
