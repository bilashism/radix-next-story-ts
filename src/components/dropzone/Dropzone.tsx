import React from 'react'
import DropzoneSuccess from './DropzoneSuccess'
import DropzoneContent from './DropzoneContent'
import DropzoneAddFiles from './DropzoneAddFiles'
import DropzoneError from './DropzoneError'

interface DropzoneProps {
  heading: string
  fileAdded?: boolean
  success?: boolean
  error?: boolean
}

const Dropzone: React.FC<DropzoneProps> = ({
  heading = 'Selecteer een JSON-bestand',
  fileAdded = false,
  error = false,
  success = false,
}) => {
  return (
    <div
      className={`relative w-full overflow-hidden h-96 p-4 border-2 border-dashed rounded-lg flex hover:border-orange-500 `}
    >
      {!fileAdded && !success && !error && <DropzoneContent heading={heading} />}
      {fileAdded && <DropzoneAddFiles />}
      {success && <DropzoneSuccess />}
      {error && <DropzoneError />}
    </div>
  )
}

export default Dropzone
