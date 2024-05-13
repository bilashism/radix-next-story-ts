import { render } from '@testing-library/react'
import React from 'react'
import TextArea from './TextArea'

describe('TextArea', () => {
  it('renders', () => {
    const { getByPlaceholderText } = render(
      <TextArea disabled={false} error={false} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toBeInTheDocument()
  })

  it('renders the container div in the error state', () => {
    const { getByPlaceholderText } = render(
      <TextArea disabled={false} error={true} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toHaveClass('!border-feedback-red-600')
  })

  it('renders the container div in the disabled state', () => {
    const { getByPlaceholderText } = render(
      <TextArea disabled={true} error={false} placeholder="This is a placeholder text." />,
    )
    const input = getByPlaceholderText('This is a placeholder text.')
    expect(input).toBeDisabled()
  })

  it('renders the children', () => {
    const { getByText } = render(<TextArea>test text area</TextArea>)
    const children = getByText('test text area')
    expect(children).toBeInTheDocument('test text area')
  })
})
