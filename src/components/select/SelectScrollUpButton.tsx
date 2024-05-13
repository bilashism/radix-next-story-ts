'use client'

import { classNames } from '@/styles/styling'
import { SelectScrollUpButton as RadixSelectScrollUpButton } from '@radix-ui/react-select'
import { ChevronUp } from 'lucide-react'
import React, { forwardRef } from 'react'

const SelectScrollUpButton = forwardRef<
  React.ElementRef<typeof RadixSelectScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof RadixSelectScrollUpButton>
>(({ className, ...props }, ref) => (
  <RadixSelectScrollUpButton
    ref={ref}
    className={classNames(
      'flex h-[25px] cursor-default items-center justify-center stroke-accent-orange-500',
      className,
    )}
    {...props}
    asChild
  >
    <ChevronUp />
  </RadixSelectScrollUpButton>
))
SelectScrollUpButton.displayName = RadixSelectScrollUpButton.displayName
export default SelectScrollUpButton
