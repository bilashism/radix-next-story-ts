import React from 'react'
import { Typography } from '../typography'
import { XIcon } from 'lucide-react'
import { Button } from '../button'
import { Badge } from '../badge'

const DropzoneAddFiles = () => {
  return (
    <div className="w-full flex flex-col justify-between">
      <div className="space-y-2">
        <div className="relative overflow-x-hidden bg-gray-100 py-3 px-4 rounded-lg" title="newly added file">
          <Typography as="p" className=" text-gray-700">
            Bestand toegevoegd: <span className="text-orange-600">vacatures uploaded.json</span>
          </Typography>
          <Typography as="p" className="text-gray-700">
            Bestandsgrootte: <span className="text-orange-600">250Kb</span>
          </Typography>
          <div
            className="absolute top-1 right-1 min-w-30 w-30 h-30 bg-transparent text-gray-500 cursor-pointer"
            title="remove file"
          >
            <XIcon />
          </div>
        </div>
        <Badge variant="warning" className="block w-fit cursor-pointer">
          Voeg meer toe
        </Badge>
      </div>
      <div className="ml-auto flex gap-2">
        <Button variant="md/secondary">Annuleren</Button>
        <Button variant="md/primary">Bevestig</Button>
      </div>
    </div>
  )
}

export default DropzoneAddFiles
