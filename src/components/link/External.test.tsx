import { render, screen } from '@testing-library/react'
import React from 'react'
import ExternalLink from './External'

describe('Link.External', () => {
  const props = {
    className: 'custom-class',
    children: <span>TestLink</span>,
    href: 'https://example.com',
    startIcon: <span data-testid="starticon">startIcon</span>,
    endIcon: <span data-testid="endicon">endIcon</span>,
    'data-testid': 'external',
  }

  beforeEach(() => {
    render(<ExternalLink {...props} />)
  })

  it('renders an external link', () => {
    expect(screen.getByTestId(props['data-testid'])).toBeInTheDocument()
  })

  it('applies additional classNames', () => {
    expect(screen.getByTestId(props['data-testid'])).toHaveClass(props.className)
  })

  it('renders the startIcon', () => {
    expect(screen.getByTestId('starticon')).toHaveTextContent('startIcon')
  })

  it('renders the endIcon', () => {
    expect(screen.getByTestId('endicon')).toHaveTextContent('endIcon')
  })
})
