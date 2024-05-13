'use client'

import { testId } from '@/utils/testId'
import { DialogClose } from '@radix-ui/react-dialog'
import React, { forwardRef } from 'react'
import { Button } from '../button'

const PanelClose = forwardRef<React.ElementRef<typeof DialogClose>, React.ComponentPropsWithoutRef<typeof DialogClose>>(
  ({ className, children, ...props }, ref) => (
    <DialogClose asChild data-cy={testId('modal-close')} ref={ref} {...props}>
      <Button variant="md/base" className={className}>
        {children}
        <span className="sr-only">Close</span>
      </Button>
    </DialogClose>
  ),
)

PanelClose.displayName = DialogClose.displayName
export default PanelClose
