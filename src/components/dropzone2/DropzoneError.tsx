import React, { FC } from "react";
import { AlertTriangle } from "lucide-react";
import { Typography } from "../typography";

const DropzoneError: FC = () => {
  return (
    <div className="absolute z-10 flex h-[calc(100%-2rem)] w-[calc(100%-2rem)] items-center justify-center rounded-xl bg-gray-100 opacity-95">
      <div className="flex items-center justify-center gap-2 rounded-xl bg-red-200 px-7 py-3">
        <AlertTriangle className="h-10 w-10 text-feedback-red-600" />
        <Typography as="p" className="text-red-500">
          Unsupported file type: PDF
        </Typography>
        <button className="min-w-50 w-50 h-50 absolute right-3 top-0 cursor-pointer bg-transparent text-4xl font-light text-gray-500">
          &times;
        </button>
      </div>
    </div>
  );
};

export default DropzoneError;
