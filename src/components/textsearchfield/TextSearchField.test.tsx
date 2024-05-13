import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import TextSearchField from './TextSearchField'

describe('TextSearchField', () => {
  beforeEach(() => {
    window.HTMLElement.prototype.scrollIntoView = () => {}
    render(
      <TextSearchField>
        <TextSearchField.Input placeholder="Placeholder..."></TextSearchField.Input>
        <TextSearchField.List>
          <TextSearchField.ListEmpty>Geen resultaten gevonden...</TextSearchField.ListEmpty>
          <TextSearchField.ListItem value="Item 1">Item 1</TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 2">Item 2</TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 3">Item 3</TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 4">Item 4</TextSearchField.ListItem>
          <TextSearchField.ListItem value="Item 5">Item 5</TextSearchField.ListItem>
        </TextSearchField.List>
      </TextSearchField>,
    )
  })
  it('renders the input', () => {
    expect(screen.getByPlaceholderText('Placeholder...')).toBeInTheDocument()
  })

  it('renders the item on input focus', async () => {
    const el = screen.getByPlaceholderText('Placeholder...')
    await userEvent.click(el)
    expect(screen.getAllByText('Item', { exact: false }).length).toEqual(5)
  })

  it('allows for keyboard navigation through items while the input is in focus', async () => {
    const el = screen.getByPlaceholderText('Placeholder...')
    await userEvent.click(el)
    await userEvent.keyboard('{ArrowDown}')
    expect(screen.getByText('Item 2').parentElement?.getAttribute('data-selected')).toBeTruthy()
  })

  it('closes the item list when an item is selected', async () => {
    const inputElement = screen.getByPlaceholderText('Placeholder...')
    await userEvent.click(inputElement)
    await userEvent.keyboard('{Enter}')
    expect(screen.queryAllByText(/Item/).length).toEqual(0)
  })

  it('shows an empty state when no item matches the search value', async () => {
    const inputElement = screen.getByPlaceholderText('Placeholder...')
    await userEvent.click(inputElement)
    await userEvent.keyboard('XYZ')
    expect(screen.queryByText('Geen resultaten gevonden...')).toBeVisible()
  })
})
