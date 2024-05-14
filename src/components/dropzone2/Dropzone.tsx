import React, {
  createContext,
  useContext,
  ReactNode,
  FC,
  HTMLAttributes,
} from "react";
import DropzoneHeading from "./DropzoneHeading";
import DropzoneDropBox from "./DropzoneDropBox";
import DropzoneAddFiles from "./DropzoneAddFiles";
import DropzoneSuccess from "./DropzoneSuccess";
import DropzoneError from "./DropzoneError";

interface DropzoneContextType {
  // Define any shared state or methods here
}

const DropzoneContext = createContext<DropzoneContextType | undefined>(
  undefined,
);

interface DropzoneProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  fileAdded?: boolean;
  success?: boolean;
  error?: boolean;
}

const Dropzone: FC<DropzoneProps> & {
  Heading: typeof DropzoneHeading;
  DropBox: typeof DropzoneDropBox;
  AddFiles?: typeof DropzoneAddFiles;
  Success?: typeof DropzoneSuccess;
  Error?: typeof DropzoneError;
} = ({ children, ...props }) => {
  const {
    className,
    fileAdded = false,
    error = false,
    success = false,
    ...rest
  } = props;

  return (
    <DropzoneContext.Provider value={{}}>
      <div
        className={`relative flex h-96 w-full flex-col items-center justify-center gap-5 overflow-hidden rounded-lg border-2 border-dashed p-4 hover:border-orange-500 ${
          className ? className : ""
        }`}
        {...rest}
      >
        {!fileAdded && !success && !error && children}
        {fileAdded && !error && !success && Dropzone.AddFiles ? (
          <Dropzone.AddFiles />
        ) : null}
        {success && Dropzone?.Success ? <Dropzone.Success /> : null}
        {error && Dropzone?.Error ? <Dropzone.Error /> : null}
      </div>
    </DropzoneContext.Provider>
  );
};

Dropzone.Heading = DropzoneHeading;
Dropzone.DropBox = DropzoneDropBox;
Dropzone.AddFiles = DropzoneAddFiles;
Dropzone.Success = DropzoneSuccess;
Dropzone.Error = DropzoneError;

export default Dropzone;
