'use client'

import { BASE_INPUT_STYLES, INPUT_STYLES, ROOT_INPUT_STYLES } from '@/styles/input'
import { classNames } from '@/styles/styling'
import { type LucideIcon } from 'lucide-react'
import * as React from 'react'
import { forwardRef, type ComponentPropsWithoutRef, type KeyboardEvent } from 'react'
import { Command } from '../command'

interface TextSearchInputProps extends ComponentPropsWithoutRef<typeof Command.Input> {
  startIcon?: LucideIcon
  error?: boolean
  disabled?: boolean
}

const TextSearchFieldInput = forwardRef<React.ElementRef<typeof Command.Input>, TextSearchInputProps>(
  ({ className, startIcon, error, disabled, ...props }, ref) => {
    const StartIcon = startIcon

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
      if (!['Escape', 'Enter', 'Tab'].includes(e.code)) {
        return
      }
      ;(document.activeElement as HTMLInputElement)?.blur()
    }

    return (
      <div
        ref={ref}
        className={classNames(
          ROOT_INPUT_STYLES,
          'px-4',
          error && INPUT_STYLES.error,
          disabled && INPUT_STYLES.disabled,
          className,
        )}
        onKeyDown={handleKeyDown}
        cmdk-input-wrapper=""
      >
        {StartIcon && <StartIcon className="w-4 h-4 stroke-primary-400" />}
        <Command.Input ref={ref} className={classNames(BASE_INPUT_STYLES)} {...props} />
      </div>
    )
  },
)

TextSearchFieldInput.displayName = 'TextSearchFieldInput'
export default TextSearchFieldInput
