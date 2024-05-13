import { render, screen } from '@testing-library/react'
import React from 'react'
import Select from './Select'

describe('Component - Select', () => {
  const trigger = 'Title'
  const item1 = 'item1'
  const item2 = 'item2'
  const item3 = 'item3'
  const label = 'label'

  it('renders the component', () => {
    render(
      <Select>
        <Select.Trigger>{trigger}</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>{label}</Select.Label>
            <Select.Item value={item1}>{item1}</Select.Item>
            <Select.Item value={item2}>{item2}</Select.Item>
            <Select.Item value={item3}>{item3}</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>,
    )

    expect(screen.getByRole('combobox', { name: 'select-trigger' })).toBeVisible()
  })
  it('renders the disabled component', () => {
    render(
      <Select>
        <Select.Trigger disabled>{trigger}</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>{label}</Select.Label>
            <Select.Item value={item1}>{item1}</Select.Item>
            <Select.Item value={item2}>{item2}</Select.Item>
            <Select.Item value={item3}>{item3}</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>,
    )
    expect(screen.getByRole('combobox', { name: 'select-trigger' })).toBeDisabled()
  })
  it('renders the error component', () => {
    render(
      <Select>
        <Select.Trigger error>{trigger}</Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>{label}</Select.Label>
            <Select.Item value={item1}>{item1}</Select.Item>
            <Select.Item value={item2}>{item2}</Select.Item>
            <Select.Item value={item3}>{item3}</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>,
    )
    expect(screen.getByRole('combobox', { name: 'select-trigger' })).toHaveClass('!text-feedback-red-600')
  })
})
