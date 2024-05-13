'use client'

import { INPUT_STYLES } from '@/styles'
import { classNames } from '@/styles/styling'
import { Command as CommandPrimitive } from 'cmdk'
import * as React from 'react'
import type { TextFieldProps } from '../textfield'

interface CommandInputProps
  extends React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>,
    Pick<TextFieldProps, 'error' | 'disabled'> {
  className?: string
}

const CommandRoot = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    ref={ref}
    className={classNames(
      'flex h-full w-full flex-col overflow-hidden rounded-md bg-popover text-popover-foreground',
      className,
    )}
    {...props}
  />
))
CommandRoot.displayName = CommandPrimitive.displayName

const CommandInput = React.forwardRef<React.ElementRef<typeof CommandPrimitive.Input>, CommandInputProps>(
  ({ className, error, disabled, ...props }, ref) => (
    <CommandPrimitive.Input
      ref={ref}
      className={classNames(
        'flex justify-center items-center border-primary-200 bg-white rounded-8 outline-none text-placeholder !ring-0 text-md border text-primary-800 hover:border-accent-orange-500 focus-visible:border-accent-orange-500',
        error && INPUT_STYLES.error,
        disabled && INPUT_STYLES.disabled,
        className,
      )}
      {...props}
    />
  ),
)

CommandInput.displayName = CommandPrimitive.Input.displayName

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    ref={ref}
    className={classNames('max-h-[300px] overflow-y-auto overflow-x-hidden', className)}
    {...props}
  />
))

CommandList.displayName = CommandPrimitive.List.displayName

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    ref={ref}
    className="text-center text-md group-data-[side=top]:pb-4 group-data-[side=bottom]:pt-4 "
    {...props}
  />
))

CommandEmpty.displayName = CommandPrimitive.Empty.displayName

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    ref={ref}
    className={classNames(
      'overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground',
      className,
    )}
    {...props}
  />
))

CommandGroup.displayName = CommandPrimitive.Group.displayName

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator ref={ref} className={classNames('-mx-1 h-px bg-border', className)} {...props} />
))
CommandSeparator.displayName = CommandPrimitive.Separator.displayName

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    ref={ref}
    className={classNames(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className,
    )}
    {...props}
  />
))

CommandItem.displayName = CommandPrimitive.Item.displayName

const CommandShortcut = ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) => {
  return <span className={classNames('ml-auto text-xs tracking-widest text-muted-foreground', className)} {...props} />
}
CommandShortcut.displayName = 'CommandShortcut'

const Command: React.FC<React.ComponentPropsWithRef<typeof CommandRoot>> & {
  Input: typeof CommandInput
  List: typeof CommandList
  Empty: typeof CommandEmpty
  Group: typeof CommandGroup
  Item: typeof CommandItem
} = Object.assign(CommandRoot, {
  Input: CommandInput,
  List: CommandList,
  Empty: CommandEmpty,
  Group: CommandGroup,
  Item: CommandItem,
})

export { CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandRoot, type CommandInputProps }
export default Command
