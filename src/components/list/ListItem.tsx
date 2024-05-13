import { HOVER_STYLES } from '@/styles/hover'
import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

export interface ListItemProps extends React.ComponentPropsWithoutRef<'li'> {
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
  /**
   * Children elements of the card.
   */
  children: React.ReactNode
}

const ListItem = forwardRef<HTMLLIElement, ListItemProps>(({ className, children, ...rest }: ListItemProps, ref) => {
  return (
    <Typography
      as="li"
      ref={ref}
      className={classNames('hover:ring-2 hover:ring-accent-orange-600', HOVER_STYLES, className)}
      {...rest}
    >
      {children}
    </Typography>
  )
})

ListItem.displayName = 'ListItem'
export default ListItem
