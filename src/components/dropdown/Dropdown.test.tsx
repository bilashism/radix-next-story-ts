import { render, screen } from '@testing-library/react'
import React from 'react'
import Dropdown from './Dropdown'

describe('Dropdown component', () => {
  beforeEach(() => {
    render(
      <Dropdown>
        <Dropdown.Trigger className="w-56" data-testid="trigger-button">
          Dropdown
        </Dropdown.Trigger>
        <Dropdown.Content className="w-56">
          <Dropdown.Group>
            <Dropdown.Label>Test</Dropdown.Label>
            <Dropdown.Item>Select</Dropdown.Item>
            <Dropdown.Item>Copy</Dropdown.Item>
            <Dropdown.Item>Cut</Dropdown.Item>
            <Dropdown.Item>Paste</Dropdown.Item>
          </Dropdown.Group>
        </Dropdown.Content>
      </Dropdown>,
    )
  })
  it('renders the dropdown trigger', () => {
    const triggerElement = screen.getByTestId('trigger-button')
    expect(triggerElement).toBeInTheDocument()
  })
})
