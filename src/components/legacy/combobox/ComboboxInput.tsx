'use client'

import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import { type ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export interface ComboboxInputProps extends ExtractProps<typeof HeadlessCombobox.Input> {
  children?: string
  startIcon?: React.ReactNode
  error?: boolean
  disabled?: boolean
  className?: string
  placeholder?: string
  rounded?: boolean
}

const ComboboxInput = forwardRef<HTMLInputElement, ComboboxInputProps>(
  ({ className, startIcon, placeholder, error, disabled, rounded, ...rest }, ref) => {
    return (
      <div
        className={classNames(
          className,
          ROOT_INPUT_STYLES,
          error ? INPUT_STYLES.error : '',
          disabled ? INPUT_STYLES.disabled : '',
          rounded && 'rounded-full',
        )}
      >
        {startIcon && startIcon}
        <HeadlessCombobox.Input
          as="input"
          className={classNames(
            error ? '!text-feedback-red-600' : '',
            'border-none bg-transparent !py-0 text-md placeholder:text-md focus-visible:ring-0',
            BASE_INPUT_STYLES,
          )}
          ref={ref}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          placeholder={placeholder}
          {...rest}
        />
      </div>
    )
  },
)

export default ComboboxInput
