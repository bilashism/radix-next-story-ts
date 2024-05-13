'use client'

import { classNames } from '@/styles/styling'
import { SelectGroup as RadixSelectGroup } from '@radix-ui/react-select'
import React, { forwardRef } from 'react'

const SelectGroup = forwardRef<
  React.ElementRef<typeof RadixSelectGroup>,
  React.ComponentPropsWithoutRef<typeof RadixSelectGroup>
>(({ className, children, ...rest }, ref) => (
  <RadixSelectGroup ref={ref} className={classNames('flex flex-col gap-y-1', className)} {...rest}>
    {children}
  </RadixSelectGroup>
))
SelectGroup.displayName = RadixSelectGroup.displayName
export default SelectGroup
