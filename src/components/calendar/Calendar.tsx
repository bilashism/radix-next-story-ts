'use client'

import * as React from 'react'
import { type CaptionProps, DayPicker, useNavigation } from 'react-day-picker'

import { classNames, classNames as cn } from '@/styles/styling'
import { testId } from '@/utils/testId'
import nl from 'date-fns/locale/nl'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button, buttonStyles } from '../button'
import { typographyStyles } from '../typography'
import { Select } from '../select'
import { useMemo } from 'react'
import { generateMonths, generateYears } from './utils'

export type CalendarProps = React.ComponentProps<typeof DayPicker>
interface DatePickerCaptionSelect {
  options: {
    key: string
    value: string
  }[]
  className?: string
  onValueChange: (e: string) => void
  value: string
  dataCy: string
}

const CalendarCaptionSelect = ({
  options = [],
  className,
  onValueChange,
  value,
  dataCy,
  ...props
}: DatePickerCaptionSelect) => {
  return (
    <Select {...props} value={value} onValueChange={onValueChange}>
      <Select.Trigger
        data-cy={`date-picker-caption-${dataCy}-trigger`}
        className={classNames('border-none mx-0 gap-1 px-0', className)}
      />
      <Select.Content>
        {options.map(({ key, value: optionValue }, i) => {
          return (
            <Select.Item key={key} data-cy={`date-picker-caption-${dataCy}-item-${i}`} value={key}>
              {optionValue}
            </Select.Item>
          )
        })}
      </Select.Content>
    </Select>
  )
}

interface CustomCaptionProps extends CaptionProps {
  fromYear?: number
  toYear?: number
}

const CalendarCaption = ({ fromYear, toYear, displayMonth }: CustomCaptionProps) => {
  const { goToMonth, goToDate, nextMonth, previousMonth } = useNavigation()

  const start = fromYear ? new Date(fromYear, 1, 1) : new Date(Date.now())
  const end = toYear ? new Date(toYear, 1, 1) : new Date(start.getFullYear() + 10, 1, 1)

  const months = useMemo(generateMonths, [])
  const years = useMemo(() => generateYears(start, end), [fromYear, toYear])

  const selectMonth = (e: string) => {
    const selectedMonth = new Date(displayMonth)
    selectedMonth.setMonth(Number(e))
    goToMonth(selectedMonth)
  }

  const setMonth = (month: Date | undefined) => {
    if (!month) return
    goToMonth(month)
  }

  const selectYear = (e: string) => {
    const selectedDate = new Date(displayMonth)
    selectedDate.setFullYear(Number(e))
    goToDate(selectedDate)
  }

  return (
    <div className="flex w-full justify-between">
      <Button
        variant="sm/inline"
        disabled={previousMonth ? previousMonth.getFullYear() < start.getFullYear() : false}
        onClick={() => setMonth(previousMonth)}
        startIcon={<ChevronLeft data-cy={testId('button-previous-month')} className="h-5 w-5 text-primary-500" />}
      />
      <div className="flex gap-x-3">
        <CalendarCaptionSelect
          dataCy="month"
          className="justify-end"
          options={months}
          onValueChange={selectMonth}
          value={displayMonth.getMonth().toString()}
        />
        <CalendarCaptionSelect
          dataCy="year"
          className="justify-start"
          options={years}
          onValueChange={selectYear}
          value={displayMonth.getFullYear().toString()}
        />
      </div>
      <Button
        variant="sm/inline"
        disabled={nextMonth ? nextMonth.getFullYear() > end.getFullYear() : false}
        onClick={() => setMonth(nextMonth)}
        startIcon={<ChevronRight data-cy={testId('button-next-month')} className="h-5 w-5 text-primary-500" />}
      />
    </div>
  )
}

export default function Calendar({
  className,
  classNames,
  numberOfMonths = 1,
  showOutsideDays = false,
  fromYear,
  toYear,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      locale={nl}
      showOutsideDays={showOutsideDays}
      className={cn('p-3', className)}
      numberOfMonths={numberOfMonths}
      fromYear={fromYear}
      toYear={toYear}
      classNames={{
        months: 'flex gap-4',
        month: 'space-y-4',
        caption: 'flex justify-center pt-1 relative items-center',
        caption_label: cn(typographyStyles({ size: 'md', weight: 'bold' }), 'capitalize'),
        nav: 'space-x-1 flex items-center',
        nav_button: cn(
          buttonStyles({ variant: 'base', size: 'sm' }),
          'p-2 hover:bg-primary-100 !rounded-8 focus:!ring-0',
        ),
        nav_button_previous: 'absolute left-1',
        nav_button_next: 'absolute right-1',
        table: 'w-full border-collapse space-y-1',
        head_row: 'flex',
        head_cell: 'text-muted-foreground rounded-8 w-9 font-normal text-[0.8rem] capitalize',
        row: 'flex w-full mt-1',
        vhidden: 'hidden',
        cell: 'h-9 w-9 flex items-center justify-center text-md p-0 relative [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-8 last:[&:has([aria-selected])]:rounded-r-8 focus-within:relative focus-within:z-20',
        day: 'h-9 w-9 hover:bg-primary-100 rounded-8 ',
        day_selected:
          'h-9 w-9 rounded-8 bg-accent-orange-100 text-primary border text-opacity-100 border-accent-orange-600 hover:bg-accent-orange-300 focus-visible:ring focus-visible:ring-accent-orange-600',
        day_today: 'font-semibold bg-muted rounded-8',
        day_outside: 'text-muted-foreground text-opacity-50',
        day_disabled: 'text-muted-foreground text-opacity-50',
        day_range_start: 'rounded-none rounded-l-8 !bg-accent-orange-600 text-white',
        day_range_end: 'rounded-none rounded-r-8 !bg-accent-orange-600 text-white',
        day_range_middle: 'aria-selected:bg-accent-orange-100 rounded-none border-none',
        day_hidden: 'hidden hover:!bg-transparent',

        ...classNames,
      }}
      components={{
        DayContent: ({ date }) => (
          <span
            data-cy={testId(
              `date-${date.toLocaleDateString('nl-NL', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
              })}`,
            )}
          >
            {date.getDate()}
          </span>
        ),
        Caption: (props) => <CalendarCaption fromYear={fromYear} toYear={toYear} {...props} />,
        IconLeft: () => <ChevronLeft data-cy={testId('button-previous-month')} className="h-5 w-5 text-primary-500" />,
        IconRight: () => <ChevronRight data-cy={testId('button-next-month')} className="h-5 w-5 text-primary-500" />,
      }}
      {...props}
    />
  )
}
Calendar.displayName = 'Calendar'
