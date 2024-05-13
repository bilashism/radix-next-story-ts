import Link, { type LinkProps } from 'next/link'
import React from 'react'

export type InternalLinkProps = LinkProps & {
  children?: React.ReactNode
  className?: string
}

const InternalLink: React.FC<InternalLinkProps> = ({ ...props }) => {
  return <Link {...props} />
}

export default InternalLink
