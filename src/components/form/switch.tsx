'use client'

import { classNames } from '@/styles/styling'
import React, { type ComponentPropsWithoutRef } from 'react'
import { useFormContext } from 'react-hook-form'
import { Switch } from '../switch'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export interface FormSwitchProps extends ComponentPropsWithoutRef<typeof Switch> {
  name: string
  label: string
  className?: string
  disabled?: boolean
  optional?: boolean
  description?: string
  labelAlignment?: 'start' | 'end'
}

const FormSwitch = ({
  name,
  label,
  optional,
  description,
  labelAlignment = 'start',
  className,
  ...rest
}: FormSwitchProps) => {
  const { control } = useFormContext()
  const rightLabelPosition = labelAlignment !== 'start'

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem className={className}>
          <FormLabel
            className={classNames('mr-2 text-primary-900', rightLabelPosition && 'order-2 ml-2 mr-0')}
            optional={optional}
          >
            {label}
          </FormLabel>
          {description && <FormDescription>{description}</FormDescription>}
          <FormControl>
            <Switch
              className="bg-primary-400"
              onCheckedChange={field.onChange}
              checked={field.value as boolean}
              {...rest}
              {...field}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    ></FormField>
  )
}

export default FormSwitch
