import { render } from '@testing-library/react'
import React from 'react'
import Card from './Card'

describe('Card', () => {
  it('renders with the provided child(ren)', () => {
    const { getByText } = render(<Card>{['1']}</Card>)

    expect(getByText('1')).toHaveTextContent('1')
  })

  it('applies correct styling', () => {
    const { getByText } = render(<Card>{['1']}</Card>)

    expect(getByText('1')).toHaveClass('bg-white shadow-200 px-6 py-5')
  })

  it('applies additional className', () => {
    const { getByText } = render(<Card className="text-center">{['1']}</Card>)

    expect(getByText('1')).toHaveClass('text-center')
  })
})
