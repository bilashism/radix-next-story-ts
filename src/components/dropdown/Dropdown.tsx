'use client'

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import type React from 'react'
import DropdownContent from './DropdownContent'
import DropdownItem from './DropdownItem'
import DropdownLabel from './DropdownLabel'
import DropdownTrigger from './DropdownTrigger'

export const DropdownGroup = DropdownMenuPrimitive.Group
export const DropdownPortal = DropdownMenuPrimitive.Portal
export const DropdownSub = DropdownMenuPrimitive.Sub
export const DropdownRoot = DropdownMenuPrimitive.Root

const Dropdown: React.FC<DropdownMenuPrimitive.DropdownMenuProps> & {
  Trigger: typeof DropdownTrigger
  Content: typeof DropdownContent
  Item: typeof DropdownItem
  Label: typeof DropdownLabel
  Group: typeof DropdownGroup
  Portal: typeof DropdownPortal
  Sub: typeof DropdownSub
} = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem,
  Label: DropdownLabel,
  Group: DropdownGroup,
  Portal: DropdownPortal,
  Sub: DropdownSub,
})

export default Dropdown
