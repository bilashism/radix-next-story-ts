import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import TableBody from './TableBody'
import TableCaption from './TableCaption'
import TableCell from './TableCell'
import TableHead from './TableHead'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

export interface TableProps extends React.ComponentPropsWithoutRef<'table'> {
  /**
   * The position of the table caption.
   * @default 'top'
   * */
  captionPosition?: 'top' | 'bottom'
  /**
   * The title of the table. Can be a string or a React node.
   * @example 'Table Title' or <Heading variant="h2">Table Title</Heading>
   */
  tableTitle?: string | React.ReactNode
}

const TableRoot: React.FC<TableProps> = forwardRef<HTMLTableElement, TableProps>(
  ({ className, captionPosition = 'top', tableTitle, ...props }, ref) => (
    <div className="flex w-full flex-col gap-y-4 overflow-auto">
      {tableTitle && tableTitle}
      <table
        ref={ref}
        className={classNames(
          captionPosition === 'top' ? 'caption-top' : 'caption-bottom',
          'w-full text-sm',
          className,
        )}
        {...props}
      />
    </div>
  ),
)
TableRoot.displayName = 'Table'

const Table: React.FC<TableProps> & {
  Body: typeof TableBody
  Caption: typeof TableCaption
  Cell: typeof TableCell
  Head: typeof TableHead
  Header: typeof TableHeader
  Row: typeof TableRow
} = Object.assign(TableRoot, {
  Body: TableBody,
  Caption: TableCaption,
  Cell: TableCell,
  Head: TableHead,
  Header: TableHeader,
  Row: TableRow,
})

export default Table
export { TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow }
