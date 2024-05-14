import React, { ReactNode, FC } from "react";
import { Typography } from "../typography";
import { FileIcon } from "lucide-react";

interface HeadingProps {
  children: ReactNode;
}

const DropzoneHeading: FC<HeadingProps> = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between space-y-6 text-center ">
      <FileIcon className="mb-5 size-16 text-accent-orange-600" />

      <div className="flex flex-col items-center space-y-2">
        <Typography as="h1" className=" text-primary-600" variant="xl/bold">
          {children}
        </Typography>
        <Typography as="p" className=" text-primary-500">
          Of sleep het bestand hierheen
        </Typography>
      </div>
    </div>
  );
};

export default DropzoneHeading;
