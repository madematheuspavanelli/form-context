import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Guidance } from "./guidance";
import { InternalAnalysis } from "./internal-analysis";
import { Project } from "./project";

export function AttendanceModule() {
  const [module, setModule] = useState("");

  return (
    <div className="space-y-4">
      <Select value={module} onValueChange={setModule}>
        <SelectTrigger>
          <SelectValue placeholder="Módulo do Atendimento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="guidance">Orientação</SelectItem>
          <SelectItem value="internal-analysis">Análise Interna</SelectItem>
          <SelectItem value="project">Projeto</SelectItem>
        </SelectContent>
      </Select>

      <Separator />

      {module === "guidance" && <Guidance />}
      {module === "internal-analysis" && <InternalAnalysis />}
      {module === "project" && <Project />}
    </div>
  );
}
