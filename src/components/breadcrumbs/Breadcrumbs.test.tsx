import { render } from '@testing-library/react'
import React from 'react'
import Breadcrumbs from './Breadcrumbs'

describe('Breadcrumbs', () => {
  const home = '/home'
  const links = [
    { href: '/foo', label: 'Foo' },
    { href: '/bar', label: 'Bar' },
    { href: '/baz', label: 'Baz' },
  ]

  it('should render home icon with link to home', () => {
    const { getByRole } = render(<Breadcrumbs home={home} links={links} />)
    const homeLink = getByRole('link', { name: 'Home' })
    expect(homeLink).toHaveAttribute('href', home)
  })

  it('should render breadcrumbs links with correct href and label', () => {
    const { getByRole } = render(<Breadcrumbs home="/" links={links} />)
    const breadcrumbs = getByRole('navigation')

    expect(breadcrumbs).toBeInTheDocument()

    const linksArray = links.map((link) => link.label)
    const breadcrumbLinks = breadcrumbs.querySelectorAll('a')
    expect(breadcrumbLinks.length).toBe(linksArray.length)

    breadcrumbLinks.forEach((link, index) => {
      if (index === 0) {
        expect(link).toHaveAttribute('href', '/')
        return
      }

      expect(link).toHaveAttribute('href', links.at(index - 1)!.href)
      expect(link).toHaveTextContent(links.at(index - 1)!.label)
    })
  })
})
