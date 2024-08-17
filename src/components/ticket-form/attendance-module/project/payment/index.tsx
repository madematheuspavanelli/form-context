import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Payment() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Pagamento</legend>
      <div className="flex gap-4">
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Bloqueado</SelectItem>
            <SelectItem value="2">Em andamento</SelectItem>
            <SelectItem value="3">Liberado</SelectItem>
          </SelectContent>
        </Select>
        <Input placeholder="Valor EV (R$)" />
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Parcelas" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">1</SelectItem>
            <SelectItem value="2">2</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex gap-4">
        <div className="flex-1 space-y-2">
          <Input placeholder="Valor parcela 1 (R$)" />
          <div className="flex items-center space-x-2">
            <Checkbox id="first" />
            <Label htmlFor="first">Pago</Label>
          </div>
        </div>
        <div className="flex-1 space-y-2">
          <Input placeholder="Valor parcela 2 (R$)" />
          <div className="flex items-center space-x-2">
            <Checkbox id="second" />
            <Label htmlFor="second">Pago</Label>
          </div>
        </div>
      </div>
    </fieldset>
  );
}
