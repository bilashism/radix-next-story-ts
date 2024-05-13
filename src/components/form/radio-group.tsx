'use client'

import { testId } from '@/utils/testId'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { RadioGroup, RadioGroupItem } from '../radio'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export type FormRadioGroupItem = {
  value: string
  key: string
}

export interface FormRadioGroupProps {
  values: FormRadioGroupItem[]
  label: string
  name: string
  description?: string
  required?: boolean
}

export function FormRadioGroup({ values, label, name, required, description }: FormRadioGroupProps) {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel required={required}>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <RadioGroup onValueChange={field.onChange} defaultValue={field.value as string} className="flex flex-col">
              {values.map(({ value, key }) => (
                <FormItem key={key} className="flex items-center space-x-3 space-y-0">
                  <FormControl>
                    <RadioGroupItem value={key} data-cy={testId(`radio-item-${value}`)} />
                  </FormControl>
                  <FormLabel variant="md/regular">{value}</FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
export default FormRadioGroup
