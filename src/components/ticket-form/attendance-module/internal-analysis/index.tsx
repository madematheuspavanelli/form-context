import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InternalAnalysis() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Análise Interna</legend>
      <Input placeholder="Informe o número do chamado internamento" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="andamento">Em andamento</SelectItem>
          <SelectItem value="pausado">Pausado</SelectItem>
          <SelectItem value="finalizado">Finalizado</SelectItem>
        </SelectContent>
      </Select>
    </fieldset>
  );
}
