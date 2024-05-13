'use client'

import React from 'react'
import SidebarContent from './SidebarContent'
import SidebarProvider, { type SidebarProviderProps } from './SidebarContext'
import SidebarTitle from './SidebarTitle'
import SidebarTrigger from './SidebarTrigger'

export interface SidebarRootProps extends SidebarProviderProps {
  children: (React.ReactElement<typeof SidebarContent> | React.ReactElement<typeof SidebarTrigger>)[]
}

const SidebarRoot: React.FC<SidebarRootProps> = (props) => {
  return <SidebarProvider {...props} />
}

const Sidebar: React.FC<SidebarRootProps> & {
  Content: typeof SidebarContent
  Title: typeof SidebarTitle
  Trigger: typeof SidebarTrigger
} = Object.assign(SidebarRoot, {
  Content: SidebarContent,
  Title: SidebarTitle,
  Trigger: SidebarTrigger,
})

export { SidebarContent, SidebarRoot, SidebarTitle, SidebarTrigger }
export default Sidebar
