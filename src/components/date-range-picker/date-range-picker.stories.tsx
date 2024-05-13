import type { Meta, StoryObj } from '@storybook/react'
import { CalendarDays } from 'lucide-react'
import React, { useState } from 'react'
import type { DateRange } from 'react-day-picker'
import DateRangePicker from './date-range-picker'

const meta = {
  title: 'Interface/DateRangePicker',
  component: DateRangePicker,
} satisfies Meta<typeof DateRangePicker>

export default meta
type Story = StoryObj<typeof DateRangePicker>

export const Main: Story = {
  render: () => {
    const [date, setDate] = useState<DateRange>()
    return (
      <DateRangePicker
        startIcon={<CalendarDays className="h-5 w-5 text-accent-orange-600" />}
        fromYear={2024}
        dateRange={date}
        onDateSelect={(date) => {
          setDate(date)
          console.log(date)
        }}
      />
    )
  },
}
