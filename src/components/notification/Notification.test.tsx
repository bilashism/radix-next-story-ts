import { render } from '@testing-library/react'
import React from 'react'
import { Button } from '../button'
import Notification, { NotificationStyles, type NotificationVariant } from './Notification'

describe('Notification', () => {
  describe.each([
    ['info', NotificationStyles({ variant: 'info' })],
    ['warning', NotificationStyles({ variant: 'warning' })],
    ['error', NotificationStyles({ variant: 'error' })],
    ['success', NotificationStyles({ variant: 'success' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(
        <Notification variant={variant as NotificationVariant}>Hello Notification</Notification>,
      )

      expect(getByText('Hello Notification').parentElement?.parentElement?.parentElement).toHaveClass(expectedClasses)
    })
  })

  it('shows header', () => {
    const { getByText } = render(
      <Notification variant={'success'} header="Header">
        This is an Notification
      </Notification>,
    )

    expect(getByText('Header')).toHaveTextContent('Header')
  })

  it('shows button', () => {
    const { getByText } = render(
      <Notification variant={'success'} button={<Button variant="sm/primary">Button</Button>}>
        This is a Button
      </Notification>,
    )

    expect(getByText('Button')).toHaveTextContent('Button')
  })
})
