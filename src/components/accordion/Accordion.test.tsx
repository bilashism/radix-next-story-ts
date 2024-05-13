import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import Accordion from './Accordion'

describe('Component - Accordion', () => {
  const trigger = 'Title'
  const body = 'Test Accordion body'

  beforeEach(() => {
    render(
      <Accordion type="single" collapsible>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{trigger}</Accordion.Trigger>
          <Accordion.Content>{body}</Accordion.Content>
        </Accordion.Item>
      </Accordion>,
    )
  })
  it('renders the component', () => {
    expect(screen.getByRole('button', { name: trigger })).toBeVisible()
  })

  it('opens and closes the Accordion when the button is clicked', async () => {
    // Accordion content should NOT be visible
    expect(screen.queryByText(body)).toBeFalsy()
    await userEvent.click(screen.getByRole('button', { name: trigger }))

    // Accordion content should be visible
    expect(screen.getByRole('button', { name: trigger })).toBeVisible()
    expect(screen.getByText(body)).toBeVisible()

    // Accordion content should NOT be visible after closing
    await userEvent.click(screen.getByRole('button', { name: trigger }))
    expect(screen.queryByText(body)).toBeFalsy()
  })
})
