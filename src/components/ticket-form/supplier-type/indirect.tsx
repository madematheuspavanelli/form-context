import { Input } from "@/components/ui/input";

export function Indirect() {
  return (
    <div className="space-y-4">
      <Input placeholder="Nome fornecedor" />
      <Input placeholder="CPF/CNPJ" />
      <Input placeholder="Fazenda" />
    </div>
  );
}
