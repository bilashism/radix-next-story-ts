import { classNames } from '@/styles/styling'
import React from 'react'

export interface ExternalLinkProps extends React.ComponentPropsWithoutRef<'a'> {
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
}

const ExternalLink: React.FC<ExternalLinkProps> = ({
  target = '_blank',
  children,
  rel = 'noopener noreferrer',
  className,
  startIcon,
  endIcon,
  ...rest
}) => {
  return (
    <a target={target} rel={rel} className={classNames('whitespace-nowrap', className)} {...rest}>
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </a>
  )
}
export default ExternalLink
