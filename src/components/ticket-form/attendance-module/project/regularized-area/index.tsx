import { Input } from "@/components/ui/input";

export function RegularizedArea() {
  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Área Regularizada</legend>
      <div className="flex gap-4">
        <Input placeholder="APP (ha)" />
        <Input placeholder="RL (ha)" />
      </div>
      <div className="flex gap-4">
        <Input placeholder="Outros (ha)" />
        <Input placeholder="Área Total (R$)" readOnly disabled />
      </div>
    </fieldset>
  );
}
