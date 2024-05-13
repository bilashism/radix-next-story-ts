import React, { forwardRef } from 'react'
import Typography from '../typography/Typography'

export interface LabelSecondaryProps extends React.HTMLProps<HTMLSpanElement> {
  /**
   * Additional styles for the component.
   */
  className?: string
  /**
   * Children elements of the component.
   */
  children: React.ReactNode
}

const LabelSecondary = forwardRef<HTMLSpanElement, LabelSecondaryProps>(({ className, children, ...rest }, ref) => {
  return (
    <Typography {...rest} ref={ref} as="span" variant="sm/regular" className={className}>
      {children}
    </Typography>
  )
})

LabelSecondary.displayName = 'LabelSecondary'
export default LabelSecondary
