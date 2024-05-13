import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

const TableCell = forwardRef<HTMLTableCellElement, React.TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <Typography
      as="td"
      ref={ref}
      className={classNames('p-4 text-left align-middle [&:has([role=checkbox])]:pr-0', className)}
      {...props}
    >
      {children}
    </Typography>
  ),
)
TableCell.displayName = 'TableCell'
export default TableCell
