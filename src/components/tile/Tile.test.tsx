import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import Tile from './Tile'
import TileParent from './TileParent'

describe('Tile', () => {
  it('shows title', () => {
    const { getByText } = render(<Tile title="Title" />)

    expect(getByText('Title')).toHaveTextContent('Title')
  })

  it('Tile component contains radio', () => {
    const { getByTestId } = render(<Tile radio={true} title="Testing Tile" />)

    const radioButton = getByTestId('radio-button')
    expect(radioButton).toBeInTheDocument()
  })

  it('Tile styling changes when radio button is clicked', () => {
    const { getByTestId } = render(<TileParent />)
    const radioButton = getByTestId('radio-button')

    const initialTile = getByTestId('tile')
    expect(initialTile).toHaveClass('border-primary-200')

    fireEvent.click(radioButton)

    const updatedTile = getByTestId('tile')
    expect(updatedTile).toHaveClass('!border-accent-orange-400')
  })
})
