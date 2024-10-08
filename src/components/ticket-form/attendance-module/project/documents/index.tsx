import { useRef, useState } from "react";

import { Input } from "@/components/ui/input";

import { Preview } from "./preview";

type Document = "proposal" | "report";

export function Documents() {
  const [files, setFiles] = useState<{ proposal?: File; report?: File }>({
    proposal: undefined,
    report: undefined,
  });

  const proposalInputRef = useRef<HTMLInputElement>(null);
  const reportInputRef = useRef<HTMLInputElement>(null);

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

    if (document === "proposal" && proposalInputRef.current) {
      proposalInputRef.current.value = "";
    } else if (document === "report" && reportInputRef.current) {
      reportInputRef.current.value = "";
    }
  }

  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-semibold">Documentos</legend>
      <div className="flex gap-4">
        <Input
          type="file"
          ref={proposalInputRef}
          onChange={(event) => handleUploadFile(event, "proposal")}
        />
        <Input
          type="file"
          ref={reportInputRef}
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
