'use client'

import { classNames } from '@/styles/styling'
import { Progress, ProgressIndicator } from '@radix-ui/react-progress'
import React, { forwardRef } from 'react'
import { Label } from '../label'
import { Typography } from '../typography'
import { BASE_PROGRESSBAR_STYLES, PROGRESSBAR_INDICATOR_STYLES, PROGRESSBAR_TEXT_STYLES } from './styles'

export type ProgressBarVariant = 'primary' | 'inverted'
export interface ProgressBarProps extends React.ComponentPropsWithoutRef<typeof Progress> {
  /**
   * Progress bar variant. Can be either primary or inverted.
   * Inverted should only be used in case of a dark background.
   * @Optional
   * @default 'primary'
   */
  variant?: ProgressBarVariant

  /**
   * Optional description for the progress bar.
   * @Optional
   */
  description?: string
  /**
   * Whether to show a percentage indicator.
   * @Optional
   * @default false
   */
  indicator?: boolean
  /**
   * Label for the progress bar.
   * @Optional
   */
  label?: string
}

const ProgressBar = forwardRef<React.ElementRef<typeof Progress>, ProgressBarProps>(
  ({ className, description, label, indicator = false, value, variant = 'primary', children, ...props }, ref) => {
    return (
      <div className={classNames(indicator || !!description ? '' : 'flex flex-col gap-y-[6px]', className)}>
        <Label htmlFor="" className={variant === 'primary' ? '' : '!text-white'}>
          {label}
        </Label>
        {!!description && (
          <Typography variant="sm/regular" className={PROGRESSBAR_TEXT_STYLES[variant]}>
            {description}
          </Typography>
        )}
        <div className="flex flex-1 items-center justify-between">
          <Progress
            aria-label={label}
            ref={ref}
            className={classNames('relative h-1 w-full overflow-hidden rounded-full', BASE_PROGRESSBAR_STYLES[variant])}
            {...props}
          >
            <ProgressIndicator
              style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
              className={classNames(
                'h-full w-full flex-1 bg-accent-orange-500 transition-all ease-in-out',
                PROGRESSBAR_INDICATOR_STYLES[variant],
              )}
            />
          </Progress>
          {indicator && (
            <Typography variant="sm/regular" className={classNames('w-12 text-end', PROGRESSBAR_TEXT_STYLES[variant])}>
              {value}%
            </Typography>
          )}
        </div>
        {children}
      </div>
    )
  },
)

ProgressBar.displayName = Progress.displayName
export default ProgressBar
