import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Checkbox from './Checkbox'

describe('Checkbox', () => {
  it('renders the checkbox and label correctly', () => {
    const label = 'Test Checkbox'
    render(<Checkbox />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement

    expect(checkbox).toBeInTheDocument()
    expect(checkbox.checked).toBe(false)
    expect(checkbox.disabled).toBe(false)
  })

  it('triggers onChange event when clicked', () => {
    const label = 'Test Checkbox'
    const handleChange = jest.fn()
    render(<Checkbox onChange={handleChange} />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement
    fireEvent.click(checkbox)

    expect(handleChange).toHaveBeenCalledTimes(1)
    expect(checkbox.checked).toBe(true)
  })

  it('disables the checkbox when disabled prop is true', () => {
    const label = 'Test Checkbox'
    render(<Checkbox disabled />)

    const checkbox = screen.getByRole('checkbox') as HTMLInputElement

    expect(checkbox.disabled).toBe(true)
  })
})
