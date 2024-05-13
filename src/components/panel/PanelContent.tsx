'use client'

import { classNames } from '@/styles/styling'
import { DialogContent } from '@radix-ui/react-dialog'
import type { VariantProps } from 'class-variance-authority'
import React, { forwardRef } from 'react'
import PanelOverlay from './PanelOverlay'
import PanelPortal from './PanelPortal'
import { panelVariants } from './styles'

export interface PanelContentProps
  extends React.ComponentPropsWithoutRef<typeof DialogContent>,
    VariantProps<typeof panelVariants> {}

const PanelContent = forwardRef<React.ElementRef<typeof DialogContent>, PanelContentProps>(
  ({ position = 'left', size = 'content', className, children, ...props }, ref) => (
    <PanelPortal position={position}>
      <PanelOverlay />
      <DialogContent
        ref={ref}
        id="panel-content"
        className={classNames(panelVariants({ position, size }), 'overflow-auto shadow-300', className)}
        {...props}
        asChild
      >
        <aside>{children}</aside>
      </DialogContent>
    </PanelPortal>
  ),
)

PanelContent.displayName = DialogContent.displayName
export default PanelContent
