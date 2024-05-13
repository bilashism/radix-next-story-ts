'use client'

import type React from 'react'
import ComboboxItem from './combobox-item'
import ComboboxItemList from './combobox-item-list'
import type { ComboboxRootProps } from './combobox-root'
import ComboboxRoot from './combobox-root'
import ComboboxTrigger from './combobox-trigger'

const Combobox: React.FC<ComboboxRootProps> & {
  Item: typeof ComboboxItem
  List: typeof ComboboxItemList
  Trigger: typeof ComboboxTrigger
} = Object.assign(ComboboxRoot, {
  Item: ComboboxItem,
  List: ComboboxItemList,
  Trigger: ComboboxTrigger,
})

export default Combobox
