'use client'

import { DialogPortal, type DialogPortalProps } from '@radix-ui/react-dialog'
import type { VariantProps } from 'class-variance-authority'
import React from 'react'
import { portalVariants } from './styles'

export interface PanelPortalProps extends DialogPortalProps, VariantProps<typeof portalVariants> {}

const PanelPortal: React.FC<PanelPortalProps> = ({ position, children, ...props }) => (
  <DialogPortal {...props}>
    <div className={portalVariants({ position })}>{children}</div>
  </DialogPortal>
)
PanelPortal.displayName = DialogPortal.displayName
export default PanelPortal
