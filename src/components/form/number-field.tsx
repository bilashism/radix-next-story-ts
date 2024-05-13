'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { type NumberFieldProps } from '../numberfield'
import { TextField } from '../textfield'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export interface FormNumberFieldProps extends NumberFieldProps {
  /**
   * Label is used for the form label
   */
  label?: string
  /**
   * Name is used for react hook form to register the field
   */
  name: string
  /**
   * Description of the field
   */
  description?: string
  /**
   * MaxLength is the maximum number of input digits
   */
  maxLength?: number
}

export function FormNumberField({
  label,
  name,
  description,
  required,
  maxLength = 999,
  ...rest
}: FormNumberFieldProps) {
  const { control, setValue } = useFormContext()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue: string = event.currentTarget.value
    if (inputValue.length > maxLength) return
    const filteredValue: string = inputValue.replace(/[^0-9]/g, '')
    setValue(name, filteredValue)
  }

  return (
    <FormField
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormLabel required={required}>{label}</FormLabel>
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <TextField {...rest} {...field} onChange={handleChange} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormNumberField
