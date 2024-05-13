'use client'

import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import { DropdownMenuItem } from '@radix-ui/react-dropdown-menu'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

export const DropdownItem = forwardRef<
  React.ElementRef<typeof DropdownMenuItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuItem> & {
    inset?: boolean
  }
>(({ className, children, inset, ...props }, ref) => (
  <DropdownMenuItem
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-8 py-1.5 pl-6 outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[highlighted]:ring-2 data-[highlighted]:ring-accent-orange-600',
      HOVER_STYLES,
      inset && 'pl-10',
      className,
    )}
    asChild
    {...props}
  >
    <Typography>{children}</Typography>
  </DropdownMenuItem>
))

DropdownItem.displayName = DropdownMenuItem.displayName
export default DropdownItem
