import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../button'
import Header, { headerStyles, type HeaderVariant } from './Header'

describe('Header', () => {
  describe.each([
    ['pageHeader', headerStyles({ variant: 'pageHeader' })],
    ['containerHeader', headerStyles({ variant: 'containerHeader' })],
    ['sectionHeader', headerStyles({ variant: 'sectionHeader' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(<Header variant={variant as HeaderVariant}>Header Test</Header>)
      expect(getByText('Header Test')).toHaveClass(expectedClasses)
    })
  })

  it('renders content', () => {
    const { getByText } = render(<Header variant="pageHeader">Header Test</Header>)

    expect(getByText('Header Test')).toHaveTextContent('Header Test')
  })

  it('shows title', () => {
    const { getByText } = render(
      <Header variant="sectionHeader" title="Title">
        test test
      </Header>,
    )

    expect(getByText('Title')).toHaveTextContent('Title')
  })

  it('shows description', () => {
    const { getByText } = render(
      <Header variant="sectionHeader" description="description here">
        test header
      </Header>,
    )

    expect(getByText('description here')).toHaveTextContent('description here')
  })

  it('renders children components', () => {
    const { getByTestId } = render(
      <Header variant="sectionHeader" children={<Button variant="sm/primary" data-testid="children-here" />} />,
    )

    const rendersChildren = getByTestId('children-here')

    expect(rendersChildren).toBeInTheDocument()
    expect(rendersChildren).toHaveAttribute('data-testid', 'children-here')
  })
})
