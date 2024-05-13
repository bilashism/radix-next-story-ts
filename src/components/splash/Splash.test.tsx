import { render, screen } from '@testing-library/react'
import React from 'react'
import Splash from './Splash'

describe('Splash', () => {
  const children = <p>This is some content.</p>
  it('renders the title and content', () => {
    render(<Splash title="Hello, World!">{children}</Splash>)
    expect(screen.getByText('Hello, World!')).toBeInTheDocument()
    expect(screen.getByText('This is some content.')).toBeInTheDocument()
  })

  it('renders the image when provided', () => {
    render(
      <Splash title="Hello, World!" image={<img src="https://via.placeholder.com/150" alt="placeholder" />}>
        {children}
      </Splash>,
    )
    expect(screen.getByAltText('placeholder')).toBeInTheDocument()
  })

  it('applies additional classes when provided', () => {
    render(
      <Splash title="Hello, World!" className="bg-red-500" data-testid="splash">
        {children}
      </Splash>,
    )
    expect(screen.getByTestId('splash')).toHaveClass('bg-red-500')
  })
})
