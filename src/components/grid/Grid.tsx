import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'

export interface GridProps extends React.ComponentProps<'div'> {
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
  /**
   * Children to place into the grid.
   * The grid displays elements in up to 12 columns.
   * If more than 12 elements are provided, they will move to the next row.
   * Provide an Array with elements to place into the grid.
   */
  children: React.ReactNode
}

const Grid = forwardRef<HTMLDivElement, GridProps>(({ className, children, ...rest }: GridProps, ref) => {
  return (
    <div
      ref={ref}
      className={classNames('grid grid-cols-4 gap-lg 2xs:grid-cols-8 xs:grid-cols-12', className)}
      {...rest}
    >
      {children}
    </div>
  )
})

Grid.displayName = 'Grid'
export default Grid
