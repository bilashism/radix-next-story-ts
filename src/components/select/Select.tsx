'use client'

import { Select as RadixSelect, type SelectProps } from '@radix-ui/react-select'
import type { FC } from 'react'
import SelectContent from './SelectContent'
import SelectGroup from './SelectGroup'
import SelectItem from './SelectItem'
import SelectLabel from './SelectLabel'
import SelectTrigger from './SelectTrigger'

const SelectRoot = RadixSelect

const Select: FC<SelectProps> & {
  Content: typeof SelectContent
  Group: typeof SelectGroup
  Item: typeof SelectItem
  Label: typeof SelectLabel
  Trigger: typeof SelectTrigger
} = Object.assign(SelectRoot, {
  Content: SelectContent,
  Group: SelectGroup,
  Item: SelectItem,
  Label: SelectLabel,
  Trigger: SelectTrigger,
})

export { SelectContent, SelectGroup, SelectItem, SelectLabel, SelectRoot, SelectTrigger }
export default Select
