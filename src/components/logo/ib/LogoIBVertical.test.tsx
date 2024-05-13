import { render, screen } from '@testing-library/react'
import React from 'react'
import LogoIBVertical from './LogoIBVertical'

describe('Logo/IB/LogoIBVertical', () => {
  it('renders correctly', () => {
    render(<LogoIBVertical data-testid="logo" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly renders the dark mode logo', () => {
    render(<LogoIBVertical data-testid="logo" variant="dark" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly passes additional classnames to the logo', () => {
    render(<LogoIBVertical data-testid="logo" className="!text-green-500" />)

    expect(screen.getByTestId('logo')).toHaveClass('!text-green-500')
  })
})
