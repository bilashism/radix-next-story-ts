'use client'

import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import { SelectItem as RadixSelectItem, SelectItemText } from '@radix-ui/react-select'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

const SelectItem = forwardRef<
  React.ElementRef<typeof RadixSelectItem>,
  React.ComponentPropsWithoutRef<typeof RadixSelectItem>
>(({ className, children, ...props }, ref) => (
  <RadixSelectItem
    ref={ref}
    className={classNames(
      'group w-full cursor-default select-none border-b border-primary-200 px-4 py-[6px] outline-none last:border-b-0 hover:rounded-8 data-[disabled]:pointer-events-none data-[state=checked]:rounded-8 data-[state=checked]:bg-accent-orange-100 data-[state=checked]:!text-primary-900 data-[disabled]:opacity-50 data-[state=checked]:ring-2 data-[state=checked]:ring-accent-orange-600',
      HOVER_STYLES,
      className,
    )}
    {...props}
  >
    <SelectItemText asChild>
      <Typography as="span" className="text-primary-900 group-hover:text-accent-orange-800">
        {children}
      </Typography>
    </SelectItemText>
  </RadixSelectItem>
))
SelectItem.displayName = RadixSelectItem.displayName
export default SelectItem
