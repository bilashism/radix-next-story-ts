'use client'

import { classNames } from '@/styles/styling'
import { SelectContent as RadixSelectContent, SelectPortal, SelectViewport } from '@radix-ui/react-select'
import React, { forwardRef } from 'react'

const SelectContent = forwardRef<
  React.ElementRef<typeof RadixSelectContent>,
  React.ComponentPropsWithoutRef<typeof RadixSelectContent>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPortal>
    <RadixSelectContent
      ref={ref}
      className={classNames(
        'relative z-50 mt-1 max-h-56 min-w-[8rem] rounded-md border bg-white shadow-100 data-[state=open]:animate-slideUpAndFade',
        className,
      )}
      position={position}
      {...props}
    >
      <SelectViewport
        className={classNames(
          'p-2',
          position === 'popper' &&
            'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]',
        )}
      >
        {children}
      </SelectViewport>
    </RadixSelectContent>
  </SelectPortal>
))
SelectContent.displayName = RadixSelectContent.displayName
export default SelectContent
