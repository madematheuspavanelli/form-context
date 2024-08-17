import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function GeneralInfo() {
  const { register } = useFormContext();

  return (
    <fieldset className="space-y-4">
      <Input placeholder="Responsável do atendimento" />
      <Input placeholder="Título do atendimento" {...register("title")} />
      <Textarea placeholder="Descrição" className="resize-none" />
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Selecione a unidade" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">Unidade 1</SelectItem>
          <SelectItem value="2">Unidade 2</SelectItem>
          <SelectItem value="3">Unidade 3</SelectItem>
        </SelectContent>
      </Select>
    </fieldset>
  );
}
