import { useFormContext } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

export function Direct() {
  const { control } = useFormContext();

  return (
    <div className="flex gap-4">
      <FormField
        name="supplierDetails.farmCode"
        control={control}
        render={({ field }) => (
          <Input placeholder="Código da Fazenda" {...field} />
        )}
      />
      <Button>Encontrar</Button>
    </div>
  );
}
