'use client'

import { Tabs as RadixTabs, type TabsProps } from '@radix-ui/react-tabs'
import { type FC } from 'react'
import TabsContent from './TabsContent'
import TabsList from './TabsList'
import TabsTrigger from './TabsTrigger'

const TabsRoot = RadixTabs

const Tabs: FC<TabsProps> & {
  List: typeof TabsList
  Trigger: typeof TabsTrigger
  Content: typeof TabsContent
} = Object.assign(TabsRoot, {
  List: TabsList,
  Trigger: TabsTrigger,
  Content: TabsContent,
})

export { TabsContent, TabsList, TabsRoot, TabsTrigger }
export default Tabs
