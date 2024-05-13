'use client'

import { Dialog, DialogTrigger as ModalTrigger, type DialogProps } from '@radix-ui/react-dialog'
import React from 'react'
import ModalClose from './ModalClose'
import ModalContent from './ModalContent'
import ModalDescription from './ModalDescription'
import ModalFooter from './ModalFooter'
import ModalHeader from './ModalHeader'
import ModalOverlay from './ModalOverlay'
import ModalPortal from './ModalPortal'
import ModalTitle from './ModalTitle'

const ModalRoot = ({ ...props }: React.ComponentPropsWithoutRef<typeof Dialog>) => <Dialog {...props} />

const Modal: React.FC<DialogProps> & {
  Close: typeof ModalClose
  Content: typeof ModalContent
  Description: typeof ModalDescription
  Footer: typeof ModalFooter
  Header: typeof ModalHeader
  Overlay: typeof ModalOverlay
  Portal: typeof ModalPortal
  Title: typeof ModalTitle
  Trigger: typeof ModalTrigger
} = Object.assign(ModalRoot, {
  Close: ModalClose,
  Content: ModalContent,
  Description: ModalDescription,
  Footer: ModalFooter,
  Header: ModalHeader,
  Overlay: ModalOverlay,
  Portal: ModalPortal,
  Title: ModalTitle,
  Trigger: ModalTrigger,
})

export { ModalClose, ModalContent, ModalDescription, ModalFooter, ModalHeader, ModalRoot, ModalTitle, ModalTrigger }
export default Modal
