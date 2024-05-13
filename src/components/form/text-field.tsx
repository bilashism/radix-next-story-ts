'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'

import { TextField, type TextFieldProps } from '../textfield'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export interface FormTextFieldProps extends TextFieldProps {
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
   * Indication if the field is optional
   */
  optional?: boolean
  /**
   * Indication if the field is required
   */
  required?: boolean
}

export function FormTextField({ label, name, description, required, optional, ...rest }: FormTextFieldProps) {
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
          <FormControl>
            <TextField {...rest} {...field} error={isInvalid} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormTextField
