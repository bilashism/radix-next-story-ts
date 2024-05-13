'use client'

import Label, { type LabelProps } from '@/components/label/Label'
import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Listbox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export interface MultiSelectLabelProps extends ExtractProps<typeof Listbox.Label> {
  htmlFor: LabelProps['htmlFor']
  variant?: LabelProps['variant']
  className?: string
  required?: LabelProps['required']
  optional?: LabelProps['optional']
}

const MultiSelectLabel = forwardRef<React.ElementRef<typeof Label>, MultiSelectLabelProps>(
  ({ htmlFor, className, variant = 'md/regular', required = false, optional = false, ...rest }, ref) => {
    return (
      <Listbox.Label
        ref={ref}
        {...rest}
        as={Label}
        htmlFor={htmlFor}
        variant={variant}
        required={required}
        optional={optional}
        className={classNames('mb-1 !text-label text-primary-600', className)}
      />
    )
  },
)
export default MultiSelectLabel
