import { render } from '@testing-library/react'
import type { ElementType } from 'react'
import React from 'react'
import Typography, { typographyStyles, type TypographyVariant } from './Typography'

describe('Typography/Typography', () => {
  describe.each([
    ['sm/italic', typographyStyles({ size: 'sm', weight: 'italic' }), 'p'],
    ['sm/regular', typographyStyles({ size: 'sm', weight: 'regular' }), 'span'],
    ['sm/bold', typographyStyles({ size: 'sm', weight: 'bold' }), 'span'],
    ['md/italic', typographyStyles({ size: 'md', weight: 'italic' }), 'p'],
    ['md/regular', typographyStyles({ size: 'md', weight: 'regular' }), 'span'],
    ['md/bold', typographyStyles({ size: 'md', weight: 'bold' }), 'span'],
    ['lg/italic', typographyStyles({ size: 'lg', weight: 'italic' }), 'span'],
    ['lg/regular', typographyStyles({ size: 'lg', weight: 'regular' }), 'span'],
    ['lg/bold', typographyStyles({ size: 'lg', weight: 'bold' }), 'span'],
    ['xl/italic', typographyStyles({ size: 'xl', weight: 'italic' }), 'p'],
    ['xl/regular', typographyStyles({ size: 'xl', weight: 'regular' }), 'span'],
    ['xl/bold', typographyStyles({ size: 'xl', weight: 'bold' }), 'span'],
  ])('variant: %s', (variant, expectedClasses, component) => {
    it(`renders with the correct classes and html tag for variant: ${variant}`, () => {
      const { getByText } = render(
        <Typography variant={variant as TypographyVariant} as={component as ElementType}>
          Hello world
        </Typography>,
      )

      expect(getByText('Hello world')).toHaveClass(expectedClasses)
      expect(getByText('Hello world').tagName.toLowerCase()).toBe(component)
    })

    it(`renders the correct content for variant: ${variant}`, () => {
      const { getByText } = render(
        <Typography variant={variant as TypographyVariant} as={component as ElementType}>
          Hello world
        </Typography>,
      )

      expect(getByText('Hello world')).toHaveTextContent('Hello world')
    })
  })

  it('applies additional className', () => {
    const variant = 'md/regular'
    const expectedClasses = typographyStyles({ size: 'md', weight: 'regular' })

    const { getByText } = render(
      <Typography className="bg-red-500" variant={variant}>
        Hello world
      </Typography>,
    )

    expect(getByText('Hello world')).toHaveClass(expectedClasses, 'bg-red-500')
  })
})
