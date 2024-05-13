'use client'

import Label, { type LabelProps } from '@/components/label/Label'
import { classNames } from '@/styles/styling'
import type { ExtractProps } from '@/types'
import { Combobox as HeadlessCombobox } from '@headlessui/react'
import React, { forwardRef } from 'react'

export interface ComboboxLabelProps extends ExtractProps<typeof HeadlessCombobox.Label> {
  htmlFor: LabelProps['htmlFor']
  variant?: LabelProps['variant']
  className?: string
  required?: LabelProps['required']
  optional?: LabelProps['optional']
}

const ComboboxLabel = forwardRef<React.ElementRef<typeof Label>, ComboboxLabelProps>(
  ({ htmlFor, className, variant = 'md/regular', required = false, optional = false, ...rest }, ref) => {
    return (
      <HeadlessCombobox.Label
        ref={ref}
        {...rest}
        as={Label}
        htmlFor={htmlFor}
        variant={variant}
        required={required}
        optional={optional}
        className={classNames('!text-label text-primary-600', className)}
      />
    )
  },
)

export default ComboboxLabel
