'use client'

import * as React from 'react'

import { ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import dayjs from 'dayjs'
import nl from 'dayjs/locale/nl'
import { CalendarDays } from 'lucide-react'
import type { DateRange, DayPickerProps } from 'react-day-picker'
import { Button } from '../button'
import { Calendar } from '../calendar'
import { Popover } from '../popover'
import { Typography } from '../typography'

dayjs.locale(nl)

export type DateRangePickerProps = DayPickerProps & {
  dateRange?: DateRange
  onDateSelect?: (date: DateRange) => void
  startIcon?: React.ReactNode
}

export default function DateRangePicker({ dateRange, onDateSelect, startIcon, ...props }: DateRangePickerProps) {
  const [open, setOpen] = React.useState(false)

  const from = dateRange?.from ? dayjs(dateRange.from).format('D MMM, YYYY') : ''
  const to = dateRange?.to ? dayjs(dateRange.to).format('D MMM, YYYY') : 'Heden'

  const displayDateRange = `${from} - ${to}`

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <div className="flex items-center gap-2 group/picker">
        <Popover.Trigger asChild>
          <button
            data-cy="date-range-picker"
            className={classNames(
              ROOT_INPUT_STYLES,
              'px-2 py-[13px] flex items-center gap-2 w-full group-hover/picker:text-accent-orange-500 group-hover/picker:border-accent-orange-500 group-hover/picker:ring-0',
              {
                'text-placeholderColor': !from,
              },
            )}
          >
            {startIcon && startIcon}
            <Typography as="span">{from ? displayDateRange : 'Begindatum - Einddatum'}</Typography>
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
        <Calendar mode="range" selected={dateRange} onSelect={onDateSelect} initialFocus {...props} />
      </Popover.Content>
    </Popover>
  )
}
