'use client'

import { classNames } from '@/styles/styling'
import { DialogOverlay } from '@radix-ui/react-dialog'
import React, { forwardRef } from 'react'

const ModalOverlay = forwardRef<
  React.ElementRef<typeof DialogOverlay>,
  React.ComponentPropsWithoutRef<typeof DialogOverlay>
>(({ className, ...props }, ref) => (
  <DialogOverlay
    className={classNames(
      'fixed inset-0 z-50 overflow-y-auto bg-overlay backdrop-blur-[2px] transition-all data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn',
      className,
    )}
    {...props}
    ref={ref}
  />
))
ModalOverlay.displayName = DialogOverlay.displayName
export default ModalOverlay
