'use client'

import { DialogPortal, type DialogPortalProps } from '@radix-ui/react-dialog'
import React from 'react'

const ModalPortal: React.FC<DialogPortalProps> = ({ children, ...props }) => (
  <DialogPortal {...props}>
    <div className="fixed inset-0 z-50 my-9 flex items-start justify-center overflow-auto xs:items-center">
      {children}
    </div>
  </DialogPortal>
)
ModalPortal.displayName = DialogPortal.displayName
export default ModalPortal
