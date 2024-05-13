'use client'

import { testId } from '@/utils/testId'
import { DialogTitle } from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import React, { forwardRef } from 'react'
import { Heading } from '../heading'
import ModalClose from './ModalClose'

const ModalTitle = forwardRef<React.ElementRef<typeof DialogTitle>, React.ComponentPropsWithoutRef<typeof DialogTitle>>(
  ({ children, ...props }, ref) => (
    <div className="flex items-center justify-between ">
      <DialogTitle asChild ref={ref} {...props}>
        <Heading variant="h2">{children}</Heading>
      </DialogTitle>
      <ModalClose data-cy={testId('modal-close-x')} className="!p-2">
        <X className="stroke-primary-500" />
      </ModalClose>
    </div>
  ),
)
ModalTitle.displayName = DialogTitle.displayName
export default ModalTitle
