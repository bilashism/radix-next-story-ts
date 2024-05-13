'use client'

import { ROOT_INPUT_STYLES } from '@/styles'
import { classNames } from '@/styles/styling'
import { ChevronDown } from 'lucide-react'
import React from 'react'
import { Badge } from '../badge'
import { Popover } from '../popover'
import { Typography } from '../typography'
import { useCombobox } from './combobox-provider'

export interface ComboboxTriggerProps extends React.ComponentPropsWithoutRef<'button'> {
  numberOfSelectedOptions?: number
  startIcon?: React.ReactNode
}

const ComboboxTrigger = ({
  children,
  className,
  numberOfSelectedOptions,
  startIcon,
  ...rest
}: ComboboxTriggerProps) => {
  const { open } = useCombobox()
  return (
    <Popover.Trigger {...rest} asChild>
      <button
        aria-expanded={open}
        className={classNames(ROOT_INPUT_STYLES, 'pl-4 py-2 group justify-between', className)}
      >
        <span className="flex items-center gap-4 truncate">
          {startIcon && startIcon}
          <Typography as="span" className="truncate">
            {children}
          </Typography>
        </span>
        <span className="flex items-center gap-2 ml-2 mr-4">
          <ChevronDown
            className={classNames(
              'size-4 shrink-0 transition-all text-primary-500 duration-150 group-hover:text-accent-orange-500',
              {
                'rotate-180 text-accent-orange-500': open,
              },
            )}
          />
          {!!numberOfSelectedOptions && (
            <Badge variant="warning" className="rounded-full">
              {numberOfSelectedOptions}
            </Badge>
          )}
        </span>
      </button>
    </Popover.Trigger>
  )
}

export default ComboboxTrigger
