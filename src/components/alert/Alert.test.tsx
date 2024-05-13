import { render } from '@testing-library/react'
import React from 'react'
import Button from '../button/Button'
import Alert, { AlertVariant, alertStyles } from './Alert'

describe('Alert', () => {
  describe.each([
    ['info', alertStyles({ variant: 'info' })],
    ['warning', alertStyles({ variant: 'warning' })],
    ['error', alertStyles({ variant: 'error' })],
    ['success', alertStyles({ variant: 'success' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(<Alert variant={variant as AlertVariant}>Hello Alert</Alert>)

      expect(getByText('Hello Alert').parentElement?.parentElement?.parentElement).toHaveClass(expectedClasses)
    })
  })

  it('shows header', () => {
    const { getByText } = render(
      <Alert variant={'success'} header="Header">
        This is an Alert
      </Alert>,
    )

    expect(getByText('Header')).toHaveTextContent('Header')
  })

  it('shows button', () => {
    const { getByText } = render(
      <Alert variant={'success'} button={<Button variant="sm/primary">Button</Button>}>
        This is a Button
      </Alert>,
    )

    expect(getByText('Button')).toHaveTextContent('Button')
  })
})
