import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import { Typography } from '../typography'

export type LabelSize = 'sm' | 'md' | 'lg' | 'xl'
export type LabelWeight = 'italic' | 'regular' | 'semibold' | 'bold'
export type LabelVariant = `${NonNullable<LabelSize>}/${NonNullable<LabelWeight>}`

export interface LabelProps extends React.ComponentPropsWithoutRef<'label'> {
  /**
   * This prop is of type string and is used to determine the text appearance of the component. It has a default value of medium/normal.
   * The format of this string should be size/weight, where size is one of sm, md, lg or xl and weight is one of italic, regular or bold.
   * For example, to set the size to medium and the weight to bold, the variant prop would be set to "md/bold".
   */
  variant?: LabelVariant
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * If true, the label is displayed as required.
   * @default false
   */
  required?: boolean
  /**
   * If true, the label is displayed as optional.
   * @default false
   */
  optional?: boolean
}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ variant, htmlFor, className, children, required = false, optional = false, ...rest }: LabelProps, ref) => {
    return (
      <Typography
        {...rest}
        as="label"
        htmlFor={htmlFor}
        ref={ref}
        variant={variant}
        className={classNames('flex', className)}
      >
        {children}
        {required && <span className="ml-1 text-accent-orange-600">*</span>}
        {optional && <Typography className="ml-1 !text-primary-400">Optioneel</Typography>}
      </Typography>
    )
  },
)

Label.displayName = 'Label'
export default Label
