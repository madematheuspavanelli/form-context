import { Form, useFormContext, useWatch } from "react-hook-form";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
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
  const { control } = useFormContext();
  const supplierType = useWatch({ name: "supplierDetails.type" });

  return (
    <fieldset className="space-y-4">
      <legend className="text-xl font-semibold">Tipo Fornecedor</legend>
      <FormField
        name="supplierDetails.type"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Direto">Direto</SelectItem>
                  <SelectItem value="Indireto">Indireto</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {supplierType === "Direto" && <Direct />}
      {supplierType === "Indireto" && <Indirect />}

      <FormField
        name="reason_id"
        control={control}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Motivo do atendimento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cadastro">CADASTRO NOVO</SelectItem>
                  <SelectItem value="prodes">PRODES</SelectItem>
                  <SelectItem value="sem-car">SEM CAR</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </fieldset>
  );
}
