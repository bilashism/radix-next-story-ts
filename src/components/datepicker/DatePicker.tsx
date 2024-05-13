'use client'

import * as React from 'react'

import { ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import { CalendarDays } from 'lucide-react'
import type { DayPickerProps } from 'react-day-picker'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover } from '../popover'
import { Typography } from '../typography'

export type DatePickerProps = DayPickerProps & {
  date?: Date | string
  onDateSelect?: (date: Date) => void
}

export default function DatePicker({ date, onDateSelect, ...props }: DatePickerProps) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2 group/picker">
        <Popover.Trigger asChild>
          <button
            className={classNames(
              ROOT_INPUT_STYLES,
              'px-2 py-4 w-full group-hover/picker:text-accent-orange-500 group-hover/picker:border-accent-orange-500 group-hover/picker:ring-0',
              {
                'text-muted-foreground': !date,
              },
            )}
          >
            {date ? (
              typeof date === 'string' ? (
                date
              ) : (
                date.toLocaleDateString('nl-NL', { year: 'numeric', month: 'long', day: 'numeric' })
              )
            ) : (
              <Typography as="span">Kies een datum</Typography>
            )}
          </button>
        </Popover.Trigger>
        <Button
          type="button"
          variant="sm/secondary"
          className="!p-2.5 !rounded-full"
          onClick={() => setOpen((prev) => !prev)}
          startIcon={<CalendarDays className="h-5 w-5 text-accent-orange-600" />}
        />
      </div>

      <Popover.Content className="w-auto p-0">
        {/* @ts-expect-error - React Day Picker typing is giving wrong hints */}
        <Calendar mode="single" selected={date} onSelect={(date) => onDateSelect?.(date)} initialFocus {...props} />
      </Popover.Content>
    </Popover>
  )
}
