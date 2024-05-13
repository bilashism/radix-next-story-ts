import { render, screen } from '@testing-library/react'
import React from 'react'
import LogoIB from './LogoIB'

describe('Logo/IB/LogoIB', () => {
  it('renders correctly', () => {
    render(<LogoIB data-testid="logo" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly renders the dark mode logo', () => {
    render(<LogoIB data-testid="logo" variant="dark" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly passes additional classnames to the logo', () => {
    render(<LogoIB data-testid="logo" className="!text-green-500" />)

    expect(screen.getByTestId('logo')).toHaveClass('!text-green-500')
  })
})
