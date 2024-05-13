import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import React, { forwardRef } from 'react'
import ListItem from './ListItem'

type Props = {
  /**
   * Children elements of the list. Can only be `ListItem` elements.
   * @see ListItem
   * @type React.ReactElement<typeof ListItem>
   */
  children: React.ReactElement<typeof ListItem>[]
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
}

export type ListProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>
export type ListComponent = <C extends React.ElementType = 'ul'>(props: ListProps<C>) => React.ReactElement | null

// @ts-expect-error - Typings are not correct
const ListRoot: ListComponent = forwardRef(
  <Tag extends React.ElementType = 'ul'>(
    { as, className, children, ...rest }: ListProps<Tag>,
    ref?: PolymorphicRef<Tag>,
  ) => {
    const Component = as || 'ul'

    return (
      <Component className={className} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

const List: ListComponent & {
  Item: typeof ListItem
} = Object.assign(ListRoot, {
  Item: ListItem,
})

export { ListItem, ListRoot }
export default List
