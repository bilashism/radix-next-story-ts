import { classNames } from '@/styles/styling'
import { DialogDescription } from '@radix-ui/react-dialog'
import React, { forwardRef } from 'react'

const PanelDescription = forwardRef<
  React.ElementRef<typeof DialogDescription>,
  React.ComponentPropsWithoutRef<typeof DialogDescription>
>(({ className, children, ...props }, ref) => (
  <DialogDescription ref={ref} className={classNames('p-6', className)} {...props} asChild>
    <div>{children}</div>
  </DialogDescription>
))
PanelDescription.displayName = DialogDescription.displayName
export default PanelDescription
