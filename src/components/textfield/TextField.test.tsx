import { render } from '@testing-library/react'
import React from 'react'
import TextField from './TextField'

describe('TextField', () => {
  it('renders', () => {
    const { getByPlaceholderText } = render(
      <TextField disabled={false} error={false} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toBeInTheDocument()
  })

  it('renders with the startIcon', () => {
    const { getByText } = render(<TextField error={false} disabled={false} startIcon={<div>icon</div>} />)
    expect(getByText('icon')).toBeInTheDocument()
  })

  it('renders the container div in the error state', () => {
    const { getByPlaceholderText } = render(
      <TextField disabled={false} error={true} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toHaveClass('!text-feedback-red-600')
  })

  it('renders the container div in the disabled state', () => {
    const { getByPlaceholderText } = render(
      <TextField disabled={true} error={false} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toBeDisabled()
  })
})
