'use client'

import { classNames } from '@/styles/styling'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import { Select } from '../select'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export interface FormSelectProps {
  /**
   * Options is used for the form options.
   */
  options: { key: string; value: string }[]
  /**
   * Label is used for the form label
   */
  label: string
  /**
   * Name is used for react hook form to register the field
   */
  name: string
  /**
   * Trigger placeholder text
   */
  triggerPlaceholder: string
  /**
   * Description of the field
   */
  description?: string
  /**
   * Indication if the field is required
   */
  required?: boolean
  /**
   * Indication if the field is optional
   */
  optional?: boolean
  triggerTestId?: string
  triggerClassName?: string
}

export function FormSelect({
  options,
  label,
  name,
  description,
  required,
  optional,
  triggerPlaceholder,
  triggerTestId,
  triggerClassName,
}: FormSelectProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const isInvalid = !!errors[name]

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel required={required} optional={optional}>
            {label}
          </FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
          <Select onValueChange={field.onChange} value={field.value as string}>
            <FormControl>
              <Select.Trigger
                error={isInvalid}
                className={classNames('w-full pl-3', triggerClassName)}
                data-cy={triggerTestId}
              >
                {triggerPlaceholder}
              </Select.Trigger>
            </FormControl>
            <Select.Content>
              {options.length &&
                options.map(({ key, value }) => (
                  <Select.Item key={value} value={key} data-cy={`item-${key}`}>
                    {value}
                  </Select.Item>
                ))}
            </Select.Content>
          </Select>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormSelect
