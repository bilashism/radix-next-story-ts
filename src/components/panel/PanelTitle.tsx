'use client'

import { testId } from '@/utils/testId'
import { DialogTitle } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Heading } from '../heading'
import PanelClose from './PanelClose'

const PanelTitle = forwardRef<React.ElementRef<typeof DialogTitle>, React.ComponentPropsWithoutRef<typeof DialogTitle>>(
  ({ children, ...props }, ref) => (
    <div className="flex items-center justify-between ">
      <DialogTitle asChild ref={ref} {...props}>
        <Heading variant="h2">{children}</Heading>
      </DialogTitle>
      <PanelClose data-cy={testId('panel-close-x')} className="!p-2">
        <X className="stroke-primary-500" />
      </PanelClose>
    </div>
  ),
)
PanelTitle.displayName = DialogTitle.displayName
export default PanelTitle
