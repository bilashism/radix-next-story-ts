import { render } from '@testing-library/react'
import React from 'react'
import Badge, { badgeStyles, type BadgeVariant } from './Badge'

describe('Badge', () => {
  describe.each([
    ['base', badgeStyles({ variant: 'base' })],
    ['warning', badgeStyles({ variant: 'warning' })],
    ['error', badgeStyles({ variant: 'error' })],
    ['success', badgeStyles({ variant: 'success' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(<Badge variant={variant as BadgeVariant}>Hello world</Badge>)

      expect(getByText('Hello world')).toHaveClass(expectedClasses)
    })
  })
})
