import { classNames } from '@/styles/styling'
import { cva, type VariantProps } from 'class-variance-authority'
import { AlertTriangle, CheckCircle2, Info, XCircle } from 'lucide-react'
import React, { type FC } from 'react'
import { Heading } from '../heading'
import { Typography } from '../typography'

export const NotificationStyles = cva('rounded-xl flex justify-between px-4 py-2.5 text-left', {
  variants: {
    variant: {
      success: 'bg-feedback-green-600',
      error: 'bg-feedback-red-600',
      info: 'bg-accent-blue-600',
      warning: 'bg-accent-orange-500',
    },
  },
})

const Icons = {
  success: <CheckCircle2 className="mr-4 w-4 h-4 stroke-white" />,
  error: <XCircle className="mr-4 w-4 h-4 stroke-white" />,
  info: <Info className="mr-4 w-4 h-4 stroke-white" />,
  warning: <AlertTriangle className="mr-4 w-4 h-4 stroke-white" />,
}

export type NotificationStylesProps = VariantProps<typeof NotificationStyles>
export type NotificationVariant = `${NonNullable<NotificationStylesProps['variant']>}`

export interface NotificationProps extends React.ComponentPropsWithoutRef<'div'> {
  /**
   * This prop is of type string and is used to determine the appearance of the Notification.
   * The format of this string consists of the state the Notification should be. There are four options: info, warning, error and success.
   * For example, to set the Notification to be success, the variant prop would be set to "success".
   */
  variant: NotificationVariant
  /**
   * Additional tailwind class name(s) to apply to the Notification.
   */
  className?: string
  /**
   * Header to display in the Notification.
   */
  header?: string
  /**
   * Button to display in the Notification.
   */
  button?: React.ReactNode
}

const Notification: FC<NotificationProps> = ({
  className,
  variant,
  header,
  button,
  children,
  ...rest
}: NotificationProps) => (
  <div
    className={classNames(NotificationStyles({ variant }), `${header ? '!items-start' : '!items-center'}`, className)}
    {...rest}
  >
    <div className="flex">
      {Icons[variant]}
      <div className="flex flex-col space-y-2">
        {header && (
          <Heading variant="h5" className="!text-white">
            {header}
          </Heading>
        )}
        <Typography className="!text-white">{children}</Typography>
      </div>
    </div>
    {button && button}
  </div>
)

Notification.displayName = 'Notification'
export default Notification
