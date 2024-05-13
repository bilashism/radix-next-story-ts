import { render, screen } from '@testing-library/react'
import React from 'react'
import InternalLink from './Internal'

describe('Link.Internal', () => {
  const props = {
    className: 'custom-class',
    children: <span>TestLink</span>,
    href: 'https://example.com',
    'data-testid': 'internal',
  }

  beforeEach(() => {
    render(<InternalLink {...props} />)
  })

  it('renders an internal link', () => {
    expect(screen.getByTestId(props['data-testid'])).toBeInTheDocument()
  })

  it('applies additional classNames', () => {
    expect(screen.getByTestId(props['data-testid'])).toHaveClass(props.className)
  })
})
