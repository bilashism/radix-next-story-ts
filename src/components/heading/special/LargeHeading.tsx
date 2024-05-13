import { BASE_TYPOGRAPHY_CLASSNAMES } from '@/constants/style'
import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'

export const largeHeadingStyles = cva(classNames(BASE_TYPOGRAPHY_CLASSNAMES, 'text-heading-large'), {
  variants: {
    variant: {
      heavy: 'font-bold',
      light: 'font-thin',
    },
  },
})

type LargeHeadingStyles = VariantProps<typeof largeHeadingStyles>
export type LargeHeadingVariant = Exclude<LargeHeadingStyles['variant'], null | undefined>

export interface LargeHeadingProps extends React.HTMLProps<HTMLHeadingElement> {
  /**
   * This prop is of type string and is used to determine the text appearance of the component. Heavy or light.
   * @required
   */
  variant: Exclude<LargeHeadingStyles['variant'], null | undefined>
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * Children elements of the component.
   */
  children: React.ReactNode
}

const LargeHeading = forwardRef<HTMLHeadingElement, LargeHeadingProps>(
  ({ variant, className = '', children, ...rest }: LargeHeadingProps, ref) => {
    return (
      <h1 {...rest} ref={ref} className={classNames(className, largeHeadingStyles({ variant }))}>
        {children}
      </h1>
    )
  },
)

LargeHeading.displayName = 'LargeHeading'
export default LargeHeading
