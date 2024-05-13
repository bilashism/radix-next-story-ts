import type React from 'react'
import ExternalLink, { type ExternalLinkProps } from './External'
import InternalLink, { type InternalLinkProps } from './Internal'

export type LinkProps = {
  Internal: React.FC<InternalLinkProps>
  External: React.FC<ExternalLinkProps>
}

export const Link: LinkProps = { External: ExternalLink, Internal: InternalLink }
