'use client'

import { DropdownMenuGroup } from '@radix-ui/react-dropdown-menu'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

const DropdownGroup = forwardRef<
  React.ElementRef<typeof DropdownMenuGroup>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuGroup>
>(({ children, ...props }, ref) => (
  <DropdownMenuGroup ref={ref} asChild {...props}>
    <Typography>{children}</Typography>
  </DropdownMenuGroup>
))
DropdownGroup.displayName = DropdownMenuGroup.displayName
export default DropdownGroup
