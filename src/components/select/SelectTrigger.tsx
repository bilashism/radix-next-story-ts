'use client'

import { INPUT_STYLES, ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import { SelectTrigger as RadixSelectTrigger } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import React, { forwardRef } from 'react'
import SelectValue from './SelectValue'

export interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof RadixSelectTrigger> {
  error?: boolean
  disabled?: boolean
}

const SelectTrigger = forwardRef<React.ElementRef<typeof RadixSelectTrigger>, SelectTriggerProps>(
  ({ className, error, disabled, children, ...props }, ref) => (
    <RadixSelectTrigger
      ref={ref}
      aria-label="select-trigger"
      disabled={disabled}
      className={classNames(
        ROOT_INPUT_STYLES,
        error ? `${INPUT_STYLES.error} !text-feedback-red-600 [&>svg]:!stroke-feedback-red-600` : '',
        disabled ? INPUT_STYLES.disabled : '',
        'justify-between gap-4 py-3 px-3.5 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg]:!stroke-accent-orange-500',
        className,
      )}
      {...props}
    >
      <SelectValue placeholder={children} className="placeholder text-md">
        {children}
      </SelectValue>
      <ChevronDown className="!h-4 !w-4 transition-transform duration-150" />
    </RadixSelectTrigger>
  ),
)

SelectTrigger.displayName = RadixSelectTrigger.displayName
export default SelectTrigger
