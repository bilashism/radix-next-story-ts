import React from 'react'
import { AlertTriangle } from 'lucide-react'
import { Typography } from '../typography'

const DropzoneError = () => {
  return (
    <div className="absolute z-10 flex rounded-xl bg-gray-100 justify-center items-center opacity-95 w-[calc(100%-2rem)] h-[calc(100%-2rem)]">
      <div className="bg-red-200 rounded-xl justify-center flex gap-2 items-center py-3 px-7">
        <AlertTriangle className="h-10 w-10 text-feedback-red-600" />
        <Typography as="p" className="text-red-500">
          Unsupported file type: PDF
        </Typography>
        <button className="absolute top-0 right-3 min-w-50 w-50 h-50 bg-transparent text-gray-500 cursor-pointer text-4xl font-light">
          &times;
        </button>
      </div>
    </div>
  )
}

export default DropzoneError
