import { Squirrel } from 'lucide-react'
import React, { useState } from 'react'

import Tile from './Tile'; // Import your Tile component

const TileParent = () => {
  const [active, setActive] = useState(false)

  const handleTileClick = () => {
    setActive(!active)
  }

  return (
    <Tile radio active={active} onSetActive={handleTileClick} title="Test Tile" image={<Squirrel size={250} />}>
      This is a description about a squirrel
    </Tile>
  )
}

export default TileParent
