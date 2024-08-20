import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";

import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function InternalAnalysis() {
  const { control, resetField } = useFormContext();

  useEffect(() => {
    return () => {
      resetField("flows.internalAnalysis.status");
      resetField("flows.internalAnalysis.description");
    };
  }, [resetField]);

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Análise Interna</legend>

      <Controller
        name="flows.internalAnalysis.description"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Informe o número do chamado internamente</FormLabel>
            <FormControl>
              <Input placeholder="Digite aqui" {...field} />
            </FormControl>
          </FormItem>
        )}
      />

      <Controller
        name="flows.internalAnalysis.status"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Status</FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} value={field.value || ""}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecionar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Liberada">Liberada</SelectItem>
                  <SelectItem value="Pausado">Pausado</SelectItem>
                  <SelectItem value="Finalizado">Finalizado</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
          </FormItem>
        )}
      />
    </fieldset>
  );
}
