'use client'

import React from 'react'
import { useFormContext } from 'react-hook-form'
import { TextArea, type TextAreaProps } from '../textarea'
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './form'

export interface FormTextAreaProps extends TextAreaProps {
  /**
   * Label is used for the form label
   */
  label: string
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
}

export function FormTextArea({ label, name, description, required, optional, ...rest }: FormTextAreaProps) {
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
          <FormDescription>{description}</FormDescription>
          <FormControl>
            <TextArea
              {...rest}
              {...field}
              error={isInvalid}
              className="placeholder flex w-full items-center justify-center rounded-8 border border-primary-200 bg-white text-md text-primary-800 outline-none focus-within:border-accent-orange-500 focus-within:!ring-accent-orange-500 hover:border-accent-orange-500 active:ring-accent-orange-500"
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default FormTextArea
