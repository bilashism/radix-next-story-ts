import { render } from '@testing-library/react'
import React from 'react'
import { TimePicker } from './TimePicker'

describe('TimePicker', () => {
  it('renders without crashing', () => {
    render(<TimePicker />)
  })

  it('displays initial time values', () => {
    const { getByDisplayValue } = render(<TimePicker />)
    expect(getByDisplayValue('00:00')).toBeInTheDocument()
  })
})
