import { render } from '@testing-library/react'
import React from 'react'
import LabelSecondary from './LabelSecondary'

describe('Form/Label/Secondary', () => {
  it('renders with the correct classes and html tag', () => {
    const { getByText } = render(<LabelSecondary>Hello world</LabelSecondary>)

    expect(getByText('Hello world')).toHaveClass('text-sm', 'text-primary')
    expect(getByText('Hello world').tagName.toLowerCase()).toBe('span')
  })

  it('renders the correct content for variant', () => {
    const { getByText } = render(<LabelSecondary>Hello world</LabelSecondary>)

    expect(getByText('Hello world')).toHaveTextContent('Hello world')
  })
  it('applies additional className', () => {
    const { getByText } = render(<LabelSecondary className="bg-red-500">Hello world</LabelSecondary>)

    expect(getByText('Hello world')).toHaveClass('bg-red-500')
  })
})
