import { useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Direct } from "./direct";
import { Indirect } from "./indirect";

export function SupplierType() {
  const [type, setType] = useState("");

  return (
    <fieldset className="space-y-4">
      <legend className="mb-4 text-xl font-semibold">Tipo Fornecedor</legend>
      <Select value={type} onValueChange={setType}>
        <SelectTrigger>
          <SelectValue placeholder="Selecione" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="direto">Direto</SelectItem>
          <SelectItem value="indireto">Indireto</SelectItem>
        </SelectContent>
      </Select>

      {type === "direto" && <Direct />}
      {type === "indireto" && <Indirect />}

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Motivo do atendimento" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="cadastro">CADASTRO NOVO</SelectItem>
          <SelectItem value="prodes">PRODES</SelectItem>
          <SelectItem value="sem-car">SEM CAR</SelectItem>
        </SelectContent>
      </Select>
    </fieldset>
  );
}
