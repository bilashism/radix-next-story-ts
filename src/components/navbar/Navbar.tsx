import { classNames } from '@/styles/styling'
import React from 'react'
import { Link } from '../link'
import LogoIB from '../logo/ib/LogoIB'

const Navbar: React.FC<React.ComponentPropsWithoutRef<'nav'>> = ({ className, children, ...rest }) => {
  return (
    <header className={classNames('z-20 flex w-full items-center bg-primary-800 py-3 pl-6 pr-4', className)} {...rest}>
      <Link.Internal href="/">
        <LogoIB variant="dark" className="h-8" />
      </Link.Internal>
      {children}
    </header>
  )
}
export default Navbar
