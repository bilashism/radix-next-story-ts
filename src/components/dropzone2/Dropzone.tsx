// src/Dropzone/Dropzone.tsx
import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  HTMLAttributes,
} from "react";
import DropzoneHeading from "./DropzoneHeading";
import DropzoneDropBox from "./DropzoneDropBox";

interface DropzoneContextType {
  // Define any shared state or methods here
}

const DropzoneContext = createContext<DropzoneContextType | undefined>(
  undefined,
);

interface DropzoneProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const Dropzone: FC<DropzoneProps> & {
  Heading: typeof DropzoneHeading;
  DropBox: typeof DropzoneDropBox;
} = ({ children, ...props }) => {
  return (
    <DropzoneContext.Provider value={{}}>
      <div {...props}>{children}</div>
    </DropzoneContext.Provider>
  );
};

Dropzone.Heading = DropzoneHeading;
Dropzone.DropBox = DropzoneDropBox;

export default Dropzone;
