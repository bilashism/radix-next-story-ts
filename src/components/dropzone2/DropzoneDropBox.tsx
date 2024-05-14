import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  HTMLAttributes,
} from "react";

interface DropBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropzoneDropBox: FC<DropBoxProps> = ({ children, ...props }) => {
  return (
    <div className="dropzone-dropbox" {...props}>
      {children}
    </div>
  );
};

export default DropzoneDropBox;
