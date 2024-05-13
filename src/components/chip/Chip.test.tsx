import { render } from '@testing-library/react'
import React from 'react'
import Chip, { chipStyles, type ChipVariant } from './Chip'

describe('Chip', () => {
  describe.each([
    ['primary', chipStyles({ variant: 'primary' })],
    ['secondary', chipStyles({ variant: 'secondary' })],
  ])('variant: %s', (variant, expectedClasses) => {
    it(`renders with the correct classes for variant: ${variant}`, () => {
      const { getByText } = render(<Chip variant={variant as ChipVariant}>Chip Test</Chip>)

      expect(getByText('Chip Test')).toHaveClass(expectedClasses)
    })
  })

  it('renders content', () => {
    const { getByText } = render(<Chip variant="primary">Chip Test</Chip>)

    expect(getByText('Chip Test')).toHaveTextContent('Chip Test')
  })

  it('renders a disabled chip', () => {
    const { getByText } = render(
      <Chip variant="secondary" disabled>
        Chip Test
      </Chip>,
    )

    expect(getByText('Chip Test')).toHaveClass('opacity-50 hover:none active:none focus:none pointer-events-none')
  })

  it('renders component with startIcon', () => {
    const { getByTestId } = render(
      <Chip variant="primary" startIcon={<svg data-testid="start-icon" />}>
        Chip Test
      </Chip>,
    )

    const startIcon = getByTestId('start-icon')

    expect(startIcon).toBeInTheDocument()
    expect(startIcon).toHaveAttribute('data-testid', 'start-icon')
  })
})
