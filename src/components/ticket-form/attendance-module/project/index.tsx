import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

import { Documents } from "./documents";
import { Payment } from "./payment";
import { RegularizedArea } from "./regularized-area";

export function Project() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Projeto</legend>
      <div className="flex gap-4">
        <Input placeholder="CNPJ da consultoria" />
        <Button>Encontrar</Button>
      </div>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Tipo de Consultoria" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="regularization">Regularização</SelectItem>
          <SelectItem value="report">Laudo</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Órgão" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">XPTO</SelectItem>
          <SelectItem value="2">ZYN</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecionar negociação" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="integral">Integral EV</SelectItem>
          <SelectItem value="partial">Parcial</SelectItem>
        </SelectContent>
      </Select>

      <Separator />
      <Documents />
      <Separator />
      <Payment />
      <Separator />
      <RegularizedArea />
    </fieldset>
  );
}
