import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

export const TableCaption = forwardRef<HTMLTableCaptionElement, React.HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, children, ...props }, ref) => (
    <Typography as="caption" ref={ref} className={classNames('mb-4 text-left text-primary-500', className)} {...props}>
      {children}
    </Typography>
  ),
)
TableCaption.displayName = 'TableCaption'
export default TableCaption
