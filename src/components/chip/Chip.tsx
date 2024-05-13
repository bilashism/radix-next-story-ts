import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import React, { type FC } from 'react'
import { Typography } from '../typography'
import { BASE_CHIP_STYLES, CHIP_STYLES } from './styles'

export const chipStyles = cva(BASE_CHIP_STYLES, {
  variants: {
    variant: {
      primary: classNames(CHIP_STYLES.primary),
      secondary: classNames(CHIP_STYLES.secondary),
    },
    disabled: { true: 'opacity-50 hover:none active:none focus:none pointer-events-none' },
  },
})

export type ChipStylesProps = VariantProps<typeof chipStyles>
export type ChipVariant = `${NonNullable<ChipStylesProps['variant']>}`

export interface ChipProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This prop is of type string and is used to determine the appearance of the chip.
   * The format of this string consists of the state the chip should be.
   */
  variant: ChipVariant

  /* Additional tailwind class name(s) to apply to the chip.*/
  className?: string

  /*Icon to display on the left side in the chip.*/
  startIcon?: React.ReactNode

  /*Icon to display on the right side in the chip.*/
  endIcon?: React.ReactNode

  disabled?: boolean
}

const Chip: FC<ChipProps> = ({ className, variant, startIcon, endIcon, disabled, children, ...rest }: ChipProps) => {
  return (
    <Typography variant="md/bold" className={classNames(className, chipStyles({ variant, disabled }))} {...rest}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </Typography>
  )
}

Chip.displayName = 'Chip'
export default Chip
