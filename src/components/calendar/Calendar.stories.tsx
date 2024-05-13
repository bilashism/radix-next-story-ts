import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import Calendar from './Calendar'

const meta = {
  title: 'Interface/Calendar',
  component: Calendar,
} satisfies Meta<typeof Calendar>

export default meta
type Story = StoryObj<typeof Calendar>

export const Primary: Story = {
  render: () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date())

    return (
      <div className="w-fit">
        <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
      </div>
    )
  },
}
