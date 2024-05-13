import { classNames } from '@/styles/styling'
import React from 'react'

interface PanelFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  footerClassName?: string
}

const PanelFooter = ({ footerClassName, className, children, ...props }: PanelFooterProps) => {
  return (
    <div className={footerClassName}>
      <hr className="scale-110 border-primary-200 pt-4" />
      <div className={classNames('flex items-center justify-end gap-2', className)} {...props}>
        {children}
      </div>
    </div>
  )
}
PanelFooter.displayName = 'PanelFooter'
export default PanelFooter
