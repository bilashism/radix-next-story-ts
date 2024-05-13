import { FileIcon, Upload } from 'lucide-react'
import React from 'react'
import { Typography } from '../typography'
import { Button } from '../button'

interface DropzoneContentProps {
  heading: string
}

const DropzoneContent: React.FC<DropzoneContentProps> = ({ heading }) => {
  return (
    <div className="m-auto flex flex-col space-y-6 justify-between items-center text-center ">
      <FileIcon className="size-16 text-accent-orange-600 mb-5" />
      <div className="flex flex-col items-center space-y-2">
        <Typography as="h1" className=" text-primary-600" variant="xl/bold">
          {heading}
        </Typography>
        <Typography as="p" className=" text-primary-500">
          Of sleep het bestand hierheen
        </Typography>
      </div>

      <Button
        className="focus:border-red-500 focus:outline-none focus:ring focus:ring-red-200 active:border-red-700"
        variant="md/secondary"
      >
        <Upload width="16" stroke="#EC7203" className="mr-4" />
        Upload bestand
      </Button>
      <input
        type="file"
        title=""
        name="uploadedFile"
        className="absolute left-0 top-0 h-full w-full opacity-0 z-10 cursor-pointer"
        multiple
      />
    </div>
  )
}

export default DropzoneContent
