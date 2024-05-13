import { render, screen } from '@testing-library/react'
import React from 'react'
import LogoIBWithTagline from './LogoIBWithTagline'

describe('Logo/IB/LogoIBWithTagline', () => {
  it('renders correctly', () => {
    render(<LogoIBWithTagline data-testid="logo" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly renders the dark mode logo', () => {
    render(<LogoIBWithTagline data-testid="logo" variant="dark" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly passes additional classnames to the logo', () => {
    render(<LogoIBWithTagline data-testid="logo" className="!text-green-500" />)

    expect(screen.getByTestId('logo')).toHaveClass('!text-green-500')
  })
})
