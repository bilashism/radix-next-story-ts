'use client'

import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu'
import React, { forwardRef } from 'react'
import { Button } from '../button'
import type { ButtonProps } from '../button/Button'

export interface DropdownTriggerProps extends React.ComponentPropsWithoutRef<typeof DropdownMenuTrigger> {
  variant?: ButtonProps['variant']
  startIcon?: ButtonProps['startIcon']
  endIcon?: ButtonProps['endIcon']
}

const DropdownTrigger = forwardRef<React.ElementRef<typeof DropdownMenuTrigger>, DropdownTriggerProps>(
  ({ className, children, variant, startIcon, endIcon, ...props }, ref) => (
    <DropdownMenuTrigger ref={ref} {...props} asChild className={className}>
      <Button variant={variant} startIcon={startIcon} endIcon={endIcon}>
        {children}
      </Button>
    </DropdownMenuTrigger>
  ),
)

export default DropdownTrigger
