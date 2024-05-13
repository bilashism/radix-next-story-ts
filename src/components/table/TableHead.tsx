import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Heading } from '../heading'

const TableHead = forwardRef<HTMLTableCellElement, React.ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, children, ...props }, ref) => (
    <th
      ref={ref}
      className={classNames(
        'h-10 border-r-2 border-primary-200 px-4 text-left align-middle last:border-none [&:has([role=checkbox])]:pr-0',
        className,
      )}
      {...props}
    >
      <Heading variant="h5" className="!text-primary-600">
        {children}
      </Heading>
    </th>
  ),
)
TableHead.displayName = 'TableHead'
export default TableHead
