'use client'

import { classNames } from '@/styles/styling'
import * as React from 'react'
import {
  createContext,
  forwardRef,
  useState,
  type ComponentPropsWithoutRef,
  type Dispatch,
  type ElementRef,
  type SetStateAction,
} from 'react'
import { Command } from '../command'
import TextSearchFieldInput from './TextSearchFieldInput'
import TextSearchFieldList from './TextSearchFieldList'
import TextSearchFieldListEmpty from './TextSearchFieldListEmpty'
import TextSearchFieldListItem from './TextSearchFieldListItem'

interface TextSearchFieldRootProps extends ComponentPropsWithoutRef<typeof Command> {}

type TextSearchFieldContextType = { open: boolean; setOpen?: Dispatch<SetStateAction<boolean>> }

const TextSearchFieldContext = createContext<TextSearchFieldContextType>({ open: false })

const TextSearchFieldRoot = forwardRef<ElementRef<typeof Command>, TextSearchFieldRootProps>(
  ({ children, className, ...props }, ref) => {
    const [open, setOpen] = useState(false)

    const handleBlur = () => setOpen(false)

    return (
      <TextSearchFieldContext.Provider value={{ open, setOpen }}>
        <Command
          ref={ref}
          {...props}
          className={classNames('overflow-visible', className)}
          onFocus={() => setOpen(true)}
          onBlur={handleBlur}
        >
          {children}
        </Command>
      </TextSearchFieldContext.Provider>
    )
  },
)

const TextSearchField: React.FC<TextSearchFieldRootProps> & {
  Input: typeof TextSearchFieldInput
  List: typeof TextSearchFieldList
  ListItem: typeof TextSearchFieldListItem
  ListEmpty: typeof TextSearchFieldListEmpty
} = Object.assign(TextSearchFieldRoot, {
  Input: TextSearchFieldInput,
  List: TextSearchFieldList,
  ListItem: TextSearchFieldListItem,
  ListEmpty: TextSearchFieldListEmpty,
})

export default TextSearchField
export {
  TextSearchFieldContext,
  TextSearchFieldInput,
  TextSearchFieldList,
  TextSearchFieldListEmpty,
  TextSearchFieldListItem,
  TextSearchFieldRootProps,
}
