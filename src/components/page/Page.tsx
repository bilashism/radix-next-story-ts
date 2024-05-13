import { classNames } from '@/styles/styling'
import React, { forwardRef } from 'react'
import type { Header } from '../header'

export interface PageProps extends React.ComponentPropsWithoutRef<'main'> {
  /**
   * The header component to render at the top of the page.
   * @type React.ReactElement<typeof Header>
   */
  header?: React.ReactElement<typeof Header>
}

const Page = forwardRef<HTMLDivElement, PageProps>(({ header, className, children, ...rest }, ref) => {
  return (
    <main ref={ref} className={classNames('relative flex h-screen flex-col items-center', className)} {...rest}>
      {header && header}
      {children}
    </main>
  )
})
export default Page
