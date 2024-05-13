import { render, screen } from '@testing-library/react'
import React from 'react'
import Navbar from './Navbar'

describe('Navbar component', () => {
  it('renders logo and children', () => {
    render(
      <Navbar data-testid="navbar">
        <div data-testid="child">Some child element</div>
      </Navbar>,
    )

    const navbar = screen.getByTestId('navbar')
    const child = screen.getByTestId('child')

    expect(navbar).toBeInTheDocument()
    expect(child).toBeInTheDocument()
  })

  it('applies custom class names', () => {
    render(
      <Navbar className="custom-class" data-testid="navbar">
        <div data-testid="child">Some child element</div>
      </Navbar>,
    )

    const navbar = screen.getByTestId('navbar')

    expect(navbar).toHaveClass('custom-class')
  })
})
