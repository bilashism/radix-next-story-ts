import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import TableRow from './TableRow'

const TableHeader = forwardRef<HTMLTableSectionElement, React.HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, children, ...props }, ref) => (
    <thead ref={ref} className={classNames('border-primary-200 [&_tr]:border-b-2', className)} {...props}>
      <TableRow hoverable={false}>{children}</TableRow>
    </thead>
  ),
)
TableHeader.displayName = 'TableHeader'
export default TableHeader
