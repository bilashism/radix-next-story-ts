'use client'

import { classNames } from '@/styles/styling'
import { type ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox } from '@headlessui/react'
import { ChevronDown } from 'lucide-react'
import React, { forwardRef } from 'react'

export interface ComboboxButtonProps extends ExtractProps<typeof HeadlessCombobox.Button> {
  className?: string
  iconClassName?: string
}

const ComboboxButton = forwardRef<React.ElementRef<typeof HeadlessCombobox.Button>, ComboboxButtonProps>(
  ({ className, iconClassName, ...rest }, ref) => {
    return (
      <HeadlessCombobox.Button
        className={classNames('group/button absolute inset-y-0 right-0 flex items-center pr-2', className)}
        ref={ref}
        {...rest}
      >
        <ChevronDown
          className={classNames('!h-5 !w-5 transition-transform duration-150', iconClassName)}
          aria-hidden="true"
        />
      </HeadlessCombobox.Button>
    )
  },
)

export default ComboboxButton
