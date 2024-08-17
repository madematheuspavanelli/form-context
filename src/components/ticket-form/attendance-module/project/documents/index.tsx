import { useState } from "react";

import { Input } from "@/components/ui/input";

import { Preview } from "./preview";

type Document = "proposal" | "report";

export function Documents() {
  const [files, setFiles] = useState<{ proposal?: File; report?: File }>({
    proposal: undefined,
    report: undefined,
  });

  function handleUploadFile(
    event: React.ChangeEvent<HTMLInputElement>,
    document: Document,
  ) {
    const file = event.target.files?.[0];
    if (file) {
      setFiles((prevFiles) => ({
        ...prevFiles,
        [document]: file,
      }));
    }
  }

  function handleRemove(document: Document) {
    setFiles((prevFiles) => ({
      ...prevFiles,
      [document]: undefined,
    }));
  }

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold">Documentos</legend>
      <div className="flex gap-4">
        <Input
          type="file"
          onChange={(event) => handleUploadFile(event, "proposal")}
        />
        <Input
          type="file"
          onChange={(event) => handleUploadFile(event, "report")}
        />
      </div>

      <div className="flex gap-4">
        {files.proposal && (
          <Preview
            filename={files.proposal.name}
            onRemove={() => handleRemove("proposal")}
          />
        )}
        {files.report && (
          <Preview
            filename={files.report.name}
            onRemove={() => handleRemove("report")}
          />
        )}
      </div>
    </fieldset>
  );
}
