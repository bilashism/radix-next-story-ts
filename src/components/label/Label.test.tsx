import { render, screen } from '@testing-library/react'
import React from 'react'
import { typographyStyles } from '../typography'
import Label, { type LabelVariant } from './Label'

describe('Form/Label', () => {
  describe.each([
    ['md/semibold', typographyStyles({ size: 'md', weight: 'semibold' })],
    ['md/regular', typographyStyles({ size: 'md', weight: 'regular' })],
    ['md/bold', typographyStyles({ size: 'md', weight: 'bold' })],
    ['md/italic', typographyStyles({ size: 'md', weight: 'italic' })],
    ['lg/semibold', typographyStyles({ size: 'lg', weight: 'semibold' })],
    ['lg/regular', typographyStyles({ size: 'lg', weight: 'regular' })],
    ['lg/bold', typographyStyles({ size: 'lg', weight: 'bold' })],
    ['lg/italic', typographyStyles({ size: 'lg', weight: 'italic' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes and html tag for variant: ${variant}`, () => {
      const { getByText } = render(
        <Label variant={variant as LabelVariant} htmlFor="test">
          Hello world
        </Label>,
      )

      expect(getByText('Hello world')).toHaveClass(expectedClasses)
      expect(getByText('Hello world').tagName.toLowerCase()).toBe('label')
    })

    it(`renders the correct content for variant: ${variant}`, () => {
      const { getByText } = render(
        <Label variant={variant as LabelVariant} htmlFor="test">
          Hello world
        </Label>,
      )

      expect(getByText('Hello world')).toHaveTextContent('Hello world')
    })
  })

  it('applies additional className', () => {
    const variant = 'md/regular'
    const expectedClasses = typographyStyles({ size: 'md', weight: 'regular' })

    const { getByText } = render(
      <Label className="bg-red-500" variant={variant} htmlFor="test">
        Hello world
      </Label>,
    )

    expect(getByText('Hello world')).toHaveClass(expectedClasses, 'bg-red-500')
  })
  it('render the required label', () => {
    render(
      <Label htmlFor="test" required>
        Hello world
      </Label>,
    )

    expect(screen.getByText('*')).toBeInTheDocument()
    expect(screen.getByText('*')).toHaveClass('text-accent-orange-600')
  })
  it('render the optional label', () => {
    render(
      <Label htmlFor="test" optional>
        Hello world
      </Label>,
    )

    expect(screen.getByText('Optioneel')).toBeInTheDocument()
    expect(screen.getByText('Optioneel')).toHaveClass('!text-primary-400')
  })
})
