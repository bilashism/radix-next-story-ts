import { render, screen } from '@testing-library/react'
import React from 'react'
import NumberField from './NumberField'

describe('Component - NumberField', () => {
  it('renders without crashing', () => {
    render(<NumberField />)
    expect(screen.getByRole('spinbutton')).toBeInTheDocument()
  })
})
