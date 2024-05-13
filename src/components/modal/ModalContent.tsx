'use client'

import { classNames } from '@/styles/styling'
import { DialogContent } from '@radix-ui/react-dialog'
import React, { forwardRef } from 'react'
import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'

export const MODAL_SIZE = {
  sm: 'max-w-xs', // 320px
  md: 'max-w-[600px]',
  lg: 'max-w-[820px]',
  xl: 'max-w-screen-md', // 1280px
} as const

export interface ModalContentProps extends React.ComponentPropsWithoutRef<typeof DialogContent> {
  /**
   * Size of the modal. Defaults to `md`. Provided sizes are `sm`, `md`, `lg`, and `full`.
   */
  size?: keyof typeof MODAL_SIZE
  fullHeight?: boolean
}

const ModalContent = forwardRef<React.ElementRef<typeof DialogContent>, ModalContentProps>(
  ({ className, size = 'md', fullHeight = false, children, ...props }, ref) => {
    return (
      <ModalPortal>
        <ModalOverlay />
        <DialogContent
          ref={ref}
          id="modal-content"
          className={classNames(
            className,
            fullHeight ? 'h-full' : 'h-fit',
            'no-scrollbar relative z-50 mx-5 w-full gap-4 overflow-y-auto rounded-lg bg-white p-6 py-4 shadow-300 data-[state=open]:animate-fadeIn xs:mx-0 xs:overflow-x-hidden',
            MODAL_SIZE[size],
          )}
          {...props}
        >
          {children}
        </DialogContent>
      </ModalPortal>
    )
  },
)
ModalContent.displayName = DialogContent.displayName
export default ModalContent
