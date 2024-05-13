'use client'

import { classNames } from '@/styles/styling'
import { DialogDescription } from '@radix-ui/react-dialog'
import React, { forwardRef } from 'react'

const ModalDescription = forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, children, ...props }, ref) => (
  <DialogDescription ref={ref} className={classNames('py-6', className)} {...props} asChild>
    <div>{children}</div>
  </DialogDescription>
))
ModalDescription.displayName = DialogDescription.displayName
export default ModalDescription
