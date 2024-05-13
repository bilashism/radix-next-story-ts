import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import Button, { buttonStyles, type ButtonVariant } from './Button'

describe('Button/Button', () => {
  describe.each([
    ['sm/primary', buttonStyles({ size: 'sm', variant: 'primary', disabled: false, fullWidth: false })],
    ['sm/secondary', buttonStyles({ size: 'sm', variant: 'secondary', disabled: false, fullWidth: false })],
    ['sm/base', buttonStyles({ size: 'sm', variant: 'base', disabled: false, fullWidth: false })],
    ['sm/inline', buttonStyles({ size: 'sm', variant: 'inline', disabled: false, fullWidth: false })],
    ['md/primary', buttonStyles({ size: 'md', variant: 'primary', disabled: false, fullWidth: false })],
    ['md/secondary', buttonStyles({ size: 'md', variant: 'secondary', disabled: false, fullWidth: false })],
    ['md/base', buttonStyles({ size: 'md', variant: 'base', disabled: false, fullWidth: false })],
    ['md/inline', buttonStyles({ size: 'md', variant: 'inline', disabled: false, fullWidth: false })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(<Button variant={variant as ButtonVariant}>Hello world</Button>)

      expect(getByText('Hello world')).toHaveClass(expectedClasses)
    })
  })

  it('renders the correct content', () => {
    const { getByText } = render(<Button variant="md/base">Hello world</Button>)

    expect(getByText('Hello world')).toHaveTextContent('Hello world')
  })

  it('renders a disabled button', () => {
    const { getByText } = render(
      <Button variant="md/base" disabled>
        Hello world
      </Button>,
    )

    expect(getByText('Hello world')).toBeDisabled()
    expect(getByText('Hello world')).toHaveClass('disabled:text-primary-400 pointer-events-none')
  })

  it('renders a full width button', () => {
    const { getByText } = render(
      <Button variant="md/base" fullWidth>
        Hello world
      </Button>,
    )

    expect(getByText('Hello world')).toHaveClass('w-full')
  })

  it('passes the onClick', () => {
    const mockOnClick = jest.fn()
    render(<Button onClick={mockOnClick}>Hello world</Button>)

    fireEvent.click(screen.getByRole('button', { name: 'Hello world' }))
    expect(mockOnClick).toHaveBeenCalled()
  })

  it('applies additional classNames', () => {
    const variant = 'md/primary'
    const expectedClasses = buttonStyles({ size: 'md', variant: 'primary' })

    const { getByText } = render(
      <Button className="!bg-accent-blue-600" variant={variant}>
        Hello world
      </Button>,
    )

    expect(getByText('Hello world')).toHaveClass(expectedClasses, '!bg-accent-blue-600')
  })
})
