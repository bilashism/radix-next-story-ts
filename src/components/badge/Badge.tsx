import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { type FC } from 'react'

export const badgeStyles = cva('text-white rounded px-2 py-3px text-sm inline', {
  variants: {
    variant: {
      base: 'bg-primary-600',
      warning: 'bg-accent-orange-400',
      error: 'bg-feedback-red-600',
      success: 'bg-feedback-green-600',
    },
  },
})

export type BadgeStylesProps = VariantProps<typeof badgeStyles>
export type BadgeVariant = `${NonNullable<BadgeStylesProps['variant']>}`

export interface BadgeProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This prop is of type string and is used to determine the appearance of the badge. It has a default value of base.
   * The format of this string consists of the state the badge should be. There are four options: base, warning, error and success.
   * For example, to set the badge to be success, the variant prop would be set to "success".
   */
  variant: BadgeVariant
  /**
   * Additional tailwind class name(s) to apply to the button.
   */
  className?: string
}

const Badge: FC<BadgeProps> = ({ className, variant, children }: BadgeProps) => (
  <div className={classNames(badgeStyles({ variant }), className)}>{children}</div>
)

Badge.displayName = 'Badge'
export default Badge
