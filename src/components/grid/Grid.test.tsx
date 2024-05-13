import { render } from '@testing-library/react'
import React from 'react'
import Grid from './Grid'

describe('Grid', () => {
  it('renders with the provided child(ren)', () => {
    const { getByText } = render(<Grid>{['1']}</Grid>)

    expect(getByText('1')).toHaveTextContent('1')
  })

  it('applies correct styling', () => {
    const { getByText } = render(<Grid>{['1']}</Grid>)

    expect(getByText('1')).toHaveClass('grid grid-cols-4 gap-lg')
  })

  it('applies additional className', () => {
    const { getByText } = render(<Grid className="text-center">{['1']}</Grid>)

    expect(getByText('1')).toHaveClass('text-center')
  })
})
