import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import React, { type FC } from 'react'
import { Heading } from '../heading'
import Typography from '../typography/Typography'

export const alertStyles = cva('rounded-xl border-2 py-2.5 flex justify-between px-4 text-left items-start', {
  variants: {
    variant: {
      success: 'bg-feedback-green-100 border-feedback-green-600',
      error: 'bg-feedback-red-100 border-feedback-red-600',
      info: 'bg-accent-blue-100 border-accent-blue-600',
      warning: 'bg-accent-orange-100 border-accent-orange-600',
    },
  },
})

const Icons = {
  success: <CheckCircle2 className="mr-4 h-4 w-4 !stroke-feedback-green-600" />,
  error: <XCircle className="mr-4 h-4 w-4 !stroke-feedback-red-600" />,
  info: <Info className="mr-4 h-4 w-4 !stroke-accent-blue-600" />,
  warning: <AlertTriangle className="mr-4 h-4 w-4 !stroke-accent-orange-600" />,
}

export type AlertStylesProps = VariantProps<typeof alertStyles>
export type AlertVariant = `${NonNullable<AlertStylesProps['variant']>}`

export interface AlertProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This prop is of type string and is used to determine the appearance of the alert.
   * The format of this string consists of the state the alert should be. There are four options: info, warning, error and success.
   * For example, to set the alert to be success, the variant prop would be set to "success".
   */
  variant: AlertVariant
  /**
   * Additional tailwind class name(s) to apply to the alert.
   */
  className?: string
  /**
   * Header to display in the alert.
   */
  header?: string
  /**
   * Button to display in the alert.
   */
  button?: React.ReactNode
}

const Alert: FC<AlertProps> = ({ className, variant, header, button, children, ...rest }: AlertProps) => (
  <div className={classNames(className, alertStyles({ variant }))} {...rest}>
    <div className={classNames(!!header ? 'items-start' : 'items-center', 'flex')}>
      {Icons[variant]}
      <div className="flex flex-col space-y-2">
        {header && <Heading variant="h5">{header}</Heading>}
        <Typography as="div">{children}</Typography>
      </div>
    </div>
    {button && button}
  </div>
)

Alert.displayName = 'Alert'
export default Alert
