import { cleanup, render, screen } from '@testing-library/react'
import React from 'react'
import Tooltip from './Tooltip'

/*
 * This test solely tests whether the tooltip content is rendered. It does not test whether the tooltip is triggered.
 * This is because this component is a wrapper around the Radix UI Tooltip component, which is already tested.
 */
describe('Tooltip', () => {
  beforeEach(() => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>hover me</Tooltip.Trigger>
        <Tooltip.Content data-testid="tooltip" className="!bg-accent-blue-600">
          <p className="text-white">Add to library</p>
        </Tooltip.Content>
      </Tooltip>,
    )
  })

  afterEach(() => {
    cleanup()
  })

  it('renders correctly', () => {
    expect(screen.getByTestId('tooltip')).toBeInTheDocument()
  })
  it('correctly passes additional classnames the tooltip content', () => {
    expect(screen.getByTestId('tooltip')).toHaveClass('!bg-accent-blue-600')
  })
  it('adds sm max width class', () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>hover me</Tooltip.Trigger>
        <Tooltip.Content size="sm" data-testid="tooltip2" />
      </Tooltip>,
    )
    expect(screen.getByTestId('tooltip2')).toHaveClass('max-w-[210px]')
  })
  it('adds md max width class', () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>hover me</Tooltip.Trigger>
        <Tooltip.Content size="md" data-testid="tooltip2" />
      </Tooltip>,
    )
    expect(screen.getByTestId('tooltip2')).toHaveClass('max-w-[320px]')
  })
  it('adds lg max width class', () => {
    render(
      <Tooltip open>
        <Tooltip.Trigger>hover me</Tooltip.Trigger>
        <Tooltip.Content size="lg" data-testid="tooltip2" />
      </Tooltip>,
    )
    expect(screen.getByTestId('tooltip2')).toHaveClass('max-w-[460px]')
  })
})
