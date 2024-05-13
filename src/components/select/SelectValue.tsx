'use client'

import { classNames } from '@/styles/styling'
import { SelectValue as RadixSelectValue } from '@radix-ui/react-select'
import React, { forwardRef } from 'react'

const SelectValue = forwardRef<
  React.ElementRef<typeof RadixSelectValue>,
  React.ComponentPropsWithoutRef<typeof RadixSelectValue>
>(({ className, children, ...rest }, ref) => (
  <RadixSelectValue ref={ref} className={classNames('flex flex-col gap-y-1 text-md', className)} {...rest}>
    {children}
  </RadixSelectValue>
))
SelectValue.displayName = RadixSelectValue.displayName
export default SelectValue
