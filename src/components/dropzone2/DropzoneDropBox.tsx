import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  HTMLAttributes,
} from "react";
import { Button } from "../button";
import { Upload } from "lucide-react";

interface DropBoxProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const DropzoneDropBox: FC<DropBoxProps> = ({ children, ...props }) => {
  const { className, ...rest } = props;

  return (
    <div className={`${className ? className : ""}`} {...rest}>
      <Button
        className="focus:border-red-500 focus:outline-none focus:ring focus:ring-red-200 active:border-red-700"
        variant="md/secondary"
      >
        <Upload width="16" stroke="#EC7203" className="mr-4" />
        {children}
      </Button>
      <input
        type="file"
        title=""
        name="uploadedFile"
        className="absolute left-0 top-0 z-10 h-full w-full cursor-pointer opacity-0"
        multiple
      />
    </div>
  );
};

export default DropzoneDropBox;
