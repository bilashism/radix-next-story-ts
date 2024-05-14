import React, { FC, HTMLAttributes, ReactNode } from "react";
import { Typography } from "../typography";
import { XIcon } from "lucide-react";
import { Button } from "../button";
import { Badge } from "../badge";
interface DropzoneAddFiles extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}
const DropzoneAddFiles: FC<DropzoneAddFiles> = ({ children, ...props }) => {
  return (
    <div className="flex w-full flex-grow flex-col justify-between">
      <div className="space-y-2">
        <div
          className="relative flex justify-between gap-4 overflow-x-hidden rounded-lg bg-gray-100 px-4 py-3"
          title="newly added file"
        >
          <div className="flex-grow">
            <Typography as="p" className=" text-gray-700">
              Bestand toegevoegd:{" "}
              <span className="text-orange-600">vacatures uploaded.json</span>
            </Typography>
            <Typography as="p" className="text-gray-700">
              Bestandsgrootte: <span className="text-orange-600">250Kb</span>
            </Typography>
          </div>
          <button
            type="button"
            className="min-w-30 w-30 h-30 group cursor-pointer self-start bg-transparent text-gray-500"
            title="remove file"
          >
            <XIcon className="transition-colors group-hover:text-red-500" />
          </button>
        </div>
        <Badge variant="warning" className="block w-fit cursor-pointer">
          Voeg meer toe
        </Badge>
      </div>
      <div className="ml-auto flex gap-2">
        <Button variant="md/secondary">Annuleren</Button>
        <Button variant="md/primary">Bevestig</Button>
      </div>
    </div>
  );
};
DropzoneAddFiles.displayName = DropzoneAddFiles.displayName;
export default DropzoneAddFiles;
