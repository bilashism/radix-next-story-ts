import { render } from '@testing-library/react'
import React from 'react'
import LargeHeading, { largeHeadingStyles, type LargeHeadingVariant } from './LargeHeading'

describe('Typography/LargeHeading', () => {
  describe.each([
    ['heavy', largeHeadingStyles({ variant: 'heavy' })],
    ['light', largeHeadingStyles({ variant: 'light' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes and html for variant: ${variant}`, () => {
      const { getByText } = render(<LargeHeading variant={variant as LargeHeadingVariant}>Hello world</LargeHeading>)

      expect(getByText('Hello world')).toHaveClass(expectedClasses)
      expect(getByText('Hello world').tagName.toLowerCase()).toBe('h1')
    })

    it(`renders the correct content for variant: ${variant}`, () => {
      const { getByText } = render(<LargeHeading variant={variant as LargeHeadingVariant}>Hello world</LargeHeading>)

      expect(getByText('Hello world')).toHaveTextContent('Hello world')
    })
  })

  it('applies additional className', () => {
    const variant = 'h1'
    const expectedClasses = largeHeadingStyles({ variant: variant as LargeHeadingVariant })

    const { getByText } = render(
      <LargeHeading className="bg-red-500" variant="heavy">
        Hello world
      </LargeHeading>,
    )

    expect(getByText('Hello world')).toHaveClass(expectedClasses, 'bg-red-500')
  })
})
