import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'

export interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  /**
   * Whether the row should render with hover styles.
   * @default true
   */
  hoverable?: boolean
}

const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(({ className, hoverable = true, ...props }, ref) => (
  <tr
    ref={ref}
    className={classNames(
      'border-b border-primary-200 transition-colors data-[state=selected]:rounded-8 data-[state=selected]:bg-accent-orange-100 data-[state=selected]:text-accent-orange-800 data-[state=selected]:ring data-[state=selected]:ring-accent-orange-600',
      hoverable && HOVER_STYLES,
      className,
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'
export default TableRow
