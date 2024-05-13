'use client'

import { SelectLabel as RadixSelectLabel } from '@radix-ui/react-select'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

const SelectLabel = forwardRef<
  React.ElementRef<typeof RadixSelectLabel>,
  React.ComponentPropsWithoutRef<typeof RadixSelectLabel>
>(({ className, children, ...props }, ref) => (
  <RadixSelectLabel ref={ref} className={className} {...props} asChild>
    <Typography as="span" variant="md/bold" className="flex w-full pb-1 pl-1 !text-primary-600">
      {children}
    </Typography>
  </RadixSelectLabel>
))
SelectLabel.displayName = RadixSelectLabel.displayName
export default SelectLabel
