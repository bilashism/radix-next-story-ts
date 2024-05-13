'use client'

import { Dialog, type DialogProps } from '@radix-ui/react-dialog'
import React from 'react'
import PanelClose from './PanelClose'
import PanelContent from './PanelContent'
import PanelDescription from './PanelDescription'
import PanelFooter from './PanelFooter'
import PanelHeader from './PanelHeader'
import PanelTitle from './PanelTitle'
import PanelTrigger from './PanelTrigger'

const PanelRoot = ({ ...props }: React.ComponentPropsWithoutRef<typeof Dialog>) => <Dialog {...props} />

const Panel: React.FC<DialogProps> & {
  Close: typeof PanelClose
  Content: typeof PanelContent
  Description: typeof PanelDescription
  Footer: typeof PanelFooter
  Header: typeof PanelHeader
  Title: typeof PanelTitle
  Trigger: typeof PanelTrigger
} = Object.assign(PanelRoot, {
  Close: PanelClose,
  Content: PanelContent,
  Description: PanelDescription,
  Footer: PanelFooter,
  Header: PanelHeader,
  Title: PanelTitle,
  Trigger: PanelTrigger,
})

export { PanelContent, PanelDescription, PanelFooter, PanelHeader, PanelRoot, PanelTitle, PanelTrigger }
export default Panel
