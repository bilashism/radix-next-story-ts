import React, { ReactNode, FC } from "react";
import { Typography } from "../typography";

interface HeadingProps {
  children: ReactNode;
}

const DropzoneHeading: FC<HeadingProps> = ({ children }) => {
  return (
    <Typography as="h1" className=" text-primary-600" variant="xl/bold">
      {children}
    </Typography>
  );
};

export default DropzoneHeading;
