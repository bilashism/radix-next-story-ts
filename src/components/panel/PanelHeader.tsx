import { classNames } from '@/styles/styling'
import React from 'react'

export const PanelHeader = ({ className, ...props }: React.ComponentPropsWithoutRef<'div'>) => (
  <div className={classNames('flex flex-col space-y-1.5 text-center sm:text-left', className)} {...props} />
)
PanelHeader.displayName = 'PanelHeader'
export default PanelHeader
