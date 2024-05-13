import { classNames } from '@/styles/styling'
import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '@/types'
import React, { forwardRef } from 'react'

interface Props {
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
  /**
   * Children elements of the card.
   */
  children: React.ReactNode
}

export type CardProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, Props>
export type CardComponent = <C extends React.ElementType = 'div'>(props: CardProps<C>) => React.ReactElement | null

// @ts-expect-error - Typings are not correct
const Card: CardComponent = forwardRef(
  <Tag extends React.ElementType = 'div'>(
    { as, className, children, ...rest }: CardProps<Tag>,
    ref?: PolymorphicRef<Tag>,
  ) => {
    const Component = as ?? 'div'

    return (
      <Component className={classNames(className, 'rounded-8 bg-white px-6 py-5 shadow-200')} {...rest} ref={ref}>
        {children}
      </Component>
    )
  },
)

export default Card
