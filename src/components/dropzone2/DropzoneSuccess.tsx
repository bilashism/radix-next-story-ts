import React, { FC } from "react";
import { Typography } from "../typography";
import { CheckCircle2 } from "lucide-react";

const DropzoneSuccess: FC = () => {
  return (
    <>
      <div className="absolute bottom-3 left-5 text-primary-500">
        <Typography as="p" className="text-primary-900">
          Bestand uploaden
        </Typography>
        <div className="flex gap-2">
          <CheckCircle2 width="16" stroke="green" />
          <Typography as="p" className="pl-1 text-green-700">
            U hebt 1 bestand naar de server geüpload
          </Typography>
        </div>
      </div>
    </>
  );
};

export default DropzoneSuccess;
