import { render, screen } from '@testing-library/react'
import React from 'react'
import MultiSelect from './MultiSelect'

describe('MultiSelect', () => {
  beforeEach(() => {
    render(
      <MultiSelect>
        <MultiSelect.Options>
          <MultiSelect.Option value="apple">Apple</MultiSelect.Option>
          <MultiSelect.Option value="orange">Orange</MultiSelect.Option>
          <MultiSelect.Option value="banana">Banana</MultiSelect.Option>
        </MultiSelect.Options>
      </MultiSelect>,
    )
  })
  it('renders the label and input', () => {
    expect(screen.getByRole('button')).toBeInTheDocument()
  })
})
