'use client'

import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

export const DropdownLabel = forwardRef<
  React.ElementRef<typeof DropdownMenuLabel>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuLabel>
>(({ children, ...props }, ref) => (
  <DropdownMenuLabel ref={ref} asChild {...props}>
    <Typography as="h5" variant="md/bold" className="py-1.5 pl-4 text-primary-600">
      {children}
    </Typography>
  </DropdownMenuLabel>
))

DropdownLabel.displayName = DropdownMenuLabel.displayName
export default DropdownLabel
