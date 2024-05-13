'use client'

import dayjs from 'dayjs'
import nl from 'dayjs/locale/nl'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { DatePicker } from '../datepicker'
import { FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

dayjs.locale(nl)

export interface FormDatePickerProps {
  label: string
  name: string
  description?: string
  required?: boolean
  fromYear?: number
}

export function FormDatePicker({ label, name, description, required, fromYear }: FormDatePickerProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          <FormLabel required={required}>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <DatePicker
            date={field.value ? dayjs(field.value as string).toDate() : undefined}
            onDateSelect={(date) => (date ? field.onChange(dayjs(date).format('YYYY-MM-DD')) : field.onChange(''))}
            fromYear={fromYear}
          />
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormDatePicker
