import { useFormContext } from "react-hook-form";

import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function Indirect() {
  const { control } = useFormContext();

  return (
    <div className="space-y-4">
      <FormField
        name="supplierDetails.name"
        control={control}
        render={({ field }) => (
          <Input placeholder="Nome fornecedor" {...field} />
        )}
      />
      <FormField
        name="supplierDetails.cpfCnpj"
        control={control}
        render={({ field }) => <Input placeholder="CPF/CNPJ" {...field} />}
      />
      <FormField
        name="supplierDetails.farmCode"
        control={control}
        render={({ field }) => <Input placeholder="Fazenda" {...field} />}
      />
    </div>
  );
}
