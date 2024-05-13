'use client'

import { classNames } from '@/styles/styling'
import { SelectScrollDownButton as RadixSelectScrollDownButton } from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import React, { forwardRef } from 'react'

const SelectScrollDownButton = forwardRef<
  React.ElementRef<typeof RadixSelectScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof RadixSelectScrollDownButton>
>(({ className, ...props }, ref) => (
  <RadixSelectScrollDownButton
    ref={ref}
    className={classNames(
      'flex h-[25px] cursor-default items-center justify-center stroke-accent-orange-500',
      className,
    )}
    {...props}
    asChild
  >
    <ChevronDown />
  </RadixSelectScrollDownButton>
))
SelectScrollDownButton.displayName = RadixSelectScrollDownButton.displayName
export default SelectScrollDownButton
