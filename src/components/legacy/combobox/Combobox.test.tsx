import { render, screen } from '@testing-library/react'
import React from 'react'
import Combobox from './Combobox'

describe('Combobox', () => {
  beforeEach(() => {
    render(
      <Combobox input={<Combobox.Input id="combobox" />} label="Fruit">
        <Combobox.Options>
          <Combobox.Option value="apple">Apple</Combobox.Option>
          <Combobox.Option value="orange">Orange</Combobox.Option>
          <Combobox.Option value="banana">Banana</Combobox.Option>
        </Combobox.Options>
      </Combobox>,
    )
  })
  it('renders the label and input', () => {
    expect(screen.getByText('Fruit')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })
})
