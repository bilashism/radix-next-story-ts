'use client'

import { classNames } from '@/styles/styling'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import React, { forwardRef } from 'react'

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  className?: string
}
export interface RadioGroupItemProps extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  className?: string
}

const RadioGroup = forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Root>, RadioGroupProps>(
  ({ className, ...props }, ref) => {
    return <RadioGroupPrimitive.Root className={classNames('grid gap-1', className)} {...props} ref={ref} />
  },
)
RadioGroup.displayName = 'RadioGroup'

const RadioGroupItem = forwardRef<React.ElementRef<typeof RadioGroupPrimitive.Item>, RadioGroupItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={classNames(
          'border-primary text-primary aspect-square h-4 w-4 rounded-full border focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 disabled:grayscale data-[state=checked]:border-accent-orange-600',
          className,
        )}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="relative flex h-full w-full items-center justify-center after:block after:h-2 after:w-2 after:rounded-[50%] after:bg-accent-orange-600 after:content-['']" />
      </RadioGroupPrimitive.Item>
    )
  },
)
RadioGroupItem.displayName = 'RadioGroupItem'

export { RadioGroup, RadioGroupItem }
