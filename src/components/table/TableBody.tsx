import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'

const TableBody = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={classNames('[&_tr:last-child]:border-b-2', className)} {...props} />
  ),
)
TableBody.displayName = 'TableBody'
export default TableBody
