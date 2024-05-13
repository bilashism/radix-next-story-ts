import { render, screen } from '@testing-library/react'
import React from 'react'
import LogoVUM from './LogoVUM'

describe('Logo/IB/LogoVUM', () => {
  it('renders correctly', () => {
    render(<LogoVUM data-testid="logo" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly renders the dark mode logo', () => {
    render(<LogoVUM data-testid="logo" variant="dark" />)

    expect(screen.getByTestId('logo')).toBeInTheDocument()
  })
  it('correctly passes additional classnames to the logo', () => {
    render(<LogoVUM data-testid="logo" className="!text-green-500" />)

    expect(screen.getByTestId('logo')).toHaveClass('!text-green-500')
  })
})
